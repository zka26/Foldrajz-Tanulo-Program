// Geography topic G3 — Mezőgazdaság
// Keep HU + EN/ES toggle friendly: every text has hu/es/en.
//
// NOTE: This file is meant to be imported into your main data.js (or collected into DATA.topics).

export const TOPIC_G3 = {
  id: "g3",
  title: {
    hu: "Mezőgazdaság",
    es: "Agricultura",
    en: "Agriculture",
  },
  subtitle: {
    hu: "természeti adottságok, növénytermesztés és állattenyésztés, élelmiszer‑gazdaság, problémák és lehetőségek",
    es: "condiciones naturales, cultivos y ganadería, economía alimentaria, problemas y oportunidades",
    en: "natural conditions, crops and livestock, food economy, problems and opportunities",
  },

  // --- exam-friendly opener (what she says before the topic) ---
  intro: {
    hu:
      "A témám a <strong>mezőgazdaság</strong> Magyarországon. Először beszélek a <strong>kedvező természeti adottságokról</strong> (sík terület, jó talaj), majd a fő ágazatokról: <strong>növénytermesztés</strong> és <strong>állattenyésztés</strong>. Röviden megemlítem, hogyan változott az agrárgazdaság a <strong>20–21. században</strong> (szocializmus, rendszerváltás), és végül felsorolom a fő <strong>problémákat</strong> (aszály, tőkehiány, alacsony felvásárlási árak) és a <strong>lehetőségeket</strong> (korszerű technológia, gépesítés, feldolgozás, export).",
    es:
      "Mi tema es la agricultura en Hungría. Primero hablo de las condiciones naturales favorables (relieve llano, buen suelo), luego de los dos sectores principales: cultivos y ganadería. Menciono brevemente los cambios en los siglos XX–XXI (socialismo y cambio de sistema) y al final enumero los problemas (sequía, falta de capital) y las oportunidades (tecnología moderna, exportación).",
    en:
      "My topic is agriculture in Hungary. First I talk about favorable natural conditions (flat land, good soils), then the two main sectors: crop farming and livestock. I briefly mention changes in the 20th–21st centuries (socialism and the transition), and finally key problems (drought, lack of capital) and opportunities (modern technology, exports).",
  },

  // --- very short “at-a-glance” bullets (good for quick recall) ---
  summaryBullets: [
    {
      hu: "A természeti adottságok sok helyen <strong>kedvezőek</strong>: sok a síkság és jó a termőtalaj.",
      es: "Condiciones naturales a menudo favorables: llanuras y suelos buenos.",
      en: "Natural conditions are often favorable: plains and good soils.",
    },
    {
      hu: "A legnagyobb érték a <strong>termőföld</strong> és az <strong>erdő</strong>.",
      es: "El mayor valor: tierra fértil y bosques.",
      en: "The biggest value: fertile land and forests.",
    },
    {
      hu: "Fő ágazatok: <strong>növénytermesztés</strong> és <strong>állattenyésztés</strong>.",
      es: "Sectores principales: cultivos y ganadería.",
      en: "Main sectors: crops and livestock.",
    },
    {
      hu: "Növénycsoportok: <strong>gabonafélék</strong>, <strong>zöldség‑gyümölcs</strong>, <strong>takarmánynövények</strong>, <strong>ipari növények</strong>.",
      es: "Grupos: cereales, frutas/verduras, forrajes, industriales.",
      en: "Groups: cereals, fruit/veg, fodder, industrial crops.",
    },
    {
      hu: "A 20. században volt <strong>szocialista</strong> nagyüzemi rendszer (téeszek/állami gazdaságok), a rendszerváltás után <strong>tulajdonváltás</strong> és sok <strong>kisbirtok</strong> jelent meg.",
      es: "En el socialismo hubo grandes cooperativas/estatales; tras la transición hubo cambio de propiedad y más pequeñas parcelas.",
      en: "In socialism there were large co-ops/state farms; after the transition, ownership changed and many small farms appeared.",
    },
    {
      hu: "Ma az élelmiszer‑gazdaság sokszor <strong>kevés bevétellel</strong> jár, alacsony a foglalkoztatottság, a GDP‑részesedés <strong>csökken</strong>.",
      es: "Hoy suele dar menos ingresos; baja ocupación; menor parte en el PIB.",
      en: "Today it often brings lower income; low employment share; declining GDP share.",
    },
    {
      hu: "Fogalom: <strong>agrárolló</strong> — a költségek gyorsabban nőnek, mint a termények felvásárlási ára.",
      es: "Término: “tijera agraria”: los costos suben más rápido que los precios de compra.",
      en: "Term: agricultural price scissors: costs rise faster than farm-gate prices.",
    },
  ],

  // --- “core” talking points (what she can actually say) ---
  // Keep each line as a full, speakable sentence.
  keyPoints: [
    {
      hu: "1) Magyarországon a mezőgazdaság alapja sok helyen a <strong>kedvező természeti adottság</strong>: a sík terület miatt könnyebb a <strong>gépesítés</strong>, és sok helyen jó a <strong>termőtalaj</strong>.",
      es: "1) En Hungría la agricultura se apoya en condiciones naturales favorables: en llanuras es más fácil mecanizar y hay suelos buenos.",
      en: "1) In Hungary agriculture is often supported by favorable natural conditions: plains make mechanization easier and many soils are good.",
    },
    {
      hu: "A legfontosabb erőforrás a <strong>termőföld</strong>, és jelentős a <strong>erdő</strong> is.",
      es: "El recurso principal es la tierra fértil, y los bosques también son importantes.",
      en: "The key resource is fertile land, and forests are also important.",
    },
    {
      hu: "Ugyanakkor a csapadék területileg és időben ingadozhat, ezért egyes helyeken <strong>öntözésre</strong> is szükség lehet.",
      es: "Sin embargo, la lluvia puede ser irregular, por eso en algunos lugares se necesita riego.",
      en: "However, rainfall can be irregular, so irrigation is sometimes needed.",
    },

    {
      hu: "2) A mezőgazdaság két fő ágazata a <strong>növénytermesztés</strong> és az <strong>állattenyésztés</strong>, és a kettő összefügg a <strong>takarmány</strong> miatt.",
      es: "2) Dos sectores principales: cultivos y ganadería, ligados por el forraje.",
      en: "2) The two main sectors are crop farming and livestock, linked via fodder/feed.",
    },

    {
      hu: "3) Növénytermesztésben a legfontosabb csoportok: <strong>gabonafélék</strong>, <strong>ipari növények</strong>, <strong>takarmánynövények</strong> és <strong>zöldség‑gyümölcs</strong>.",
      es: "3) En cultivos: cereales, industriales, forrajeros y frutas/verduras.",
      en: "3) In crop farming the main groups are cereals, industrial crops, fodder crops, and fruit & vegetables.",
    },
    {
      hu: "<strong>Gabonafélék</strong> (pl. búza, kukorica) szerepe: élelmiszer (liszt/kenyér) és takarmány.",
      es: "Los cereales (trigo, maíz) sirven para alimentos y pienso.",
      en: "Cereals (e.g., wheat, maize) matter for food (flour/bread) and feed.",
    },
    {
      hu: "<strong>Ipari növények</strong> (pl. napraforgó, repce, cukorrépa) szerepe: étolaj, cukor és ipari alapanyag.",
      es: "Cultivos industriales (girasol, colza, remolacha): aceite, azúcar y materia prima.",
      en: "Industrial crops (sunflower, rapeseed, sugar beet): oil, sugar and raw materials.",
    },
    {
      hu: "A <strong>zöldség‑gyümölcs</strong> részben friss áru, részben feldolgozott termék (fagyasztott, konzerv, lekvár, gyümölcslé), és a <strong>szőlő</strong> fontos a borászat miatt.",
      es: "Frutas/verduras van frescas o procesadas, y la uva es importante por el vino.",
      en: "Fruit/veg is sold fresh or processed, and grapes are important for wine production.",
    },

    {
      hu: "4) Az <strong>élelmiszer‑gazdaság</strong> feladata az ország ellátása és az <strong>export</strong>, de sokszor kiszolgáltatott a piaci áraknak.",
      es: "4) La economía alimentaria abastece y exporta, pero depende mucho de los precios del mercado.",
      en: "4) The food economy supplies the country and supports exports, but it is often exposed to market prices.",
    },
    {
      hu: "Fontos fogalom az <strong>agrárolló</strong>: amikor a költségek (pl. üzemanyag, műtrágya) gyorsabban nőnek, mint a felvásárlási árak.",
      es: "Clave: tijera agraria: los costos suben más rápido que los precios de compra.",
      en: "Key term: agricultural price scissors—input costs rise faster than farm-gate prices.",
    },

    {
      hu: "5) A 20. században gyakori volt a <strong>szocialista nagyüzemi</strong> rendszer (téeszek/állami gazdaságok), a rendszerváltás után pedig <strong>tulajdonváltás</strong> és sok <strong>kisbirtok</strong> jelent meg.",
      es: "5) En el siglo XX fueron comunes grandes cooperativas/estatales; tras la transición hubo cambio de propiedad y muchas fincas pequeñas.",
      en: "5) In the 20th century large co-ops/state farms were common; after the transition ownership changed and many small farms appeared.",
    },

    {
      hu: "6) Hátrányos természeti tényezők lehetnek: <strong>aszály</strong>, <strong>szikesedés</strong>, <strong>talajpusztulás (erózió)</strong> és <strong>tavaszi fagy</strong>.",
      es: "6) Desventajas naturales: sequía, salinización, erosión y heladas de primavera.",
      en: "6) Natural disadvantages can include drought, salinization, erosion, and spring frosts.",
    },
    {
      hu: "Hátrányos társadalmi tényezők: <strong>tőkehiány</strong>, sok <strong>kisbirtok</strong>, alacsony felvásárlási árak és versenyhátrány.",
      es: "Desventajas sociales: falta de capital, muchas fincas pequeñas, precios bajos y desventaja competitiva.",
      en: "Social disadvantages: lack of capital, many small farms, low purchase prices, and competitive disadvantage.",
    },

    {
      hu: "7) Lehetőségek: korszerű technológia, jobb gépesítés, <strong>öntözés</strong>, valamint a <strong>feldolgozás</strong> fejlesztése, mert így nagyobb lehet a hozzáadott érték és az export.",
      es: "7) Oportunidades: tecnología moderna, mecanización, riego és más procesamiento para mayor valor añadido y exportación.",
      en: "7) Opportunities: modern technology, mechanization, irrigation, and more processing to increase value added and exports.",
    },
    {
      hu: "Táj‑termék példák: <strong>Szeged</strong> — paprika; <strong>Tokaj</strong> — szőlő és bor (vizsgára elég 2 példa).",
      es: "Ejemplos región‑producto: Szeged — paprika; Tokaj — uva y vino (basta 2 ejemplos).",
      en: "Region‑product examples: Szeged—paprika; Tokaj—grapes and wine (2 examples are enough).",
    },
  ],

  // --- extra details (only if she wants to sound “pro”) ---
  extended: [
    {
      hu: "Kapcsolás a földrajzhoz: a sík terület és a jó talaj előny, de a csapadék ingadozása miatt a termés évről évre változhat.",
      es: "Conexión geográfica: llanuras y suelos buenos ayudan, pero la lluvia irregular hace variar la cosecha.",
      en: "Geography link: plains and good soils help, but variable rainfall makes yields fluctuate year to year.",
    },
    {
      hu: "Egy mondatban: ha nő a feldolgozás és javul a technológia, a mezőgazdaság jövedelmezőbb lehet, mint csak alapanyag‑termeléssel.",
      es: "En una frase: más procesamiento y mejor tecnología pueden hacerla más rentable que solo producir materias primas.",
      en: "In one sentence: more processing and better technology can make farming more profitable than raw output alone.",
    },
  ],

  // --- flashcards: short Q/A for speaking practice ---
  flashcards: [
    // Keep the old ids (g3c1..g3c4) for backwards compatibility
    {
      id: "g3c1",
      front: { hu: "Miért lehet erős a mezőgazdaság Magyarországon?", es: "¿Por qué puede ser fuerte la agricultura en Hungría?", en: "Why can agriculture be strong in Hungary?" },
      back: {
        hu: "Sok a sík terület és a szántóföld, sok helyen jó a talaj, és a gépesítés is könnyebb.",
        es: "Hay llanuras y mucha tierra arable, suelos buenos y mecanización más fácil.",
        en: "There are plains and lots of arable land, good soils, and mechanization is easier.",
      },
    },
    {
      id: "g3c2",
      front: { hu: "Fő növények (példák)", es: "Cultivos principales (ejemplos)", en: "Main crops (examples)" },
      back: {
        hu: "Búza, kukorica, napraforgó; sok helyen zöldség/gyümölcs és szőlő is.",
        es: "Trigo, maíz, girasol; también frutas/verduras y uva en muchos lugares.",
        en: "Wheat, maize, sunflower; also fruit/veg and grapes in many areas.",
      },
    },
    {
      id: "g3c3",
      front: { hu: "Miért fontos lehet az öntözés?", es: "¿Por qué puede ser importante el riego?", en: "Why can irrigation be important?" },
      back: {
        hu: "Mert egyes területeken kevés a csapadék, vagy nagyon ingadozó, és aszály lehet.",
        es: "Porque en algunas zonas llueve poco o de forma irregular y puede haber sequía.",
        en: "Because some areas have low or irregular rainfall and drought can happen.",
      },
    },
    {
      id: "g3c4",
      front: { hu: "Bevezető (szóbelihez)", es: "Introducción (oral)", en: "Oral intro" },
      back: {
        hu: "A témám a mezőgazdaság: először a természeti adottságokról beszélek, utána a fő ágazatokról, végül a problémákról és a lehetőségekről.",
        es: "Primero condiciones naturales, luego sectores, y al final problemas y oportunidades.",
        en: "First natural conditions, then sectors, finally problems and opportunities.",
      },
    },

    // extra cards
    {
      id: "g3f5",
      front: { hu: "Mi az agrárolló? (röviden)", es: "¿Qué es la “tijera agraria”?", en: "What are agricultural price scissors?" },
      back: {
        hu: "Amikor a költségek (üzemanyag, műtrágya) gyorsabban nőnek, mint a felvásárlási árak.",
        es: "Cuando los costos suben más rápido que los precios de compra.",
        en: "When input costs rise faster than farm-gate prices.",
      },
    },
    {
      id: "g3f6",
      front: { hu: "Természeti hátrányok — mondj 2 példát!", es: "Desventajas naturales — da 2 ejemplos.", en: "Natural disadvantages — give 2 examples." },
      back: {
        hu: "Aszály, szikesedés, talajpusztulás (erózió), tavaszi fagyok.",
        es: "Sequía, salinización, erosión, heladas de primavera.",
        en: "Drought, salinization, erosion, spring frosts.",
      },
    },
    {
      id: "g3f7",
      front: { hu: "Társadalmi hátrányok — mondj 2 példát!", es: "Desventajas sociales — da 2 ejemplos.", en: "Social disadvantages — give 2 examples." },
      back: {
        hu: "Tőkehiány, sok kisbirtok, alacsony felvásárlási árak, versenyhátrány.",
        es: "Falta de capital, muchas fincas pequeñas, precios bajos, desventaja competitiva.",
        en: "Lack of capital, many small farms, low purchase prices, competitive disadvantage.",
      },
    },
    {
      id: "g3f8",
      front: { hu: "Mit csinál az élelmiszer‑gazdaság?", es: "¿Qué hace la economía alimentaria?", en: "What does the food economy do?" },
      back: {
        hu: "Ellátja az országot élelmiszerrel, és fontos szerepe van az exportban is.",
        es: "Abastece al país y también apoya la exportación.",
        en: "It supplies the country with food and also supports exports.",
      },
    },
    {
      id: "g3f9",
      front: { hu: "Adj 1 táj‑termék példát!", es: "Da un ejemplo región‑producto.", en: "Give one region‑product example." },
      back: {
        hu: "Szeged — paprika / Tokaj — bor (szőlő).",
        es: "Szeged — paprika / Tokaj — vino (uva).",
        en: "Szeged — paprika / Tokaj — wine (grapes).",
      },
    },
  ],

  quiz: [
    // Keep existing ids (g3q1..g3q3)
    {
      id: "g3q1",
      type: "mcq",
      prompt: { hu: "Melyik párosítás illik legjobban az Alföldhöz?", es: "¿Qué combina mejor con la Gran Llanura?", en: "Which fits the Great Plain best?" },
      options: [
        { hu: "Sok szántó + gabona (pl. búza, kukorica)", es: "Mucho campo arable + cereales", en: "Lots of arable land + cereals" },
        { hu: "Magashegység + gleccserek", es: "Alta montaña + glaciares", en: "High mountains + glaciers" },
        { hu: "Fjordok és tengerpart", es: "Fiordos y costa", en: "Fjords and seacoast" },
        { hu: "Trópusi esőerdő", es: "Selva tropical", en: "Tropical rainforest" },
      ],
      answerIndex: 0,
    },
    {
      id: "g3q2",
      type: "mcq",
      prompt: { hu: "Miért lehet fontos az öntözés?", es: "¿Por qué es importante el riego?", en: "Why can irrigation be important?" },
      options: [
        { hu: "Mert egyes területeken kevés a csapadék és ingadozó.", es: "Porque llueve poco o irregular.", en: "Because rainfall can be low and irregular." },
        { hu: "Mert Magyarországon mindig túl sok az eső.", es: "Porque siempre llueve demasiado.", en: "Because it always rains too much." },
        { hu: "Mert nincsenek folyók.", es: "Porque no hay ríos.", en: "Because there are no rivers." },
        { hu: "Mert nincs szántóföld.", es: "Porque no hay tierra arable.", en: "Because there is no arable land." },
      ],
      answerIndex: 0,
    },
    {
      id: "g3q3",
      type: "match",
      prompt: { hu: "Párosítsd: fogalom → magyarázat", es: "Empareja: término → explicación", en: "Match: term → explanation" },
      left: [
        { k: "SZ", hu: "Szántóföld", es: "Tierra arable", en: "Arable land" },
        { k: "ON", hu: "Öntözés", es: "Riego", en: "Irrigation" },
      ],
      right: [
        { k: "AR", hu: "Művelt terület, ahol növényeket termesztenek", es: "Terreno cultivado", en: "Cultivated land for crops" },
        { k: "WI", hu: "Víz pótlása mesterségesen, ha kevés a csapadék", es: "Aporte de agua artificial", en: "Adding water artificially when rainfall is low" },
      ],
      pairs: { SZ: "AR", ON: "WI" },
    },

    // --- new questions ---
    {
      id: "g3q4",
      type: "mcq",
      prompt: { hu: "Mi az agrárolló lényege?", es: "¿Cuál es la idea de la tijera agraria?", en: "What is the idea of agricultural price scissors?" },
      options: [
        { hu: "A termények ára gyorsabban nő, mint a költségek.", es: "Suben más los precios del producto.", en: "Product prices rise faster than costs." },
        { hu: "A költségek gyorsabban nőnek, mint a felvásárlási árak.", es: "Suben más los costos.", en: "Costs rise faster than farm-gate prices." },
        { hu: "Mindig ugyanannyi a költség és az ár.", es: "Siempre igual.", en: "They are always equal." },
        { hu: "Csak az erdőgazdálkodásra vonatkozik.", es: "Solo bosques.", en: "Only forestry." },
      ],
      answerIndex: 1,
    },
    {
      id: "g3q5",
      type: "match",
      prompt: { hu: "Párosítsd: feltétel → példa", es: "Empareja: condición → ejemplo", en: "Match: condition → example" },
      left: [
        { k: "TN", hu: "Hátrányos természeti feltétel", es: "Desventaja natural", en: "Natural disadvantage" },
        { k: "TT", hu: "Hátrányos társadalmi feltétel", es: "Desventaja social", en: "Social disadvantage" },
        { k: "EN", hu: "Előnyös természeti feltétel", es: "Ventaja natural", en: "Natural advantage" },
        { k: "ET", hu: "Előnyös társadalmi feltétel", es: "Ventaja social", en: "Social advantage" },
      ],
      right: [
        { k: "ASZ", hu: "Aszály", es: "Sequía", en: "Drought" },
        { k: "TOK", hu: "Tőkehiány", es: "Falta de capital", en: "Lack of capital" },
        { k: "TAL", hu: "Jó minőségű talajok", es: "Suelos buenos", en: "Good soils" },
        { k: "GEP", hu: "Gépesítettség", es: "Mecanización", en: "Mechanization" },
      ],
      pairs: { TN: "ASZ", TT: "TOK", EN: "TAL", ET: "GEP" },
    },
    {
      id: "g3q6",
      type: "mcq",
      prompt: { hu: "Mi volt jellemző a szocializmus idején a mezőgazdaságban?", es: "¿Qué fue típico en el socialismo?", en: "What was typical in socialism?" },
      options: [
        { hu: "Sok kis, különálló családi gazdaság volt.", es: "Muchas fincas pequeñas separadas.", en: "Many separate small family farms." },
        { hu: "Gyakoriak voltak a nagyobb szövetkezetek/állami gazdaságok.", es: "Había cooperativas/estatales grandes.", en: "Large co-ops/state farms were common." },
        { hu: "Nem termeltek gabonát.", es: "No producían cereales.", en: "They produced no cereals." },
        { hu: "Csak halászat volt.", es: "Solo pesca.", en: "Only fishing." },
      ],
      answerIndex: 1,
    },
    {
      id: "g3q7",
      type: "match",
      prompt: { hu: "Párosítsd: termék → hely (példák)", es: "Empareja: producto → lugar (ejemplos)", en: "Match: product → place (examples)" },
      left: [
        { k: "PAP", hu: "Paprika", es: "Paprika", en: "Paprika" },
        { k: "BOR", hu: "Szőlő és bor", es: "Uva y vino", en: "Grapes and wine" },
      ],
      right: [
        { k: "SZEG", hu: "Szeged környéke", es: "Zona de Szeged", en: "Szeged area" },
        { k: "TOKJ", hu: "Tokaj", es: "Tokaj", en: "Tokaj" },
      ],
      pairs: { PAP: "SZEG", BOR: "TOKJ" },
    },
    {
      id: "g3q8",
      type: "mcq",
      prompt: { hu: "Melyik NEM természeti hátrány?", es: "¿Cuál NO es una desventaja natural?", en: "Which is NOT a natural disadvantage?" },
      options: [
        { hu: "Szikesedés", es: "Salinización", en: "Salinization" },
        { hu: "Tavaszi fagy", es: "Helada de primavera", en: "Spring frost" },
        { hu: "Tőkehiány", es: "Falta de capital", en: "Lack of capital" },
        { hu: "Aszály", es: "Sequía", en: "Drought" },
      ],
      answerIndex: 2,
    },
  ],
};
