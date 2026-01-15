import { TOPIC_G1 } from "./topics/data_g1.js";
import { TOPIC_G2 } from "./topics/data_g2.js";
import { TOPIC_G3 } from "./topics/data_g3.js";
import { TOPIC_G4 } from "./topics/data_g4.js";
import { TOPIC_G5 } from "./topics/data_g5.js";
import { TOPIC_G6 } from "./topics/data_g6.js";
import { MAPS } from "./maps/data_maps.js";

const DATA = {
  meta: {
    id: "hu-geo-exam",
    title: {
      hu: "Magyar földrajz – vizsga gyakorló",
      es: "Geografía de Hungría – práctica de examen",
      en: "Hungary Geography – exam practice",
    },
    subtitle: {
      hu: "(Utoljára frissítve: 2026.15.01 - 21:31)",
      es: "(Utoljára frissítve: 2026.15.01 - 21:31)",
      en: "(Utoljára frissítve: 2026.15.01 - 21:31)",
    },
  },

  ui: {
    languageDefault: "hu",
    showLanguageToggle: true,
    nav: {
      home: { hu: "Témák", es: "Temas", en: "Topics" },
      glossary: { hu: "Szójegyzék", es: "Glosario", en: "Glossary" },
      maps: { hu: "Térképek és Ábrák", es: "Mapas y Diagramas", en: "Maps & Diagrams" },

      open: { hu: "Megnyitás", es: "Abrir", en: "Open" },
      progress: { hu: "Teljesítve", es: "Progreso", en: "Progress" },

      // royal: nincs ebben a változatban
    },
  },

  topics: [TOPIC_G1, TOPIC_G2, TOPIC_G3, TOPIC_G4, TOPIC_G5, TOPIC_G6],
  maps: MAPS,

    glossary: [
        {
            title: { hu: "Alapfogalmak és tér" },
            items: [
                { term: { hu: "Kárpátok" }, def: { hu: "Hegységrendszer, amely ívben körülveszi a Kárpát-medencét." } },
                { term: { hu: "Kárpát-medence" }, def: { hu: "A Kárpátok koszorúján belüli nagy medence; Magyarország nagy része ebben fekszik." } },
                { term: { hu: "Medencejelleg" }, def: { hu: "A folyók a medence belseje felé tartanak, a víz lefolyása lassabb lehet." } },
                { term: { hu: "Domborzat" }, def: { hu: "A felszín formái: síkság, dombság, hegység." } },
                { term: { hu: "Alföld" }, def: { hu: "Nagy, sík táj; Magyarország területének jelentős része síkság." } },
            ],
        },

        {
            title: { hu: "Éghajlat és vízkészlet" },
            items: [
                { term: { hu: "Kontinentális éghajlat" }, def: { hu: "Nagyobb hőingás: melegebb nyár, hidegebb tél; gyakran szélsőségesebb időjárás." } },
                { term: { hu: "Nyugatias szelek" }, def: { hu: "Gyakran nyugatról fújó szelek, amelyek nedves levegőt hozhatnak." } },
                { term: { hu: "Csapadék" }, def: { hu: "Az eső/hó mennyisége; általában nyugatról kelet felé csökken." } },
                { term: { hu: "Aszály" }, def: { hu: "Hosszabb száraz időszak; a talaj kiszárad, a termés csökkenhet." } },
                { term: { hu: "Tavaszi fagy" }, def: { hu: "Késői fagy tavasszal; károsíthatja a virágzó növényeket." } },
                { term: { hu: "Felszíni vízkészlet" }, def: { hu: "A felszínen található vizek összessége: folyók, tavak, csatornák." } },
                { term: { hu: "Importvíz" }, def: { hu: "Olyan víz, ami más országokból érkezik (a folyók határon túlról jönnek)." } },
            ],
        },

        {
            title: { hu: "Folyók, tavak és vízrajz" },
            items: [
                { term: { hu: "Duna" }, def: { hu: "Magyarország legfontosabb folyója; ivóvíz, ipari víz és hajózás szempontjából is fontos." } },
                { term: { hu: "Tisza" }, def: { hu: "Hosszú folyó sok mellékfolyóval; vízjárása gyakran szélsőségesebb." } },
                { term: { hu: "Mellékfolyó" }, def: { hu: "Olyan folyó, amely egy nagyobb folyóba torkollik." } },
                { term: { hu: "Vízjárás" }, def: { hu: "A folyó vízszintjének változása (évszakok, eső, hóolvadás miatt)." } },
                { term: { hu: "Szerkezeti tó" }, def: { hu: "A felszín süllyedését kitöltő tó (pl. Balaton, Velencei-tó)." } },
                { term: { hu: "Morotvató" }, def: { hu: "Lefűződött folyókanyarulatból kialakult tó (holtág)." } },
                { term: { hu: "Szikes tó" }, def: { hu: "Sós/szikes vizű, gyakran sekély tó (pl. Nyíregyházi Sóstó)." } },
                { term: { hu: "Forrástó" }, def: { hu: "Források táplálják; gyakran állandó vízutánpótlása van (pl. Hévízi-tó)." } },
                { term: { hu: "Mesterséges tó" }, def: { hu: "Ember által létrehozott tó (pl. halastó, Feneketlen-tó)." } },
            ],
        },

        {
            title: { hu: "Árvizek és vízgazdálkodás" },
            items: [
                { term: { hu: "Árvíz" }, def: { hu: "Amikor a folyó kilép a medréből és elönti a környező területeket." } },
                { term: { hu: "Jeges ár" }, def: { hu: "Tél vége/kora tavasz: jégmegindulás, jégdugó miatt gyors vízszint-emelkedés." } },
                { term: { hu: "Zöldár" }, def: { hu: "Tavasz vége/nyár eleje: sok eső miatt nagyvíz, a természet „zöld”." } },
                { term: { hu: "Belvíz" }, def: { hu: "Sík területen összegyűlő, lefolyni nem tudó víz (nem folyóáradás)." } },
                { term: { hu: "Folyószabályozás" }, def: { hu: "A folyók medrének átalakítása (kanyarulatok levágása, partok rendezése)." } },
                { term: { hu: "Gát / védőtöltés" }, def: { hu: "Mesterséges földsánc a folyó mellett, ami védi a településeket az árvizektől." } },
                { term: { hu: "Vízlépcső" }, def: { hu: "Gát + zsilip/rendszer a vízszint szabályozására; lehet energiatermelés is." } },
                { term: { hu: "Vízenergia" }, def: { hu: "A folyók eséséből származó energia; Magyarországon korlátozott a lehetőség a kis esés miatt." } },
                { term: { hu: "Bős–Nagymaros" }, def: { hu: "Dunai vízlépcső-rendszer terve; a bősi rész megépült, a nagymarosi nem készült el teljesen." } },
            ],
        },

        {
            title: { hu: "Mezőgazdaság és élelmiszergazdaság" },
            items: [
                { term: { hu: "Agrárgazdaság" }, def: { hu: "Mezőgazdaság + élelmiszeripar együtt (termelés és feldolgozás)." } },
                { term: { hu: "Termőföld" }, def: { hu: "Művelhető föld; Magyarország egyik nagy értéke." } },
                { term: { hu: "Szikesedés" }, def: { hu: "A talaj sótartalma nő; rontja a termőképességet." } },
                { term: { hu: "Talajpusztulás" }, def: { hu: "A talaj romlása (pl. erózió), ami csökkenti a terméshozamot." } },
                { term: { hu: "Felvásárlási ár" }, def: { hu: "Az az ár, amin a termelőtől megveszik a terményt." } },
                { term: { hu: "Agrárolló" }, def: { hu: "Amikor a költségek gyorsabban nőnek, mint a felvásárlási árak; a gazdának nehezebb." } },
                { term: { hu: "Ipari növény" }, def: { hu: "Olyan növény, amit feldolgoznak (pl. olaj, cukor, textil célra)." } },
                { term: { hu: "Takarmánynövény" }, def: { hu: "Állatok etetésére termesztett növény." } },
            ],
        },

        {
            title: { hu: "Népesség és népesedési problémák" },
            items: [
                { term: { hu: "Népességfogyás" }, def: { hu: "Hosszabb távon csökken a lakosság száma." } },
                { term: { hu: "Természetes fogyás" }, def: { hu: "Kevesebb születés, mint halálozás." } },
                { term: { hu: "Természetes szaporodás" }, def: { hu: "Több születés, mint halálozás." } },
                { term: { hu: "Elöregedő társadalom" }, def: { hu: "Nő az idősek aránya, csökken a fiatalok aránya." } },
                { term: { hu: "Kivándorlás" }, def: { hu: "Amikor sokan külföldre költöznek (gyakran munkáért/tanulásért)." } },
                { term: { hu: "Összmagyarság" }, def: { hu: "A világon élő magyarok összessége (határon innen és túl)." } },
                { term: { hu: "Nemzetiség" }, def: { hu: "Kisebbségi népcsoport: saját nyelv, kultúra, hagyományok (magyar állampolgárok is lehetnek)." } },
                { term: { hu: "Asszimiláció" }, def: { hu: "A kisebbség fokozatosan beolvad a többségi társadalomba (nyelv, szokások változnak)." } },
            ],
        },

        {
            title: { hu: "Településföldrajz: falvak és városok" },
            items: [
                { term: { hu: "Település" }, def: { hu: "Lakóhely, ahol az emberek élnek és dolgoznak; van infrastruktúra." } },
                { term: { hu: "Ideiglenes település" }, def: { hu: "Csak rövid időre lakott (pl. munka vagy szezon miatt)." } },
                { term: { hu: "Időszakos település" }, def: { hu: "Rendszeresen, de csak egy időszakban lakott (pl. nyáron üdülő)." } },
                { term: { hu: "Állandó település" }, def: { hu: "Egész évben lakott: falu vagy város." } },
                { term: { hu: "Halmazfalu" }, def: { hu: "Sűrűn, szabálytalanul elhelyezkedő házak; rendezetlenebb utcaszerkezet." } },
                { term: { hu: "Útifalu" }, def: { hu: "Hosszú falu egy főút mentén; gyakran szalagtelkes." } },
                { term: { hu: "Szalagtelkes falu" }, def: { hu: "Hosszú, keskeny telkek; a ház elöl, a kert/föld hátul." } },
                { term: { hu: "Orsós utcájú falu" }, def: { hu: "A főutca közepe kiszélesedik (orsó alak), majd újra szűkül." } },
                { term: { hu: "Körfalu" }, def: { hu: "A házak körben helyezkednek el (kör alakú szerkezet)." } },
                { term: { hu: "Sakktábla alaprajz" }, def: { hu: "Derékszögű, rácsos utcarendszer (grid)." } },
                { term: { hu: "Agglomeráció" }, def: { hu: "Nagyváros körüli településgyűrű; sokan ingáznak be dolgozni." } },
            ],
        },

        {
            title: { hu: "Urbanizáció és városfejlődés" },
            items: [
                { term: { hu: "Urbanizáció" }, def: { hu: "A városokban élők aránya nő; a városok terjeszkednek is." } },
                { term: { hu: "Szuburbanizáció" }, def: { hu: "Kiköltözés a város környékére (elővárosokba)." } },
                { term: { hu: "Dezurbanizáció" }, def: { hu: "Kiköltözés távolabbra, kisebb településekre." } },
                { term: { hu: "Reurbanizáció" }, def: { hu: "Visszaköltözés a belső városrészekbe; megújuló belváros." } },
                { term: { hu: "Vízfej" }, def: { hu: "Amikor a főváros túl domináns: oda koncentrálódik sok munka és szolgáltatás." } },
                { term: { hu: "Barnamezős beruházás" }, def: { hu: "Régi ipari terület megújítása új funkcióval (lakás, iroda, park)." } },
                { term: { hu: "Budapest" }, def: { hu: "Főváros; Buda, Pest és Óbuda egyesülésével jött létre; 23 kerületre oszlik." } },
                { term: { hu: "Ingázás" }, def: { hu: "Napi utazás lakóhely és munkahely/iskola között." } },
                { term: { hu: "Zártkert" }, def: { hu: "Kiskertes terület a település szélén; régen művelésre, ma néha hétvégi használatra." } },
            ],
        },

        {
            title: { hu: "Gazdaság, ipar, energia és szolgáltatások" },
            items: [
                { term: { hu: "Szektor" }, def: { hu: "A gazdaság nagy területe: mezőgazdaság, ipar, szolgáltatások." } },
                { term: { hu: "Privatizáció" }, def: { hu: "Amikor állami tulajdonból magántulajdon lesz." } },
                { term: { hu: "Gépipar" }, def: { hu: "Gépek és berendezések gyártása; sokszor szakképzett munkaerő kell hozzá." } },
                { term: { hu: "Vegyipar" }, def: { hu: "Vegyi anyagok, műanyagok, gyógyszeripari termékek előállítása." } },
                { term: { hu: "Járműgyártás" }, def: { hu: "Autók és alkatrészek gyártása; beszállítói láncokkal." } },
                { term: { hu: "Energiahordozó" }, def: { hu: "Energiát adó anyag/forrás (pl. földgáz, napenergia)." } },
                { term: { hu: "Nem megújuló energia" }, def: { hu: "Készlete véges (pl. kőolaj, földgáz, kőszén)." } },
                { term: { hu: "Megújuló energia" }, def: { hu: "Újra termelődik (pl. nap, szél, geotermikus energia, biomassza)." } },
                { term: { hu: "Szolgáltatás" }, def: { hu: "Nem tárgyat ad, hanem tevékenységet (pl. oktatás, egészségügy, bank)." } },
                { term: { hu: "Állami szféra" }, def: { hu: "Állami/önkormányzati munkahelyek; gyakran stabilabb, kiszámíthatóbb." } },
                { term: { hu: "Versenyszféra" }, def: { hu: "Piaci cégek; gyakran magasabb bér, de több teljesítményelvárás." } },
                { term: { hu: "Infrastruktúra" }, def: { hu: "Alapvető hálózatok és létesítmények: utak, vasút, víz/áram, internet." } },
                { term: { hu: "Infokommunikáció" }, def: { hu: "Telefon, internet, média és digitális szolgáltatások együtt." } },
            ],
        },

        {
            title: { hu: "Közlekedés és turizmus" },
            items: [
                { term: { hu: "Közút" }, def: { hu: "Autós közlekedés útjai (autópálya, főút, mellékút)." } },
                { term: { hu: "Vasút" }, def: { hu: "Kötöttpályás közlekedés; személy- és teherszállítás." } },
                { term: { hu: "Vízi út" }, def: { hu: "Hajózásra használt folyó vagy csatorna." } },
                { term: { hu: "Csővezeték" }, def: { hu: "Kőolaj/földgáz szállítására használt vezeték." } },
                { term: { hu: "Idegenforgalom (turizmus)" }, def: { hu: "Utazás pihenésért, élményért; bevételt és munkahelyet hozhat." } },
                { term: { hu: "Belföldi turizmus" }, def: { hu: "Az országon belüli utazás (magyarok utaznak Magyarországon)." } },
                { term: { hu: "Nemzetközi turizmus" }, def: { hu: "Külföldiek érkeznek (vagy magyarok mennek külföldre)." } },
                { term: { hu: "Gyógyturizmus" }, def: { hu: "Utazás gyógykezelés/egészség miatt; gyakori ok az anyagi megtakarítás." } },
            ],
        },
    ]

};

window.DATA = DATA;
