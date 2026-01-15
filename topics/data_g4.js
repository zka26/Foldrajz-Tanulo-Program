// Geography topic G4 — Magyarország népessége és népesedési problémái
// Keep HU + EN/ES toggle friendly: every text has hu/es/en.
//
// NOTE: This file is meant to be imported into your main data.js (or collected into DATA.topics).

export const TOPIC_G4 = {
  id: "g4",
  title: {
    hu: "Magyarország népessége és népesedési problémái",
    es: "Población de Hungría y problemas demográficos",
    en: "Population of Hungary and demographic issues",
  },
  subtitle: {
    hu: "népességfogyás, nemzetiségek, roma népesség, elöregedés, kivándorlás, következmények és válaszok",
    es: "disminución poblacional, minorías, población romaní, envejecimiento, emigración, consecuencias és válaszok",
    en: "population decline, minorities, Roma population, ageing, emigration, consequences and responses",
  },

  // --- exam-friendly opener (what she says before the topic) ---
  intro: {
    hu:
      "A témám <strong>Magyarország népessége</strong> és a <strong>népesedési problémák</strong>. Röviden elmondom, hogy a népesség az <strong>1980‑as évek óta</strong> inkább csökken. Beszélek a <strong>születések</strong> és <strong>halálozások</strong> különbségéről (természetes fogyás), a <strong>kivándorlásról</strong>, és arról, hogy a társadalom <strong>öregszik</strong>. Ezután megemlítem a <strong>nemzetiségeket</strong> és a <strong>roma</strong> népességgel kapcsolatos adatokat. Végül összefoglalom a <strong>következményeket</strong> (munkaerő, nyugdíj) és a lehetséges <strong>válaszokat</strong> (családtámogatás, szolgáltatások).",
    es:
      "Mi tema es la población de Hungría y los problemas demográficos. Explico que desde los años 80 la población tiende a bajar. Hablo de nacimientos y defunciones (descenso natural), emigración y envejecimiento. Luego menciono las minorías nacionales y algunos datos sobre la población romaní. Al final resumo consecuencias (trabajo, pensiones) y posibles respuestas (apoyos a familias, servicios).",
    en:
      "My topic is Hungary’s population and demographic issues. I explain that since the 1980s the population has tended to decrease. I talk about births vs deaths (natural decrease), emigration, and ageing. Then I mention national minorities and some data about the Roma population. Finally, I summarise consequences (labour market, pensions) and possible policy responses (family support, services).",
  },

  // --- very short “at-a-glance” bullets (good for quick recall) ---
  summaryBullets: [
    {
      hu: "A népesség az <strong>1980-as évek óta</strong> inkább <strong>csökken</strong>.",
      es: "Desde los años 80 la población tiende a bajar.",
      en: "Since the 1980s the population has tended to decline.",
    },
    {
      hu: "Fogalom: <strong>természetes fogyás</strong> = kevesebb a születés, mint a halálozás.",
      es: "“Descenso natural” = nacen menos de los que mueren.",
      en: "Natural decrease = fewer births than deaths.",
    },
    {
      hu: "A társadalom <strong>öregszik</strong>: nő az idősek aránya, csökken az aktív korúaké.",
      es: "La sociedad envejece: sube la proporción de mayores y baja la de edad activa.",
      en: "The society is ageing: the elderly share rises and the working-age share falls.",
    },
    {
      hu: "A <strong>vándorlás</strong> is alakítja a népességet: kivándorlás és bevándorlás is van.",
      es: "La migración también influye: hay emigración e inmigración.",
      en: "Migration also shapes the population: there is emigration and immigration.",
    },
    {
      hu: "A <strong>nemzetiségi</strong> adatok gyakran <strong>önbevalláson</strong> alapulnak, és az <strong>asszimiláció</strong> miatt nehéz „pontos” számot mondani.",
      es: "Los datos de minorías suelen ser por autoidentificación; la asimilación también influye.",
      en: "Minority figures often rely on self-identification; assimilation also affects numbers.",
    },
    {
      hu: "Következmény: kevesebb aktív korú embernek kell több idős embert ellátni → gond a munkaerőpiacon és a nyugdíjnál.",
      es: "Consecuencia: menos activos sostienen a más mayores → retos laborales y de pensiones.",
      en: "Consequence: fewer working-age people support more elderly → labour and pension challenges.",
    },
    {
      hu: "Az <strong>összmagyarság</strong> (a világon élő magyarok) száma kb. <strong>14 millió</strong> (tananyag adat).",
      es: "La población húngara en el mundo es aprox. 14 millones (dato del temario).",
      en: "The number of Hungarians worldwide is about 14 million (class figure).",
    },
  ],

  // --- “core” talking points (what she can actually say) ---
  // Keep each line as a full, speakable sentence.
  keyPoints: [
    {
      hu: "1) Magyarország népessége hosszabb ideje inkább <strong>fogy</strong>, és a lakosságszám ma már <strong>10 millió alatt</strong> van.",
      es: "1) La población de Hungría lleva tiempo bajando és hoy está por debajo de 10 millones.",
      en: "1) Hungary’s population has been declining for a long time and today it is below 10 million.",
    },
    {
      hu: "A magyarok nemcsak Magyarországon élnek: az <strong>összmagyarság</strong> száma kb. <strong>14 millió</strong>, sokan a szomszédos országokban is élnek.",
      es: "Los húngaros no viven solo en Hungría: hay aprox. 14 millones en el mundo, muchos en países vecinos.",
      en: "Hungarians do not live only in Hungary: there are about 14 million worldwide, many in neighbouring countries too.",
    },

    {
      hu: "2) <strong>Természetes fogyás</strong>: kevesebb a születés, mint a halálozás; <strong>természetes szaporodás</strong>: több a születés, mint a halálozás.",
      es: "2) Descenso natural: nacen menos de los que mueren; crecimiento natural: nacen más de los que mueren.",
      en: "2) Natural decrease: fewer births than deaths; natural increase: more births than deaths.",
    },
    {
      hu: "A népességfogyás okai között van, hogy a fiatalok tovább tanulnak, később házasodnak, és gyakran <strong>később vállalnak gyereket</strong>.",
      es: "Entre las causas: estudios más largos, matrimonio más tarde és tener hijos más tarde.",
      en: "Among the causes: longer studies, later marriage, and having children later.",
    },
    {
      hu: "Sok családban megjelenik a <strong>kettős teher</strong> (munka + háztartás/gyereknevelés), ami csökkentheti a gyerekvállalási kedvet.",
      es: "Muchas családban tienen doble carga (trabajo + hogar/crianza), lo que puede reducir el deseo de tener hijos.",
      en: "Many families face a double burden (work + home/childcare), which can reduce willingness to have children.",
    },

    {
      hu: "3) A társadalom <strong>elöregedik</strong>: nő az idősek aránya, és csökken az aktív korúak aránya.",
      es: "3) La sociedad envejece: sube la proporción de mayores és baja la de edad activa.",
      en: "3) The society is ageing: the elderly share rises and the working-age share falls.",
    },
    {
      hu: "Az utóbbi években a <strong>születéskor várható élettartam</strong> összességében nőtt, de régiók és társadalmi csoportok között különbségek maradtak.",
      es: "La esperanza de vida al nacer ha subido, de siguen existiendo diferencias por región és grupos sociales.",
      en: "Life expectancy at birth has increased overall, but differences remain across regions and social groups.",
    },

    {
      hu: "4) A népességet a <strong>vándorlás</strong> is alakítja: <strong>kivándorlás</strong> = elköltözés külföldre, <strong>bevándorlás</strong> = beköltözés az országba.",
      es: "4) La migración también influye: emigración = salir del país; inmigración = entrar al país.",
      en: "4) Migration also matters: emigration = leaving the country; immigration = moving into the country.",
    },

    {
      hu: "5) A <strong>nemzetiségek</strong> magyar állampolgárok, saját nyelvvel és kultúrával, és Magyarországon <strong>13 elismert nemzetiség</strong> van (tananyag).",
      es: "5) Las minorías nacionales son ciudadanos húngaros con lengua/cultura propia; en Hungría hay 13 minorías reconocidas (temario).",
      en: "5) National minorities are Hungarian citizens with their own language/culture; Hungary has 13 recognised nationalities (class material).",
    },
    {
      hu: "A nemzetiségi adatok gyakran <strong>önbevalláson</strong> alapulnak, és az <strong>asszimiláció</strong> miatt ugyanaz az ember több identitást is megjelölhet.",
      es: "Los datos suelen basarse en autoidentificación; por asimilación egy személy puede declarar varias identidades.",
      en: "Minority data often relies on self-identification; due to assimilation, one person may identify in multiple ways.",
    },
    {
      hu: "A <strong>roma</strong> népesség számáról eltérő becslések lehetnek, mert a népszámlálás és a kutatások más módszerrel mérnek.",
      es: "Puede haber estimaciones distintas sobre la población romaní, porque censo e investigaciones usan métodos diferentes.",
      en: "Roma population estimates can differ because censuses and studies use different methods.",
    },

    {
      hu: "6) Következmények: egyes ágazatokban <strong>munkaerőhiány</strong> alakulhat ki, és nő a teher az <strong>egészségügyön</strong> és a <strong>nyugdíjrendszeren</strong>.",
      es: "6) Consecuencias: puede haber falta de mano de obra és más presión sobre sanidad és pensiones.",
      en: "6) Consequences: labour shortages can appear, and pressure increases on healthcare and the pension system.",
    },
    {
      hu: "Lehetséges válaszok: <strong>családtámogatás</strong>, jobb bölcsőde/óvoda és egészségügyi szolgáltatások, valamint képzés és munkahelyteremtés.",
      es: "Respuestas: apoyo a familias, mejores guarderías és sanidad, y formación/empleo.",
      en: "Responses: family support, better childcare and healthcare services, plus training and job creation.",
    },
  ],

  // --- extra details (only if she wants to sound “pro”) ---
  extended: [
    {
      hu: "Történelmi példa (1 mondat): az 1950-es években a <strong>Ratkó‑korszak (Abortusz tilalom)</strong> intézkedései egy időre növelték a születések számát.",
      es: "Ejemplo histórico (1 frase): en los años 50 (era Ratkó) hubo medidas pronatalistas que subieron nacimientos por un tiempo.",
      en: "Historical example (one sentence): in the 1950s (Ratkó era) pronatalist measures temporarily increased births.",
    },
    {
      hu: "Kiegészítés: a demográfiai folyamatok lassan változnak, ezért az intézkedések hatása is gyakran csak évek alatt látszik.",
      es: "Extra: los procesos demográficos cambian lentamente; por eso los efectos suelen verse tras años.",
      en: "Extra: demographic processes change slowly, so policies often show effects only after years.",
    },
  ],

  // --- flashcards: short Q/A for speaking practice ---
  flashcards: [
    {
      id: "g4c1",
      front: { hu: "Mit jelent: természetes fogyás?", es: "¿Qué significa descenso natural?", en: "What is natural decrease?" },
      back: {
        hu: "Kevesebb a születés, mint a halálozás.",
        es: "Nacen menos de los que mueren.",
        en: "Fewer births than deaths.",
      },
    },
    {
      id: "g4c2",
      front: { hu: "Mi az elöregedés?", es: "¿Qué es el envejecimiento?", en: "What is ageing?" },
      back: {
        hu: "Nő az idősek aránya, és csökken az aktív korúak aránya.",
        es: "Sube la proporción de mayores és baja la de edad activa.",
        en: "The share of elderly rises and the working-age share falls.",
      },
    },
    {
      id: "g4c3",
      front: { hu: "Mit jelent az önbevallás a népszámlálásban?", es: "¿Qué es la autoidentificación en el censo?", en: "What is self-identification in a census?" },
      back: {
        hu: "Az ember maga mondja meg, minek vallja magát (pl. nemzetiség).",
        es: "La persona declara su identidad (p. ej. minoría).",
        en: "A person declares their identity (e.g., nationality).",
      },
    },
    {
      id: "g4c4",
      front: { hu: "Sorolj fel 3 nemzetiséget Magyarországon!", es: "Nombra 3 minorías en Hungría.", en: "Name 3 nationalities in Hungary." },
      back: {
        hu: "Például: német, szlovák, horvát, román, szerb, roma, ukrán, szlovén.",
        es: "Por ejemplo: alemana, eslovaca, croata, rumana, serbia, romaní, ucraniana, eslovena.",
        en: "For example: German, Slovak, Croat, Romanian, Serb, Roma, Ukrainian, Slovene.",
      },
    },
    {
      id: "g4c5",
      front: { hu: "Mi lehet a következménye a népességfogyásnak?", es: "¿Una consecuencia de la bajada poblacional?", en: "One consequence of population decline?" },
      back: {
        hu: "Kevesebb dolgozó tart el több idős embert → gond lehet a munkaerőpiacon és a nyugdíjnál.",
        es: "Menos trabajadores sostienen a más mayores → retos de empleo és pensiones.",
        en: "Fewer workers support more elderly → labour and pension challenges.",
      },
    },

    // extra cards
    {
      id: "g4f6",
      front: { hu: "Mi a különbség a kivándorlás és a bevándorlás között?", es: "¿Diferencia entre emigración e inmigración?", en: "Difference between emigration and immigration?" },
      back: {
        hu: "Kivándorlás: elköltözés külföldre. Bevándorlás: beköltözés az országba.",
        es: "Emigración: salir del país. Inmigración: entrar al país.",
        en: "Emigration: leaving the country. Immigration: moving into the country.",
      },
    },
    {
      id: "g4f7",
      front: { hu: "Miért házasodnak sokan később?", es: "¿Por qué muchos se casan más tarde?", en: "Why do many marry later?" },
      back: {
        hu: "Mert tovább tanulnak, később lesz stabil munka és lakás, és változnak a tervek.",
        es: "Por estudios más largos, trabajo/vivienda más tarde és cambios de plans.",
        en: "Because of longer studies, later stable job/housing, and changing plans.",
      },
    },
    {
      id: "g4f8",
      front: { hu: "Mit jelent: várható élettartam?", es: "¿Qué es esperanza de vida?", en: "What is life expectancy?" },
      back: {
        hu: "Átlagosan hány évig él egy ember, ha a jelenlegi halálozási adatok érvényesek.",
        es: "Cuántos años vive en promedio egy személy.",
        en: "Average number of years a person is expected to live.",
      },
    },
    {
      id: "g4f9",
      front: { hu: "Mit jelent: összmagyarság?", es: "¿Qué significa 'húngaros en el mundo'?", en: "What does 'Hungarians worldwide' mean?" },
      back: {
        hu: "A világon élő magyarok összessége (Magyarországon és a határokon túl is).",
        es: "Todos los húngaros que viven en Hungría és fuera del país.",
        en: "All Hungarians living in Hungary and beyond the borders.",
      },
    },
  ],

  quiz: [
    {
      id: "g4q1",
      type: "mcq",
      prompt: { hu: "Mi a természetes fogyás?", es: "¿Qué es el descenso natural?", en: "What is natural decrease?" },
      options: [
        { hu: "Kevesebb a születés, mint a halálozás", es: "Nacen menos de los que mueren", en: "Fewer births than deaths" },
        { hu: "Több a születés, mint a halálozás", es: "Nacen más de los que mueren", en: "More births than deaths" },
        { hu: "Csak a kivándorlás", es: "Solo emigración", en: "Only emigration" },
        { hu: "Csak a bevándorlás", es: "Solo inmigración", en: "Only immigration" },
      ],
      answerIndex: 0,
    },
    {
      id: "g4q2",
      type: "mcq",
      prompt: { hu: "Melyik állítás igaz az elöregedésre?", es: "¿Cuál es correcto sobre el envejecimiento?", en: "Which is true about ageing?" },
      options: [
        { hu: "Nő az idősek aránya", es: "Sube la proporción de mayores", en: "The share of elderly increases" },
        { hu: "Nő a születések száma minden évben", es: "Suben nacimientos cada año", en: "Births rise every year" },
        { hu: "Csökken a várható élettartam minden évben", es: "Baja la esperanza cada año", en: "Life expectancy falls every year" },
        { hu: "Nincs hatása a nyugdíjra", es: "No afecta pensiones", en: "It has no effect on pensions" },
      ],
      answerIndex: 0,
    },
    {
      id: "g4q3",
      type: "match",
      prompt: { hu: "Párosítsd a fogalmakat!", es: "¡Empareja los términos!", en: "Match the terms!" },
      left: [
        { k: "TF", hu: "Természetes fogyás", es: "Descenso natural", en: "Natural decrease" },
        { k: "KI", hu: "Kivándorlás", es: "Emigración", en: "Emigration" },
        { k: "BE", hu: "Bevándorlás", es: "Inmigración", en: "Immigration" },
      ],
      right: [
        { k: "A", hu: "Kevesebb a születés, mint a halálozás", es: "Nacen menos de los que mueren", en: "Fewer births than deaths" },
        { k: "B", hu: "Elköltözés külföldre", es: "Salir del país", en: "Leaving the country" },
        { k: "C", hu: "Beköltözés az országba", es: "Entrar al país", en: "Moving into the country" },
      ],
      pairs: { TF: "A", KI: "B", BE: "C" },
    },
    {
      id: "g4q4",
      type: "mcq",
      prompt: { hu: "Miért nehéz pontosan megmondani a nemzetiségek számát?", es: "¿Por qué es difícil saber el número exacto de minorías?", en: "Why is it hard to know exact minority numbers?" },
      options: [
        { hu: "Mert az adatok gyakran önbevalláson alapulnak", es: "Porque es autoidentificación", en: "Because it relies on self-identification" },
        { hu: "Mert nincsen népszámlálás", es: "Porque no hay censo", en: "Because there is no census" },
        { hu: "Mert nincs internet", es: "Porque no hay internet", en: "Because there is no internet" },
        { hu: "Mert Magyarországon nincsenek nemzetiségek", es: "Porque no existen", en: "Because there are no minorities" },
      ],
      answerIndex: 0,
    },

    // extra questions
    {
      id: "g4q5",
      type: "mcq",
      prompt: { hu: "Melyik lehet a népességfogyás egyik oka?", es: "¿Cuál puede ser una causa del descenso?", en: "Which can be a cause of population decline?" },
      options: [
        { hu: "Későbbi gyerekvállalás", es: "Tener hijos más tarde", en: "Having children later" },
        { hu: "Több hóesés", es: "Más nieve", en: "More snowfall" },
        { hu: "Magasabb hegyek", es: "Montañas más altas", en: "Higher mountains" },
        { hu: "Több folyó", es: "Más ríos", en: "More rivers" },
      ],
      answerIndex: 0,
    },
    {
      id: "g4q6",
      type: "match",
      prompt: { hu: "Párosítsd: következmény → terület", es: "Empareja: consecuencia → área", en: "Match: consequence → area" },
      left: [
        { k: "MH", hu: "Munkaerőhiány", es: "Falta de mano de obra", en: "Labour shortage" },
        { k: "NY", hu: "Nagyobb nyugdíjteher", es: "Más carga en pensiones", en: "Higher pension burden" },
        { k: "EG", hu: "Több egészségügyi igény", es: "Más necesidad sanitaria", en: "Higher healthcare demand" },
      ],
      right: [
        { k: "M", hu: "Munkaerőpiac", es: "Mercado laboral", en: "Labour market" },
        { k: "P", hu: "Nyugdíjrendszer", es: "Pensiones", en: "Pension system" },
        { k: "H", hu: "Egészségügy", es: "Salud", en: "Healthcare" },
      ],
      pairs: { MH: "M", NY: "P", EG: "H" },
    },
    {
      id: "g4q7",
      type: "mcq",
      prompt: { hu: "Hány elismert nemzetiség van Magyarországon?", es: "¿Cuántas minorías reconocidas hay?", en: "How many recognised nationalities are there in Hungary?" },
      options: [{ hu: "7", es: "7", en: "7" }, { hu: "10", es: "10", en: "10" }, { hu: "13", es: "13", en: "13" }, { hu: "20", es: "20", en: "20" }],
      answerIndex: 2,
    },
    {
      id: "g4q8",
      type: "order",
      prompt: { hu: "Rendezd sorrendbe (logika): ok → folyamat → következmény", es: "Ordena: causa → proceso → consecuencia", en: "Order: cause → process → consequence" },
      items: [
        { k: "A", hu: "Kevesebb születés", es: "Menos nacimientos", en: "Fewer births" },
        { k: "B", hu: "Természetes fogyás", es: "Descenso natural", en: "Natural decrease" },
        { k: "C", hu: "Nő a nyugdíjterhelés", es: "Sube la carga de pensiones", en: "Pension burden rises" },
      ],
      correctOrder: ["A", "B", "C"],
    },
  ],
};
