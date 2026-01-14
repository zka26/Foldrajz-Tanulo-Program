/* Simple, extendable app engine – no build tools required. */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const STORAGE_KEY = "hu_b2_history_base_v1";

const state = {
  view: "home", // home | topic | glossary | royal
  topicId: null,
  topicTab: "overview", // overview | cards | quiz
  lang: "hu", // hu | en | es
  theme: "dark", // dark | light
  progress: {}, // { [topicId]: { [qid]: true } }
};

// ---------------------------------------------------------------------------
// Defensive defaults + normalization so app.js can consume the current data.js
// ---------------------------------------------------------------------------
(() => {
  if (typeof DATA === "undefined") return;

  // --- META subtitle fallback (data.js uses meta.note)
  if (!DATA.meta) DATA.meta = {};
  if (!DATA.meta.subtitle) DATA.meta.subtitle = DATA.meta.note || { hu: "", en: "", es: "" };

  // --- NAV defaults
  const navDefaults = {
    home: { hu: "Kezdőlap", en: "Home", es: "Inicio" },
    glossary: { hu: "Szójegyzék", en: "Glossary", es: "Glosario" },
    royal: { hu: "Királyvonal", en: "Royal line", es: "Línea real" },
    open: { hu: "Megnyitás", en: "Open", es: "Abrir" },
    progress: { hu: "Teljesítve", en: "Progress", es: "Progreso" },
  };
  if (!DATA.ui) DATA.ui = {};
  if (!DATA.ui.nav) DATA.ui.nav = {};
  for (const [k, v] of Object.entries(navDefaults)) {
    if (!DATA.ui.nav[k]) DATA.ui.nav[k] = v;
  }

  // --- Glossary: ensure array
  if (!Array.isArray(DATA.glossary)) DATA.glossary = [];

  // --- Royal line: ensure modes is array
  if (!DATA.royalLine) {
    DATA.royalLine = {
      title: { hu: "Királyvonal", en: "Royal line", es: "Línea real" },
      subtitle: { hu: "", en: "", es: "" },
      modes: [],
    };
  }
  if (!Array.isArray(DATA.royalLine.modes)) DATA.royalLine.modes = [];

  // --- Topic normalization
  if (Array.isArray(DATA.topics)) {
    for (const topic of DATA.topics) {
      if (!Array.isArray(topic.flashcards) && Array.isArray(topic.cards)) {
        topic.flashcards = topic.cards.map((c) => ({
          id: c.id,
          front: c.q,
          back: c.a,
        }));
      }

      // Intro: geography version uses `intro`; legacy history version used `summaryBullets`.
      // Keep a safe fallback: if intro is missing but summaryBullets exist, use the first bullet.
      if (!topic.intro) {
        const firstBullet = Array.isArray(topic.summaryBullets) ? topic.summaryBullets[0] : null;
        if (firstBullet) topic.intro = firstBullet;
      }

      if (!Array.isArray(topic.summaryBullets)) {
        const firstMaterial = Array.isArray(topic.materials) ? topic.materials.find((m) => Array.isArray(m.lines) && m.lines.length) : null;
        const firstLine = firstMaterial?.lines?.[0] || null;
        topic.summaryBullets = firstLine ? [{ hu: firstLine.hu, en: firstLine.en, es: firstLine.es }] : [];
      }

      if (!Array.isArray(topic.keyPoints) && Array.isArray(topic.core)) {
        topic.keyPoints = topic.core.map((x) => ({ hu: x.hu, en: x.en, es: x.es }));
      }

      // Quiz normalization
      if (Array.isArray(topic.quiz)) {
        for (const q of topic.quiz) {
          if (!q.prompt) q.prompt = { hu: q.hu, en: q.en, es: q.es };

          if (q.type === "mcq") {
            if (typeof q.answerIndex !== "number") q.answerIndex = q.correct;
            if (!q.explain) q.explain = { hu: "", en: "", es: "" };
          }

          if (q.type === "img-mcq") {
            q.type = "image-mcq";
            if (typeof q.answerIndex !== "number") q.answerIndex = q.correct;
            if (!q.image) q.image = q.img;
            if (!q.explain) q.explain = { hu: "", en: "", es: "" };
          }

          if (q.type === "order") {
            if (!Array.isArray(q.answerOrder) && Array.isArray(q.correctOrder) && Array.isArray(q.items)) {
              const idxByKey = new Map(q.items.map((it, i) => [it.k, i]));
              q.answerOrder = q.correctOrder.map((k) => idxByKey.get(k)).filter((i) => typeof i === "number");
            }
            if (!q.explain) q.explain = { hu: "", en: "", es: "" };
          }

          if (q.type === "match") {
            if (!q.explain) q.explain = { hu: "", en: "", es: "" };
          }
        }
      }
    }
  }
})();

function t(obj) {
  if (!obj) return "";
  return obj[state.lang] ?? obj.hu ?? obj.en ?? obj.es ?? "";
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    Object.assign(state, saved);
  } catch (e) {}
}

function save() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      view: state.view,
      topicId: state.topicId,
      topicTab: state.topicTab,
      lang: state.lang,
      theme: state.theme,
      progress: state.progress,
    }),
  );
}

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  save();
  render();
}

function setLang(lang) {
  state.lang = lang;
  save();
  render();
}

function route(view, topicId = null, tab = null) {
  state.view = view;
  state.topicId = topicId;
  if (tab) state.topicTab = tab;
  save();
  render();
}

function pct(n) {
  return `${Math.round(n * 100)}%`;
}

function topicProgress(topic) {
  const quiz = topic.quiz || [];
  const cards = topic.flashcards || [];

  const total = quiz.length + cards.length;
  if (!total) return 0;

  const done = state.progress[topic.id] || {};
  const quizDone = quiz.filter((x) => done[x.id]).length;
  const cardsDone = cards.filter((c) => done[`fc_${c.id}`]).length;

  return (quizDone + cardsDone) / total;
}

function overallProgress() {
  const topics = DATA.topics || [];
  let total = 0;
  let doneTotal = 0;

  for (const topic of topics) {
    const quiz = topic.quiz || [];
    const cards = topic.flashcards || [];
    const done = state.progress[topic.id] || {};

    total += quiz.length + cards.length;
    doneTotal += quiz.filter((x) => done[x.id]).length;
    doneTotal += cards.filter((c) => done[`fc_${c.id}`]).length;
  }

  if (total === 0) return 0;
  return doneTotal / total;
}

