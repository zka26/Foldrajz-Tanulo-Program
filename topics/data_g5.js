// Geography topic G5 — Településföldrajz (settlement geography)
// Keep HU + ES/EN toggle friendly: every text has hu/es/en.
// Types used in quiz: mcq, match, order (same schema as data_g1.js)

export const TOPIC_G5 = {
  id: "g5",
  title: {
    hu: "Településföldrajz",
    es: "Geografía de los asentamientos",
    en: "Settlement geography",
  },
  subtitle: {
    hu: "településtípusok; falu és város; alaprajz; funkciók; urbanizáció; Budapest és agglomeráció; zártkertek",
    es: "tipos; pueblo y ciudad; plano; funciones; urbanización; Budapest y aglomeración; huertos cerrados",
    en: "types; village and city; layout; functions; urbanization; Budapest and agglomeration; closed gardens",
  },

  // --- exam-friendly opener (what she says before the topic) ---
  intro: {
    hu:
      "A témám a <strong>településföldrajz</strong>. Először bemutatom a <strong>települések típusait</strong> (ideiglenes, időszakos, állandó), majd beszélek a <strong>falvakról</strong> és a <strong>városokról</strong>: hogyan alakulnak ki, milyen <strong>alaprajzuk</strong> és <strong>funkciójuk</strong> lehet. Ezután röviden elmagyarázom az <strong>urbanizáció</strong> és a kapcsolódó folyamatok (szuburbanizáció, dezurbanizáció, reurbanizáció) lényegét. Végül példaként említem <strong>Budapestet</strong>, az <strong>agglomerációt</strong>, és pár speciális témát, például a <strong>gyógyturizmust</strong> és a <strong>zártkerteket</strong>.",
    es:
      "Mi tema es la geografía de los asentamientos. Primero explico tipos de asentamientos (temporales, estacionales y permanentes), luego hablo de pueblos y ciudades: cómo se forman, su plano y sus funciones. Después explico urbanización y procesos relacionados (suburbanización, desurbanización, reurbanización). Al final menciono Budapest y su aglomeración, y temas especiales como el turismo de salud y los “zártkertek”.",
    en:
      "My topic is settlement geography. First I explain settlement types (temporary, seasonal, permanent), then I talk about villages and cities: how they form, their layout and functions. After that I explain urbanization and related processes (suburbanization, de-urbanization, re-urbanization). Finally I mention Budapest and its agglomeration, and special topics such as health tourism and ‘zártkertek’.",
  },

  // --- very short “at-a-glance” bullets ---
  summaryBullets: [
    {
      hu: "Települések: lehetnek <strong>ideiglenesek</strong>, <strong>időszakosak</strong> vagy <strong>állandók</strong>.",
      es: "Asentamientos: pueden ser temporales, estacionales o permanentes.",
      en: "Settlements can be temporary, seasonal, or permanent.",
    },
    {
      hu: "Állandó települések: <strong>falvak</strong> és <strong>városok</strong> (más funkciókkal).",
      es: "Permanentes: pueblos y ciudades (con funciones diferentes).",
      en: "Permanent: villages and towns/cities (with different functions).",
    },
    {
      hu: "Falvak méret szerint: <strong>törpe</strong>, <strong>kis</strong>, <strong>nagy</strong>, <strong>óriás</strong> falu.",
      es: "Pueblos por tamaño: muy pequeño, pequeño, grande, muy grande.",
      en: "Villages by size: tiny, small, large, very large.",
    },
    {
      hu: "Falvak alaprajz szerint: pl. <strong>halmazfalu</strong>, <strong>útifalu</strong>, <strong>körfalu</strong>, <strong>sakktábla</strong>.",
      es: "Plano: por ejemplo aldea agrupada, aldea lineal, circular, en cuadrícula.",
      en: "Layout: clustered, linear, circular, grid-like, etc.",
    },
    {
      hu: "Városokban sok <strong>munkahely</strong> és <strong>szolgáltatás</strong> van (oktatás, kultúra, egészségügy).",
      es: "En la ciudad hay más empleo y servicios (educación, cultura, salud).",
      en: "Cities have more jobs and services (education, culture, healthcare).",
    },
    {
      hu: "<strong>Urbanizáció</strong>: mérhető jelenség, a városokban élők aránya nő (és a városok terjeszkednek).",
      es: "Urbanización: aumenta la proporción de población urbana (y crece la ciudad).",
      en: "Urbanization: the share of urban population grows (and cities expand).",
    },
    {
      hu: "<strong>Budapest</strong> a főváros: <strong>23 kerület</strong>, és sokan ingáznak az <strong>agglomerációból</strong>.",
      es: "Budapest es la capital: 23 distritos, y mucha gente viaja desde la aglomeración.",
      en: "Budapest is the capital: 23 districts, many commute from the agglomeration.",
    },
    {
      hu: "A <strong>gyógyturizmus</strong> (health tourism) gyakran anyagi megtakarítás miatt fontos.",
      es: "El turismo de salud a menudo existe por ahorro de dinero.",
      en: "Health/medical tourism is often driven by cost savings.",
    },
  ],

  // --- “core” talking points (full, speakable sentences) ---
  keyPoints: [
    {
      hu: "1) A település olyan hely, ahol az emberek <strong>laknak</strong> és <strong>dolgoznak</strong>, és van valamilyen <strong>infrastruktúra</strong> (út, víz, áram).",
      es: "1) Un asentamiento es un lugar donde la gente vive y trabaja, con infraestructura (carreteras, agua, electricidad).",
      en: "1) A settlement is where people live and work, with infrastructure (roads, water, electricity).",
    },
    {
      hu: "2) Települések lehetnek <strong>ideiglenesen lakottak</strong> (csak rövid időre) vagy <strong>időszakosan lakottak</strong> (például csak nyáron).",
      es: "2) Pueden ser temporales (poco tiempo) o estacionales (por ejemplo solo en verano).",
      en: "2) They can be temporary (short time) or seasonal (e.g., only in summer).",
    },
    {
      hu: "3) Az <strong>állandó települések</strong> fő típusai a <strong>falu</strong> és a <strong>város</strong>.",
      es: "3) Los permanentes principales son el pueblo y la ciudad.",
      en: "3) The main permanent types are village and city.",
    },

    {
      hu: "4) A falvak gyakran a <strong>mezőgazdasághoz</strong> kötődnek, és általában kevesebb a szolgáltatás, mint a városban.",
      es: "4) Los pueblos suelen estar ligados a la agricultura y tienen menos servicios que una ciudad.",
      en: "4) Villages are often linked to agriculture and have fewer services than cities.",
    },
    {
      hu: "5) Méret szerint beszélhetünk <strong>törpe</strong>, <strong>kis</strong>, <strong>nagy</strong> és <strong>óriás</strong> faluról (a tananyag szavaival).",
      es: "5) Por tamaño: muy pequeño, pequeño, grande y muy grande (según el tema).",
      en: "5) By size: tiny, small, large and very large villages (as in the class terms).",
    },
    {
      hu: "6) Alaprajz szerint például van <strong>halmazfalu</strong> (inkább szabálytalan), <strong>útifalu</strong> (hosszú utca mentén), <strong>körfalu</strong> és <strong>sakktábla alaprajzú</strong> falu.",
      es: "6) Por plano: aldea agrupada (más irregular), lineal (a lo largo de una calle), circular, y en cuadrícula.",
      en: "6) By layout: clustered (often irregular), linear (along a road), circular, and grid-like villages.",
    },
    {
      hu: "7) A <strong>szalagtelkes</strong> faluban a telkek hosszúak és keskenyek; ilyen például az <strong>útifalu</strong>, és az <strong>orsós utcájú</strong> falu (ahol a főutca közepe kiszélesedik).",
      es: "7) En el pueblo de parcelas en tira, los lotes son largos y estrechos; puede ser lineal o con calle en huso.",
      en: "7) In strip-plot villages, plots are long and narrow; it can be linear or spindle-shaped street type.",
    },
    {
      hu: "8) A falvak lehetnek funkció szerint is különbözők: például <strong>mezőgazdasági</strong>, <strong>turisztikai</strong> vagy <strong>ipari</strong> jellegűek.",
      es: "8) Por función pueden ser agrícolas, turísticas o industriales.",
      en: "8) By function they can be agricultural, touristic or industrial.",
    },

    {
      hu: "9) A városok kialakulásában fontos a <strong>telepítő ok</strong>: például folyó, útkereszteződés, kereskedelem, ipar vagy bányászat.",
      es: "9) En el origen de una ciudad importa la razón: río, cruce de caminos, comercio, industria o minería.",
      en: "9) City formation depends on a founding reason: river, crossroads, trade, industry, or mining.",
    },
    {
      hu: "10) A városoknak sok <strong>alapfunkciójuk</strong> van: munkahelyek, közigazgatás, oktatás, kultúra, egészségügy, szolgáltatások (pl. mozi, színház).",
      es: "10) Funciones básicas: empleo, administración, educación, cultura, salud y servicios (cine, teatro).",
      en: "10) Basic functions: jobs, administration, education, culture, healthcare, services (cinema, theatre).",
    },
    {
      hu: "11) Gazdasági jelleg szerint lehet <strong>mezőgazdasági település</strong>, <strong>ipari község</strong> vagy <strong>szolgáltató</strong> jellegű város.",
      es: "11) Por carácter económico: agrícola, industrial o de servicios.",
      en: "11) By economic character: agricultural, industrial, or service-oriented.",
    },
    {
      hu: "12) Az <strong>urbanizáció</strong> statisztikailag mérhető: megnézzük, a lakosság hány százaléka él városokban.",
      es: "12) La urbanización se puede medir: qué porcentaje vive en ciudades.",
      en: "12) Urbanization can be measured statistically: what percent lives in cities.",
    },
    {
      hu: "13) Kapcsolódó folyamatok: <strong>szuburbanizáció</strong> (kiköltözés a város környékére), <strong>dezurbanizáció</strong> (kiköltözés távolabb), <strong>reurbanizáció</strong> (visszaköltözés a belső városrészekbe).",
      es: "13) Procesos: suburbanización (a la periferia), desurbanización (más lejos), reurbanización (volver al centro).",
      en: "13) Processes: suburbanization (to suburbs), de-urbanization (further out), re-urbanization (back to inner city).",
    },

    {
      hu: "14) Budapest a főváros: <strong>Buda</strong>, <strong>Pest</strong> és <strong>Óbuda</strong> 1873-ban egyesült, ma <strong>23 kerület</strong> van.",
      es: "14) Budapest es la capital: Buda, Pest y Óbuda se unieron en 1873; hoy hay 23 distritos.",
      en: "14) Budapest is the capital: Buda, Pest and Óbuda unified in 1873; today there are 23 districts.",
    },
    {
      hu: "15) Sok ember ingázik az <strong>agglomerációból</strong> Budapest felé (pl. Budaörs, Érd). Zolka szerint még Székesfehérvárról is, de ezt a tanárnak nem kell mondani.",
      es: "15) Mucha gente viaja desde la aglomeración hacia Budapest (p. ej. Budaörs, Érd).",
      en: "15) Many people commute from the agglomeration to Budapest (e.g., Budaörs, Érd).",
    },
    {
      hu: "16) A <strong>vízfej</strong> jelenség azt jelenti, hogy a főváros túl erős: sok a munka, a szolgáltatás és az infrastruktúra, ezért oda vonz mindent.",
      es: "16) El “efecto cabeza” significa que la capital es demasiado dominante y atrae recursos y gente.",
      en: "16) The ‘primate city’ effect means the capital is overly dominant and attracts people and resources.",
    },
    {
      hu: "17) A városokban fontos lehet a <strong>barnamezős beruházás</strong>: régi ipari területek megújítása új funkcióval.",
      es: "17) También hay inversiones en zonas marrones: renovar antiguas áreas industriales con una nueva función.",
      en: "17) Brownfield investment: renewing old industrial sites for new uses.",
    },

    {
      hu: "18) A <strong>gyógyturizmus</strong> vagy <strong>egészségturizmus</strong> az, amikor valaki más országba utazik orvosi kezelésért; gyakori indok az <strong>anyagi megtakarítás</strong>.",
      es: "18) Turismo médico/salud: viajar a otro país para tratamiento; motivo común: ahorro de dinero.",
      en: "18) Medical/health tourism: travelling to another country for care; a common reason is saving money.",
    },
    {
      hu: "19) Vidékfejlesztésnél fontos lehet az állami, regionális és helyi cél: utak, munkahelyek, szolgáltatások, és sokszor <strong>EU‑támogatások</strong> is segítenek.",
      es: "19) Desarrollo rural: objetivos estatales, regionales y locales; carreteras, empleo, servicios; a veces ayudan fondos de la UE.",
      en: "19) Rural development: state, regional and local goals; roads, jobs, services; EU funds can help.",
    },
    {
      hu: "20) A helyi <strong>építési szabályzat</strong> (jogszabályok) néha lassítja a fejlesztést, de a cél a rend és a környezet védelme is.",
      es: "20) Las normas de construcción locales a veces dificultan, pero también protegen el orden y el entorno.",
      en: "20) Local building rules can slow development, but they also protect order and the environment.",
    },
    {
      hu: "21) A <strong>zártkertek</strong> gyakran a települések szélén lévő kiskertes területek: régen sokszor művelésre használták, ma néha hétvégi ház is van.",
      es: "21) Los ‘zártkertek’ son zonas de pequeñas parcelas cerca del pueblo/ciudad; antes para cultivo, hoy a veces con casitas.",
      en: "21) ‘Zártkertek’ are small-plot garden areas on the edge of settlements; once mainly for farming, sometimes used for weekend houses today.",
    },
  ],

  // --- extra details (only if she wants to sound “pro”) ---
  extended: [
    {
      hu: "Az <strong>állandó települések</strong> hálózata Magyarországon sűrű, és a lakosság nagy része <strong>városokban</strong> él.",
      es: "En Hungría la red de asentamientos permanentes es densa y gran parte vive en ciudades.",
      en: "Hungary has a dense settlement network and a large share lives in towns and cities.",
    },
    {
      hu: "Budapest területe kb. <strong>525 km²</strong>, és a város közigazgatásilag <strong>23 kerületre</strong> oszlik. Az agglomerációval együtt a térség az ország gazdaságának nagyon nagy részét adja.",
      es: "Budapest tiene aprox. 525 km² y se divide en 23 distritos. Con su aglomeración es un gran motor económico.",
      en: "Budapest is about 525 km² and is divided into 23 districts. With its agglomeration it is a major economic engine.",
    },
    {
      hu: "Az urbanizáció nemcsak növekedés: néha a középosztály kiköltözik a peremre (<strong>szuburbanizáció</strong>), majd a belváros később megújulhat (<strong>reurbanizáció</strong>).",
      es: "Urbanización no es solo crecimiento: puede haber salida al suburbio y luego renovación del centro.",
      en: "Urbanization is not only growth: there can be suburban out-migration and later inner-city renewal.",
    },
    {
      hu: "A gyógyturizmusnál fontos, hogy a beteg jól tájékozódjon (minőség, nyelv, utógondozás), mert kezelésről van szó.",
      es: "En turismo médico es importante informarse bien (calidad, idioma, seguimiento).",
      en: "In medical tourism, good information matters (quality, language, follow-up care).",
    },
  ],

  // --- flashcards: short Q/A for speaking practice ---
  flashcards: [
    {
      id: "g5c1",
      front: { hu: "Milyen településtípusok vannak (lakottság szerint)?", es: "Tipos según ocupación", en: "Types by occupancy" },
      back: {
        hu: "Ideiglenesen lakott, időszakosan lakott, állandó település.",
        es: "Temporal, estacional, permanente.",
        en: "Temporary, seasonal, permanent.",
      },
    },
    {
      id: "g5c2",
      front: { hu: "Mi a különbség az ideiglenes és az időszakos település között?", es: "Temporal vs estacional", en: "Temporary vs seasonal" },
      back: {
        hu: "Ideiglenes: rövid időre lakják. Időszakos: rendszeresen, de csak bizonyos időszakban (pl. nyár).",
        es: "Temporal: poco tiempo. Estacional: cada año, pero solo en una temporada (p. ej. verano).",
        en: "Temporary: lived in for a short time. Seasonal: regularly, but only in a season (e.g., summer).",
      },
    },
    {
      id: "g5c3",
      front: { hu: "Sorolj fel 3 falualaprajz-típust!", es: "3 tipos de plano de pueblo", en: "3 village layout types" },
      back: {
        hu: "Halmazfalu, útifalu (szalagtelkes), körfalu, sakktábla alaprajzú falu.",
        es: "Agrupado, lineal, circular, en cuadrícula.",
        en: "Clustered, linear, circular, grid-like.",
      },
    },
    {
      id: "g5c4",
      front: { hu: "Mit jelent: urbanizáció?", es: "¿Qué es urbanización?", en: "What is urbanization?" },
      back: {
        hu: "A városokban élők aránya nő (és a városok terjeszkednek).",
        es: "Aumenta la proporción de población urbana (y crece la ciudad).",
        en: "The share of people living in cities increases (and cities expand).",
      },
    },
    {
      id: "g5c5",
      front: { hu: "Mi az agglomeráció? (1 mondat)", es: "¿Qué es aglomeración?", en: "What is an agglomeration?" },
      back: {
        hu: "Egy nagyváros körüli összenőtt településgyűrű, ahonnan sokan bejárnak dolgozni.",
        es: "Conjunto de localidades alrededor de una gran ciudad, con mucha gente que viaja a trabajar.",
        en: "A ring of settlements around a big city, with many commuters.",
      },
    },
    {
      id: "g5c6",
      front: { hu: "Budapest hogyan jött létre? (év)", es: "¿Cuándo se formó Budapest?", en: "When was Budapest formed?" },
      back: {
        hu: "Buda, Pest és Óbuda 1873-ban egyesült; ma 23 kerület van.",
        es: "Buda, Pest y Óbuda se unieron en 1873; hoy hay 23 distritos.",
        en: "Buda, Pest and Óbuda unified in 1873; today there are 23 districts.",
      },
    },
    {
      id: "g5c7",
      front: { hu: "Mit jelent: vízfej jelenség?", es: "¿Qué es la 'cabeza'?", en: "What is the ‘primate city’ effect?" },
      back: {
        hu: "A főváros túl domináns: sok a munka és a szolgáltatás, ezért odavonzza a népességet és a befektetést.",
        es: "La capital domina demasiado y atrae población e inversiones.",
        en: "The capital is overly dominant and attracts people and investment.",
      },
    },
    {
      id: "g5c8",
      front: { hu: "Mi a barnamezős beruházás?", es: "¿Qué es inversión brownfield?", en: "What is a brownfield investment?" },
      back: {
        hu: "Régi ipari területek megújítása új funkcióval (lakás, iroda, park, szolgáltatás).",
        es: "Renovar zonas industriales antiguas con un nuevo uso.",
        en: "Renewing old industrial sites for new uses.",
      },
    },
    {
      id: "g5c9",
      front: { hu: "Mit jelent: gyógyturizmus?", es: "¿Qué es turismo médico?", en: "What is medical tourism?" },
      back: {
        hu: "Másik országba utazás orvosi kezelésért; gyakran olcsóbb vagy gyorsabb ellátás miatt.",
        es: "Viajar a otro país por tratamiento; a menudo por precio o rapidez.",
        en: "Travel to another country for medical care, often for cost or access.",
      },
    },
    {
      id: "g5c10",
      front: { hu: "Mi az a zártkert?", es: "¿Qué es ‘zártkert’?", en: "What is a ‘zártkert’?" },
      back: {
        hu: "Kiskertes, külterületi telekrész a település szélén; régen művelés, ma néha hétvégi használat is.",
        es: "Pequeñas parcelas cerca del pueblo/ciudad; antes cultivo, hoy a veces uso de fin de semana.",
        en: "Small-plot garden area on the settlement edge; once mainly farming, sometimes weekend use today.",
      },
    },
    {
      id: "g5c11",
      front: { hu: "Mi lehet a városok fő funkciója? (2 példa)", es: "2 funciones urbanas", en: "2 city functions" },
      back: {
        hu: "Munkahelyek és szolgáltatások; oktatás, kultúra, egészségügy, közigazgatás.",
        es: "Empleo y servicios; educación, cultura, salud, administración.",
        en: "Jobs and services; education, culture, healthcare, administration.",
      },
    },
    {
      id: "g5c12",
      front: { hu: "Milyen urbanizációs folyamat a kiköltözés a város környékére?", es: "Mudanza a suburbios", en: "Moving to the suburbs is called:" },
      back: {
        hu: "Szuburbanizáció.",
        es: "Suburbanización.",
        en: "Suburbanization.",
      },
    },
  ],

  // --- quiz: ONLY use types supported by your current app.js (mcq, match, order, image-mcq) ---
  quiz: [
    {
      id: "g5q1",
      type: "mcq",
      prompt: {
        hu: "Melyik példa lehet inkább időszakosan lakott település?",
        es: "¿Cuál puede ser estacional?",
        en: "Which can be a seasonal settlement?",
      },
      options: [
        { hu: "Üdülőterület, nyaralók", es: "Zona de vacaciones", en: "Holiday area, summer houses" },
        { hu: "Főváros", es: "Capital", en: "Capital city" },
        { hu: "Megyeszékhely", es: "Capital de condado", en: "County seat" },
        { hu: "Ipari park", es: "Parque industrial", en: "Industrial park" },
      ],
      answerIndex: 0,
      explanation: {
        hu: "Időszakos: rendszeresen lakják, de csak egy időszakban (például nyáron).",
        es: "Estacional: se usa solo en una temporada.",
        en: "Seasonal: used only in a certain season.",
      },
    },

    {
      id: "g5q2",
      type: "match",
      prompt: {
        hu: "Párosítsd: településtípus → leírás",
        es: "Empareja: tipo → descripción",
        en: "Match: type → description",
      },
      left: [
        { k: "IDEIG", hu: "Ideiglenes", es: "Temporal", en: "Temporary" },
        { k: "IDOSZ", hu: "Időszakos", es: "Estacional", en: "Seasonal" },
        { k: "ALL", hu: "Állandó", es: "Permanente", en: "Permanent" },
      ],
      right: [
        { k: "A", hu: "Rövid időre lakják", es: "Se ocupa por poco tiempo", en: "Lived in briefly" },
        { k: "B", hu: "Csak bizonyos évszakban lakják", es: "Solo en una temporada", en: "Only in a season" },
        { k: "C", hu: "Egész évben lakják", es: "Todo el año", en: "All year round" },
      ],
      pairs: { IDEIG: "A", IDOSZ: "B", ALL: "C" },
    },

    {
      id: "g5q3",
      type: "match",
      prompt: {
        hu: "Párosítsd: falualaprajz → jellemző",
        es: "Empareja: plano → característica",
        en: "Match: layout → feature",
      },
      left: [
        { k: "HALMAZ", hu: "Halmazfalu", es: "Aldea agrupada", en: "Clustered village" },
        { k: "UTI", hu: "Útifalu", es: "Aldea lineal", en: "Linear village" },
        { k: "KOR", hu: "Körfalu", es: "Aldea circular", en: "Circular village" },
        { k: "SAKK", hu: "Sakktábla", es: "En cuadrícula", en: "Grid layout" },
      ],
      right: [
        { k: "A", hu: "Hosszú utca mentén", es: "A lo largo de una calle", en: "Along a road" },
        { k: "B", hu: "Szabálytalan, összetömörülő", es: "Irregular y agrupada", en: "Irregular, clustered" },
        { k: "C", hu: "Körben rendeződő házak", es: "Casas en círculo", en: "Houses arranged in a circle" },
        { k: "D", hu: "Rácsos, derékszögű utcák", es: "Calles en ángulo recto", en: "Right-angle street grid" },
      ],
      pairs: { HALMAZ: "B", UTI: "A", KOR: "C", SAKK: "D" },
    },

    {
      id: "g5q4",
      type: "mcq",
      prompt: {
        hu: "Mit mér az urbanizáció (egyszerűen)?",
        es: "¿Qué mide la urbanización?",
        en: "What does urbanization measure?",
      },
      options: [
        { hu: "A városokban élők arányát", es: "La proporción urbana", en: "The share living in cities" },
        { hu: "A hegyek magasságát", es: "La altura de montañas", en: "Mountain height" },
        { hu: "A folyók hosszát", es: "La longitud de ríos", en: "River length" },
        { hu: "A tengerek mélységét", es: "La profundidad del mar", en: "Sea depth" },
      ],
      answerIndex: 0,
    },

    {
      id: "g5q5",
      type: "order",
      prompt: {
        hu: "Rendezd időrendbe a folyamatokat (a tananyag logikája szerint)!",
        es: "Ordena los procesos (según el tema).",
        en: "Order the processes (as in the class logic).",
      },
      items: [
        { k: "URB", hu: "Urbanizáció", es: "Urbanización", en: "Urbanization" },
        { k: "SZUB", hu: "Szuburbanizáció", es: "Suburbanización", en: "Suburbanization" },
        { k: "DEZ", hu: "Dezurbanizáció", es: "Desurbanización", en: "De-urbanization" },
        { k: "RE", hu: "Reurbanizáció", es: "Reurbanización", en: "Re-urbanization" },
      ],
      correctOrder: ["URB", "SZUB", "DEZ", "RE"],
      explanation: {
        hu: "Egyszerűen: város nő → kiköltözés a peremre → még távolabb → vissza a belső városrészekbe (megújulás).",
        es: "Ciudad crece → a suburbios → más lejos → vuelta al centro (renovación).",
        en: "City grows → move to suburbs → further out → return to inner city (renewal).",
      },
    },

    {
      id: "g5q6",
      type: "mcq",
      prompt: {
        hu: "Mikor jött létre Budapest Buda, Pest és Óbuda egyesítésével?",
        es: "¿Cuándo se unieron Buda, Pest y Óbuda?",
        en: "When did Buda, Pest and Óbuda unite as Budapest?",
      },
      options: [
        { hu: "1848", es: "1848", en: "1848" },
        { hu: "1873", es: "1873", en: "1873" },
        { hu: "1918", es: "1918", en: "1918" },
        { hu: "1956", es: "1956", en: "1956" },
      ],
      answerIndex: 1,
    },

    {
      id: "g5q7",
      type: "match",
      prompt: {
        hu: "Párosítsd: város gazdasági jellege → példa (logika szerint)",
        es: "Empareja: carácter económico → ejemplo",
        en: "Match: economic character → example",
      },
      left: [
        { k: "MEZ", hu: "Mezőgazdasági település", es: "Agrícola", en: "Agricultural" },
        { k: "IP", hu: "Ipari község", es: "Industrial", en: "Industrial" },
        { k: "SZOLG", hu: "Szolgáltató jelleg", es: "Servicios", en: "Service-oriented" },
      ],
      right: [
        { k: "A", hu: "Sok feldolgozó üzem és gyár", es: "Muchas fábricas", en: "Many factories" },
        { k: "B", hu: "Főleg boltok, hivatalok, szolgáltatások", es: "Comercio/servicios", en: "Shops/offices/services" },
        { k: "C", hu: "Főleg szántóföld, állattartás", es: "Campos y ganadería", en: "Fields and livestock" },
      ],
      pairs: { MEZ: "C", IP: "A", SZOLG: "B" },
    },

    {
      id: "g5q8",
      type: "mcq",
      prompt: {
        hu: "Mi a gyógyturizmus egyik leggyakoribb oka?",
        es: "¿Una razón común del turismo médico?",
        en: "A common reason for medical tourism?",
      },
      options: [
        { hu: "Anyagi megtakarítás", es: "Ahorro de dinero", en: "Cost savings" },
        { hu: "Hóviharok", es: "Tormentas de nieve", en: "Snowstorms" },
        { hu: "Tengerszint emelkedése", es: "Subida del mar", en: "Sea-level rise" },
        { hu: "Vulkánkitörés", es: "Erupción volcánica", en: "Volcanic eruption" },
      ],
      answerIndex: 0,
    },

    {
      id: "g5q9",
      type: "mcq",
      prompt: {
        hu: "Mi a zártkertek egyik jellemzője?",
        es: "¿Una característica de ‘zártkertek’?",
        en: "A characteristic of ‘zártkertek’?",
      },
      options: [
        { hu: "Kiskertes telkek a település szélén", es: "Pequeñas parcelas cerca del pueblo/ciudad", en: "Small garden plots on the edge of settlements" },
        { hu: "Mindig felhőkarcolók", es: "Siempre rascacielos", en: "Always skyscrapers" },
        { hu: "Csak hegytetőn vannak", es: "Solo en la cima", en: "Only on mountain tops" },
        { hu: "Csak az óceán partján", es: "Solo junto al océano", en: "Only by the ocean" },
      ],
      answerIndex: 0,
    },
  ],
};
