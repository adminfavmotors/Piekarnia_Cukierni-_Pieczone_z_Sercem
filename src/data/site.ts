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
    description: "Chrupi\u0105ca sk\u00f3rka, mi\u0119kki \u015brodek i zapach, kt\u00f3ry czu\u0107 od wej\u015bcia.",
    category: "Pieczywo",
    badge: "Dzi\u015b polecamy",
    likes: 34,
  },
  {
    name: "Croissant ma\u015blany",
    description: "Lekki, warstwowy i delikatny. Dobry do kawy i na spokojny poranek.",
    category: "Na \u015bniadanie",
    badge: "\u015awie\u017co z pieca",
    likes: 27,
  },
  {
    name: "Cynamonka",
    description:
      "Mi\u0119kka, pachn\u0105ca cynamonem i pieczona tak, \u017ceby zosta\u0142a przyjemnie wilgotna w \u015brodku.",
    category: "Na s\u0142odko",
    badge: "Ulubione",
    likes: 41,
  },
  {
    name: "Tarta owocowa",
    description:
      "Kruchy sp\u00f3d, delikatny krem i owoce, kt\u00f3re zmieniaj\u0105 si\u0119 razem z por\u0105 roku.",
    category: "Ciasta",
    badge: "Sezonowe",
    season: "Wiosna",
    likes: 22,
  },
  {
    name: "Rurka z kremem",
    description:
      "Klasyczna, lekka i bardzo domowa. Taki wypiek, po kt\u00f3ry wraca si\u0119 bez planu.",
    category: "Na s\u0142odko",
    badge: "Klasyk",
    likes: 19,
  },
  {
    name: "Sernik pieczony",
    description:
      "Kremowy, prosty i spokojny w smaku. Bez przesady, za to z dobr\u0105 struktur\u0105 i jako\u015bci\u0105.",
    category: "Ciasta",
    badge: "Na weekend",
    likes: 18,
  },
];

const categories = ["Pieczywo", "Na \u015bniadanie", "Na s\u0142odko", "Ciasta"] as const;

const seasonalMoments = [
  "L\u017cejsze wypieki, wi\u0119cej owoc\u00f3w i \u015bwie\u017ce, jasne smaki.",
  "Dro\u017cd\u017cowe ciasta, kruche tarty i wszystko, co dobrze \u0142\u0105czy si\u0119 z sezonowymi owocami.",
  "Cynamon, \u015bliwki, jab\u0142ka i bardziej otulaj\u0105ce wypieki na spokojniejsze dni.",
  "Bogatsze ciasta, ma\u015blane wypieki i smaki, kt\u00f3re dobrze pasuj\u0105 do zimnego poranka.",
] as const;