function resetAllProgress() {
  const confirmText =
    state.lang === "hu"
      ? "Biztosan törlöd az összes teljesítményt? (Minden témában.)"
      : state.lang === "es"
        ? "¿Seguro que quieres borrar todo el progreso? (En todos los temas.)"
        : "Are you sure you want to clear all progress? (All topics.)";

  if (!window.confirm(confirmText)) return;

  state.progress = {};

  // Clear royal placements per mode (these are stored in `state` keys like `royal_main20`)
  for (const mode of DATA.royalLine?.modes || []) {
    const key = `royal_${mode.id}`;
    delete state[key];
  }

  // Clear in-memory (non-persisted) game state too
  if (window.__orderState) window.__orderState = {};
  if (window.__matchState) window.__matchState = {};

  save();
  render();
}

function renderTopbar() {
  const title = t(DATA.meta.title);
  const subtitle = t(DATA.meta.subtitle);

  $("#brandTitle").textContent = title;
  $("#brandSub").textContent = subtitle;

  $$(".pill").forEach((p) => p.classList.remove("active"));
  $(`.pill[data-lang="${state.lang}"]`)?.classList.add("active");

  $("#btnTheme").textContent = state.theme === "dark" ? "☀️ Világos" : "🌙 Sötét";

  // Make "home" nav bold when we're inside glossary/royal (and not showing a separate back button)
  $$(".navBtn").forEach((b) => b.classList.remove("active", "activeHome"));
  $(`.navBtn[data-nav="${state.view}"]`)?.classList.add("active");

  if (state.view === "glossary" || state.view === "royal") {
    $(`.navBtn[data-nav="home"]`)?.classList.add("activeHome");
  }
}

function renderHome() {
  const root = $("#app");

  const overall = overallProgress();

  const overallBar = `
    <section class="card pad overall-bar">
      <div class="overall-head">
        <h2 style="margin:0;">${state.lang === "hu" ? "Összesen Teljesítve" : state.lang === "es" ? "Progreso total" : "Overall progress"}</h2>
        <div class="overall-meta">${pct(overall)}</div>
      </div>
      <div class="progress" aria-label="overall progress" style="margin-top:10px;">
        <div style="width:${pct(overall)}"></div>
      </div>
    </section>
  `;

  const cards = DATA.topics
    .map((topic) => {
      const p = topicProgress(topic);
      const preview = topic.intro ? t(topic.intro) : topic.summaryBullets?.[0] ? t(topic.summaryBullets[0]) : "";
      return `
      <section class="card topic-card">
        <div class="topic-head">
          <div>
            <h2>${t(topic.title)}</h2>
            <div class="topic-sub">${t(topic.subtitle)}</div>
          </div>
          <div class="badge">${t(topic.badge)}</div>
        </div>

        <p>${preview}</p>

        <div class="topic-foot">
          <div class="progress-row">
            <span>${state.lang === "hu" ? "Teljesítve" : state.lang === "es" ? "Progreso" : "Progress"}: ${pct(p)}</span>
            <span>${topic.quiz?.length || 0} ${state.lang === "hu" ? "kérdés" : state.lang === "es" ? "preguntas" : "questions"}</span>
          </div>
          <div class="progress" aria-label="progress"><div style="width:${pct(p)}"></div></div>
          <button class="btn primary" onclick="route('topic','${topic.id}','overview')">
            ${t(DATA.ui.nav.open)}
          </button>
        </div>
      </section>
    `;
    })
    .join("");

  root.innerHTML = `${overallBar}<div class="grid">${cards}</div>`;
}

function renderTopic() {
  const topic = DATA.topics.find((t) => t.id === state.topicId);
  if (!topic) return route("home");

  const root = $("#app");
  const p = topicProgress(topic);

  const tabs = [
    { id: "overview", label: state.lang === "hu" ? "Áttekintés" : state.lang === "es" ? "Resumen" : "Overview" },
    { id: "cards", label: state.lang === "hu" ? "Kártyák" : state.lang === "es" ? "Tarjetas" : "Cards" },
    { id: "quiz", label: state.lang === "hu" ? "Teszt" : state.lang === "es" ? "Test" : "Quiz" },
  ]
    .map(
      (x) => `<button class="tab ${state.topicTab === x.id ? "active" : ""}" onclick="route('topic','${topic.id}','${x.id}')">${x.label}</button>`,
    )
    .join("");

  const content = state.topicTab === "overview" ? renderTopicOverview(topic) : state.topicTab === "cards" ? renderTopicCards(topic) : renderTopicQuiz(topic);

  root.innerHTML = `
    <section class="card pad">
      <div class="view-head">
        <div class="meta">
          <h2>${t(topic.title)}</h2>
          <div class="subtitle">${t(topic.subtitle)}</div>
          <div class="progress-row" style="margin-top:6px;">
            <span>${state.lang === "hu" ? "Teljesítve" : state.lang === "es" ? "Progreso" : "Progress"}: ${pct(p)}</span>
            <span class="badge">${t(topic.badge)}</span>
          </div>
          <div class="progress" style="margin-top:8px;"><div style="width:${pct(p)}"></div></div>
        </div>

        <div class="controls">
          <button class="btn" onclick="route('home')">${"Vissza"}</button>
        </div>
      </div>

      <div class="tabs">${tabs}</div>

      <div class="hr"></div>

      ${content}
    </section>
  `;
}

