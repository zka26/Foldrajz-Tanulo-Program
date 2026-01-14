export const TOPIC_G2 = {
  id: "g2",
    title: { hu: "[Under Construction] Folyók és árvizek", es: "[Under Construction] Ríos e inundaciones", en: "[Under Construction] Rivers and floods" },
  subtitle: { hu: "Duna–Tisza rendszer, mellékfolyók, jeges ár / zöldár", es: "Danubio–Tisza, afluentes", en: "Danube–Tisza system, tributaries" },

  intro: {
    hu: "A témám a folyók és az árvizek: bemutatom a Dunát és a Tiszát, néhány fontos mellékfolyót, és röviden elmagyarázom a jeges árat és a zöldárat.",
    es: "Mi tema son los ríos y las crecidas: presento el Danubio és el Tisza, alguns afluentes importants i explico breument els tipus de crecida.",
    en: "My topic is rivers and floods: I introduce the Danube and Tisza, key tributaries, and briefly explain ice floods and green floods.",
  },

  summaryBullets: [
    { hu: "A témám a magyar folyók: a Dunáról és a Tiszáról beszélek, majd néhány fontos mellékfolyóról.", es: "Tema: ríos…", en: "Topic: rivers…" },
    { hu: "Kiemelek két árvíztípust: jeges ár és zöldár, és röviden elmagyarázom.", es: "Explico 'hielo' y 'verde'.", en: "I explain ice flood and green flood." },
  ],

  keyPoints: [
    { hu: "Duna", en: "Danube" },
    { hu: "Tisza" },
    { hu: "Dráva" },
    { hu: "Rába" },
    { hu: "Maros" },
    { hu: "jeges ár" },
    { hu: "zöldár" },
  ],

  extended: [
    { hu: "A Duna a legfontosabb vízi tengely: több nagy város is mellette fekszik (pl. Budapest).", es: "El Danubio es el eje principal.", en: "The Danube is the main water axis (e.g., Budapest)." },
    { hu: "A Tisza a Duna legnagyobb magyarországi mellékfolyója; kanyarulatos, árterei jelentősek.", es: "El Tisza es gran afluente.", en: "The Tisza is the largest Danube tributary in Hungary; meandering, floodplains." },
  ],

  flashcards: [
    {
      id: "g2c1",
      front: { hu: "Jeges ár (1 mondat)", es: "Crecida de hielo", en: "Ice flood" },
      back: {
        hu: "Tél végén/kora tavasszal jön, amikor a jég megindul, feltorlódik (jégdugó), és a víz hirtelen megemelkedik.",
        es: "Al final del invierno: tapones de hielo suben el nivel.",
        en: "Late winter/early spring: ice jams can raise water level suddenly.",
      },
    },
    {
      id: "g2c2",
      front: { hu: "Zöldár (1 mondat)", es: "Crecida verde", en: "Green flood" },
      back: {
        hu: "Tavasszal/koranyáron gyakori, főleg hóolvadás + esők miatt; a természet „zöld”, ezért a neve.",
        es: "Primavera: deshielo + lluvias.",
        en: "Spring/early summer, driven by snowmelt + rains; called ‘green’ because vegetation is green.",
      },
    },
    {
      id: "g2c3",
      front: { hu: "Duna (kulcsmondat)", es: "Danubio", en: "Danube" },
      back: {
        hu: "A Duna Magyarország legfontosabb folyója, nyugat–délkeleti irányban is áthalad, és Budapestet is érinti.",
        es: "Río principal; pasa por Budapest.",
        en: "Hungary’s key river; it runs through (including Budapest).",
      },
    },
    {
      id: "g2c4",
      front: { hu: "Tisza (kulcsmondat)", es: "Tisza", en: "Tisza" },
      back: {
        hu: "A Tisza a Duna nagy mellékfolyója; a keleti országrész vízrendszerének fő eleme.",
        es: "Gran afluente del Danubio en el este.",
        en: "Major Danube tributary; key in eastern Hungary.",
      },
    },
    {
      id: "g2c5",
      front: { hu: "Bevezető (szóbelihez)", es: "Inicio", en: "Intro" },
      back: {
        hu: "A témám a folyók és az árvizek: először a Dunát és a Tiszát mutatom be, aztán a jeges árat és a zöldárat magyarázom el.",
        es: "Mi tema… primero… luego…",
        en: "My topic is rivers and floods: first Danube and Tisza, then flood types.",
      },
    },
  ],

  quiz: [
    {
      id: "g2q1",
      type: "mapfill",
      prompt: { hu: "Térkép: nevezd meg a folyókat! (ékezet nélkül is jó)", es: "Mapa: nombra los ríos", en: "Map: name the rivers" },
      image: "assets/maps/hungary_rivers_numbered.svg",
      items: [
        { key: "1", label: "1", answers: ["Duna", "Danube"] },
        { key: "2", label: "2", answers: ["Tisza", "Tisa"] },
        { key: "3", label: "3", answers: ["Dráva", "Drava"] },
        { key: "4", label: "4", answers: ["Rába", "Raba"] },
        { key: "5", label: "5", answers: ["Ipoly", "Ipel"] },
        { key: "6", label: "6", answers: ["Maros", "Mures", "Mureș"] },
        { key: "7", label: "7", answers: ["Körös", "Koros"] },
      ],
      note: { hu: "Elfogadott: ékezet nélkül (pl. Koros)." },
    },
    {
      id: "g2q2",
      type: "mcq",
      prompt: { hu: "Melyik a Duna nagy (magyarországi) mellékfolyója?", es: "¿Cuál es un gran afluente del Danubio?", en: "Which is a major Danube tributary (in Hungary)?" },
      options: [{ hu: "Tisza" }, { hu: "Balaton" }, { hu: "Fertő" }, { hu: "Velencei-tó" }],
      answerIndex: 0,
    },
    {
      id: "g2q3",
      type: "match",
      prompt: { hu: "Párosítsd: árvíztípus → magyarázat", es: "Empareja: tipo → explicación", en: "Match: flood type → explanation" },
      left: [
        { k: "JE", hu: "Jeges ár" },
        { k: "ZO", hu: "Zöldár" },
      ],
      right: [
        { k: "ICE", hu: "Jégdugó, tél vége/kora tavasz" },
        { k: "SPR", hu: "Hóolvadás + tavaszi esők" },
      ],
      pairs: { JE: "ICE", ZO: "SPR" },
    },
    {
      id: "g2q4",
      type: "mcq",
      prompt: { hu: "A Dráva leginkább melyik határhoz köthető?", es: "¿Con qué frontera se asocia el Drava?", en: "Dráva is most associated with which border?" },
      options: [{ hu: "Horvátország" }, { hu: "Szlovákia" }, { hu: "Ukrajna" }, { hu: "Ausztria" }],
      answerIndex: 0,
    },
  ],
};