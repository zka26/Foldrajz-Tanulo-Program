export const TOPIC_G3 = {
  id: "g3",
    title: { hu: "[Under Construction] Mezőgazdaság", es: "[Under Construction] Agricultura", en: "[Under Construction] Agriculture" },
  subtitle: { hu: "sok szántó, fontos növények, kevés csapadék → öntözés", es: "mucha tierra arable", en: "arable land, crops, irrigation" },

  intro: {
    hu: "A témám a mezőgazdaság: röviden elmondom, miért kedvezőek a síkságok és a szántóföldek, milyen fő növényeket termesztenek, és miért lehet fontos az öntözés.",
    es: "Mi tema es la agricultura: explico brevemente por qué las llanuras favorecen el cultivo, qué cultivos principales hay és por qué puede ser importante el riego.",
    en: "My topic is agriculture: I briefly explain why plains and arable land matter, main crops, and why irrigation can be important.",
  },

  summaryBullets: [
    { hu: "A témám a mezőgazdaság: elmondom, miért fontos a sok síkság és a jó termőföld.", es: "Tema: agricultura…", en: "Topic: agriculture…" },
    { hu: "Felsorolok néhány fő növényt (búza, kukorica), és megemlítem, hogy az Alföldön gyakran kevés a csapadék.", es: "Cultivos: trigo, maíz…", en: "Crops: wheat, maize…" },
  ],

  keyPoints: [
    { hu: "szántóföld" },
    { hu: "búza" },
    { hu: "kukorica" },
    { hu: "napraforgó" },
    { hu: "öntözés" },
    { hu: "Alföld" },
  ],

  flashcards: [
    {
      id: "g3c1",
      front: { hu: "Miért erős a mezőgazdaság?" },
      back: { hu: "Sok a sík terület és a szántóföld, több helyen jó a talaj, ezért nagy a termelés." },
    },
    {
      id: "g3c2",
      front: { hu: "Fő növények (példák)" },
      back: { hu: "Búza, kukorica, napraforgó (és sok helyen zöldség/gyümölcs is)." },
    },
    {
      id: "g3c3",
      front: { hu: "Alföld – csapadék" },
      back: { hu: "Az Alföldön gyakran kevesebb a csapadék, ezért az öntözés fontos lehet." },
    },
    {
      id: "g3c4",
      front: { hu: "Bevezető (szóbelihez)" },
      back: { hu: "A témám a mezőgazdaság: először a szántóföldekről beszélek, utána a fő növényekről és a csapadék/öntözés kérdéséről." },
    },
  ],

  quiz: [
    {
      id: "g3q1",
      type: "mcq",
      prompt: { hu: "Melyik párosítás illik legjobban az Alföldhöz?", es: "¿Qué combina mejor con la Gran Llanura?", en: "Which fits the Great Plain best?" },
      options: [
        { hu: "Sok szántó + gabona (pl. búza, kukorica)" },
        { hu: "Magashegység + gleccserek" },
        { hu: "Fjordok és tengerpart" },
        { hu: "Trópusi esőerdő" },
      ],
      answerIndex: 0,
    },
    {
      id: "g3q2",
      type: "mcq",
      prompt: { hu: "Miért lehet fontos az öntözés?", es: "¿Por qué es importante el riego?", en: "Why can irrigation be important?" },
      options: [
        { hu: "Mert egyes területeken kevés a csapadék és ingadozó." },
        { hu: "Mert Magyarországon mindig túl sok az eső." },
        { hu: "Mert nincsenek folyók." },
        { hu: "Mert nincs szántóföld." },
      ],
      answerIndex: 0,
    },
    {
      id: "g3q3",
      type: "match",
      prompt: { hu: "Párosítsd: fogalom → magyarázat", es: "Empareja: término → explicación", en: "Match: term → explanation" },
      left: [
        { k: "SZ", hu: "Szántóföld" },
        { k: "ON", hu: "Öntözés" },
      ],
      right: [
        { k: "AR", hu: "Művelt terület, ahol növényeket termesztenek" },
        { k: "WI", hu: "Víz pótlása mesterségesen, ha kevés a csapadék" },
      ],
      pairs: { SZ: "AR", ON: "WI" },
    },
  ],
};