function renderTopicOverview(topic) {
  const intro = topic.intro ? t(topic.intro) : "";
  const bullets = (topic.summaryBullets || []).map((b) => `<li>${t(b)}</li>`).join("");
  const keyPoints = (topic.keyPoints || []).map((k) => `<li>${t(k)}</li>`).join("");

  const materials = Array.isArray(topic.materials) ? topic.materials : [];
  const okMat = materials.filter((m) => (m.title?.hu || "").includes("Ok → Következmény"));
  const imgMat = materials.filter((m) => (m.title?.hu || "").includes("Képek"));

  const extendedList = (topic.extended || []).map((x) => `<li>${t(x)}</li>`).join("");

  const okHtml =
    okMat.length > 0
      ? okMat
          .map((m) => {
            const lines = (m.lines || []).map((l) => `<li>${t(l)}</li>`).join("");
            return `
              <div class="qcard">
                <h4>${t(m.title)}</h4>
                <div class="qtext"><ul style="margin:8px 0 0; padding-left:18px;">${lines}</ul></div>
              </div>
            `;
          })
          .join("")
      : "";

  const imgHtml =
    imgMat.length > 0
      ? imgMat
          .map((m) => {
            const lines = (m.lines || [])
              .map((l) => {
                const text = t(l);
                const hasAsset = /assets\/.+\.(png|jpg|jpeg|webp|gif|svg)/i.test(text);
                const src = hasAsset ? text.match(/assets\/[^\s]+/i)?.[0] : "";

                return `
                  <div style="display:flex; flex-direction:column; gap:8px; margin-top:10px;">
                    <div style="color:var(--muted); font-size:12.5px;">${escapeHtml(text)}</div>
                    ${
                      src
                        ? `<div class="media"><img src="${escapeHtml(src)}" alt="" onerror="this.src='assets/placeholder.svg'"/></div>`
                        : ""
                    }
                  </div>
                `;
              })
              .join("");

            return `

              <div class="qcard">
                <h4>${t(m.title)}</h4>
                <div class="qtext">${lines || `<div style="opacity:.8;">—</div>`}</div>
              </div>
            `;
          })
          .join("")
      : "";

  return `
    <div class="kv">
      <div class="block">
        <h3>${state.lang === "hu" ? "Bevezető" : state.lang === "es" ? "Introducción" : "Introduction"}</h3>
        <div class="qtext">${intro || "—"}</div>
      </div>

      <div class="block">
        <h3>${state.lang === "hu" ? "Rövid vázlat" : state.lang === "es" ? "Esquema breve" : "Quick outline"}</h3>
        <ul>${bullets || `<li>—</li>`}</ul>
      </div>

      <div class="block" style="grid-column:1 / -1;">
        <h3>${state.lang === "hu" ? "Kulcspontok" : state.lang === "es" ? "Puntos clave" : "Key points"}</h3>
        <ul>${keyPoints || `<li>—</li>`}</ul>
      </div>

      <div class="block" style="grid-column:1 / -1;">
        <h3>${state.lang === "hu" ? "Kiegészítés" : state.lang === "es" ? "Complemento" : "Extended"}</h3>
        <ul>${extendedList || `<li>—</li>`}</ul>
      </div>

      ${okHtml ? `<div class="block" style="grid-column:1 / -1;"><h3>Ok → Következmény</h3>${okHtml}</div>` : ""}
      ${imgHtml ? `<div class="block" style="grid-column:1 / -1;"><h3>${state.lang === "hu" ? "Képek" : state.lang === "es" ? "Imágenes" : "Images"}</h3>${imgHtml}</div>` : ""}
    </div>
  `;
}

function renderTopicCards(topic) {
  const cards = topic.flashcards || [];
  if (!cards.length) {
    return `<p>${state.lang === "hu" ? "Ehhez a témához még nincsenek kártyák." : state.lang === "es" ? "Todavía no hay tarjetas." : "No cards yet."}</p>`;
  }

  const done = state.progress[topic.id] || {};
  const knownCount = cards.filter((c) => done[`fc_${c.id}`]).length;

  const key = `cards_${topic.id}`;
  if (!window.__cardTrainer) window.__cardTrainer = {};
  if (!window.__cardTrainer[key]) window.__cardTrainer[key] = { index: 0, revealed: false };

  const st = window.__cardTrainer[key];
  st.index = Math.max(0, Math.min(st.index, cards.length - 1));

  const card = cards[st.index];

  const revealText = state.lang === "hu" ? "Felfedés" : state.lang === "es" ? "Revelar" : "Reveal";
  const knewText = state.lang === "hu" ? "Tudtam" : state.lang === "es" ? "Lo sabía" : "I knew";
  const didntText = state.lang === "hu" ? "Nem tudtam" : state.lang === "es" ? "No lo sabía" : "I didn’t know";
  const resetText = state.lang === "hu" ? "Kártyák nullázása" : state.lang === "es" ? "Reiniciar tarjetas" : "Reset cards";
  const nextUnknownText = state.lang === "hu" ? "Következő nem tudott" : state.lang === "es" ? "Siguiente no sabido" : "Next unknown";
  const nextText = state.lang === "hu" ? "Következő" : state.lang === "es" ? "Siguiente" : "Next";

  return `
    <div class="qcard">
      <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
        <h4 style="margin:0;">
          ${state.lang === "hu" ? "Kártyák" : state.lang === "es" ? "Tarjetas" : "Cards"} • ${st.index + 1}/${cards.length}
          <span style="opacity:.7; font-weight:400;">• ${knownCount}/${cards.length} ${state.lang === "hu" ? "tudott" : state.lang === "es" ? "sabidas" : "known"}</span>
        </h4>

        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button class="btn" onclick="resetTopicCards('${topic.id}')">${resetText}</button>
          <button class="btn" onclick="gotoNextUnknownCard('${topic.id}')">${nextUnknownText}</button>
        </div>
      </div>

      <div class="hr"></div>

      <div class="qtext" style="font-weight:700;">${t(card.front)}</div>

      ${
        st.revealed
          ? `
            <div class="qtext" style="margin-top:10px; color:var(--muted);">${t(card.back)}</div>
            <div style="display:flex; gap:10px; margin-top:12px; flex-wrap:wrap;">
              <button class="btn primary" onclick="markCardKnown('${topic.id}','${card.id}')">${knewText}</button>
              <button class="btn" onclick="markCardUnknown('${topic.id}','${card.id}')">${didntText}</button>
              <button class="btn" onclick="nextCard('${topic.id}')">${nextText}</button>
            </div>
          `
          : `
            <div style="display:flex; gap:10px; margin-top:12px; flex-wrap:wrap;">
              <button class="btn primary" onclick="revealCard('${topic.id}')">${revealText}</button>
              <button class="btn" onclick="nextCard('${topic.id}')">${nextText}</button>
            </div>
          `
      }
    </div>
  `;
}

function toggleFlash(id) {
  const el = $(`.flash[data-id="${id}"]`);
  if (el) el.classList.toggle("open");
}

function ensureProgress(topicId) {
  if (!state.progress[topicId]) state.progress[topicId] = {};
}

