// Geography topic G6 — Magyarország gazdasága (általános kép + ipar, energia, szolgáltatások)
// Same structure as other topics: intro, summaryBullets, keyPoints, extended, flashcards, quiz.
// Quiz types used: mcq, match, order (align with earlier topics).

export const TOPIC_G6 = {
  id: "g6",
  title: {
    hu: "Magyarország gazdasága",
    es: "Economía de Hungría",
    en: "Economy of Hungary",
  },
  subtitle: {
    hu: "gazdasági szektorok, szocializmus és rendszerváltás, ipar (gépipar, vegyipar, járműgyártás), energia, szolgáltatások, közlekedés, infokommunikáció, turizmus",
    es: "sectores, socialismo y transición, industria, energía, servicios, transporte, info-comunicación, turismo",
    en: "sectors, socialism and transition, industry, energy, services, transport, infocomms, tourism",
  },

  intro: {
    hu:
      "A témám <strong>Magyarország gazdasága</strong>. Először röviden elmondom, hogy a gazdaság több <strong>szektorból</strong> áll: <strong>mezőgazdaság</strong>, <strong>ipar</strong> és <strong>szolgáltatások</strong>. Ezután megemlítem a <strong>szocialista</strong> korszak fő jellemzőit (állami beavatkozás, államosítás), majd a <strong>rendszerváltás</strong> utáni változásokat (piacgazdaság, privatizáció). Kiemelem az <strong>ipar</strong> szerepét (gépipar, vegyipar, járműgyártás), beszélek az <strong>energiagazdaságról</strong> és az <strong>energiahordozókról</strong> (nem megújuló, megújuló). Végül röviden felsorolom a <strong>szolgáltatásokat</strong> (oktatás, egészségügy, pénzügy), a <strong>közlekedést</strong>, az <strong>infokommunikációt</strong> és az <strong>idegenforgalmat</strong>.",
    es:
      "Mi tema es la economía de Hungría. Explico que hay tres grandes sectores: agricultura, industria y servicios. Luego menciono el periodo socialista (intervención estatal y nacionalización) y los cambios tras la transición (economía de mercado y privatización). Destaco la industria (maquinaria, química, automoción), la energía y los tipos de fuentes. Finalmente hablo de servicios (educación, salud, finanzas), transporte, infocomunicación y turismo.",
    en:
      "My topic is Hungary’s economy. I explain the three main sectors: agriculture, industry, and services. Then I mention the socialist period (state intervention and nationalization) and the changes after the transition (market economy and privatization). I highlight industry (machinery, chemicals, vehicle manufacturing), energy and energy sources. Finally I cover services (education, healthcare, finance), transport, infocommunication, and tourism.",
  },

  summaryBullets: [
    {
      hu: "Három nagy szektor: <strong>mezőgazdaság</strong>, <strong>ipar</strong>, <strong>szolgáltatások</strong>.",
      es: "Tres sectores: agricultura, industria, servicios.",
      en: "Three sectors: agriculture, industry, services.",
    },
    {
      hu: "A szocializmusban erős volt az <strong>állami beavatkozás</strong> és az <strong>államosítás</strong>.",
      es: "En el socialismo hubo mucha intervención estatal y nacionalización.",
      en: "In socialism there was strong state intervention and nationalization.",
    },
    {
      hu: "Rendszerváltás után: <strong>piacgazdaság</strong>, <strong>privatizáció</strong>, külföldi tőke is megjelent.",
      es: "Tras la transición: mercado, privatización y capital extranjero.",
      en: "After the transition: market economy, privatization, foreign capital.",
    },
    {
      hu: "Az iparban fontos a <strong>gépipar</strong> és a <strong>vegyipar</strong>; erős a <strong>járműgyártás</strong> is.",
      es: "En industria destacan maquinaria y química; también automoción.",
      en: "Industry highlights: machinery and chemicals; vehicle manufacturing too.",
    },
    {
      hu: "A gazdaságban sok a <strong>szolgáltatás</strong> (oktatás, egészségügy, bankok, kereskedelem).",
      es: "Muchos servicios: educación, salud, banca, comercio.",
      en: "Many services: education, healthcare, banking, trade.",
    },
    {
      hu: "Energia: vannak <strong>nem megújuló</strong> és <strong>megújuló</strong> energiahordozók.",
      es: "Energía: fuentes no renovables y renovables.",
      en: "Energy: non-renewable and renewable sources.",
    },
    {
      hu: "Közlekedés és infrastruktúra: utak, vasút, vízi út, repülés, csővezetékek.",
      es: "Transporte e infraestructura: carreteras, tren, vías fluviales, avión, tuberías.",
      en: "Transport & infrastructure: roads, rail, waterways, air, pipelines.",
    },
    {
      hu: "Turizmus: belföldi és nemzetközi; vonzó a <strong>történelem</strong>, <strong>kultúra</strong>, <strong>termálvíz</strong>.",
      es: "Turismo: interno e internacional; atraen historia, cultura y aguas termales.",
      en: "Tourism: domestic and international; history, culture, thermal waters attract.",
    },
    {
      hu: "<strong>Agrárolló</strong>: amikor a mezőgazdaság költségei gyorsabban nőnek, mint a felvásárlási árak, a gazdáknak nehezebb.",
      es: "‘Tijera agraria’: suben más rápido los costes que los precios de compra.",
      en: "‘Agricultural price scissors’: costs rise faster than farm-gate prices.",
    },
  ],

  keyPoints: [
    {
      hu: "1) A gazdaságban három fő szektor van: mezőgazdaság, ipar, szolgáltatások.",
      es: "1) La economía tiene tres sectores: agricultura, industria, servicios.",
      en: "1) The economy has three sectors: agriculture, industry, services.",
    },
    {
      hu: "2) A szocialista rendszerben sok volt az állami tulajdon, a piac szerepe kisebb volt, és a döntések felülről jöttek.",
      es: "2) En el socialismo había mucha propiedad estatal y menos mercado; decisiones desde arriba.",
      en: "2) In socialism, state ownership was high, markets were limited, and decisions were top-down.",
    },
    {
      hu: "3) A 'gulyáskommunizmus' alatt javult a fogyasztás és az árubőség, de közben nőtt az eladósodás, és lassult a fejlődés.",
      es: "3) En el 'comunismo gulash' hubo más consumo, pero también deuda y estancamiento.",
      en: "3) In 'goulash communism' consumption improved, but debt rose and growth slowed.",
    },
    {
      hu: "4) A rendszerváltás után a gazdaság piacgazdasággá vált, és sok helyen privatizáció történt.",
      es: "4) Tras la transición, economía de mercado y privatización.",
      en: "4) After the transition, a market economy and privatization followed.",
    },
    {
      hu: "5) Az iparban a gépipar azért erős lehet, mert kell hozzá szakképzett munkaerő, infrastruktúra, tőke és felvevőpiac.",
      es: "5) La maquinaria es fuerte si hay mano de obra, infraestructura, capital y mercado.",
      en: "5) Machinery can be strong with skilled labour, infrastructure, capital, and markets.",
    },
    {
      hu: "6) Jellemző ipari ágazat a járműgyártás: autók és alkatrészek készülnek, sokszor beszállítói láncban.",
      es: "6) Sector típico: automoción, coches y piezas en cadena de proveedores.",
      en: "6) Typical sector: vehicle manufacturing, cars and parts in supplier chains.",
    },
    {
      hu: "7) Energiagazdaság: a lakosság, a közlekedés, az ipar és a szolgáltatások sok energiát használnak.",
      es: "7) Energía: hogares, transporte, industria y servicios consumen mucho.",
      en: "7) Energy: households, transport, industry and services use a lot.",
    },
    {
      hu: "8) Nem megújuló energiahordozók: kőszén, kőolaj, földgáz, nukleáris üzemanyag. Megújulók: nap, szél, víz, geotermikus energia, biomassza.",
      es: "8) No renovables: carbón, petróleo, gas, nuclear. Renovables: solar, viento, agua, geotermia, biomasa.",
      en: "8) Non-renewables: coal, oil, gas, nuclear. Renewables: solar, wind, hydro, geothermal, biomass.",
    },
    {
      hu: "9) Szolgáltatások: oktatás, egészségügy, kereskedelem, közlekedés, kommunikáció, pénzügy (bankok).",
      es: "9) Servicios: educación, salud, comercio, transporte, comunicación, finanzas.",
      en: "9) Services: education, healthcare, trade, transport, communication, finance.",
    },
    {
      hu: "10) A versenyszférában gyakran magasabb a bér és van cafeteria, de több a teljesítményelvárás; az állami szférában stabilabb lehet a munka.",
      es: "10) Sector privado: más salario y bonos pero más presión; sector público: más estabilidad.",
      en: "10) Private sector: often higher pay/benefits but more pressure; public sector: more stability.",
    },
    {
      hu: "11) Közlekedés: közutak, vasutak, vízi utak, légi folyosók, csővezetékek, és a kapcsolódó létesítmények (pályaudvar, kikötő).",
      es: "11) Transporte: carreteras, tren, vías fluviales, aire, tuberías y sus instalaciones.",
      en: "11) Transport: roads, rail, waterways, air routes, pipelines, and facilities.",
    },
    {
      hu: "12) Infokommunikáció: mobiltelefon, internet, digitális szolgáltatások; ez fontos a modern gazdaságban.",
      es: "12) Info-comunicación: móvil, internet, servicios digitales; clave en economía moderna.",
      en: "12) Infocommunication: mobile, internet, digital services; key in modern economy.",
    },
    {
      hu: "13) Idegenforgalom: belföldi és nemzetközi turizmus; fontos lehet Budapest, a Balaton, és a gyógyfürdők.",
      es: "13) Turismo: interno e internacional; Budapest, Balaton y termas son importantes.",
      en: "13) Tourism: domestic and international; Budapest, Lake Balaton, and spas matter.",
    },
    {
      hu: "14) Régiókban eltérhet, melyik szektor erős: Budapest inkább szolgáltató központ, sok vidéki térségben erős lehet az ipar vagy a mezőgazdaság.",
      es: "14) Por regiones varía: Budapest es más de servicios; en otras zonas pesa industria o agricultura.",
      en: "14) By region it varies: Budapest is more service-based; elsewhere industry or agriculture can dominate.",
    },
    {
      hu: "15) Térségi példa (általánosan): <strong>Budapest</strong> inkább szolgáltató központ, <strong>Nyugat‑Dunántúlon</strong> erősebb lehet a feldolgozóipar és a járműipar, az <strong>Alföldön</strong> fontos a mezőgazdaság és az élelmiszeripar, a <strong>Balaton</strong> térségében pedig a turizmus.",
      es: "15) Ejemplo regional: Budapest = servicios; Oeste = industria/automoción; Gran Llanura = agricultura/alimentos; Balaton = turismo.",
      en: "15) Regional example: Budapest = services; West = manufacturing/automotive; Great Plain = agriculture/food; Balaton area = tourism.",
    },
    {
      hu: "16) Az <strong>agrárolló</strong> azt jelenti, hogy a gazdák költségei (pl. üzemanyag, műtrágya) gyorsabban nőnek, mint amennyiért el tudják adni a terményt.",
      es: "16) La ‘tijera agraria’: costes suben más rápido que el precio de venta del producto.",
      en: "16) ‘Agricultural price scissors’: input costs rise faster than sale prices for products.",
    },
  ],

  extended: [
    {
      hu: "A mezőgazdaság (lásd a külön témát) ma általában kisebb részarányt ad a GDP‑ben és a foglalkoztatásban, mint régen, ezért fontos a feldolgozás és a magasabb hozzáadott érték.",
      es: "La agricultura hoy suele tener menor peso que antes; por eso importa procesar y crear más valor.",
      en: "Agriculture today typically has a smaller share than earlier; processing and higher value added matter.",
    },
    {
      hu: "A hidegháború idején Magyarország a keleti blokkhoz tartozott, ezért nem vett részt a <strong>Marshall‑tervben</strong>.",
      es: "Durante la Guerra Fría, Hungría estaba en el bloque del Este y no participó en el Plan Marshall.",
      en: "During the Cold War, Hungary belonged to the Eastern bloc and did not take part in the Marshall Plan.",
    },
    {
      hu: "A szocialista korszakban nőtt az állami kontroll: államosítás, bürokrácia, és a magántulajdon szerepe csökkent.",
      es: "En el socialismo creció el control estatal: nacionalización y burocracia.",
      en: "In the socialist era state control increased: nationalization and bureaucracy.",
    },
    {
      hu: "A 'fridzsiderszocializmus' lényege: a fogyasztás javult (tartós élelmiszer, háztartási gépek), de a gazdaság hosszú távon lelassult, és nőtt az eladósodás.",
      es: "El 'socialismo del frigorífico' mejoró consumo, pero hubo estancamiento y deuda.",
      en: "‘Fridge socialism’ improved consumption, but brought stagnation and debt.",
    },
    {
      hu: "Az 1970-es évek olajválsága után sok ország újított, de a megújulás nem mindig volt elég gyors; technológiai import és eladósodás is megjelent.",
      es: "Tras la crisis del petróleo, la modernización fue a veces lenta; hubo importación tecnológica y deuda.",
      en: "After the oil crisis, modernization was sometimes slow; tech imports and debt appeared.",
    },
    {
      hu: "A rendszerváltás után privatizáció történt: állami cégek kerültek magánkézbe. Ez gyors változás volt, ezért voltak nyertesek és vesztesek is.",
      es: "Tras la transición, privatización: empresas estatales pasaron a manos privadas.",
      en: "After the transition, privatization moved state firms to private hands.",
    },
    {
      hu: "Az iparban a gépipar és a vegyipar sok helyen húzóágazat. A járműgyártásnál fontos a beszállítói hálózat és a jó közlekedés.",
      es: "En industria, maquinaria y química tiran; en automoción importan proveedores y transporte.",
      en: "In industry, machinery and chemicals can drive growth; automotive relies on supplier networks and transport.",
    },
    {
      hu: "Energia: elsődleges energiahordozók (pl. kőolaj, földgáz) és másodlagosak (villamos energia, üzemanyagok). A cél gyakran a hatékonyság és a megújulók növelése.",
      es: "Energía: primarias y secundarias; objetivo: eficiencia y más renovables.",
      en: "Energy: primary and secondary carriers; goals: efficiency and more renewables.",
    },
    {
      hu: "Szolgáltatásoknál Budapest súlya nagy: sok egyetem, kórház, bank és nagyvállalati központ található itt.",
      es: "En servicios, Budapest pesa mucho: universidades, hospitales, bancos y sedes.",
      en: "In services, Budapest has strong weight: universities, hospitals, banks, HQs.",
    },
    {
      hu: "Idegenforgalom: a termálvíz, a történelmi városkép, fesztiválok és a gasztronómia is vonzó lehet.",
      es: "Turismo: termas, ciudad histórica, festivales y gastronomía.",
      en: "Tourism: spas, historic cityscape, festivals, gastronomy.",
    },
  ],

  flashcards: [
    {
      id: "g6c1",
      front: { hu: "Sorold fel a 3 gazdasági szektort!", es: "Nombra 3 sectores", en: "Name 3 sectors" },
      back: { hu: "Mezőgazdaság, ipar, szolgáltatások.", es: "Agricultura, industria, servicios.", en: "Agriculture, industry, services." },
    },
    {
      id: "g6c2",
      front: { hu: "Mit jelent: privatizáció?", es: "¿Qué es privatización?", en: "What is privatization?" },
      back: { hu: "Állami tulajdonból magántulajdon lesz.", es: "De estatal a privada.", en: "From state-owned to private." },
    },
    {
      id: "g6c3",
      front: { hu: "Mi volt jellemző a szocialista gazdaságra? (2 szó)", es: "Socialismo: 2 ideas", en: "Socialism: 2 ideas" },
      back: { hu: "Államosítás, erős állami beavatkozás.", es: "Nacionalización e intervención estatal.", en: "Nationalization and state intervention." },
    },
    {
      id: "g6c4",
      front: { hu: "Mondj 2 fontos iparágat!", es: "2 industrias importantes", en: "2 important industries" },
      back: { hu: "Gépipar és vegyipar (plusz járműgyártás).", es: "Maquinaria y química (más automoción).", en: "Machinery and chemicals (plus automotive)." },
    },
    {
      id: "g6c5",
      front: { hu: "Nem megújuló vs megújuló: 2-2 példa", es: "2 no renovables y 2 renovables", en: "2 non-renewable and 2 renewable" },
      back: { hu: "Nem: kőolaj, földgáz. Meg: nap, geotermikus (vagy szél).", es: "No: petróleo, gas. Sí: solar, geotermia.", en: "Non: oil, gas. Renewables: solar, geothermal." },
    },
    {
      id: "g6c6",
      front: { hu: "Mi tartozik a szolgáltatásokhoz? (2 példa)", es: "Servicios: 2 ejemplos", en: "Services: 2 examples" },
      back: { hu: "Oktatás, egészségügy, bankok, kereskedelem.", es: "Educación, salud, banca, comercio.", en: "Education, healthcare, banking, trade." },
    },
    {
      id: "g6c7",
      front: { hu: "Állami szféra vs versenyszféra (1-1 jellemző)", es: "Público vs privado (1-1)", en: "Public vs private (1-1)" },
      back: { hu: "Állami: stabilabb. Verseny: gyakran magasabb bér, több elvárás.", es: "Público: más estable. Privado: más salario, más presión.", en: "Public: more stable. Private: higher pay, more pressure." },
    },
    {
      id: "g6c8",
      front: { hu: "Miért fontos a közlekedés a gazdaságban?", es: "Importancia del transporte", en: "Why transport matters" },
      back: { hu: "Segíti az áruk és emberek mozgását, így a termelést és kereskedelmet.", es: "Ayuda a mover bienes y personas.", en: "It moves goods and people, supporting production and trade." },
    },
    {
      id: "g6c9",
      front: { hu: "Mit jelent: infokommunikáció?", es: "¿Qué es infocomunicación?", en: "What is infocommunication?" },
      back: { hu: "Telefon, internet, média és digitális szolgáltatások együtt.", es: "Teléfono, internet, medios y digital.", en: "Phone, internet, media and digital services together." },
    },
    {
      id: "g6c10",
      front: { hu: "Mondj 2 turisztikai vonzerőt!", es: "2 atractivos turísticos", en: "2 tourist attractions" },
      back: { hu: "Budapest, Balaton, gyógyfürdők/termálvíz.", es: "Budapest, Balaton, termas.", en: "Budapest, Lake Balaton, spas/thermal waters." },
    },
    {
      id: "g6c11",
      front: { hu: "Mit jelent: agrárolló?", es: "¿Qué es la ‘tijera agraria’?", en: "What is ‘agricultural price scissors’?" },
      back: {
        hu: "A mezőgazdaság költségei gyorsabban nőnek, mint a felvásárlási árak, ezért nehezebb nyereséget elérni.",
        es: "Los costes suben más rápido que los precios de compra, por eso es más difícil ganar.",
        en: "Input costs rise faster than farm-gate prices, so it is harder to make profit.",
      },
    },
    {
      id: "g6c12",
      front: { hu: "Mondj egy példát: Budapesthez melyik szektor kapcsolódik erősebben?", es: "Ejemplo: ¿qué sector es fuerte en Budapest?", en: "Example: which sector is strong in Budapest?" },
      back: {
        hu: "A szolgáltatások: bankok, egyetemek, nagyvállalati központok, kereskedelem.",
        es: "Servicios: bancos, universidades, sedes, comercio.",
        en: "Services: banks, universities, HQs, trade.",
      },
    },
  ],

  quiz: [
    {
      id: "g6q1",
      type: "mcq",
      prompt: { hu: "Melyik a 3 fő gazdasági szektor?", es: "¿Cuáles son los 3 sectores?", en: "Which are the 3 sectors?" },
      options: [
        { hu: "Mezőgazdaság, ipar, szolgáltatások", es: "Agricultura, industria, servicios", en: "Agriculture, industry, services" },
        { hu: "Folyók, hegyek, tavak", es: "Ríos, montañas, lagos", en: "Rivers, mountains, lakes" },
        { hu: "Nyár, ősz, tél", es: "Verano, otoño, invierno", en: "Summer, autumn, winter" },
        { hu: "Vasút, autó, repülő", es: "Tren, coche, avión", en: "Rail, car, plane" },
      ],
      answerIndex: 0,
    },
    {
      id: "g6q2",
      type: "match",
      prompt: { hu: "Párosítsd: energiahordozó → típus", es: "Empareja: fuente → tipo", en: "Match: source → type" },
      left: [
        { k: "SZEN", hu: "Kőszén", es: "Carbón", en: "Coal" },
        { k: "NAP", hu: "Napenergia", es: "Solar", en: "Solar" },
        { k: "GAZ", hu: "Földgáz", es: "Gas", en: "Natural gas" },
        { k: "GEO", hu: "Geotermikus energia", es: "Geotermia", en: "Geothermal" },
      ],
      right: [
        { k: "NEM", hu: "Nem megújuló", es: "No renovable", en: "Non-renewable" },
        { k: "MEG", hu: "Megújuló", es: "Renovable", en: "Renewable" },
      ],
      pairs: { SZEN: "NEM", GAZ: "NEM", NAP: "MEG", GEO: "MEG" },
    },
    {
      id: "g6q3",
      type: "mcq",
      prompt: { hu: "Mit jelent a privatizáció?", es: "¿Qué es privatización?", en: "What is privatization?" },
      options: [
        { hu: "Állami tulajdonból magántulajdon lesz", es: "De estatal a privada", en: "From state-owned to private" },
        { hu: "Két város összeolvad", es: "Dos ciudades se unen", en: "Two cities merge" },
        { hu: "Több eső esik", es: "Llueve más", en: "More rainfall" },
        { hu: "A hegyek nőnek", es: "Crecen montañas", en: "Mountains grow" },
      ],
      answerIndex: 0,
    },
    {
      id: "g6q4",
      type: "mcq",
      prompt: { hu: "Melyik ipari ágazat tartozik a gépiparhoz?", es: "¿Cuál es maquinaria?", en: "Which belongs to machinery industry?" },
      options: [
        { hu: "Gépek és járműalkatrészek gyártása", es: "Máquinas y piezas", en: "Manufacturing machines and vehicle parts" },
        { hu: "Búza termesztése", es: "Cultivar trigo", en: "Growing wheat" },
        { hu: "Idegenvezetés", es: "Guía turística", en: "Tour guiding" },
        { hu: "Folyószabályozás", es: "Regular ríos", en: "River regulation" },
      ],
      answerIndex: 0,
    },
    {
      id: "g6q5",
      type: "match",
      prompt: { hu: "Párosítsd: szektor → példa", es: "Empareja: sector → ejemplo", en: "Match: sector → example" },
      left: [
        { k: "MEZ", hu: "Mezőgazdaság", es: "Agricultura", en: "Agriculture" },
        { k: "IP", hu: "Ipar", es: "Industria", en: "Industry" },
        { k: "SZOLG", hu: "Szolgáltatások", es: "Servicios", en: "Services" },
      ],
      right: [
        { k: "A", hu: "Búza és kukorica", es: "Trigo y maíz", en: "Wheat and maize" },
        { k: "B", hu: "Járműgyártás", es: "Automoción", en: "Vehicle manufacturing" },
        { k: "C", hu: "Bankok és biztosítás", es: "Bancos y seguros", en: "Banking and insurance" },
      ],
      pairs: { MEZ: "A", IP: "B", SZOLG: "C" },
    },
    {
      id: "g6q6",
      type: "mcq",
      prompt: { hu: "Melyik állítás igaz a szolgáltatásokról?", es: "¿Cuál es verdad sobre servicios?", en: "Which is true about services?" },
      options: [
        { hu: "Nem mindig tárgyat adnak, hanem tevékenységet (pl. oktatás).", es: "No siempre dan un objeto, sino actividad.", en: "They often provide an activity, not a physical good." },
        { hu: "Csak a mezőgazdaság részei.", es: "Solo agricultura.", en: "They are only part of agriculture." },
        { hu: "Csak a hegyekben vannak.", es: "Solo en montañas.", en: "They exist only in mountains." },
        { hu: "Csak nyáron működnek.", es: "Solo en verano.", en: "They operate only in summer." },
      ],
      answerIndex: 0,
    },
    {
      id: "g6q7",
      type: "order",
      prompt: { hu: "Rendezd logikusan: korszak → jellemző", es: "Ordena: periodo → rasgo", en: "Order: period → feature" },
      items: [
        { k: "SZOC", hu: "Szocializmus", es: "Socialismo", en: "Socialism" },
        { k: "AT", hu: "Rendszerváltás után", es: "Tras la transición", en: "After the transition" },
        { k: "MA", hu: "Ma", es: "Hoy", en: "Today" },
      ],
      correctOrder: ["SZOC", "AT", "MA"],
    },
    {
      id: "g6q8",
      type: "mcq",
      prompt: { hu: "Miért fontos az idegenforgalom a gazdaságban?", es: "¿Por qué importa el turismo?", en: "Why is tourism important?" },
      options: [
        { hu: "Mert bevételt hoz és munkahelyeket teremt.", es: "Porque trae ingresos y empleo.", en: "Because it brings income and jobs." },
        { hu: "Mert megemeli a hegyeket.", es: "Porque sube montañas.", en: "Because it raises mountains." },
        { hu: "Mert megváltoztatja a folyók irányát.", es: "Cambia ríos.", en: "Because it changes river directions." },
        { hu: "Mert mindig csökkenti a szolgáltatásokat.", es: "Siempre reduce servicios.", en: "Because it always reduces services." },
      ],
      answerIndex: 0,
    },
    {
      id: "g6q9",
      type: "match",
      prompt: { hu: "Párosítsd: fogalom → rövid magyarázat", es: "Empareja: término → explicación", en: "Match: term → explanation" },
      left: [
        { k: "KOZL", hu: "Közlekedési infrastruktúra", es: "Infraestructura de transporte", en: "Transport infrastructure" },
        { k: "INFO", hu: "Infokommunikáció", es: "Info-comunicación", en: "Infocommunication" },
        { k: "VE", hu: "Versenyszféra", es: "Sector privado", en: "Private sector" },
      ],
      right: [
        { k: "A", hu: "Utak, vasút, kikötők, pályaudvarok", es: "Carreteras, tren, puertos", en: "Roads, rail, ports, stations" },
        { k: "B", hu: "Telefon, internet és digitális szolgáltatások", es: "Teléfono, internet y digital", en: "Phone, internet, digital services" },
        { k: "C", hu: "Piaci alapú cégek, gyakran teljesítményorientált", es: "Empresas del mercado", en: "Market-based firms, often performance-oriented" },
      ],
      pairs: { KOZL: "A", INFO: "B", VE: "C" },
    },
    {
      id: "g6q10",
      type: "match",
      prompt: { hu: "Párosítsd (általános példa): térség → jellemző szektor", es: "Empareja (ejemplo): región → sector típico", en: "Match (general example): region → typical sector" },
      left: [
        { k: "BP", hu: "Budapest", es: "Budapest", en: "Budapest" },
        { k: "WEST", hu: "Nyugat‑Dunántúl", es: "Oeste de Hungría", en: "West Transdanubia" },
        { k: "ALF", hu: "Alföld", es: "Gran Llanura", en: "Great Plain" },
        { k: "BAL", hu: "Balaton térsége", es: "Zona del Balaton", en: "Balaton area" },
      ],
      right: [
        { k: "A", hu: "Szolgáltatások (pénzügy, oktatás, kereskedelem)", es: "Servicios", en: "Services" },
        { k: "B", hu: "Feldolgozóipar, járműipar", es: "Industria/automoción", en: "Manufacturing/automotive" },
        { k: "C", hu: "Mezőgazdaság és élelmiszeripar", es: "Agricultura/alimentos", en: "Agriculture/food" },
        { k: "D", hu: "Turizmus", es: "Turismo", en: "Tourism" },
      ],
      pairs: { BP: "A", WEST: "B", ALF: "C", BAL: "D" },
    },
  ],
};
