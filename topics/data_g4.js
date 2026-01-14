export const TOPIC_G4 = {
  id: "g4",
    title: { hu: "[Under Construction] Tájak és tájbeosztás", es: "[Under Construction] Paisajes y clasificación", en: "[Under Construction] Landscapes and classification" },
  subtitle: { hu: "domborzat–éghajlat–növényzet; nagytáj/középtáj/kistáj; síkság típusai", es: "relieve–clima–vegetación", en: "relief–climate–vegetation; hierarchy" },

  intro: {
    hu: "A témám a tájak és tájbeosztás: röviden bemutatom, hogyan jellemzünk egy tájat, és milyen a nagytáj–középtáj–kistáj felosztás, egyszerű példákkal.",
    es: "Mi tema es la clasificación de paisajes: explico cómo se describe un paisaje y la jerarquía (gran región–región media–microregión) con ejemplos sencillos.",
    en: "My topic is landscapes and their classification: I briefly explain how landscapes are described and the hierarchy (large–medium–small regions) with simple examples.",
  },

  summaryBullets: [
    { hu: "A témám a tájak: elmondom, hogyan lehet egy tájat jellemezni (domborzat, éghajlat, növényzet).", es: "Tema: paisajes…", en: "Topic: landscapes…" },
    { hu: "Utána bemutatom a beosztást: nagytáj → középtáj → kistáj, példákkal.", es: "Jerarquía con ejemplos.", en: "Hierarchy with examples." },
    { hu: "Végül a síkság típusairól beszélek (alföld 0–200 m, fennsík 200 m felett).", es: "Tipos de llanura.", en: "Plain types." },
  ],

  keyPoints: [
    { hu: "domborzat" },
    { hu: "éghajlat" },
    { hu: "növényzet" },
    { hu: "nagytáj" },
    { hu: "középtáj" },
    { hu: "kistáj" },
    { hu: "Alföld (0–200 m)" },
    { hu: "fennsík (200 m felett)" },
  ],

  flashcards: [
    { id: "g4c1", front: { hu: "Táj jellemzése: 3 alap" }, back: { hu: "Domborzat + éghajlat + növényzet (és sokszor a társadalom/gazdaság is)." } },
    { id: "g4c2", front: { hu: "Nagytáj – középtáj – kistáj" }, back: { hu: "Hierarchia: a nagytáj a legnagyobb egység, a kistáj a legkisebb." } },
    { id: "g4c3", front: { hu: "Példák a tananyagból" }, back: { hu: "Nagytáj: Alföld. Középtáj: Duna menti síkság. Kistáj: Váci–Pesti-Duna-völgy." } },
    { id: "g4c4", front: { hu: "Síkság (magasság szerint)" }, back: { hu: "Alföld: 0–200 m. Fennsík: 200 m felett." } },
    { id: "g4c5", front: { hu: "Bevezető (szóbelihez)" }, back: { hu: "A témám a tájak és tájbeosztás: először a táj jellemzéséről beszélek, utána a nagytáj–középtáj–kistáj rendszerről, példákkal." } },
  ],

  quiz: [
    {
      id: "g4q1",
      type: "order",
      prompt: { hu: "Rendezd sorba nagyobbtól a kisebbig!", es: "Ordena de mayor a menor", en: "Order from largest to smallest" },
      items: [{ hu: "kistáj" }, { hu: "nagytáj" }, { hu: "középtáj" }],
      answerOrder: [1, 2, 0],
    },
    {
      id: "g4q2",
      type: "match",
      prompt: { hu: "Párosítsd: szint → példa", es: "Empareja: nivel → ejemplo", en: "Match: level → example" },
      left: [
        { k: "N", hu: "Nagytáj" },
        { k: "KZ", hu: "Középtáj" },
        { k: "KI", hu: "Kistáj" },
      ],
      right: [
        { k: "AL", hu: "Alföld" },
        { k: "DM", hu: "Duna menti síkság" },
        { k: "VP", hu: "Váci–Pesti-Duna-völgy" },
      ],
      pairs: { N: "AL", KZ: "DM", KI: "VP" },
    },
    {
      id: "g4q3",
      type: "mcq",
      prompt: { hu: "Melyik magassági sáv az Alföld (a tananyag szerint)?", es: "¿Qué altura tiene la llanura?", en: "Which height band is the Great Plain (per the material)?" },
      options: [{ hu: "0–200 m" }, { hu: "200–500 m" }, { hu: "500–1000 m" }, { hu: ">1000 m" }],
      answerIndex: 0,
    },
    {
      id: "g4q4",
      type: "mcq",
      prompt: { hu: "Melyik NEM tartozik a táj alap-jellemzői közé?", es: "¿Cuál NO es básico?", en: "Which is NOT a basic landscape factor?" },
      options: [{ hu: "Domborzat" }, { hu: "Éghajlat" }, { hu: "Növényzet" }, { hu: "Értekezés (irodalmi műfaj)" }],
      answerIndex: 3,
    },
  ],
};