export type DailyBake = {
  name: string;
  description: string;
  category: string;
  likes: number;
  badge: string;
  season?: string;
};

export const siteData = {
  name: "Pieczone z Sercem",
  address: "Erazma Jerzmanowskiego 14, 30-836 Kraków",
  hours: "Poniedziałek-sobota, 8:00-16:00",
  hero: {
    eyebrow: "Lokalna piekarnia z Krakowa",
    title: "Tu naprawdę jest pysznie.",
    description:
      "Świeży chleb, maślane croissanty i słodkie wypieki przygotowywane codziennie, po domowemu i z sercem.",
    primaryCta: "Co dziś pieczemy",
    secondaryCta: "Odwiedź nas",
  },
  dailyBakes: [
    {
      name: "Chleb pszenny na zakwasie",
      description: "Aromatyczny, miękki w środku i z pięknie wypieczoną skórką.",
      category: "Chleby",
      likes: 24,
      badge: "Dziś",
    },
    {
      name: "Croissant maślany",
      description: "Lekki, warstwowy i idealny do porannej kawy.",
      category: "Croissanty",
      likes: 37,
      badge: "Ulubione",
    },
    {
      name: "Cynamonka klasyczna",
      description: "Miękka, pachnąca i przyjemnie otulająca smakiem.",
      category: "Cynamonki",
      likes: 31,
      badge: "Świeżo wypiekane",
    },
    {
      name: "Szarlotka domowa",
      description: "Krucha, soczysta i dobrze znana w najlepszym znaczeniu.",
      category: "Ciasta",
      likes: 18,
      badge: "Sezonowe",
      season: "Jesień",
    },
    {
      name: "Tarta z owocami",
      description: "Lżejsza propozycja z owocowym akcentem na cieplejsze miesiące.",
      category: "Ciasta",
      likes: 14,
      badge: "Sezonowe",
      season: "Lato",
    },
    {
      name: "Rurka z kremem waniliowym",
      description: "Klasyka, do której zawsze wraca się z przyjemnością.",
      category: "Rurki z kremem",
      likes: 29,
      badge: "Szybko znika",
    },
  ] satisfies DailyBake[],
  categories: [
    "Chleby",
    "Croissanty",
    "Cynamonki",
    "Torty i ciasta",
    "Rurki z kremem",
  ],
  seasonalMoments: [
    "Wiosną stawiamy na rabarbar i lżejsze ciasta owocowe.",
    "Latem wracają tarty z truskawkami, malinami i borówkami.",
    "Jesienią wchodzą jabłka, śliwki i bardziej otulające smaki.",
    "Zimą królują korzenne wypieki, pomarańcza, mak i świąteczne akcenty.",
  ],
} as const;
