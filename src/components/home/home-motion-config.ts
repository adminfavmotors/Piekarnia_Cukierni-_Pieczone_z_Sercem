export const HOME_MOTION = {
  desktopBreakpoint: "(min-width: 1024px)",
  themeRange: {
    start: "top 60%",
    end: "bottom 40%",
  },
  reveal: {
    y: 34,
    duration: 0.8,
    start: "top 82%",
    ease: "power3.out",
  },
  stagger: {
    y: 24,
    duration: 0.72,
    each: 0.06,
    start: "top 80%",
    ease: "power3.out",
  },
  heroScroll: {
    imageScale: 1.08,
    imageYPercent: -8,
    copyYPercent: -16,
    copyOpacity: 0.45,
    cardYPercent: -14,
    cardStagger: 0.06,
    backdropOpacity: 0.72,
    floorYPercent: -10,
  },
  sceneTransition: {
    start: "top 92%",
    end: "top 24%",
    scrub: 0.95,
  },
  floorTransition: {
    start: "top 24%",
    end: "bottom top",
    scrub: 0.85,
  },
} as const;

type HomeSceneConfig = {
  section: "taste" | "ingredients" | "heart";
  panel: "taste" | "ingredients" | "heart";
  fromY: number;
  fromScale: number;
  inset: string;
  radius: string;
  panelScrub: number;
  photoYPercent: number;
  photoScale: number;
  photoScrub: number;
  floorSelector?: string;
};

export const HOME_SCENES: readonly HomeSceneConfig[] = [
  {
    section: "taste",
    panel: "taste",
    fromY: 70,
    fromScale: 0.97,
    inset: "14%",
    radius: "2.5rem",
    panelScrub: 0.95,
    photoYPercent: -16,
    photoScale: 1,
    photoScrub: 1,
  },
  {
    section: "ingredients",
    panel: "ingredients",
    fromY: 64,
    fromScale: 0.975,
    inset: "16%",
    radius: "2.5rem",
    panelScrub: 0.95,
    photoYPercent: -18,
    photoScale: 1.04,
    photoScrub: 1,
    floorSelector: "[data-ingredients-floor]",
  },
  {
    section: "heart",
    panel: "heart",
    fromY: 56,
    fromScale: 0.98,
    inset: "18%",
    radius: "2.6rem",
    panelScrub: 0.9,
    photoYPercent: -14,
    photoScale: 1.03,
    photoScrub: 0.9,
    floorSelector: "[data-heart-floor]",
  },
];

export const DAILY_MOTION = {
  desktopBreakpoint: "(min-width: 1024px)",
  desktopStart: "top top+=96",
  scrub: true,
  anticipatePin: 1,
  swipeAxisLockThreshold: 8,
} as const;
