// Geography topic G2 — Folyók és árvizek
// Keep HU + EN/ES toggle friendly: every text has hu/es/en.
//
// NOTE: This file is meant to be imported into your main data.js (or collected into DATA.topics).

export const TOPIC_G2 = {
  id: "g2",
  title: {
    hu: "Folyók és árvizek",
    es: "Ríos e inundaciones",
    en: "Rivers and floods",
  },
  subtitle: {
    hu: "Duna–Tisza rendszer, tavak, medencejelleg, árvíztípusok, folyószabályozás, Bős–Nagymaros, vízenergia",
    es: "Sistema Danubio–Tisza, lagos, cuenca, tipos de crecidas, regulación fluvial, Gabčíkovo–Nagymaros, energía hidroeléctrica",
    en: "Danube–Tisza system, lakes, basin character, flood types, river regulation, Gabčíkovo–Nagymaros, hydropower",
  },

  // --- exam-friendly opener (what she says before the topic) ---
  intro: {
    hu:
      "A témám a <strong>folyók és árvizek</strong> Magyarországon. Először elmondom, miért fontos a <strong>Kárpát‑medence medencejellege</strong> (sok folyónk <strong>külföldről érkezik</strong>), majd bemutatom a <strong>Dunát</strong> és a <strong>Tiszát</strong>, néhány <strong>mellékfolyót</strong> és a <strong>tavaink típusait</strong>. Végül beszélek az árvizekről (<strong>jeges ár</strong>, <strong>zöldár</strong>), az <strong>emberi beavatkozásokról</strong> (folyószabályozás, gátak, belvízlevezetés), és röviden a <strong>Bős–Nagymaros</strong> ügyről és a <strong>vízenergia</strong> helyzetéről.",
    es:
      "Mi tema son los ríos y las inundaciones en Hungría. Primero explico por qué es importante el carácter de cuenca de la cuenca de los Cárpatos (muchos ríos llegan del extranjero), luego presento el Danubio y el Tisza, algunos afluentes y los tipos de lagos. Al final hablo de las crecidas (de hielo y “verde”), de las intervenciones humanas (regulación de ríos, diques) y, muy brevemente, del proyecto Gabčíkovo–Nagymaros y de la energía hidroeléctrica.",
    en:
      "My topic is rivers and floods in Hungary. First I explain why the Carpathian Basin’s basin character matters (many rivers arrive from abroad), then I present the Danube and the Tisza, some tributaries and Hungary’s lake types. Finally I talk about flood waves (ice flood, green flood), human interventions (river regulation, levees), and briefly the Gabčíkovo–Nagymaros project and Hungary’s hydropower situation.",
  },

  // --- very short “at-a-glance” bullets (good for quick recall) ---
  summaryBullets: [
    {
      hu: "Magyarország a <strong>Kárpát‑medence</strong> mélyebb részén fekszik: a folyók sokszor <strong>a medence belseje felé</strong> tartanak (medencejelleg).",
      es: "Hungría está en la parte baja de la cuenca de los Cárpatos: los ríos tienden hacia el interior (carácter de cuenca).",
      en: "Hungary lies in the lower Carpathian Basin: rivers often flow toward the basin interior (basin character).",
    },
    {
      hu: "A felszíni vízkészlet nagy része <strong>import</strong>: kb. <strong>90%</strong> a határon túlról érkezik → fontos a <strong>határvíz</strong> és a <strong>vízminőség</strong> (szennyezés is jöhet).",
      es: "Gran parte del agua superficial es “importada” (~90%) → importan los ríos transfronterizos y la calidad del agua.",
      en: "A large share of surface water is “imported” (~90%) → transboundary rivers and water quality matter.",
    },
    {
      hu: "<strong>Duna</strong>: kb. <strong>417 km</strong> Magyarországon; ivó‑ és ipari víz, és szinte egész évben <strong>hajózható</strong>; vízszintje ingadozó.",
      es: "Danubio: ~417 km en Hungría; agua potable e industrial; navegable casi todo el año; nivel variable.",
      en: "Danube: ~417 km in Hungary; drinking/industrial water; navigable almost year‑round; water level fluctuates.",
    },
    {
      hu: "<strong>Tisza</strong>: kb. <strong>596 km</strong> Magyarországon; sok mellékfolyóval; <strong>szélsőséges vízjárás</strong> és jelentős árterek.",
      es: "Tisza: ~596 km en Hungría; muchos afluentes; régimen muy variable y llanuras de inundación importantes.",
      en: "Tisza: ~596 km in Hungary; many tributaries; very variable discharge and notable floodplains.",
    },
    {
      hu: "Két tipikus árhullám: <strong>jeges ár</strong> (tél vége/kora tavasz) és <strong>zöldár</strong> (tavasz vége/nyár eleje).",
      es: "Dos ondas típicas: crecida de hielo (final de invierno) y crecida “verde” (final de primavera).",
      en: "Two typical flood waves: ice flood (late winter/early spring) and green flood (late spring/early summer).",
    },
    {
      hu: "Tavaink típusai: <strong>szerkezeti</strong> (Balaton, Velencei‑tó), <strong>szikes</strong> (Nyíregyházi Sóstó), <strong>forrástó</strong> (Hévízi‑tó), <strong>mesterséges</strong> (halastavak, Feneketlen‑tó), valamint <strong>morotvatavak</strong> (pl. Szelidi‑tó).",
      es: "Tipos de lagos: tectónicos, salinos, de manantial, artificiales y meandros abandonados (oxbow).",
      en: "Lake types: tectonic, saline, spring‑fed, artificial, and oxbow lakes.",
    },
    {
      hu: "Környezeti átalakítások: <strong>folyószabályozás</strong>, <strong>gátépítés</strong>, <strong>belvizek levezetése</strong> → több termőterület és jobb hajózás, de néha nőhet az árvízveszély.",
      es: "Intervenciones: regulación, diques, drenaje de aguas interiores → más tierras y mejor navegación, pero a veces más riesgo.",
      en: "Interventions: regulation, levees, inland‑water drainage → more arable land and navigation, but sometimes higher flood risk.",
    },
    {
      hu: "Vízenergia: <strong>hegyvidéken</strong> kedvezőbb, Magyarországon a folyók <strong>kis esése</strong> miatt korlátozott; ide kapcsolódik a <strong>Bős–Nagymarosi</strong> ügy is.",
      es: "Hidroenergía: mejor en zonas montañosas; en Hungría la pendiente es pequeña; aquí entra el caso Gabčíkovo–Nagymaros.",
      en: "Hydropower: better in mountains; Hungary has low river gradients; linked to the Gabčíkovo–Nagymaros case.",
    },
  ],

  // --- “core” talking points (what she can actually say) ---
  // Keep each line as a full, speakable sentence.
  keyPoints: [
    {
      hu: "1) Magyarország a <strong>Kárpát‑medence</strong> mélyebb részén fekszik, ezért a vizek sokszor <strong>befelé</strong>, a medence belseje felé tartanak (ez a <strong>medencejelleg</strong>).",
      es: "1) Hungría está en la parte baja de la cuenca de los Cárpatos, por eso las aguas tienden a fluir hacia el interior (carácter de cuenca).",
      en: "1) Hungary lies in the lower Carpathian Basin, so waters tend to flow inward (basin character).",
    },
    {
      hu: "A felszíni vizeink jelentős része <strong>határon túlról érkezik</strong> (kb. <strong>90%</strong>), ezért a <strong>határvíz</strong> és a <strong>vízminőség</strong> különösen fontos.",
      es: "Gran parte del agua superficial llega del extranjero (~90%), por eso son importantes los ríos transfronterizos és a vízminőség (szennyezés is jöhet).",
      en: "A large share of surface water arrives from outside (~90%), so transboundary rivers and water quality are crucial.",
    },

    {
      hu: "2) A <strong>Duna</strong> Magyarország egyik fő „vízi tengelye”: a hazai szakasza kb. <strong>417 km</strong>, és általában szinte egész évben <strong>hajózható</strong>.",
      es: "2) El Danubio es un eje fluvial principal: ~417 km en Hungría és suelen ser navegable casi todo el año.",
      en: "2) The Danube is a main river axis: ~417 km in Hungary and usually navigable almost year‑round.",
    },
    {
      hu: "A Duna vize fontos <strong>ivóvízre</strong> és <strong>ipari vízre</strong>, de a <strong>vízszintje ingadozhat</strong>.",
      es: "Su agua es importante para consumo e industria, pero su nivel puede variar.",
      en: "Its water is important for drinking and industry, but water levels can fluctuate.",
    },

    {
      hu: "3) A <strong>Tisza</strong> a Duna legnagyobb magyarországi mellékfolyója: kb. <strong>596 km</strong> van Magyarországon, és a vízjárása gyakran <strong>szélsőséges</strong>.",
      es: "3) El Tisza es el mayor afluente del Danubio en Hungría: ~596 km és un régimen a menudo nagyon változó.",
      en: "3) The Tisza is the largest Danube tributary in Hungary: ~596 km and often a very variable regime.",
    },
    {
      hu: "Fontos mellékfolyók például: <strong>Dráva</strong> (horvát határ), <strong>Rába</strong>, <strong>Ipoly</strong>, <strong>Maros</strong> és <strong>Körös</strong>.",
      es: "Afluentes importantes: Drava (frontera croata), Rába, Ipoly, Maros y Körös.",
      en: "Key tributaries: Dráva (Croatian border), Rába, Ipoly, Maros and Körös.",
    },

    {
      hu: "4) Árvizeknél gyakran <strong>árhullám</strong> vonul le a folyókon; két tipikus típus a <strong>jeges ár</strong> és a <strong>zöldár</strong>.",
      es: "4) En las crecidas, una “onda” baja por el río; dos típicos tipos são a crecida de hielo és a crecida “verde”.",
      en: "4) In floods, a flood wave often travels down rivers; two typical types are ice flood and green flood.",
    },
    {
      hu: "<strong>Jeges ár</strong>: tél végén/kora tavasszal a jég megindulhat és feltorlódhat (jégdugó), így a vízszint hirtelen megemelkedik.",
      es: "Crecida de hielo: a finales de invierno/inicios de primavera el hielo puede atascarse és subir el nivel del agua.",
      en: "Ice flood: in late winter/early spring ice can move, jam, and suddenly raise water levels.",
    },
    {
      hu: "<strong>Zöldár</strong>: tavasz végén/nyár elején a sok csapadék (és néha hóolvadás) miatt alakul ki; ilyenkor a természet „zöld”.",
      es: "Crecida “verde”: a finales de primavera/inicios de verano por lluvias (és a veces deshielo).",
      en: "Green flood: in late spring/early summer due to heavy rainfall (és sometimes snowmelt).",
    },

    {
      hu: "5) Tavaink típusai közül tipikus példák: <strong>szerkezeti</strong> (Balaton, Velencei‑tó), <strong>forrástó</strong> (Hévízi‑tó), <strong>szikes</strong> (Nyíregyházi Sóstó) és <strong>mesterséges</strong> tavak (halastavak, Feneketlen‑tó).",
      es: "5) Tipos de lagos: tectónicos (Balaton, Velence), de manantial (Hévíz), salinos (Sóstó) y artificiales (estanques, Feneketlen‑tó).",
      en: "5) Lake types include tectonic (Balaton, Velence), spring‑fed (Hévíz), saline (Sóstó), and artificial lakes (fish ponds, Feneketlen‑tó).",
    },

    {
      hu: "6) Az <strong>emberi beavatkozások</strong> (folyószabályozás, gátak, csatornák, belvízlevezetés) előnye, hogy több a termőterület és javulhat a hajózás, de egyes helyeken nőhet az <strong>árvízkockázat</strong> is.",
      es: "6) Las intervenciones humanas (regulación, diques, canales, drenaje) aumentan tierras és mejoran navegación, pero pueden elevar el riesgo de inundación en algunos lugares.",
      en: "6) Human interventions (regulation, levees, canals, drainage) can increase arable land and improve navigation, but may raise flood risk in some places.",
    },

    {
      hu: "7) A <strong>vízenergia</strong> hegyvidéken kedvezőbb (nagyobb esés), Magyarországon viszont a folyók <strong>kis esése</strong> miatt a hasznosítás korlátozott.",
      es: "7) La hidroenergía es mejor en montaña (más desnivel), pero en Hungría la pendiente es pequeña és a potenciál korlátozott.",
      en: "7) Hydropower is better in mountains (higher gradients), but Hungary’s low river gradients limit potential.",
    },
    {
      hu: "A <strong>Bős–Nagymaros</strong> ügy: 1977 szerződés → 1989 felfüggesztés → 1992 elterelés (Variant C) → 1997 hágai (ICJ) ítélet; ma is inkább <strong>jogi és környezeti</strong> tanulságként említik.",
      es: "Caso Gabčíkovo–Nagymaros: 1977 tratado → 1989 suspensión → 1992 desvío (Variante C) → 1997 CIJ; se cita como lección legal és ambiental.",
      en: "Gabčíkovo–Nagymaros: 1977 treaty → 1989 suspension → 1992 diversion (Variant C) → 1997 ICJ; often cited for legal/environmental lessons.",
    },
  ],

  // --- extra details (only if she wants to sound “pro”) ---
  extended: [
    {
      hu: "Kapcsolódó fogalom: <strong>belvíz</strong> — amikor sík területen (pl. az Alföldön) a víz nem tud gyorsan elfolyni vagy beszivárogni, és <strong>elönti</strong> a földeket.",
      es: "Concepto relacionado: “belvíz” — agua que se acumula en llanuras és anega campos por drenaje/infiltración lenta.",
      en: "Related concept: “belvíz” — excess inland water on plains that floods fields due to slow drainage/infiltration.",
    },
    {
      hu: "Egy mondatban vízgazdálkodás: a beérkező folyóvizek miatt a vízkészlet sokszor nagy, de a <strong>területi eloszlás</strong> és a <strong>minőség</strong> nem mindig kedvező.",
      es: "Gestión del agua: llega mucha agua por ríos, pero la distribución espacial és la calidad no siempre son favorables.",
      en: "Water management: inflowing rivers bring much water, but spatial distribution and quality can be unfavorable.",
    },
  ],

  // --- flashcards: short Q/A for speaking practice ---
  flashcards: [
    // Keep the old ids (g2c1..g2c5) for backwards compatibility
    {
      id: "g2c1",
      front: { hu: "Mi a jeges ár? (1 mondat)", es: "¿Qué es crecida de hielo?", en: "What is an ice flood? (1 sentence)" },
      back: {
        hu: "Tél végén/kora tavasszal a jég megindulhat, feltorlódhat (jégdugó), és a vízszint hirtelen megemelkedik.",
        es: "Al final del invierno el hielo puede atascarse y subir el nivel del agua de golpe.",
        en: "In late winter/early spring, ice can jam and suddenly raise the water level.",
      },
    },
    {
      id: "g2c2",
      front: { hu: "Mi a zöldár? (1 mondat)", es: "¿Qué es la crecida “verde”?", en: "What is a green flood? (1 sentence)" },
      back: {
        hu: "Tavasz végén/nyár elején a sok csapadék (és hóolvadás) miatt levonuló árhullám; ilyenkor a természet „zöld”.",
        es: "A finales de primavera/inicios de verano por muchas lluvias (y deshielo).",
        en: "A flood wave in late spring/early summer driven by heavy rainfall (and snowmelt); vegetation is “green”.",
      },
    },
    {
      id: "g2c3",
      front: { hu: "Duna — 1 kulcsmondat", es: "Danubio — 1 frase", en: "Danube — 1 key sentence" },
      back: {
        hu: "A Duna Magyarország legfontosabb folyója: kb. 417 km‑en halad át az országon, és Budapestet is érinti.",
        es: "El Danubio es el río más importante; recorre ~417 km en Hungría y pasa por Budapest.",
        en: "The Danube is Hungary’s key river: it runs ~417 km in the country and goes through Budapest.",
      },
    },
    {
      id: "g2c4",
      front: { hu: "Tisza — 1 kulcsmondat", es: "Tisza — 1 frase", en: "Tisza — 1 key sentence" },
      back: {
        hu: "A Tisza a Duna legnagyobb magyarországi mellékfolyója; kb. 596 km‑en van Magyarországon, és vízjárása gyakran szélsőséges.",
        es: "El Tisza es el mayor afluente del Danubio en Hungría (~596 km) con régimen variable.",
        en: "The Tisza is the largest Danube tributary in Hungary (~596 km) and has a very variable regime.",
      },
    },
    {
      id: "g2c5",
      front: { hu: "Mit jelent: medencejelleg?", es: "¿Qué es “carácter de cuenca”?", en: "What does “basin character” mean?" },
      back: {
        hu: "A környező hegységek felől a vizek a medence belseje felé tartanak, ezért sok folyó külföldről érkezik.",
        es: "El agua fluye desde las montañas hacia el centro; muchos ríos vienen del extranjero.",
        en: "Water flows from surrounding mountains toward the center; many rivers arrive from abroad.",
      },
    },

    // extra cards
    {
      id: "g2f6",
      front: { hu: "Mi az a mellékfolyó?", es: "¿Qué es un afluente?", en: "What is a tributary?" },
      back: {
        hu: "Olyan folyó, amely egy nagyobb folyóba torkollik (pl. a Tisza a Dunába).",
        es: "Un río que desemboca en uno mayor (p. ej. el Tisza en el Danubio).",
        en: "A river that flows into a larger river (e.g., the Tisza into the Danube).",
      },
    },
    {
      id: "g2f7",
      front: { hu: "Mit jelent: import felszíni vízkészlet?", es: "¿Qué es agua superficial “importada”?", en: "What is “imported” surface water?" },
      back: {
        hu: "A víz nagy része a határon túlról érkezik a folyókkal, ezért a vízkészlet nem csak a hazai csapadéktól függ.",
        es: "Gran parte llega del extranjero por ríos; no depende solo de la lluvia local.",
        en: "Much of it arrives across the border via rivers; it’s not only from local rainfall.",
      },
    },
    {
      id: "g2f8",
      front: { hu: "Mondj 2 példát szerkezeti mélyedésű tóra!", es: "Da 2 ejemplos de lago tectónico.", en: "Give 2 examples of a tectonic lake." },
      back: {
        hu: "Balaton és Velencei‑tó.",
        es: "Balaton y Velencei‑tó.",
        en: "Lake Balaton and Lake Velence (Velencei‑tó).",
      },
    },
    {
      id: "g2f9",
      front: { hu: "Melyik a forrástó? (példa)", es: "¿Cuál es el lago de manantial? (ejemplo)", en: "Which is a spring‑fed lake? (example)" },
      back: {
        hu: "A Hévízi‑tó forrástó (termálvízzel).",
        es: "El lago Hévíz es de manantial (agua termal).",
        en: "Hévíz Lake is a spring‑fed (thermal) lake.",
      },
    },
    {
      id: "g2f10",
      front: { hu: "Mi a belvíz? (1 mondat)", es: "¿Qué es belvíz?", en: "What is belvíz? (1 sentence)" },
      back: {
        hu: "Sík területen felgyülemlő víz, ami elönti a földeket, mert nem tud gyorsan elfolyni vagy beszivárogni.",
        es: "Agua acumulada en llanuras que anega campos porque no drena/infiltra rápido.",
        en: "Excess water on plains that floods fields because it cannot drain or infiltrate quickly.",
      },
    },
    {
      id: "g2f11",
      front: { hu: "Miért kevésbé kedvező a vízenergia Magyarországon?", es: "¿Por qué es limitada la hidroenergía en Hungría?", en: "Why is hydropower limited in Hungary?" },
      back: {
        hu: "Mert általában <strong>kicsi a folyók esése</strong>, ezért kisebb a hasznosítható energia.",
        es: "Porque la pendiente de los ríos es pequeña.",
        en: "Because river gradients are generally small, limiting usable energy.",
      },
    },
    {
      id: "g2f12",
      front: { hu: "Bős–Nagymaros — 1 mondatban miért érdekes?", es: "Gabčíkovo–Nagymaros — ¿por qué importa?", en: "Gabčíkovo–Nagymaros — why is it notable?" },
      back: {
        hu: "Mert egy nagy Duna‑beruházás volt (árvízvédelem, hajózás, energia), amit Magyarország leállított, Szlovákia pedig más megoldással folytatott, és nemzetközi jogvita lett belőle.",
        es: "Porque fue un gran proyecto del Danubio; Hungría lo paró, Eslovaquia siguió con otra solución y hubo disputa internacional.",
        en: "Because it was a major Danube project; Hungary halted it, Slovakia continued via an alternative, leading to an international dispute.",
      },
    },
  ],

  // --- quiz: use only types supported by your app (keep existing ids) ---
  quiz: [
    {
      id: "g2q1",
      type: "mapfill",
      prompt: {
        hu: "Térkép: nevezd meg a folyókat! (ékezet nélkül is jó)",
        es: "Mapa: nombra los ríos (sin acentos también vale)",
        en: "Map: name the rivers (accents not required)",
      },
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
      note: { hu: "Elfogadott: ékezet nélkül (pl. Koros).", es: "Se acepta sin acentos.", en: "Accents are optional." },
    },
    {
      id: "g2q2",
      type: "mcq",
      prompt: {
        hu: "Melyik a Duna nagy (magyarországi) mellékfolyója?",
        es: "¿Cuál es un gran afluente del Danubio (en Hungría)?",
        en: "Which is a major Danube tributary (in Hungary)?",
      },
      options: [
        { hu: "Tisza", es: "Tisza", en: "Tisza" },
        { hu: "Balaton", es: "Balaton", en: "Lake Balaton" },
        { hu: "Fertő", es: "Fertő", en: "Lake Neusiedl/Fertő" },
        { hu: "Velencei‑tó", es: "Velencei‑tó", en: "Lake Velence" },
      ],
      answerIndex: 0,
    },
    {
      id: "g2q3",
      type: "match",
      prompt: {
        hu: "Párosítsd: árvíztípus → magyarázat",
        es: "Empareja: tipo de crecida → explicación",
        en: "Match: flood type → explanation",
      },
      left: [
        { k: "JE", hu: "Jeges ár", es: "Crecida de hielo", en: "Ice flood" },
        { k: "ZO", hu: "Zöldár", es: "Crecida “verde”", en: "Green flood" },
      ],
      right: [
        { k: "ICE", hu: "Jégdugó, tél vége/kora tavasz", es: "Atasco de hielo, fin de invierno", en: "Ice jam, late winter" },
        { k: "SPR", hu: "Sok eső + (hóolvadás), tavasz vége/nyár eleje", es: "Lluvias + (deshielo), fin de primavera", en: "Rains + (snowmelt), late spring" },
      ],
      pairs: { JE: "ICE", ZO: "SPR" },
    },
    {
      id: "g2q4",
      type: "mcq",
      prompt: {
        hu: "A Dráva leginkább melyik határhoz köthető?",
        es: "¿Con qué frontera se asocia el Drava?",
        en: "Dráva is most associated with which border?",
      },
      options: [
        { hu: "Horvátország", es: "Croacia", en: "Croatia" },
        { hu: "Szlovákia", es: "Eslovaquia", en: "Slovakia" },
        { hu: "Ukrajna", es: "Ucrania", en: "Ukraine" },
        { hu: "Ausztria", es: "Austria", en: "Austria" },
      ],
      answerIndex: 0,
    },

    // --- new questions ---
    {
      id: "g2q5",
      type: "mcq",
      prompt: {
        hu: "Mit jelent a Kárpát‑medence <strong>medencejellege</strong> a folyók szempontjából?",
        es: "¿Qué significa el “carácter de cuenca” para los ríos?",
        en: "What does the basin character mean for rivers?",
      },
      options: [
        { hu: "A folyók kifelé tartanak a medencéből.", es: "Los ríos salen hacia fuera.", en: "Rivers flow outward from the basin." },
        { hu: "A folyók befelé, a medence belseje felé tartanak.", es: "Los ríos tienden hacia el interior.", en: "Rivers tend to flow inward toward the basin." },
        { hu: "Nincsenek folyók, csak tavak.", es: "No hay ríos, solo lagos.", en: "There are no rivers, only lakes." },
        { hu: "A folyók mindig egyenesen folynak.", es: "Siempre van en línea recta.", en: "Rivers always flow straight." },
      ],
      answerIndex: 1,
    },
    {
      id: "g2q6",
      type: "mcq",
      prompt: {
        hu: "Kb. mennyi a Duna magyarországi szakasza?",
        es: "¿Aproximadamente cuánto mide el Danubio en Hungría?",
        en: "About how long is the Danube within Hungary?",
      },
      options: [
        { hu: "417 km", es: "417 km", en: "417 km" },
        { hu: "596 km", es: "596 km", en: "596 km" },
        { hu: "90 km", es: "90 km", en: "90 km" },
        { hu: "1050 km", es: "1050 km", en: "1050 km" },
      ],
      answerIndex: 0,
    },
    {
      id: "g2q7",
      type: "mcq",
      prompt: {
        hu: "Kb. mennyi a Tisza magyarországi szakasza?",
        es: "¿Aproximadamente cuánto mide el Tisza en Hungría?",
        en: "About how long is the Tisza within Hungary?",
      },
      options: [
        { hu: "417 km", es: "417 km", en: "417 km" },
        { hu: "596 km", es: "596 km", en: "596 km" },
        { hu: "200 km", es: "200 km", en: "200 km" },
        { hu: "24 km", es: "24 km", en: "24 km" },
      ],
      answerIndex: 1,
    },
    {
      id: "g2q8",
      type: "match",
      prompt: {
        hu: "Párosítsd: tó típusa → példa",
        es: "Empareja: tipo de lago → ejemplo",
        en: "Match: lake type → example",
      },
      left: [
        { k: "TEK", hu: "Szerkezeti mélyedésű tó", es: "Lago tectónico", en: "Tectonic lake" },
        { k: "SZI", hu: "Szikes tó", es: "Lago salino", en: "Saline lake" },
        { k: "FOR", hu: "Forrástó", es: "Lago de manantial", en: "Spring‑fed lake" },
        { k: "MES", hu: "Mesterséges tó", es: "Lago artificial", en: "Artificial lake" },
      ],
      right: [
        { k: "BAL", hu: "Balaton / Velencei‑tó", es: "Balaton / Velence", en: "Balaton / Velence" },
        { k: "SOS", hu: "Nyíregyházi Sóstó", es: "Sóstó (Nyíregyháza)", en: "Sóstó (Nyíregyháza)" },
        { k: "HEV", hu: "Hévízi‑tó", es: "Hévíz", en: "Hévíz Lake" },
        { k: "FEN", hu: "Halastó / Feneketlen‑tó", es: "Estanque / Feneketlen‑tó", en: "Fish pond / Feneketlen‑tó" },
      ],
      pairs: { TEK: "BAL", SZI: "SOS", FOR: "HEV", MES: "FEN" },
    },
    {
      id: "g2q9",
      type: "order",
      prompt: {
        hu: "Tedd időrendbe a Bős–Nagymaros ügy fő állomásait!",
        es: "Ordena los hitos principales del caso Gabčíkovo–Nagymaros.",
        en: "Put the main milestones of the Gabčíkovo–Nagymaros case in order.",
      },
      items: [
        { k: "T1977", hu: "1977 — államközi szerződés a vízlépcsőrendszerről", es: "1977 — tratado", en: "1977 — treaty" },
        { k: "H1989", hu: "1989 — Magyarország felfüggeszti a munkát", es: "1989 — Hungría suspende", en: "1989 — Hungary suspends work" },
        { k: "S1992", hu: "1992 — a Duna vizének nagy részét elterelik a szlovák csatornába (Variant C)", es: "1992 — desvío (Variante C)", en: "1992 — diversion (Variant C)" },
        { k: "I1997", hu: "1997 — hágai (ICJ) ítélet", es: "1997 — sentencia de la CIJ", en: "1997 — ICJ judgment" },
      ],
      correctOrder: ["T1977", "H1989", "S1992", "I1997"],
      explanation: {
        hu: "Elég ennyit tudni: 1977 szerződés → 1989 leállítás → 1992 elterelés → 1997 hágai ítélet.",
        es: "Basta con esto: 1977 tratado → 1989 suspensión → 1992 desvío → 1997 sentencia.",
        en: "This is enough: 1977 treaty → 1989 suspension → 1992 diversion → 1997 ICJ judgment.",
      },
    },
    {
      id: "g2q10",
      type: "mcq",
      prompt: {
        hu: "Mi a fő oka annak, hogy Magyarországon a vízenergia szerepe korlátozott?",
        es: "¿Cuál es la razón principal de que la hidroenergía sea limitada en Hungría?",
        en: "What is the main reason hydropower is limited in Hungary?",
      },
      options: [
        { hu: "Kicsi a folyók esése (kis lejtés).", es: "La pendiente es pequeña.", en: "River gradients are small." },
        { hu: "Túl sok a vízesés.", es: "Hay demasiadas cascadas.", en: "There are too many waterfalls." },
        { hu: "Mindig befagy minden folyó.", es: "Siempre se congelan los ríos.", en: "All rivers are always frozen." },
        { hu: "Nincs csapadék Magyarországon.", es: "No llueve en Hungría.", en: "There is no precipitation in Hungary." },
      ],
      answerIndex: 0,
    },
  ],
};
