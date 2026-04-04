"use client";

import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  HERO_SCROLL_LAYERS,
  HOME_MOTION,
  HOME_SCENES,
  type HeroScrollLayerName,
} from "@/components/home/home-motion-config";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RootRef = RefObject<HTMLElement | null>;
type SelectOne = <T extends Element>(selector: string) => T | null;
type SelectAll = <T extends Element>(selector: string) => T[];
type HomeScene = (typeof HOME_SCENES)[number];

type HeroMotionTargets = {
  section: HTMLElement | null;
  layers: Record<HeroScrollLayerName, HTMLElement | null>;
  animatedElements: HTMLElement[];
};

type SceneMotionTargets = {
  section: HTMLElement | null;
  panel: HTMLElement | null;
  photo: HTMLElement | null;
  floor: HTMLElement | null;
  animatedElements: HTMLElement[];
};

const toDefinedElements = (
  elements: Array<HTMLElement | null | undefined>,
): HTMLElement[] =>
  elements.filter(
    (element): element is HTMLElement => element !== null && element !== undefined,
  );

const saveScrollTriggerStyles = (
  elements: Array<HTMLElement | null | undefined>,
) => {
  const targets = toDefinedElements(elements);

  if (targets.length) {
    ScrollTrigger.saveStyles(targets);
  }
};

const clearAnimatedStyles = (elements: Array<HTMLElement | null | undefined>) => {
  toDefinedElements(elements).forEach((element) => {
    gsap.set(element, {
      clearProps: "all",
    });
  });
};

const getHeroMotionTargets = (selectOne: SelectOne): HeroMotionTargets => {
  const layers = Object.fromEntries(
    HERO_SCROLL_LAYERS.map((name) => [
      name,
      selectOne<HTMLElement>(`[data-hero-scroll-layer='${name}']`),
    ]),
  ) as Record<HeroScrollLayerName, HTMLElement | null>;

  return {
    section: selectOne<HTMLElement>("[data-theme-section='hero']"),
    layers,
    animatedElements: toDefinedElements(
      HERO_SCROLL_LAYERS.map((name) => layers[name]),
    ),
  };
};

const getSceneMotionTargets = (
  selectOne: SelectOne,
  scene: HomeScene,
): SceneMotionTargets => {
  const panel = selectOne<HTMLElement>(`[data-scene-panel='${scene.panel}']`);
  const photo = selectOne<HTMLElement>(`[data-scene-photo='${scene.section}']`);
  const floor = scene.floorSelector
    ? selectOne<HTMLElement>(scene.floorSelector)
    : null;

  return {
    section: selectOne<HTMLElement>(`[data-theme-section='${scene.section}']`),
    panel,
    photo,
    floor,
    animatedElements: toDefinedElements([panel, photo, floor]),
  };
};

const createSceneTimeline = (
  scene: HomeScene,
  sceneTargets: SceneMotionTargets,
) => {
  const sceneTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: sceneTargets.section,
      start: HOME_MOTION.sceneTransition.start,
      end: HOME_MOTION.sceneTransition.end,
      scrub: HOME_MOTION.sceneTransition.scrub,
      invalidateOnRefresh: HOME_MOTION.sceneTransition.invalidateOnRefresh,
    },
  });

  sceneTimeline.fromTo(
    sceneTargets.panel,
    {
      y: scene.fromY,
      scale: scene.fromScale,
      opacity: scene.fromOpacity,
    },
    {
      y: 0,
      scale: 1,
      opacity: 1,
      ease: "none",
    },
    0,
  );

  if (sceneTargets.photo) {
    sceneTimeline.to(
      sceneTargets.photo,
      {
        yPercent: scene.photoYPercent,
        scale: scene.photoScale,
        ease: "none",
      },
      0,
    );
  }

  if (sceneTargets.floor) {
    sceneTimeline.to(
      sceneTargets.floor,
      {
        opacity: 1,
        yPercent: scene.floorYPercent ?? -12,
        ease: "none",
      },
      0.06,
    );
  }
};