function markCorrect(topicId, qid) {
  ensureProgress(topicId);
  state.progress[topicId][qid] = true;
  save();
  render();
}

function renderTopicQuiz(topic) {
  const list = topic.quiz || [];
  if (!list.length) {
    return `<p>${state.lang === "hu" ? "Ehhez a témához még nincs teszt." : state.lang === "es" ? "Aún no hay test." : "No quiz yet."}</p>`;
  }

  const done = state.progress[topic.id] || {};

  const html = list
    .map((q, idx) => {
      const num = idx + 1;
      const doneMark = done[q.id] ? "✅" : "•";
      if (q.type === "mcq") return renderMCQ(topic, q, num, doneMark);
      if (q.type === "order") return renderOrder(topic, q, num, doneMark);
      if (q.type === "image-mcq") return renderImageMCQ(topic, q, num, doneMark);
      if (q.type === "match") return renderMatch(topic, q, num, doneMark);
      return `<div class="qcard"><h4>${doneMark} #${num}</h4><div class="qtext">Unsupported type: ${q.type}</div></div>`;
    })
    .join("");

  return `<div class="quiz">${html}</div>`;
}

function renderMCQ(topic, q, num, doneMark) {
  const opts = q.options
    .map(
      (o, i) => `
    <button onclick="answerMCQ('${topic.id}','${q.id}',${i})">${t(o)}</button>
  `,
    )
    .join("");

  return `
    <div class="qcard" data-qid="${q.id}">
      <h4>${doneMark} #${num} • ${state.lang === "hu" ? "Feleletválasztós" : state.lang === "es" ? "Opción múltiple" : "Multiple choice"}</h4>
      <div class="qtext">${t(q.prompt)}</div>
      <div class="opt">${opts}</div>
      <div class="feedback" style="display:none;"></div>
    </div>
  `;
}

function answerMCQ(topicId, qid, choice) {
  const topic = DATA.topics.find((t) => t.id === topicId);
  const q = (topic.quiz || []).find((x) => x.id === qid);
  const card = $(`.qcard[data-qid="${qid}"]`);
  if (!q || !card) return;

  const buttons = $$(".opt button", card);
  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === q.answerIndex) b.classList.add("correct");
    if (i === choice && choice !== q.answerIndex) b.classList.add("wrong");
  });

  const ok = choice === q.answerIndex;
  const fb = $(".feedback", card);
  fb.style.display = "block";
  fb.textContent =
    (ok ? (state.lang === "hu" ? "Helyes! " : state.lang === "es" ? "¡Correcto! " : "Correct! ") : state.lang === "hu" ? "Nem ez. " : state.lang === "es" ? "No. " : "Not quite. ") +
    t(q.explain);

  if (ok) markCorrect(topicId, qid);
}

function renderImageMCQ(topic, q, num, doneMark) {
  const opts = q.options
    .map(
      (o, i) => `
    <button onclick="answerImageMCQ('${topic.id}','${q.id}',${i})">${t(o)}</button>
  `,
    )
    .join("");

  return `
    <div class="qcard" data-qid="${q.id}">
      <h4>${doneMark} #${num} • ${state.lang === "hu" ? "Képes kvíz" : state.lang === "es" ? "Quiz con imagen" : "Image quiz"}</h4>
      <div class="qtext">${t(q.prompt)}</div>
      <div class="media" style="margin-top:10px;">
        <img src="${q.image}" alt="" onerror="this.src='assets/placeholder.svg'"/>
      </div>
      <div class="opt">${opts}</div>
      <div class="feedback" style="display:none;"></div>
    </div>
  `;
}

function answerImageMCQ(topicId, qid, choice) {
  answerMCQ(topicId, qid, choice);
}

function renderOrder(topic, q, num, doneMark) {
  const seed = q.items.map((x) => ({ ...x })).sort(() => Math.random() - 0.5);
  const localKey = `order_${topic.id}_${q.id}`;
  if (!window.__orderState) window.__orderState = {};
  if (!window.__orderState[localKey]) window.__orderState[localKey] = seed;

  const items = window.__orderState[localKey];

  const rows = items
    .map(
      (it, i) => `
    <div class="order-item">
      <div class="txt">${t(it)}</div>
      <div class="moves">
        <button onclick="moveOrder('${localKey}', ${i}, -1)">↑</button>
        <button onclick="moveOrder('${localKey}', ${i}, 1)">↓</button>
      </div>
    </div>
  `,
    )
    .join("");

  return `
    <div class="qcard" data-qid="${q.id}">
      <h4>${doneMark} #${num} • ${state.lang === "hu" ? "Sorrend" : state.lang === "es" ? "Orden" : "Order"}</h4>
      <div class="qtext">${t(q.prompt)}</div>
      <div class="order-list">${rows}</div>
      <div style="display:flex; gap:10px; margin-top:12px; flex-wrap:wrap;">
        <button class="btn" onclick="checkOrder('${topic.id}','${q.id}','${localKey}')">${state.lang === "hu" ? "Ellenőrzés" : state.lang === "es" ? "Comprobar" : "Check"}</button>
        <button class="btn" onclick="resetOrder('${localKey}')">${state.lang === "hu" ? "Keverés" : state.lang === "es" ? "Mezclar" : "Shuffle"}</button>
      </div>
      <div class="feedback" style="display:none;"></div>
    </div>
  `;
}

function moveOrder(localKey, index, dir) {
  const arr = window.__orderState[localKey];
  const j = index + dir;
  if (j < 0 || j >= arr.length) return;
  const tmp = arr[index];
  arr[index] = arr[j];
  arr[j] = tmp;
  render();
}

function resetOrder(localKey) {
  const arr = window.__orderState[localKey];
  window.__orderState[localKey] = arr.sort(() => Math.random() - 0.5);
  render();
}

function checkOrder(topicId, qid, localKey) {
  const topic = DATA.topics.find((t) => t.id === topicId);
  const q = (topic.quiz || []).find((x) => x.id === qid);
  const card = $(`.qcard[data-qid="${qid}"]`);
  if (!q || !card) return;

  const current = window.__orderState[localKey].map((x) => t(x));
  const correct = (q.answerOrder || []).map((i) => t(q.items[i]));

  const ok = current.join("|") === correct.join("|");
  const fb = $(".feedback", card);
  fb.style.display = "block";
  fb.textContent =
    (ok ? (state.lang === "hu" ? "Helyes sorrend! " : state.lang === "es" ? "¡Orden correcto! " : "Correct order! ") : state.lang === "hu" ? "Még nem. " : state.lang === "es" ? "Aún no. " : "Not yet. ") +
    t(q.explain);

  if (ok) markCorrect(topicId, qid);
}

