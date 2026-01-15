export const MAPS = {
  title: { hu: "Térképek és Ábrák", en: "Maps & Diagrams", es: "Mapas y Diagramas" },
  subtitle: { hu: "Külön gyakorlók képekkel", en: "Image-based practice", es: "Práctica con imágenes" },

  packs: [
    {
      id: "maps",
      title: { hu: "Térképek", en: "Maps", es: "Mapas" },
      subtitle: { hu: "Számozott térkép", en: "Numbered map", es: "Mapa numerado" },
      type: "label",
      items: [
        {
          id: "m1",
          image: "assets/maps/huborder.png",
          prompt: { hu: "Írd be a számokhoz tartozó országokat:", en: "Type the countries for the numbers:", es: "Escribe los países para los números:" },
          labels: [
            { n: 1, answers: ["Szlovákia"] },
            { n: 2, answers: ["Ukrajna"] },
            { n: 3, answers: ["Románia"] },
            { n: 4, answers: ["Szerbia"] },
            { n: 5, answers: ["Horvátország"] },
            { n: 6, answers: ["Szlovénia"] },
            { n: 7, answers: ["Ausztria"] }
          ],
          },
          {
              id: "m2",
              image: "assets/maps/hurivers.png",
              prompt: { hu: "Írd be a számokhoz tartozó folyókat:", en: "Type the countries for the numbers:", es: "Escribe los países para los números:" },
              labels: [
                  { n: 1, answers: ["Szlovákia"] },
                  { n: 2, answers: ["Ukrajna"] },
                  { n: 3, answers: ["Románia"] },
                  { n: 4, answers: ["Szerbia"] },
                  { n: 5, answers: ["Horvátország"] },
                  { n: 6, answers: ["Szlovénia"] },
                  { n: 7, answers: ["Ausztria"] }
              ],
          },
      ],
    },

    {
      id: "Diagrams",
      title: { hu: "Ábrák", en: "Diagrams", es: "Diagramas" },
      subtitle: { hu: "Önellenőrző ábrák", en: "Self-check diagrams", es: "Diagramas de autoevaluación" },
      type: "selfcheck",
      items: [
        {
          id: "d1",
          image: "assets/diagrams/europeborder.png",
          front: { hu: "Europa Határai (Piros = Fontos Földi Határok, Kék = Fontos Vizi Határok)", en: "Borders of Europe (Red = Important Land Borders, Blue = Important Water Borders)", es: "Fronteras de Europa (Rojo = Fronteras terrestres importantes, Azul = Fronteras acuáticas importantes)" },
          back: {
            hu: "Nem kell mindet tudni, fontos az Urál keleten és Kaukázus, a Boszporusz és a Dardanellák délen. Délnyugaton a Gibraltári-szoros. A tengerek pedig Északi és Norvégtenger, Atlanti órceán, földközi tenger és a Fekete tenger (és a Kaszpi tó)",
            en: "You don't need to know everything, the Urals in the east and the Caucasus, the Bosphorus and the Dardanelles in the south are important. In the southwest is the Strait of Gibraltar. And the seas are the North and Norwegian Seas, the Atlantic Ocean, the Mediterranean Sea and the Black Sea (and the Caspian Sea)",
              es: "No necesitas saberlo todo; los Urales al este y el Cáucaso, el Bósforo y los Dardanelos al sur son importantes.Al suroeste se encuentra el estrecho de Gibraltar.Y los mares son el mar del Norte, el mar de Noruega, el océano Atlántico, el mar Mediterráneo y el mar Negro(y el mar Caspio).",
          },
        },
      ],
    },
  ],
};