export function useHomePageMotion(rootRef: RootRef) {
  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) {
        return;
      }

      const selectOne: SelectOne = (selector) => root.querySelector(selector);
      const selectAll: SelectAll = (selector) =>
        Array.from(root.querySelectorAll(selector));

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const setTheme = (theme: string) => {
        root.dataset.pageTheme = theme;
      };

      const desktopMedia = gsap.matchMedia(root);
      const themeSections = selectAll<HTMLElement>("[data-theme-section]");
      const initialTheme =
        themeSections[0]?.dataset.themeSection?.trim() || "hero";

      setTheme(initialTheme);

      themeSections.forEach((section) => {
        const theme = section.dataset.themeSection?.trim();

        if (!theme) {
          return;
        }

        ScrollTrigger.create({
          trigger: section,
          start: HOME_MOTION.themeRange.start,
          end: HOME_MOTION.themeRange.end,
          onEnter: () => setTheme(theme),
          onEnterBack: () => setTheme(theme),
        });
      });

      if (prefersReducedMotion) {
        return () => {
          delete root.dataset.pageTheme;
        };
      }

      const heroScroll = HOME_MOTION.heroScroll;
      const heroTargets = getHeroMotionTargets(selectOne);

      clearAnimatedStyles(heroTargets.animatedElements);

      const revealTargets = selectAll<HTMLElement>(
        "[data-reveal]:not([data-scene-panel])",
      );
      const staggerGroups = selectAll<HTMLElement>("[data-stagger-group]");
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            const element = entry.target as HTMLElement;

            gsap.fromTo(
              element,
              {
                opacity: 0,
                y: HOME_MOTION.reveal.y,
              },
              {
                opacity: 1,
                y: 0,
                duration: HOME_MOTION.reveal.duration,
                ease: HOME_MOTION.reveal.ease,
                overwrite: "auto",
              },
            );

            observer.unobserve(element);
          });
        },
        {
          rootMargin: "0px 0px -14% 0px",
          threshold: 0.12,
        },
      );

      revealTargets.forEach((element) => {
        gsap.set(element, {
          opacity: 0,
          y: HOME_MOTION.reveal.y,
        });
        revealObserver.observe(element);
      });

      const staggerObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            const group = entry.target as HTMLElement;
            const items = group.querySelectorAll<HTMLElement>("[data-stagger-item]");

            if (!items.length) {
              observer.unobserve(group);
              return;
            }

            gsap.fromTo(
              items,
              {
                opacity: 0,
                y: HOME_MOTION.stagger.y,
              },
              {
                opacity: 1,
                y: 0,
                duration: HOME_MOTION.stagger.duration,
                stagger: HOME_MOTION.stagger.each,
                ease: HOME_MOTION.stagger.ease,
                overwrite: "auto",
              },
            );

            observer.unobserve(group);
          });
        },
        {
          rootMargin: "0px 0px -12% 0px",
          threshold: 0.1,
        },
      );

      staggerGroups.forEach((group) => {
        if (group.dataset.staggerMode === "manual") {
          return;
        }

        const items = group.querySelectorAll<HTMLElement>("[data-stagger-item]");

        if (!items.length) {
          return;
        }

        gsap.set(items, {
          opacity: 0,
          y: HOME_MOTION.stagger.y,
        });
        staggerObserver.observe(group);
      });

      desktopMedia.add(HOME_MOTION.desktopBreakpoint, () => {
        saveScrollTriggerStyles(heroTargets.animatedElements);

        if (heroTargets.section) {
          const heroTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: heroTargets.section,
              start: heroScroll.start,
              end: heroScroll.end,
              scrub: heroScroll.scrub,
              invalidateOnRefresh: heroScroll.invalidateOnRefresh,
            },
          });

          heroScroll.layers.forEach((layer) => {
            const target = heroTargets.layers[layer.name];

            if (!target) {
              return;
            }

            heroTimeline.to(target, layer.vars, layer.at ?? 0);
          });
        }

        HOME_SCENES.forEach((scene) => {
          const sceneTargets = getSceneMotionTargets(selectOne, scene);

          if (!sceneTargets.section || !sceneTargets.panel) {
            return;
          }

          saveScrollTriggerStyles(sceneTargets.animatedElements);
          createSceneTimeline(scene, sceneTargets);
        });
      });

      return () => {
        delete root.dataset.pageTheme;
        revealObserver.disconnect();
        staggerObserver.disconnect();
        desktopMedia.revert();
      };
    },
    { scope: rootRef },
  );
}