// -------------------- MATCH --------------------

function renderMatch(topic, q, num, doneMark) {
  const localKey = `match_${topic.id}_${q.id}`;
  if (!window.__matchState) window.__matchState = {};
  if (!window.__matchState[localKey]) {
    window.__matchState[localKey] = {
      selectedLeftKey: "",
      // map: leftKey -> rightKey
      picks: {},
      locked: false,
      shuffleKey: `${topic.id}_${q.id}_${Date.now()}`,
    };
  }

  const st = window.__matchState[localKey];

  // Stable shuffle (doesn't change on every render)
  const leftList = shuffleSeeded([...(q.left || [])], `${st.shuffleKey}_L`);
  const rightList = shuffleSeeded([...(q.right || [])], `${st.shuffleKey}_R`);

  const leftHtml = leftList
    .map((l) => {
      const isSelected = st.selectedLeftKey === l.k;
      const chosenRight = st.picks[l.k];

      // show the chosen right item's TEXT (not its key)
      const chosenRightText = chosenRight ? t((q.right || []).find((x) => x.k === chosenRight)) : "";

      return `
        <button class="btn ${isSelected ? "primary" : ""}" style="justify-content:flex-start;"
          onclick="selectMatchLeft('${localKey}','${escapeHtml(l.k)}')"
          ${st.locked ? "disabled" : ""}>
          <span style="display:flex; gap:10px; align-items:center; width:100%;">
            <span>${t(l)}</span>
            <span style="margin-left:auto; opacity:.75;">${chosenRightText ? "→ " + escapeHtml(chosenRightText) : ""}</span>
          </span>
        </button>
      `;
    })
    .join("");

  const rightHtml = rightList
    .map((r) => {
      const usedByLeft = Object.entries(st.picks).find(([, rk]) => rk === r.k)?.[0] || "";
      const isUsed = !!usedByLeft;

      return `
        <button class="btn" style="justify-content:flex-start; opacity:${isUsed ? "0.65" : "1"};"
          onclick="selectMatchRight('${topic.id}','${q.id}','${localKey}','${escapeHtml(r.k)}')"
          ${st.locked ? "disabled" : ""}>
          <span style="display:flex; gap:10px; align-items:center; width:100%;">
            <span>${t(r)}</span>
            <span style="margin-left:auto; opacity:.7;">${isUsed ? (state.lang === "hu" ? "használva" : state.lang === "es" ? "usado" : "used") : ""}</span>
          </span>
        </button>
      `;
    })
    .join("");

  return `
    <div class="qcard" data-qid="${q.id}">
      <h4>${doneMark} #${num} • ${state.lang === "hu" ? "Párosítás" : state.lang === "es" ? "Emparejar" : "Matching"}</h4>
      <div class="qtext">${t(q.prompt)}</div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:12px;">
        <div>
          <div style="font-size:12px; opacity:.7; margin-bottom:6px;">${state.lang === "hu" ? "Bal" : state.lang === "es" ? "Izquierda" : "Left"}</div>
          <div style="display:flex; flex-direction:column; gap:8px;">${leftHtml}</div>
        </div>
        <div>
          <div style="font-size:12px; opacity:.7; margin-bottom:6px;">${state.lang === "hu" ? "Jobb" : state.lang === "es" ? "Derecha" : "Right"}</div>
          <div style="display:flex; flex-direction:column; gap:8px;">${rightHtml}</div>
        </div>
      </div>

      <div style="display:flex; gap:10px; margin-top:12px; flex-wrap:wrap;">
        <button class="btn" onclick="resetMatch('${localKey}')">${state.lang === "hu" ? "Törlés" : state.lang === "es" ? "Borrar" : "Clear"}</button>
        <button class="btn primary" onclick="checkMatch('${topic.id}','${q.id}','${localKey}')">${state.lang === "hu" ? "Ellenőrzés" : state.lang === "es" ? "Comprobar" : "Check"}</button>
      </div>

      <div class="feedback" style="display:none;"></div>
    </div>
  `;
}

function selectMatchLeft(localKey, leftKey) {
  const st = window.__matchState?.[localKey];
  if (!st || st.locked) return;
  st.selectedLeftKey = unescapeHtml(leftKey);
  render();
}

function selectMatchRight(topicId, qid, localKey, rightKey) {
  const st = window.__matchState?.[localKey];
  if (!st || st.locked) return;

  const rk = unescapeHtml(rightKey);
  const lk = st.selectedLeftKey;
  if (!lk) return;

  // Ensure one-to-one mapping: remove rk from any other left
  for (const [k, v] of Object.entries(st.picks)) {
    if (v === rk && k !== lk) delete st.picks[k];
  }

  st.picks[lk] = rk;
  st.selectedLeftKey = "";
  render();
}

function resetMatch(localKey) {
  const st = window.__matchState?.[localKey];
  if (!st) return;
  st.selectedLeftKey = "";
  st.picks = {};
  st.locked = false;
  render();
}

function checkMatch(topicId, qid, localKey) {
  const topic = DATA.topics.find((t) => t.id === topicId);
  const q = (topic.quiz || []).find((x) => x.id === qid);
  const card = $(`.qcard[data-qid="${qid}"]`);
  const st = window.__matchState?.[localKey];
  if (!q || !card || !st) return;

  const expected = q.pairs || {};
  const leftKeys = (q.left || []).map((x) => x.k);

  // Require all left keys to be answered
  let ok = true;
  for (const lk of leftKeys) {
    if (!st.picks[lk]) ok = false;
    if (st.picks[lk] !== expected[lk]) ok = false;
  }

  const fb = $(".feedback", card);
  fb.style.display = "block";
  fb.textContent =
    (ok ? (state.lang === "hu" ? "Helyes párosítás! " : state.lang === "es" ? "¡Emparejamiento correcto! " : "Correct matching! ") : state.lang === "hu" ? "Még nem jó. " : state.lang === "es" ? "Aún no. " : "Not yet. ") +
    t(q.explain);

  if (ok) {
    st.locked = true;
    markCorrect(topicId, qid);
  }
}

