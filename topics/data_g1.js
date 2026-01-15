// Geography topic G1 — Magyarország elhelyezkedése
// Keep HU + EN/ES toggle friendly: every text has hu/es/en.
//
// NOTE: This file is meant to be imported into your main data.js (or collected into DATA.topics).

export const TOPIC_G1 = {
  id: "g1",
  title: {
    hu: "Magyarország elhelyezkedése",
    es: "Ubicación de Hungría",
    en: "Location of Hungary",
  },
  subtitle: {
    hu: "Európa részeként: Kárpát-medence, domborzat, éghajlat, vízrajz – beszédvázlat + gyakorló kérdések",
    es: "Dentro de Europa: cuenca de los Cárpatos, relieve, clima e hidrografía – esquema para hablar + preguntas",
    en: "Within Europe: Carpathian Basin, relief, climate, hydrology – speaking outline + practice questions",
  },

  // --- exam-friendly opener (what she says before the topic) ---
  intro: {
    hu:
      "A témám <strong>Magyarország elhelyezkedése</strong>. Röviden elmondom, hol van <strong>Európán belül</strong> és a <strong>Kárpát‑medencében</strong>, majd a <strong>domborzatról</strong>, az <strong>éghajlatról</strong> és a <strong>vízrajzról</strong> beszélek, végül arról, hogyan alakította át az <strong>ember</strong> a <strong>tájat</strong>.",
    es:
      "Mi tema es la ubicación de Hungría. Primero digo dónde está en Europa y en la cuenca de los Cárpatos, luego hablo del relieve, del clima y de la hidrografía, y al final de cómo el ser humano transformó el paisaje.",
    en:
      "My topic is Hungary’s location. First I say where it is in Europe and in the Carpathian Basin, then I talk about relief, climate and hydrology, and finally how humans have shaped the landscape.",
  },

  // --- very short “at-a-glance” bullets (good for quick recall) ---
  summaryBullets: [
    {
      hu: "Európa földrajzilag Eurázsia része; határai részben természetesek, részben mesterségesek.",
      es: "Europa es parte de Eurasia; sus límites son en parte naturales y en parte convencionales.",
      en: "Europe is part of Eurasia; its borders are partly natural and partly conventional.",
    },
    {
      hu: "Magyarország Közép‑Európában, a Kárpát‑medence központi részén fekszik.",
      es: "Hungría está en Europa Central, en la parte central de la cuenca de los Cárpatos.",
      en: "Hungary is in Central Europe, in the central part of the Carpathian Basin.",
    },
    {
      hu: "Alacsony fekvésű ország: 68% 200 m alatt, 30% 200–400 m, 2% 400 m fölött.",
      es: "País de baja altitud: 68% bajo 200 m, 30% entre 200–400 m, 2% sobre 400 m.",
      en: "Low-lying country: 68% below 200 m, 30% 200–400 m, 2% above 400 m.",
    },
    {
      hu: "Éghajlat: mérsékelt övezeti, döntően kontinentális; nyugatról nedvesebb, kelet felé szárazabb.",
      es: "Clima: templado, principalmente continental; más húmedo al oeste y más seco hacia el este.",
      en: "Climate: temperate, mainly continental; wetter in the west, drier toward the east.",
    },
    {
      hu: "Csapadék Európában jellemzően nyugatról keletre csökken; a hegyvidékek csapadékosabbak, mint a medence belseje.",
      es: "En Europa la precipitación suele disminuir de oeste a este; las montañas reciben más que el interior de la cuenca.",
      en: "In Europe precipitation often decreases west→east; mountains get more than the basin interior.",
    },
    {
      hu: "A Kárpát‑medencében a folyók befelé tartanak; a vízjárás ingadozó, gyakoriak az árvizek.",
      es: "En la cuenca los ríos tienden hacia adentro; el régimen es variable y las crecidas son frecuentes.",
      en: "In the basin rivers tend to flow inward; discharge varies and floods are common.",
    },
    {
      hu: "Két tipikus árhullám: jeges ár (tél vége/kora tavasz) és zöldár (késő tavasz/nyár eleje).",
      es: "Dos crecidas típicas: crecida de hielo (final de invierno/inicio de primavera) és zöldár (final de primavera/inicio de verano).",
      en: "Two typical flood waves: ice flood (late winter/early spring) and green flood (late spring/early summer).",
    },
    {
      hu: "A táj arculatát az ember erősen átalakította (erdőirtás, mezőgazdaság, folyószabályozás, gátak).",
      es: "El paisaje fue muy transformado por el ser humano (deforestación, agricultura, regulación de ríos, diques).",
      en: "Humans strongly reshaped the landscape (deforestation, farming, river regulation, levees).",
    },
  ],

  // --- “core” talking points (what she can actually say) ---
  // Keep each line as a full, speakable sentence.
  keyPoints: [
    {
      hu: "1) <strong>Európa</strong> helye: Európa földrajzilag <strong>Eurázsia</strong> része, de <strong>történelmi‑kulturális</strong> okokból külön <strong>kontinensként</strong> szoktuk említeni.",
      es: "1) Europa: geográficamente es parte de Eurasia, pero por razones históricas/culturales se trata como continente.",
      en: "1) Europe: geographically part of Eurasia, but often treated as a separate continent for historical/cultural reasons.",
    },
    {
      hu: "Európa területe kb. <strong>10,5 millió km²</strong>.",
      es: "La superficie de Europa es de aprox. 10,5 millones de km².",
      en: "Europe’s area is about 10.5 million km².",
    },
    {
      hu: "Európa határai: <strong>Uráli‑hegység</strong>, <strong>Kaukázus</strong>, <strong>Boszporusz</strong> és a <strong>Dardanellák</strong>, valamint a <strong>Gibraltári‑szoros</strong> (a tanári térképen így szerepel).",
      es: "Límites: Urales, Cáucaso, Bósforo y Dardanelos, y el Estrecho de Gibraltar (según el mapa del profe).",
      en: "Borders: Ural Mountains, Caucasus, Bosporus & Dardanelles, and the Strait of Gibraltar (as shown in class).",
    },

    {
      hu: "2) Európa felszíne: nagy <strong>síkságok</strong>, régi <strong>röghegységek</strong> és fiatal <strong>lánchegységek</strong> mozaikja.",
      es: "2) Relieve de Europa: mosaico de grandes llanuras, macizos antiguos y cordilleras jóvenes.",
      en: "2) Europe’s relief: a mosaic of plains, old block mountains, and young fold mountains.",
    },
    {
      hu: "A síkságok gyakran <strong>folyami feltöltéssel</strong> keletkeztek: a folyók lerakják a <strong>hordalékot</strong>.",
      es: "Las llanuras suelen formarse por relleno fluvial: los ríos depositan sedimentos.",
      en: "Plains often form by river deposition: rivers lay down sediment.",
    },
    {
      hu: "A röghegységek régen keletkeztek és <strong>lepusztultak</strong>; <strong>bányászat</strong> miatt gazdaságilag jelentősek (pl. <strong>kőszén</strong>, <strong>vasérc</strong>, <strong>urán</strong>).",
      es: "Los macizos antiguos son viejos y erosionados; son importantes por la minería (carbón, hierro, uranio).",
      en: "Old block mountains formed long ago and are eroded; they matter for mining (coal, iron ore, uranium).",
    },
    {
      hu: "A fiatal lánchegységek a <strong>földtörténeti újidőben</strong> keletkeztek, <strong>csipkézett gerincek</strong> jellemzik, gyakran <strong>erdőkben gazdagok</strong>.",
      es: "Las cordilleras jóvenes se formaron en tiempos geológicos recientes, con crestas agudas; suelen ser ricas en bosques.",
      en: "Young fold mountains formed in geologically recent times, with sharp ridges; often forest‑rich.",
    },

    {
      hu: "3) Európa éghajlata: túlnyomórészt az <strong>északi mérsékelt övezetben</strong> fekszik, de északon a <strong>hideg övezetbe</strong> nyúlik.",
      es: "3) Clima de Europa: mayormente en la zona templada del hemisferio norte, pero al norte entra en la zona fría.",
      en: "3) Europe’s climate: mostly in the northern temperate zone, extending into the cold zone in the north.",
    },
    {
      hu: "Az éghajlatot meghatározza: az <strong>óceánoktól való távolság</strong>, <strong>tengeráramlások</strong> és a <strong>domborzat</strong>.",
      es: "Factores: distancia al océano, corrientes marinas y relieve.",
      en: "Key factors: distance from oceans, ocean currents, and relief.",
    },
    {
      hu: "Az <strong>Atlanti‑óceán</strong> felől érkező <strong>nyugatias szelek</strong> <strong>nedves levegőt</strong> hoznak, ezért <strong>Nyugat‑Európa</strong> csapadékosabb.",
      es: "Los vientos del oeste traen aire húmedo del Atlántico; por eso Europa occidental es más lluviosa.",
      en: "Westerlies bring moist Atlantic air, so Western Europe is wetter.",
    },

    {
      hu: "4) Európa vízrajza: az <strong>éghajlat</strong> miatt általában jó a <strong>felszíni vizek utánpótlása</strong>; sok helyen a <strong>csapadék</strong> táplálja a <strong>folyókat</strong>.",
      es: "4) Hidrografía: por el clima hay buen aporte de agua superficial; la lluvia alimenta muchos ríos.",
      en: "4) Hydrology: climate usually provides good water supply for surface waters; rainfall feeds many rivers.",
    },

    {
      hu: "5) <strong>Magyarország helye: Közép‑Európában</strong>, a <strong>Kárpát‑medence</strong> központi részén fekszik (<strong>természetföldrajzi</strong> szempont).",
      es: "5) Hungría: en Europa Central, en la parte central de la cuenca de los Cárpatos (visión física).",
      en: "5) Hungary: in Central Europe, in the central Carpathian Basin (physical geography).",
    },
    {
      hu: "Társadalomföldrajzilag: <strong>Közép‑Európa</strong>, gyakran '<strong>centrum–félperiféria</strong>' térségként is említik (tanári felosztás).",
      es: "En geografía humana: Europa Central; a veces se menciona como zona de ‘centro–semiperiferia’ (en clase).",
      en: "In human geography: Central Europe; sometimes described as a ‘core–semi‑periphery’ zone (class framing).",
    },
    {
      hu: "Domborzati arányok: <strong>68% 200 m alatt</strong>, <strong>30% 200–400 m között</strong>, <strong>2% 400 m fölött</strong> → alapvetően <strong>sík</strong> és <strong>dombos</strong> jelleg.",
      es: "Altitudes: 68% bajo 200 m, 30% 200–400 m, 2% sobre 400 m → paisaje sobre todo llano y ondulado.",
      en: "Altitudes: 68% <200 m, 30% 200–400 m, 2% >400 m → mostly plains and hills.",
    },

    {
      hu: "6) A Kárpát‑medence éghajlata: <strong>mérsékelt övezeti</strong>, döntően <strong>kontinentális</strong>; a tél <strong>hideg</strong>, a nyár <strong>meleg</strong>, <strong>aszály</strong> is előfordul.",
      es: "6) Clima de la cuenca: templado y mayormente continental; inviernos fríos, veranos calurosos, puede haber sequía.",
      en: "6) Basin climate: temperate and mainly continental; cold winters, hot summers, drought can occur.",
    },
    {
      hu: "Nyugat felől <strong>nedvesebb</strong> (<strong>nedves kontinentális</strong>), kelet felé haladva <strong>szárazabb kontinentális</strong> jelleg erősödik.",
      es: "Más húmedo al noroeste; más seco y continental hacia el este.",
      en: "Wetter in the northwest; drier, more continental toward the east.",
    },

    {
      hu: "7) Csapadék és szél: Európában jellemzően <strong>nyugatról keletre csökken</strong> a <strong>csapadék</strong>; a <strong>hegyek</strong> több csapadékot kapnak, mint a <strong>medence belseje</strong>.",
      es: "7) Precipitación y viento: suele disminuir de oeste a este; las montañas reciben más que el interior de la cuenca.",
      en: "7) Precipitation & wind: often decreases west→east; mountains are wetter than the basin interior.",
    },
    {
      hu: "A medencét körülvevő <strong>hegységek</strong> felemelik a <strong>légáramlatokat</strong>, ezért könnyebben képződnek <strong>felhők</strong> és <strong>csapadék</strong> a <strong>peremeken</strong>.",
      es: "Las montañas alrededor elevan el aire, por eso en los bordes se forman más nubes y lluvia.",
      en: "Surrounding mountains lift air masses, so clouds and precipitation form more easily at the margins.",
    },
    {
      hu: "A legszárazabb terület gyakran az <strong>Alföld belső része</strong> (különösen a <strong>középső területek</strong>).",
      es: "La zona más seca suele ser el interior de la Gran Llanura (Alföld).",
      en: "The driest area is often the inner Great Plain (Alföld).",
    },

    {
      hu: "8) Víz a medencében: a <strong>folyók befelé tartanak</strong>; a <strong>vízszint ingadozik</strong> az <strong>egyenlőtlen csapadék</strong> miatt, ezért <strong>árvízveszély</strong> is van.",
      es: "8) Agua: los ríos tienden hacia adentro; el nivel varía por la lluvia desigual, por eso hay riesgo de inundación.",
      en: "8) Water: rivers tend inward; water levels vary due to uneven rainfall, so flood risk exists.",
    },
    {
      hu: "Árvíztípusok: <strong>jeges ár</strong> (<strong>hó‑/jégolvadás</strong> a <strong>tél végén</strong>, <strong>kora tavasszal</strong>) és <strong>zöldár</strong> (<strong>sok eső</strong> a <strong>tavasz végén</strong>, <strong>nyár elején</strong>).",
      es: "Tipos: crecida de hielo (deshielo) y zöldár (mucha lluvia a finales de primavera/inicios de verano).",
      en: "Types: ice flood (snow/ice melt) and green flood (heavy rains in late spring/early summer).",
    },
    {
      hu: "Magyarország a medence <strong>mélyebb részein</strong> fekszik, ezért a folyók <strong>esése kicsi</strong>, <strong>vízenergia‑termelésre</strong> kevésbé <strong>kedvező</strong>.",
      es: "Hungría está en la parte más baja de la cuenca; por eso la pendiente de los ríos es pequeña és no es ideal para hidroelectricidad.",
      en: "Hungary lies in lower parts of the basin; river gradients are small, so hydropower is less favorable.",
    },

    {
      hu: "9) A táj arculata: az elmúlt ~<strong>1000 évben</strong> az <strong>ember</strong> sokat alakított rajta (<strong>erdőirtás</strong>, <strong>mezőgazdaság</strong> terjeszkedése, <strong>folyószabályozások</strong>, <strong>gátak</strong>).",
      es: "9) Paisaje: en ~1000 años el ser humano lo transformó mucho (deforestación, expansión agrícola, regulación de ríos, diques).",
      en: "9) Landscape: over ~1000 years humans reshaped it strongly (deforestation, farming expansion, river regulation, levees).",
    },
    {
      hu: "A <strong>folyószabályozás</strong> és <strong>gátépítés</strong> különösen a <strong>18. századtól</strong> vált jellemzővé (tananyag kulcsszó: '<strong>gát</strong>').",
      es: "La regulación fluvial y los diques se vuelven típicos desde el siglo XVIII (palabra clave: ‘dique’).",
      en: "River regulation and levees become typical from the 18th century (key word: ‘levee’).",
    },

    {
      hu: "10) <strong>Földtani háttér</strong> (elég 1 mondat): a terület <strong>lemezszegélyhez</strong> kötődik, ezért a <strong>Kárpát‑medence</strong> földtani múltja <strong>összetett</strong>.",
      es: "10) Geología (basta 1 frase): está ligada a un borde de placas, por eso su historia geológica es compleja.",
      en: "10) Geology (one sentence is enough): linked to a plate margin, so the basin’s geological history is complex.",
    },
    {
      hu: "A <strong>jégkorszakban</strong> az észak felől előrenyomuló <strong>jég</strong> nem érte el a <strong>Kárpát‑medencét</strong>; a felszínt főleg <strong>folyók</strong> és a <strong>szél</strong> formálta.",
      es: "En la glaciación el hielo del norte no llegó a la cuenca; el relieve lo modelaron sobre todo ríos y viento.",
      en: "During the Ice Age northern ice did not reach the basin; rivers and wind shaped the surface.",
    },
    {
      hu: "A <strong>szél</strong> finom port (<strong>löszt</strong>) fújt be a medencébe – ebből jó <strong>termőtalaj</strong> is kialakult (<strong>mezőgazdasághoz</strong> kapcsolható).",
      es: "El viento transportó polvo fino (loess) al interior; de ahí se formaron suelos fértiles (ligado a la agricultura).",
      en: "Wind blew fine dust (loess) into the basin, creating fertile soils (linked to agriculture).",
    },
  ],

  // --- extra details (only if she wants to sound “pro”) ---
  extended: [
    {
      hu: "Európa <strong>regionális felosztása</strong> (tanári lista): <strong>Nyugat‑Európa</strong>, <strong>Dél‑Európa</strong>, <strong>Észak‑Európa</strong>, <strong>Közép‑Európa</strong>, <strong>Kelet‑Európa</strong>.",
      es: "Regiones (lista): Europa Occidental, Meridional, Septentrional, Central y Oriental.",
      en: "Regional division (class list): Western, Southern, Northern, Central, Eastern Europe.",
    },
    {
      hu: "Az <strong>Atlanti‑óceán</strong> erős <strong>párolgása</strong> és a <strong>nyugatias szelek</strong> miatt a kontinens <strong>nyugati felén</strong> sok a <strong>csapadék</strong>; ez a <strong>zöld legelőknek</strong> is kedvez (pl. <strong>füves sportok</strong> elterjedése).",
      es: "Por la evaporación del Atlántico y los vientos del oeste, el oeste es lluvioso; favorece praderas verdes (ej. deportes en césped).",
      en: "Atlantic evaporation + westerlies make the west rainy; it supports green pastures (e.g., grass sports).",
    },
    {
      hu: "A <strong>csapadékeloszlást</strong> két <strong>kulcsszóval</strong> magyarázd: <strong>óceántól való távolság</strong> + <strong>domborzat</strong> (<strong>orografikus csapadék</strong> a <strong>hegyeknél</strong>).",
      es: "Explica la precipitación con dos claves: distancia al océano + relieve (lluvia orográfica en montañas).",
      en: "Explain precipitation with two keys: distance from ocean + relief (orographic rainfall in mountains).",
    },
    {
      hu: "<strong>Vízgazdálkodási</strong> mondat (ha kérdezik): a <strong>beérkező folyóvizek</strong> miatt a <strong>vízkészlet</strong> sokszor <strong>nagyobb</strong>, mint a helyben lehulló <strong>csapadék</strong>, de a <strong>területi eloszlás</strong> kedvezőtlen lehet.",
      es: "Frase de gestión del agua: por los ríos entrantes el recurso puede ser mayor que la lluvia local, pero la distribución espacial no siempre es favorable.",
      en: "Water management sentence: inflowing rivers can make water resources larger than local rainfall, but spatial distribution can be unfavorable.",
    },
    {
      hu: "Kapcsolás <strong>mezőgazdasághoz</strong>: a <strong>löszös talaj</strong> <strong>termékeny</strong>, ezért sok a <strong>szántóföld</strong>; ugyanakkor az <strong>aszályos időszakok</strong> <strong>kockázatot</strong> jelentenek.",
      es: "Conexión con agricultura: suelos de loess son fértiles, por eso hay mucho cultivo; pero la sequía es un riesgo.",
      en: "Link to farming: loess soils are fertile, so arable land is extensive; drought periods are a risk.",
    },
  ],

  // --- flashcards: short Q/A for speaking practice ---
  flashcards: [
    {
      id: "g1f1",
      front: { hu: "Hol helyezkedik el Magyarország természetföldrajzi szempontból?", es: "¿Dónde está Hungría (geografía física)?", en: "Where is Hungary (physical geography)?" },
      back: {
        hu: "Közép‑Európában, a Kárpát‑medence központi részén, a mérsékelt övezetben.",
        es: "En Europa Central, en la parte central de la cuenca de los Cárpatos, en zona templada.",
        en: "In Central Europe, in the central Carpathian Basin, in the temperate zone.",
      },
    },
    {
      id: "g1f2",
      front: { hu: "Európa földrajzilag minek a része?", es: "¿De qué forma parte Europa geográficamente?", en: "Geographically, Europe is part of what?" },
      back: { hu: "Eurázsia része.", es: "De Eurasia.", en: "Eurasia." },
    },
    {
      id: "g1f3",
      front: { hu: "Mondj 3 éghajlatot alakító tényezőt!", es: "Di 3 factores del clima.", en: "Say 3 climate factors." },
      back: {
        hu: "Óceántól való távolság; tengeráramlások; domborzat (és a nyugatias szelek hatása).",
        es: "Distancia al océano; corrientes marinas; relieve (y vientos del oeste).",
        en: "Distance from ocean; ocean currents; relief (and westerlies).",
      },
    },
    {
      id: "g1f4",
      front: { hu: "Mit jelent: kontinentális éghajlat?", es: "¿Qué es clima continental?", en: "What is a continental climate?" },
      back: {
        hu: "Nagyobb hőingás: hidegebb tél, melegebb nyár; a csapadék is egyenlőtlenebb lehet.",
        es: "Mayor amplitud térmica: inviernos más fríos y veranos más calurosos; la lluvia puede ser más irregular.",
        en: "Larger temperature range: colder winters, hotter summers; precipitation can be more uneven.",
      },
    },
    {
      id: "g1f5",
      front: { hu: "Hogyan változik a csapadék Európában nyugatról keletre?", es: "¿Cómo cambia la lluvia de oeste a este?", en: "How does precipitation change west→east?" },
      back: {
        hu: "Általában csökken, mert távolodunk az Atlanti‑óceántól.",
        es: "Generalmente disminuye al alejarnos del Atlántico.",
        en: "It generally decreases as we move away from the Atlantic.",
      },
    },
    {
      id: "g1f6",
      front: { hu: "Hol esik több eső a Kárpát‑medencében: hegységben vagy belső síkságon?", es: "¿Dónde llueve más: montañas o interior llano?", en: "Where is it wetter: mountains or inner plains?" },
      back: {
        hu: "A hegységekben, mert a levegő felemelkedik és kicsapódik a nedvesség (orografikus csapadék).",
        es: "En las montañas (lluvia orográfica).",
        en: "In the mountains (orographic precipitation).",
      },
    },
    {
      id: "g1f7",
      front: { hu: "Mi a jeges ár? (1 mondat)", es: "¿Qué es 'jeges ár'?", en: "What is an ice flood?" },
      back: {
        hu: "Tél végén/kora tavasszal a hó‑ és jégolvadás miatt levonuló árhullám a folyókon.",
        es: "Crecida por deshielo de nieve y hielo a finales de invierno/inicios de primavera.",
        en: "A flood wave in late winter/early spring caused by snow and ice melt.",
      },
    },
    {
      id: "g1f8",
      front: { hu: "Mi a zöldár? (1 mondat)", es: "¿Qué es 'zöldár'?", en: "What is a 'green flood'?" },
      back: {
        hu: "Késő tavasszal/nyár elején a sok csapadék miatt kialakuló árhullám.",
        es: "Crecida por mucha lluvia a finales de primavera/inicios de verano.",
        en: "A flood wave in late spring/early summer caused by heavy rainfall.",
      },
    },
    {
      id: "g1f9",
      front: { hu: "Nevezz meg 3 emberi beavatkozást a Kárpát‑medencében!", es: "Nombra 3 intervenciones humanas.", en: "Name 3 human interventions." },
      back: {
        hu: "Erdőirtás és mezőgazdaság terjeszkedése; folyószabályozás; gátépítés (és új erdők telepítése a közelmúltban).",
        es: "Deforestación/expansión agrícola; regulación de ríos; construcción de diques (y reforestación reciente).",
        en: "Deforestation/farming expansion; river regulation; levee building (and recent reforestation).",
      },
    },
    {
      id: "g1f10",
      front: { hu: "Mondj 1 adatot Magyarország magassági viszonyaira!", es: "Di 1 dato sobre altitud.", en: "Give 1 fact about altitude." },
      back: {
        hu: "A terület 68%-a 200 m alatt van (30% 200–400 m, 2% 400 m fölött).",
        es: "68% está bajo 200 m (30% 200–400 m, 2% sobre 400 m).",
        en: "68% is below 200 m (30% 200–400 m, 2% above 400 m).",
      },
    },
  ],

  // --- quiz: ONLY use types supported by your current app.js (mcq, match, order, image-mcq) ---
  quiz: [
    {
      id: "g1q1",
      type: "mcq",
      prompt: {
        hu: "Európa földrajzilag minek a része?",
        es: "¿Europa es parte de qué (geográficamente)?",
        en: "Geographically, Europe is part of what?",
      },
      options: [
        { hu: "Eurázsia", es: "Eurasia", en: "Eurasia" },
        { hu: "Afrika", es: "África", en: "Africa" },
        { hu: "Ausztrália", es: "Australia", en: "Australia" },
        { hu: "Amerika", es: "América", en: "America" },
      ],
      answerIndex: 0,
      explanation: {
        hu: "Európát sokszor külön kontinensként említjük, de földrajzilag Eurázsia része.",
        es: "Se trata como continente, pero geográficamente es Eurasia.",
        en: "Often treated as a continent, but geographically it’s Eurasia.",
      },
    },

    {
      id: "g1q2",
      type: "match",
      prompt: {
        hu: "Párosítsd: európai határ → hol van?",
        es: "Empareja: límite de Europa → ubicación",
        en: "Match: Europe boundary → where",
      },
      left: [
        { k: "Ural", hu: "Uráli‑hegység", es: "Montes Urales", en: "Ural Mountains" },
        { k: "Kaukazus", hu: "Kaukázus", es: "Cáucaso", en: "Caucasus" },
        { k: "Boszporusz", hu: "Boszporusz + Dardanellák", es: "Bósforo + Dardanelos", en: "Bosporus + Dardanelles" },
        { k: "Gibraltar", hu: "Gibraltári‑szoros", es: "Estrecho de Gibraltar", en: "Strait of Gibraltar" },
      ],
      right: [
        { k: "Kelet", hu: "Keleti határ (Ázsia felé)", es: "Límite oriental (hacia Asia)", en: "Eastern boundary (toward Asia)" },
        { k: "Delkelet", hu: "Délkeleti átmenet (Fekete‑tenger térsége)", es: "Transición sureste (zona del mar Negro)", en: "SE transition (Black Sea area)" },
        { k: "Torok", hu: "Tengerszoros Törökországnál", es: "Estrechos en Turquía", en: "Straits by Turkey" },
        { k: "Delnyugat", hu: "Dél‑nyugati kapu az Atlanti‑óceán felé", es: "Puerta suroeste al Atlántico", en: "SW gateway to the Atlantic" },
      ],
      pairs: { Ural: "Kelet", Kaukazus: "Delkelet", Boszporusz: "Torok", Gibraltar: "Delnyugat" },
    },

    {
      id: "g1q3",
      type: "mcq",
      prompt: {
        hu: "Melyik NEM tipikus éghajlatot meghatározó tényező a listában?",
        es: "¿Cuál NO es un factor típico del clima?",
        en: "Which is NOT a typical climate factor?",
      },
      options: [
        { hu: "Az óceántól való távolság", es: "Distancia al océano", en: "Distance from the ocean" },
        { hu: "Tengeráramlások", es: "Corrientes marinas", en: "Ocean currents" },
        { hu: "Domborzati viszonyok", es: "Relieve", en: "Relief/topography" },
        { hu: "A városok elhelyezkedése", es: "Ubicación de las ciudades", en: "Location of cities" },
      ],
      answerIndex: 3,
      explanation: {
        hu: "A tananyag szerint a fő tényezők: távolság az óceántól, tengeráramlások, domborzat (és a szelek).",
        es: "Según el tema: distancia, corrientes, relieve (y vientos).",
        en: "Per the lesson: distance, currents, relief (and winds).",
      },
    },

    {
      id: "g1q4",
      type: "mcq",
      prompt: {
        hu: "Hol található Magyarország természetföldrajzi szempontból?",
        es: "¿Dónde está Hungría (geografía física)?",
        en: "Where is Hungary (physical geography)?",
      },
      options: [
        { hu: "A Kárpát‑medence központi részén", es: "En el centro de la cuenca de los Cárpatos", en: "In the central Carpathian Basin" },
        { hu: "Skandináviában", es: "En Escandinavia", en: "In Scandinavia" },
        { hu: "Az Ibériai‑félszigeten", es: "En la península ibérica", en: "On the Iberian Peninsula" },
        { hu: "A Balkán legdélibb részén", es: "En el extremo sur de los Balcanes", en: "In the far south of the Balkans" },
      ],
      answerIndex: 0,
    },

      {
      id: "g1q5",
      type: "match",
      prompt: {
        hu: "Párosítsd: tengerszint feletti magasság → síkság?",
        es: "Empareja: altitud creciente → categorías",
        en: "Match: elevation → categories",
      },
      left: [
          { k: "MelysegSzam", hu: "200m alatt", es: "200m alatt", en: "200m alatt" },
          { k: "AlfoldSzam", hu: "0-200m", es: "0-200m", en: "0-200m" },
          { k: "HatsagSzam", hu: "200-500m", es: "200-500m", en: "200-500m" },
          { k: "FennsikSzam", hu: "500m felett", es: "500m felett", en: "500m felett" },
      ],
      right: [
          { k: "Melyseg", hu: "Mélység", es: "Mélység", en: "Mélység" },
          { k: "Alfold", hu: "Alföld", es: "Alföld", en: "Alföld" },
          { k: "Hatsag", hu: "Hátság", es: "Hátság", en: "Hátság" },
          { k: "Fennsik", hu: "Fennsík", es: "Fennsík", en: "Fennsík" },
      ],
          pairs: { MelysegSzam: "Melyseg", AlfoldSzam: "Alfold", HatsagSzam: "Hatsag", FennsikSzam: "Fennsik" },
    },

    {
      id: "g1q6",
      type: "mcq",
      prompt: {
        hu: "Hol esik általában több csapadék a Kárpát‑medencében?",
        es: "¿Dónde suele llover más en la cuenca?",
        en: "Where is precipitation generally higher in the basin?",
      },
      options: [
        { hu: "A hegységekben", es: "En las montañas", en: "In the mountains" },
        { hu: "A medence belsejében", es: "En el interior de la cuenca", en: "In the basin interior" },
        { hu: "Mindig ugyanannyi", es: "Siempre igual", en: "Always the same" },
        { hu: "Csak a folyók mellett", es: "Solo junto a ríos", en: "Only near rivers" },
      ],
      answerIndex: 0,
      explanation: {
        hu: "A hegyek felemelik a levegőt → több felhő és csapadék (orografikus hatás).",
        es: "Montañas elevan el aire → lluvia orográfica.",
        en: "Mountains lift air → more orographic rainfall.",
      },
    },

    {
      id: "g1q7",
      type: "match",
      prompt: {
        hu: "Párosítsd: árvíztípus → mikor és miért?",
        es: "Empareja: tipo de crecida → cuándo y por qué",
        en: "Match: flood type → when and why",
      },
      left: [
        { k: "Jeges", hu: "Jeges ár", es: "Crecida de hielo", en: "Ice flood" },
        { k: "Zold", hu: "Zöldár", es: "Zöldár", en: "Green flood" },
      ],
      right: [
        { k: "Telvege", hu: "Tél vége / kora tavasz – hó‑ és jégolvadás", es: "Final de invierno / inicio de primavera – deshielo", en: "Late winter/early spring – snow/ice melt" },
        { k: "Tavaszvege", hu: "Tavasz vége / nyár eleje – sok csapadék", es: "Final de primavera / inicio de verano – mucha lluvia", en: "Late spring/early summer – heavy rainfall" },
      ],
      pairs: { Jeges: "Telvege", Zold: "Tavaszvege" },
    },

    {
      id: "g1q8",
      type: "mcq",
      prompt: {
        hu: "Miért kevésbé kedvező Magyarországon a folyók vízenergia‑hasznosítása (a tananyag szerint)?",
        es: "¿Por qué es menos favorable la hidroelectricidad en Hungría (según el tema)?",
        en: "Why is hydropower less favorable in Hungary (per the lesson)?",
      },
      options: [
        { hu: "Kicsi a folyók esése (alacsony a lejtés).", es: "La pendiente de los ríos es pequeña.", en: "River gradients are small." },
        { hu: "Nincsenek folyók.", es: "No hay ríos.", en: "There are no rivers." },
        { hu: "Túl magasak a hegyek.", es: "Las montañas son demasiado altas.", en: "Mountains are too high." },
        { hu: "Mindig befagy minden folyó.", es: "Todos los ríos se congelan siempre.", en: "All rivers are always frozen." },
      ],
      answerIndex: 0,
    },

    {
      id: "g1q9",
      type: "mcq",
      prompt: {
        hu: "Melyik példa mutatja legjobban az ember tájalakító tevékenységét a Kárpát‑medencében?",
        es: "¿Qué ejemplo muestra mejor la transformación humana del paisaje?",
        en: "Which example best shows human landscape shaping in the basin?",
      },
      options: [
        { hu: "Folyószabályozás és gátépítés", es: "Regulación de ríos y diques", en: "River regulation and levees" },
        { hu: "Hegységképződés", es: "Formación de montañas", en: "Mountain building" },
        { hu: "Tengeráramlások", es: "Corrientes marinas", en: "Ocean currents" },
        { hu: "A Nap járása", es: "Movimiento del Sol", en: "Movement of the Sun" },
      ],
      answerIndex: 0,
    },

    {
      id: "g1q10",
      type: "mcq",
      prompt: {
        hu: "Milyen az éghajlat a Kárpát‑medence többségében?",
        es: "¿Cómo es el clima en la mayor parte de la cuenca?",
        en: "What is the climate like in most of the Carpathian Basin?",
      },
      options: [
        { hu: "Mérsékelt övezeti, döntően kontinentális", es: "Templado, principalmente continental", en: "Temperate, mainly continental" },
        { hu: "Trópusi", es: "Tropical", en: "Tropical" },
        { hu: "Sivatagi", es: "Desértico", en: "Desert" },
        { hu: "Antarktiszi", es: "Antártico", en: "Antarctic" },
      ],
      answerIndex: 0,
    },
  ],
};
