import { TOPIC_G1 } from "./topics/data_g1.js";
import { TOPIC_G2 } from "./topics/data_g2.js";
import { TOPIC_G3 } from "./topics/data_g3.js";
import { TOPIC_G4 } from "./topics/data_g4.js";
import { TOPIC_G5 } from "./topics/data_g5.js";
import { TOPIC_G6 } from "./topics/data_g6.js";

const DATA = {
  meta: {
    id: "hu-geo-exam",
    title: {
      hu: "Magyar földrajz – vizsga gyakorló",
      es: "Geografía de Hungría – práctica de examen",
      en: "Hungary Geography – exam practice",
    },
    subtitle: {
      hu: "(Utoljára frissítve: 21:20)",
      es: "(Utoljára frissítve: 21:20)",
      en: "(Utoljára frissítve: 21:20)",
    },
  },

  ui: {
    languageDefault: "hu",
    showLanguageToggle: true,
    nav: {
      home: { hu: "Témák", es: "Temas", en: "Topics" },
      glossary: { hu: "Szójegyzék", es: "Glosario", en: "Glossary" },

      open: { hu: "Megnyitás", es: "Abrir", en: "Open" },
      progress: { hu: "Teljesítve", es: "Progreso", en: "Progress" },

      // royal: nincs ebben a változatban
    },
  },

  topics: [TOPIC_G1, TOPIC_G2, TOPIC_G3, TOPIC_G4, TOPIC_G5, TOPIC_G6],

  glossary: [
    {
      title: { hu: "Alapfogalmak" },
      items: [
        { term: { hu: "Kárpátok" }, def: { hu: "Hegységrendszer, amely ívben körülveszi a Kárpát-medencét." } },
        { term: { hu: "Kárpát-medence" }, def: { hu: "A Kárpátok koszorúján belüli nagy medence; Magyarország nagy része ebben fekszik." } },
        { term: { hu: "Kontinentális éghajlat" }, def: { hu: "Nagyobb hőingás, szélsőségesebb időjárás: melegebb nyár, hidegebb tél." } },
        { term: { hu: "Csapadék" }, def: { hu: "Eső/hó mennyisége. A tananyag szerint átlagban ~600 mm/év körül, nyugatról kelet felé csökken." } },
      ],
    },
    {
      title: { hu: "Vizek és árvizek" },
      items: [
        { term: { hu: "Jeges ár" }, def: { hu: "Jégmegindulás és jégdugó miatt gyors vízszint-emelkedés (tél vége/kora tavasz)." } },
        { term: { hu: "Zöldár" }, def: { hu: "Tavaszi/koranyári nagyvíz, hóolvadás és esők miatt; a természet „zöld”." } },
        { term: { hu: "Mellékfolyó" }, def: { hu: "Olyan folyó, amely egy nagyobb folyóba torkollik (pl. Tisza → Duna)." } },
      ],
    },
    {
      title: { hu: "Tájbeosztás" },
      items: [
        { term: { hu: "Nagytáj" }, def: { hu: "A legnagyobb tájegység (példa: Alföld)." } },
        { term: { hu: "Középtáj" }, def: { hu: "A nagytáj alatti szint (példa: Duna menti síkság)." } },
        { term: { hu: "Kistáj" }, def: { hu: "A legkisebb szint, helyi tájegység (példa: Váci–Pesti-Duna-völgy)." } },
        { term: { hu: "Fennsík" }, def: { hu: "Magasabban fekvő, többnyire sík felszín; a tananyagban: 200 m felett." } },
      ],
    },
  ],
};

window.DATA = DATA;