// -------------------- existing glossary/royal/etc below unchanged --------------------

function renderGlossary() {
  const root = $("#app");

  if (!window.__glossarySearch) window.__glossarySearch = { q: "" };
  const query = (window.__glossarySearch.q || "").trim().toLowerCase();

  const groups = Array.isArray(DATA.glossary) ? DATA.glossary : [];

  const groupHtml = groups
    .map((g) => {
      const title = t(g.title);
      const items = Array.isArray(g.items) ? g.items : [];

      const filteredItems =
        query.length === 0
          ? items
          : items.filter((it) => {
              const termText = t(it.term);
              return termText.toLowerCase().includes(query);
            });

      const itemsHtml =
        filteredItems.length > 0
          ? filteredItems
              .map(
                (it) => `
        <div class="qcard">
          <h4>${t(it.term)}</h4>
          <div class="qtext">${t(it.def)}</div>
        </div>
      `,
              )
              .join("")
          : `
        <div class="qcard">
          <div class="qtext" style="opacity:.8;">
            ${state.lang === "hu" ? "Nincs találat ebben a csoportban." : state.lang === "es" ? "No hay resultados en este grupo." : "No results in this group."}
          </div>
        </div>
      `;

      return `
        <section class="card pad" style="margin-top:14px;">
          <div class="view-head">
            <div class="meta">
              <h2>${title}</h2>
            </div>
          </div>
          <div class="hr"></div>
          <div class="quiz">${itemsHtml}</div>
        </section>
      `;
    })
    .join("");

  root.innerHTML = `
    <section class="card pad">
      <div class="view-head">
        <div class="meta" style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="margin-left:auto; flex:0 0 auto; width:min(360px, 100%);">
            <input
              id="glossarySearch"
              type="search"
              value="${escapeHtml(window.__glossarySearch.q || "")}"
              placeholder="${state.lang === "hu" ? "Keresés (csak a kifejezésben)..." : state.lang === "es" ? "Buscar (solo en el término)..." : "Search (term only)..."}"
              style="width:100%; padding:10px 12px; border-radius:12px; border:1px solid var(--border); background:var(--panel); color:var(--text);"
              autocomplete="off"
              spellcheck="false"
            />
          </div>
        </div>
      </div>
    </section>

    ${groupHtml}
  `;

  // Hook the handler once (delegated) so it survives re-renders.
  if (!window.__glossarySearchBound) {
    window.__glossarySearchBound = true;

    document.addEventListener("input", (ev) => {
      const el = ev.target;
      if (!(el instanceof HTMLInputElement)) return;
      if (el.id !== "glossarySearch") return;

      const start = el.selectionStart ?? el.value.length;
      const end = el.selectionEnd ?? el.value.length;

      window.__glossarySearch.q = el.value || "";

      // Only re-render glossary (not full render), and restore focus/caret.
      renderGlossary();

      const next = document.getElementById("glossarySearch");
      if (next instanceof HTMLInputElement) {
        next.focus();
        try {
          next.setSelectionRange(start, end);
        } catch (e) {}
      }
    });
  }
}

function renderRoyal() {
  const root = $("#app");
  const royal = DATA.royalLine;
  const mode = royal.modes.find((m) => m.id === royalModeId) || royal.modes[0];
  if (!mode) return route("home");

  const expected = getRoyalExpectedOrder(mode);

  const key = `royal_${mode.id}`;
  if (!state[key]) state[key] = { placements: {}, shuffleKey: "" };
  const placements = state[key].placements;

  // ensure stable slot ids exist
  for (let i = 0; i < expected.length; i++) {
    const slotId = `p${i + 1}`;
    if (typeof placements[slotId] === "undefined") placements[slotId] = "";
  }

  const used = new Set(Object.values(placements).filter(Boolean));
  const remaining = expected.filter((n) => !used.has(n));

  // per-mode/per-session shuffle seed
  if (!state[key].shuffleKey) state[key].shuffleKey = `${mode.id}_${Date.now()}`;
  const bankList = shuffleSeeded(remaining, state[key].shuffleKey);

  const modeBtns = royal.modes
    .map((m) => `<button class="btn ${m.id === mode.id ? "primary" : ""}" onclick="setRoyalMode('${m.id}')">${t(m.label)}</button>`)
    .join("");

  const chips = bankList
    .map((name) => {
      const houseId = inferHouseId(name);
      return `
        <div class="r-chip" draggable="true"
             data-name="${escapeHtml(name)}"
             data-house="${escapeHtml(houseId)}"
             ondragstart="royalDragStart(event, '${escapeHtml(name)}')">
          ${escapeHtml(name)}
        </div>
      `;
    })
    .join("");

  const slots = expected
    .map((_, i) => {
      const slotId = `p${i + 1}`;
      const val = placements[slotId] || "";
      const houseId = val ? inferHouseId(val) : "";

      return `
        <div class="r-slot" data-slot="${slotId}"
             ondragover="royalAllowDrop(event)"
             ondrop="royalDrop(event, '${slotId}')">
          <div class="r-slot-body">
            ${
              val
                ? `<div class="r-chip placed" draggable="true"
                          data-name="${escapeHtml(val)}"
                          data-house="${escapeHtml(houseId)}"
                          ondragstart="royalDragStart(event, '${escapeHtml(val)}')">
                      ${escapeHtml(val)}
                    </div>`
                : `<div class="r-slot-empty">${state.lang === "hu" ? "Húzd ide" : state.lang === "es" ? "Arrastra aquí" : "Drop here"}</div>`
            }
          </div>
        </div>
      `;
    })
    .join("");

  root.innerHTML = `
    <section class="card pad">
      <div class="view-head">
        <div class="meta">
          <h2>${t(royal.title)}</h2>
          <div class="subtitle">${t(royal.subtitle)}</div>
        </div>
      </div>

      <div class="hr"></div>

      <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
        ${modeBtns}
        <button class="btn" onclick="resetRoyal()">${state.lang === "hu" ? "Újrakezdés" : state.lang === "es" ? "Reiniciar" : "Reset"}</button>
        <button class="btn primary" onclick="checkRoyal()">${state.lang === "hu" ? "Ellenőrzés" : state.lang === "es" ? "Comprobar" : "Check"}</button>
      </div>

      <div class="mini">
        <div class="bank" id="royalBank"
             ondragover="royalAllowDrop(event)"
             ondrop="royalDropToBank(event)">
          ${chips || `<span style="color:var(--muted)">${state.lang === "hu" ? "Minden név a helyén van." : state.lang === "es" ? "Todos colocados." : "All placed."}</span>`}
        </div>

        <div class="r-chain">
          ${slots}
        </div>

        <div class="footer-note" id="royalFeedback"></div>
      </div>
    </section>
  `;

  save();
}

