export type DailyBake = {
  name: string;
  description: string;
  category: string;
  badge: string;
  season?: string;
  likes: number;
};

const dailyBakes: DailyBake[] = [
  {
    name: "Chleb wiejski",
    description: "Chrupiąca skórka, miękki środek i zapach, który czuć od wejścia.",
    category: "Pieczywo",
    badge: "Dziś polecamy",
    likes: 34,
  },
  {
    name: "Croissant maślany",
    description: "Lekki, warstwowy i delikatny. Dobry do kawy i na spokojny poranek.",
    category: "Na śniadanie",
    badge: "Świeżo z pieca",
    likes: 27,
  },
  {
    name: "Cynamonka",
    description:
      "Miękka, pachnąca cynamonem i pieczona tak, żeby została przyjemnie wilgotna w środku.",
    category: "Na słodko",
    badge: "Ulubione",
    likes: 41,
  },
  {
    name: "Tarta owocowa",
    description:
      "Kruchy spód, delikatny krem i owoce, które zmieniają się razem z porą roku.",
    category: "Ciasta",
    badge: "Sezonowe",
    season: "Wiosna",
    likes: 22,
  },
  {
    name: "Rurka z kremem",
    description:
      "Klasyczna, lekka i bardzo domowa. Taki wypiek, po który wraca się bez planu.",
    category: "Na słodko",
    badge: "Klasyk",
    likes: 19,
  },
  {
    name: "Sernik pieczony",
    description:
      "Kremowy, prosty i spokojny w smaku. Bez przesady, za to z dobrą strukturą i jakością.",
    category: "Ciasta",
    badge: "Na weekend",
    likes: 18,
  },
];

const categories = ["Pieczywo", "Na śniadanie", "Na słodko", "Ciasta"] as const;

const seasonalMoments = [
  "Lżejsze wypieki, więcej owoców i świeże, jasne smaki.",
  "Drożdżowe ciasta, kruche tarty i wszystko, co dobrze łączy się z sezonowymi owocami.",
  "Cynamon, śliwki, jabłka i bardziej otulające wypieki na spokojniejsze dni.",
  "Bogatsze ciasta, maślane wypieki i smaki, które dobrze pasują do zimnego poranka.",
] as const;

export const siteData = {
  name: "Pieczone z Sercem",
  city: "Kraków",
  address: "Erazma Jerzmanowskiego 14, 30-836 Kraków",
  hours: "pon.–sob., 8.00–16.00",
  hero: {
    eyebrow: "Domowa piekarnia w Krakowie",
    title: "Tu naprawdę jest pysznie.",
    description:
      "Świeże pieczywo, drożdżówki i ciasta pieczone tak, żeby od pierwszego spojrzenia było czuć ciepło, prostotę i domowy rytm.",
    primaryCta: "Co dziś pieczemy",
    secondaryCta: "Kontakt",
    breadLabel: "Chleb dnia",
    breadDescription:
      "Miękkie bochenki i codzienne pieczywo jako spokojny drugi plan, nie kolejny blok z tekstem.",
    todayLabel: "Dziś w piekarni",
    freshLabel: "Świeżo z pieca",
    scrollLabel: "Przewiń dalej",
  },
  taste: {
    eyebrow: "Smak, który zatrzymuje",
    title:
      "Świeże wypieki, po które wpada się rano, w południe i po prostu z przyjemności.",
    description:
      "Na pierwszym planie są zapach, kolor i ciepło pieca. Tekstu jest mniej, bo tutaj najpierw ma działać apetyt.",
    photoKicker: "Od rana pachnie piecem",
    photoDescription:
      "Najmocniej działa prosty widok: świeża blacha, miękki środek i złoty wierzch.",
    pillars: [
      {
        label: "Smak",
        title: "Codzienna świeżość, którą czuć od wejścia",
        description:
          "Świeże pieczywo i słodkie wypieki, które kuszą zapachem już od progu.",
      },
      {
        label: "Składniki",
        title: "Proste produkty i uczciwe pieczenie",
        description:
          "Prosty skład, codzienne przygotowanie i sezonowe dodatki bez zbędnego nadęcia.",
      },
      {
        label: "Serce",
        title: "Domowy rytm, do którego chce się wracać",
        description:
          "To miejsce ma być ciepłe, znajome i przyjemne już od pierwszego spojrzenia.",
      },
    ],
  },
  ingredients: {
    eyebrow: "Naturalne składniki",
    title: "Naturalne składniki i codzienna świeżość bez zbędnych dodatków.",
    description:
      "Zamiast długiej listy obietnic pokazujemy to, co najważniejsze: prosty skład, spokojny rytm pracy i wypieki robione na bieżąco.",
    photoKicker: "Prosty skład",
    photoDescription:
      "Dobre wypieki zaczynają się od mąki, masła, owoców i codziennej dbałości o jakość.",
    notes: [
      "Mąka, masło, owoce i prosty skład są tu ważniejsze niż przesadnie ozdobna forma.",
      "Każdy wypiek zaczyna się od świeżych produktów i codziennego rytmu pracy.",
      "Sezonowe dodatki pojawiają się wtedy, kiedy naprawdę smakują najlepiej.",
    ],
  },
  heart: {
    eyebrow: "Wypiekane z sercem",
    title: "Domowy klimat, serdeczność i smak, do którego chce się wracać.",
    description:
      "Pieczone z Sercem ma być miejscem bliskim i spokojnym. Takim, do którego zagląda się po coś dobrego i wychodzi z lepszym nastrojem.",
    photoKicker: "Domowy rytm",
    photoDescription:
      "Tu liczy się nie tylko smak. Liczy się też ciepło miejsca i zwykła ludzka życzliwość.",
  },
  daily: {
    eyebrow: "Co dziś pieczemy",
    title: "Codzienna tablica wypieków pokazuje, co dziś trafia do pieca i na ladę.",
    description:
      "Najpierw pokazujemy to, co dziś trafia na ladę, a niżej osobno zbieramy sezonowe smaki i powroty, na które warto czekać.",
    meta: [
      {
        label: "Dzisiaj",
        value: "pon.–sob., 8.00–16.00",
      },
      {
        label: "Na tablicy",
        value: `${dailyBakes.length} pozycji dnia`,
      },
      {
        label: "Miejsce",
        value: "Kraków, osiedlowa piekarnia",
      },
    ],
    cardNotes: {
      primary: "Świeżo przygotowane na dziś",
      secondary: "Najlepiej smakuje jeszcze ciepłe",
    },
    seasonalEyebrow: "Sezonowość",
    seasonalTitle: "Sezonowe smaki dostają własny rytm i własną karuzelę.",
    seasonalDescription:
      "Wiosną i latem lżej, jesienią i zimą bardziej otulająco. Dzięki temu strona żyje razem z piekarnią.",
    seasonLabels: ["Wiosna", "Lato", "Jesień", "Zima"] as const,
  },
  contact: {
    eyebrow: "Zapraszamy do nas",
    title: "Smak, serdeczność i świeże wypieki każdego dnia.",
    description:
      "Jeśli jesteś w okolicy, zajrzyj po coś dobrego na wynos albo po chleb, który od razu pachnie domem.",
    addressLabel: "Adres",
    hoursLabel: "Godziny",
    atmosphereLabel: "Klimat miejsca",
    atmosphereValue: "Domowo, spokojnie i bez pośpiechu.",
  },
  categories,
  dailyBakes,
  seasonalMoments,
} as const;
