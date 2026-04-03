export const HOME_MOTION = {
  desktopBreakpoint: "(min-width: 1024px)",
  themeRange: {
    start: "top 60%",
    end: "bottom 40%",
  },
  reveal: {
    y: 34,
    duration: 0.8,
    ease: "power3.out",
  },
  stagger: {
    y: 24,
    duration: 0.72,
    each: 0.06,
    ease: "power3.out",
  },
  heroScroll: {
    start: "top top",
    end: "bottom top",
    scrub: 0.8,
    invalidateOnRefresh: true,
    imageScale: 1.08,
    imageYPercent: -8,
    copyYPercent: -16,
    copyOpacity: 0.45,
    detailPrimaryYPercent: -12,
    detailSecondaryYPercent: -16,
    detailPillYPercent: -10,
    backdropOpacity: 0.72,
    floorYPercent: -10,
  },
  sceneTransition: {
    start: "top 92%",
    end: "top 24%",
    scrub: 0.82,
    invalidateOnRefresh: true,
  },
} as const;

type HomeSceneConfig = {
  section: "taste" | "ingredients" | "heart";
  panel: "taste" | "ingredients" | "heart";
  fromY: number;
  fromScale: number;
  fromOpacity: number;
  photoYPercent: number;
  photoScale: number;
  floorYPercent?: number;
  floorSelector?: string;
};

export const HOME_SCENES: readonly HomeSceneConfig[] = [
  {
    section: "taste",
    panel: "taste",
    fromY: 70,
    fromScale: 0.97,
    fromOpacity: 0.35,
    photoYPercent: -16,
    photoScale: 1.01,
  },
  {
    section: "ingredients",
    panel: "ingredients",
    fromY: 64,
    fromScale: 0.975,
    fromOpacity: 0.42,
    photoYPercent: -18,
    photoScale: 1.04,
    floorYPercent: -12,
    floorSelector: "[data-ingredients-floor]",
  },
  {
    section: "heart",
    panel: "heart",
    fromY: 56,
    fromScale: 0.98,
    fromOpacity: 0.48,
    photoYPercent: -14,
    photoScale: 1.03,
    floorYPercent: -12,
    floorSelector: "[data-heart-floor]",
  },
];