function getRoyalExpectedOrder(mode) {
  // Flatten slot-group arrays into 1 canonical timeline order
  return (mode.slots || []).flatMap((s) => mode.orderedGroups?.[s.id] || []);
}

function setRoyalMode(id) {
  royalModeId = id;
  render();
}

function resetRoyal() {
  const mode = DATA.royalLine.modes.find((m) => m.id === royalModeId);
  const key = `royal_${mode.id}`;
  state[key] = { placements: {}, shuffleKey: "" };
  save();
  render();
}

function royalAllowDrop(ev) {
  ev.preventDefault();
}

function royalDragStart(ev, name) {
  ev.dataTransfer.setData("text/plain", unescapeHtml(name));
  ev.dataTransfer.effectAllowed = "move";
}

function royalClearSlot(slotId) {
  const mode = DATA.royalLine.modes.find((m) => m.id === royalModeId);
  const key = `royal_${mode.id}`;
  if (!state[key]) state[key] = { placements: {} };

  state[key].placements[slotId] = "";
  save();
  render();
}

function royalDrop(ev, slotId) {
  ev.preventDefault();

  const name = ev.dataTransfer.getData("text/plain");
  if (!name) return;

  const mode = DATA.royalLine.modes.find((m) => m.id === royalModeId);
  const key = `royal_${mode.id}`;
  if (!state[key]) state[key] = { placements: {} };
  const placements = state[key].placements;

  // remove from any previous slot
  for (const k of Object.keys(placements)) {
    if (placements[k] === name) placements[k] = "";
  }

  // overwrite target
  placements[slotId] = name;

  // clear slot result coloring after changes
  $$(".r-slot").forEach((el) => el.classList.remove("ok", "bad"));

  save();
  render();
}

function royalDropToBank(ev) {
  ev.preventDefault();

  const name = ev.dataTransfer.getData("text/plain");
  if (!name) return;

  const mode = DATA.royalLine.modes.find((m) => m.id === royalModeId);
  const key = `royal_${mode.id}`;
  const placements = state[key]?.placements;
  if (!placements) return;

  for (const k of Object.keys(placements)) {
    if (placements[k] === name) placements[k] = "";
  }

  $$(".r-slot").forEach((el) => el.classList.remove("ok", "bad"));

  save();
  render();
}

function checkRoyal() {
  const mode = DATA.royalLine.modes.find((m) => m.id === royalModeId);
  const expected = getRoyalExpectedOrder(mode);
  const key = `royal_${mode.id}`;
  const placements = state[key]?.placements || {};

  let okAll = true;
  const lines = [];

  for (let i = 0; i < expected.length; i++) {
    const slotId = `p${i + 1}`;
    const exp = expected[i];
    const act = placements[slotId] || "";
    const ok = act === exp;

    okAll = okAll && ok;

    const slotEl = $(`.r-slot[data-slot="${slotId}"]`);
    if (slotEl) {
      slotEl.classList.remove("ok", "bad");
      slotEl.classList.add(ok ? "ok" : "bad");
    }

    if (!ok) {
      lines.push(`${i + 1}. ${state.lang === "hu" ? "Helyes:" : state.lang === "es" ? "Correcto:" : "Correct:"} ${exp}`);
    }
  }

  const fb = $("#royalFeedback");
  fb.style.whiteSpace = "pre-wrap";
  fb.textContent = okAll
    ? state.lang === "hu"
      ? "Szuper! Minden név jó helyen van."
      : state.lang === "es"
        ? "¡Genial! Todo correcto."
        : "Great! Everything is correct."
    : (state.lang === "hu"
        ? "Még nem tökéletes. Hibás helyek (a helyes megoldás):"
        : state.lang === "es"
          ? "Aún no. Lugares incorrectos (la solución correcta):"
          : "Not yet. Incorrect positions (correct solution):") +
      "\n" +
      lines.slice(0, 12).join("\n") +
      (lines.length > 12 ? `\n… (${lines.length - 12} more)` : "");

  save();
}

function inferHouseId(name) {
  // Heuristic based on mode group labels; tweak freely.
  // This only affects colors, not correctness.
  if (/Árpád|István|László|Kálmán|András|Béla|Salamon|Imre/i.test(name)) return "arpad";
  if (/Károly|Nagy Lajos/i.test(name)) return "anjou";
  if (/Zsigmond/i.test(name)) return "lux";
  if (/Hunyadi|Mátyás/i.test(name)) return "hunyadi";
  if (/Jagelló|Ulászló/i.test(name)) return "jagello";
  if (/Habsburg|Ferdinánd/i.test(name)) return "habsburg";
  return "other";
}

function render() {
  renderTopbar();

  if (state.view === "home") return renderHome();
  if (state.view === "topic") return renderTopic();
  if (state.view === "glossary") return renderGlossary();
  if (state.view === "royal") return renderRoyal();

  renderHome();
}

/* Events */
window.route = route;
window.toggleFlash = toggleFlash;
window.answerMCQ = answerMCQ;
window.answerImageMCQ = answerImageMCQ;
window.moveOrder = moveOrder;
window.resetOrder = resetOrder;
window.checkOrder = checkOrder;

window.setRoyalMode = setRoyalMode;
window.royalAllowDrop = royalAllowDrop;
window.royalDragStart = royalDragStart;
window.royalDrop = royalDrop;
window.royalDropToBank = royalDropToBank;
window.royalClearSlot = royalClearSlot;

window.revealCard = revealCard;
window.nextCard = nextCard;
window.gotoNextUnknownCard = gotoNextUnknownCard;
window.resetTopicCards = resetTopicCards;
window.markCardKnown = markCardKnown;
window.markCardUnknown = markCardUnknown;

let royalModeId = "main20";