export const siteData = {
  name: "Pieczone z Sercem",
  city: "Krak\u00f3w",
  address: "Erazma Jerzmanowskiego 14, 30-836 Krak\u00f3w",
  hours: "pon.\u2013sob., 8.00\u201316.00",
  phone: null as string | null,
  header: {
    hoursLabel: "Godziny",
    phoneLabel: "Telefon",
    contactFallback: "Kontakt",
  },
  hero: {
    eyebrow: "Domowa piekarnia w Krakowie",
    title: "Tu naprawd\u0119 jest pysznie.",
    description:
      "\u015awie\u017ce pieczywo, dro\u017cd\u017c\u00f3wki i ciasta pieczone tak, \u017ceby od pierwszego spojrzenia by\u0142o czu\u0107 ciep\u0142o, prostot\u0119 i domowy rytm.",
    primaryCta: "Co dzi\u015b pieczemy",
    secondaryCta: "Kontakt",
    breadLabel: "Chleb dnia",
    breadDescription:
      "Mi\u0119kkie bochenki i codzienne pieczywo jako spokojny drugi plan, nie kolejny blok z tekstem.",
    todayLabel: "Dzi\u015b w piekarni",
    freshLabel: "\u015awie\u017co z pieca",
    scrollLabel: "Przewi\u0144 dalej",
  },
  taste: {
    eyebrow: "Smak, kt\u00f3ry zatrzymuje",
    title:
      "\u015awie\u017ce wypieki, po kt\u00f3re wpada si\u0119 rano, w po\u0142udnie i po prostu z przyjemno\u015bci\u0105.",
    description:
      "Na pierwszym planie s\u0105 zapach, kolor i ciep\u0142o pieca. Tekstu jest mniej, bo tutaj najpierw ma dzia\u0142a\u0107 apetyt.",
    photoKicker: "Od rana pachnie piecem",
    photoDescription:
      "Najmocniej dzia\u0142a prosty widok: \u015bwie\u017ca blacha, mi\u0119kki \u015brodek i z\u0142oty wierzch.",
    pillars: [
      {
        label: "Smak",
        title: "Codzienna \u015bwie\u017co\u015b\u0107, kt\u00f3r\u0105 czu\u0107 od wej\u015bcia",
        description:
          "\u015awie\u017ce pieczywo i s\u0142odkie wypieki, kt\u00f3re kusz\u0105 zapachem ju\u017c od progu.",
      },
      {
        label: "Sk\u0142adniki",
        title: "Proste produkty i uczciwe pieczenie",
        description:
          "Prosty sk\u0142ad, codzienne przygotowanie i sezonowe dodatki bez zb\u0119dnego nad\u0119cia.",
      },
      {
        label: "Serce",
        title: "Domowy rytm, do kt\u00f3rego chce si\u0119 wraca\u0107",
        description:
          "To miejsce ma by\u0107 ciep\u0142e, znajome i przyjemne ju\u017c od pierwszego spojrzenia.",
      },
    ],
  },
  ingredients: {
    eyebrow: "Naturalne sk\u0142adniki",
    title: "Naturalne sk\u0142adniki i codzienna \u015bwie\u017co\u015b\u0107 bez zb\u0119dnych dodatk\u00f3w.",
    description:
      "Zamiast d\u0142ugiej listy obietnic pokazujemy to, co najwa\u017cniejsze: prosty sk\u0142ad, spokojny rytm pracy i wypieki robione na bie\u017c\u0105co.",
    photoKicker: "Prosty sk\u0142ad",
    photoDescription:
      "Dobre wypieki zaczynaj\u0105 si\u0119 od m\u0105ki, mas\u0142a, owoc\u00f3w i codziennej dba\u0142o\u015bci o jako\u015b\u0107.",
    notes: [
      "M\u0105ka, mas\u0142o, owoce i prosty sk\u0142ad s\u0105 tu wa\u017cniejsze ni\u017c przesadnie ozdobna forma.",
      "Ka\u017cdy wypiek zaczyna si\u0119 od \u015bwie\u017cych produkt\u00f3w i codziennego rytmu pracy.",
      "Sezonowe dodatki pojawiaj\u0105 si\u0119 wtedy, kiedy naprawd\u0119 smakuj\u0105 najlepiej.",
    ],
  },
  heart: {
    eyebrow: "Wypiekane z sercem",
    title: "Domowy klimat, serdeczno\u015b\u0107 i smak, do kt\u00f3rego chce si\u0119 wraca\u0107.",
    description:
      "Pieczone z Sercem ma by\u0107 miejscem bliskim i spokojnym. Takim, do kt\u00f3rego zagl\u0105da si\u0119 po co\u015b dobrego i wychodzi z lepszym nastrojem.",
    photoKicker: "Domowy rytm",
    photoDescription:
      "Tu liczy si\u0119 nie tylko smak. Liczy si\u0119 te\u017c ciep\u0142o miejsca i zwyk\u0142a ludzka \u017cyczliwo\u015b\u0107.",
  },
  daily: {
    eyebrow: "Co dzi\u015b pieczemy",
    title: "Codzienna tablica wypiek\u00f3w pokazuje, co dzi\u015b trafia do pieca i na lad\u0119.",
    description:
      "Najpierw pokazujemy to, co dzi\u015b trafia na lad\u0119, a ni\u017cej osobno zbieramy sezonowe smaki i powroty, na kt\u00f3re warto czeka\u0107.",
    meta: [
      {
        label: "Dzisiaj",
        value: "pon.\u2013sob., 8.00\u201316.00",
      },
      {
        label: "Na tablicy",
        value: `${dailyBakes.length} pozycji dnia`,
      },
      {
        label: "Miejsce",
        value: "Krak\u00f3w, osiedlowa piekarnia",
      },
    ],
    cardNotes: {
      primary: "\u015awie\u017co przygotowane na dzi\u015b",
      secondary: "Najlepiej smakuje jeszcze ciep\u0142e",
    },
    seasonalEyebrow: "Sezonowo\u015b\u0107",
    seasonalTitle: "Sezonowe smaki dostaj\u0105 w\u0142asny rytm i w\u0142asn\u0105 karuzel\u0119.",
    seasonalDescription:
      "Wiosn\u0105 i latem l\u017cej, jesieni\u0105 i zim\u0105 bardziej otulaj\u0105co. Dzi\u0119ki temu strona \u017cyje razem z piekarni\u0105.",
    seasonLabels: ["Wiosna", "Lato", "Jesie\u0144", "Zima"] as const,
  },
  contact: {
    eyebrow: "Zapraszamy do nas",
    title: "Smak, serdeczno\u015b\u0107 i \u015bwie\u017ce wypieki ka\u017cdego dnia.",
    description:
      "Je\u015bli jeste\u015b w okolicy, zajrzyj po co\u015b dobrego na wynos albo po chleb, kt\u00f3ry od razu pachnie domem.",
    addressLabel: "Adres",
    hoursLabel: "Godziny",
    phoneLabel: "Telefon",
    atmosphereLabel: "Klimat miejsca",
    atmosphereValue: "Domowo, spokojnie i bez po\u015bpiechu.",
  },
  categories,
  dailyBakes,
  seasonalMoments,
} as const;