function shuffleSeeded(arr, seedStr) {
  // deterministic shuffle so order doesn't change on every render
  // (not crypto; just stable for a session key)
  let seed = 0;
  for (let i = 0; i < seedStr.length; i++) seed = (seed * 31 + seedStr.charCodeAt(i)) >>> 0;

  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    seed = (1664525 * seed + 1013904223) >>> 0; // LCG
    const j = seed % (i + 1);
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}

function init() {
  load();
  document.documentElement.setAttribute("data-theme", state.theme || "dark");

  $("#btnTheme").addEventListener("click", () => setTheme(state.theme === "dark" ? "light" : "dark"));

  // NOTE: `btnBack` was removed from HTML and replaced with `btnReset`
  $("#btnReset").addEventListener("click", () => resetAllProgress());

  $$(".pill").forEach((p) => p.addEventListener("click", () => setLang(p.dataset.lang)));

  $$(".navBtn").forEach((b) => b.addEventListener("click", () => route(b.dataset.nav)));

  render();
}

document.addEventListener("DOMContentLoaded", init);

function cssEscape(s) {
  return window.CSS && CSS.escape ? CSS.escape(s) : String(s).replace(/"/g, '\\"');
}

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function unescapeHtml(s) {
  return String(s).replace(/&quot;/g, '"').replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&amp;/g, "&");
}

function renderTopicExtra(topic) {
  const extendedList = (topic.extended || []).map((x) => `<li>${t(x)}</li>`).join("");

  const materials = Array.isArray(topic.materials) ? topic.materials : [];

  const okMat = materials.filter((m) => (m.title?.hu || "").includes("Ok → Következmény"));
  const imgMat = materials.filter((m) => (m.title?.hu || "").includes("Képek"));

  const okHtml =
    okMat.length > 0
      ? okMat
          .map((m) => {
            const lines = (m.lines || []).map((l) => `<li>${t(l)}</li>`).join("");
            return `
              <div class="qcard">
                <h4>${t(m.title)}</h4>
                <div class="qtext"><ul style="margin:8px 0 0; padding-left:18px;">${lines}</ul></div>
              </div>
            `;
          })
          .join("")
      : "";

  const imgHtml =
    imgMat.length > 0
      ? imgMat
          .map((m) => {
            const lines = (m.lines || [])
              .map((l) => {
                const path = t(l);
                // If the line contains an assets path, show a preview image (safe fallback to placeholder)
                const hasAsset = /assets\/.+\.(png|jpg|jpeg|webp|gif|svg)/i.test(path);
                const src = hasAsset ? path.match(/assets\/[^\s]+/i)?.[0] : "";
                return `

                  <div style="display:flex; flex-direction:column; gap:8px; margin-top:10px;">
                    <div style="color:var(--muted); font-size:12.5px;">${escapeHtml(path)}</div>
                    ${
                      src
                        ? `<div class="media"><img src="${escapeHtml(src)}" alt="" onerror="this.src='assets/placeholder.svg'"/></div>`
                        : ""
                    }
                  </div>
                `;
              })
              .join("");

            return `

              <div class="qcard">
                <h4>${t(m.title)}</h4>
                <div class="qtext">${lines || `<div style="opacity:.8;">—</div>`}</div>
              </div>
            `;
          })
          .join("")
      : "";

  return `
    <div class="kv" style="grid-template-columns:1fr; margin-top:0;">
      <div class="block">
        <h3>${state.lang === "hu" ? "Kiegészítés" : state.lang === "es" ? "Complemento" : "Extended"}</h3>
        <ul>${extendedList || `<li>—</li>`}</ul>
      </div>

      ${okHtml ? `<div class="block"><h3>Ok → Következmény</h3>${okHtml}</div>` : ""}
      ${imgHtml ? `<div class="block"><h3>${state.lang === "hu" ? "Képek" : state.lang === "es" ? "Imágenes" : "Images"}</h3>${imgHtml}</div>` : ""}
    </div>
  `;
}
function ensureCardTrainer(topicId) {
  if (!window.__cardTrainer) window.__cardTrainer = {};
  const key = `cards_${topicId}`;
  if (!window.__cardTrainer[key]) window.__cardTrainer[key] = { index: 0, revealed: false };
  return window.__cardTrainer[key];
}

function revealCard(topicId) {
  const st = ensureCardTrainer(topicId);
  st.revealed = true;
  render();
}

function nextCard(topicId) {
  const topic = (DATA.topics || []).find((t) => t.id === topicId);
  const cards = topic?.flashcards || [];
  if (!cards.length) return;

  const st = ensureCardTrainer(topicId);
  st.index = (st.index + 1) % cards.length;
  st.revealed = false;
  render();
}

function gotoNextUnknownCard(topicId) {
  const topic = (DATA.topics || []).find((t) => t.id === topicId);
  const cards = topic?.flashcards || [];
  if (!cards.length) return;

  const done = state.progress[topicId] || {};
  const st = ensureCardTrainer(topicId);

  for (let step = 1; step <= cards.length; step++) {
    const idx = (st.index + step) % cards.length;
    const card = cards[idx];
    if (!done[`fc_${card.id}`]) {
      st.index = idx;
      st.revealed = false;
      render();
      return;
    }
  }

  // If all known, just go next.
  nextCard(topicId);
}

function resetTopicCards(topicId) {
  const confirmText =
    state.lang === "hu"
      ? "Biztosan nullázod ennek a témának a kártya-haladását?"
      : state.lang === "es"
        ? "¿Seguro que quieres reiniciar el progreso de tarjetas de este tema?"
        : "Reset this topic’s card progress?";

  if (!window.confirm(confirmText)) return;

  if (!state.progress[topicId]) state.progress[topicId] = {};
  for (const k of Object.keys(state.progress[topicId])) {
    if (k.startsWith("fc_")) delete state.progress[topicId][k];
  }

  save();
  render();
}

function markCardKnown(topicId, cardId) {
  ensureProgress(topicId);
  state.progress[topicId][`fc_${cardId}`] = true;

  const st = ensureCardTrainer(topicId);
  st.revealed = false;

  save();
  render();
}

function markCardUnknown(topicId, cardId) {
  // Does not count progress and does not remove an existing known mark.
  const st = ensureCardTrainer(topicId);
  st.revealed = false;
  render();
}
