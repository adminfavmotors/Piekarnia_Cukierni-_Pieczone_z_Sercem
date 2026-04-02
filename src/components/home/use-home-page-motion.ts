"use client";

import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { HOME_MOTION, HOME_SCENES } from "@/components/home/home-motion-config";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RootRef = RefObject<HTMLElement | null>;

export function useHomePageMotion(rootRef: RootRef) {
  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) {
        return;
      }

      const selectOne = <T extends Element>(selector: string) =>
        root.querySelector<T>(selector);
      const selectAll = <T extends Element>(selector: string) =>
        Array.from(root.querySelectorAll<T>(selector));

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const setTheme = (theme: string) => {
        root.dataset.pageTheme = theme;
      };

      const desktopMedia = gsap.matchMedia();
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
      const heroLabel = selectOne<HTMLElement>("[data-hero-label]");
      const heroCopy = selectOne<HTMLElement>("[data-hero-copy]");
      const heroActions = selectOne<HTMLElement>("[data-hero-actions]");
      const heroMainImage = selectOne<HTMLElement>("[data-hero-main-image]");
      const heroDetailCards = selectAll<HTMLElement>("[data-hero-detail-card]");
      const heroScrollNote = selectOne<HTMLElement>("[data-hero-scroll-note]");

      [
        heroLabel,
        heroCopy,
        heroActions,
        heroMainImage,
        heroScrollNote,
        ...heroDetailCards,
      ]
        .filter(Boolean)
        .forEach((element) => {
          gsap.set(element, {
            clearProps: "all",
          });
        });

      selectAll<HTMLElement>("[data-reveal]:not([data-scene-panel])").forEach((element) => {
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
            scrollTrigger: {
              trigger: element,
              start: HOME_MOTION.reveal.start,
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      selectAll<HTMLElement>("[data-stagger-group]").forEach((group) => {
          const items = group.querySelectorAll<HTMLElement>("[data-stagger-item]");

          if (!items.length) {
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
              scrollTrigger: {
                trigger: group,
                start: HOME_MOTION.stagger.start,
                toggleActions: "play none none reverse",
              },
            },
          );
        });

      desktopMedia.add(HOME_MOTION.desktopBreakpoint, () => {
        const heroSection = selectOne<HTMLElement>("[data-theme-section='hero']");
        const heroLayerCopy = selectOne<HTMLElement>("[data-hero-layer='copy']");
        const heroBackdrop = selectOne<HTMLElement>("[data-hero-backdrop]");
        const heroFloor = selectOne<HTMLElement>("[data-hero-floor]");

        if (heroSection && heroMainImage) {
          const heroTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: heroSection,
              start: heroScroll.start,
              end: heroScroll.end,
              scrub: heroScroll.scrub,
            },
          });

          heroTimeline.to(
            heroMainImage,
            {
              scale: heroScroll.imageScale,
              yPercent: heroScroll.imageYPercent,
              ease: "none",
            },
            0,
          );

          if (heroLayerCopy) {
            heroTimeline.to(
              heroLayerCopy,
              {
                yPercent: heroScroll.copyYPercent,
                opacity: heroScroll.copyOpacity,
                ease: "none",
              },
              0,
            );
          }

          if (heroDetailCards.length) {
            heroTimeline.to(
              heroDetailCards,
              {
                yPercent: heroScroll.cardYPercent,
                stagger: heroScroll.cardStagger,
                ease: "none",
              },
              0,
            );
          }

          if (heroBackdrop) {
            heroTimeline.to(
              heroBackdrop,
              {
                opacity: heroScroll.backdropOpacity,
                ease: "none",
              },
              0,
            );
          }

          if (heroFloor) {
            heroTimeline.to(
              heroFloor,
              {
                opacity: 1,
                yPercent: heroScroll.floorYPercent,
                ease: "none",
              },
              0.08,
            );
          }
        }

        HOME_SCENES.forEach((scene) => {
          const sectionEl = selectOne<HTMLElement>(
            `[data-theme-section='${scene.section}']`,
          );
          const panelEl = selectOne<HTMLElement>(
            `[data-scene-panel='${scene.panel}']`,
          );
          const photoEl = selectOne<HTMLElement>(
            `[data-scene-photo='${scene.section}']`,
          );
          const floorEl = scene.floorSelector
            ? selectOne<HTMLElement>(scene.floorSelector)
            : null;

          if (!sectionEl || !panelEl) {
            return;
          }

          const sceneTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: sectionEl,
              start: HOME_MOTION.sceneTransition.start,
              end: HOME_MOTION.sceneTransition.end,
              scrub: HOME_MOTION.sceneTransition.scrub,
            },
          });

          sceneTimeline.fromTo(
            panelEl,
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

          if (photoEl) {
            sceneTimeline.to(
              photoEl,
              {
                yPercent: scene.photoYPercent,
                scale: scene.photoScale,
                ease: "none",
              },
              0,
            );
          }

          if (floorEl) {
            sceneTimeline.to(
              floorEl,
              {
                opacity: 1,
                yPercent: scene.floorYPercent ?? -12,
                ease: "none",
              },
              0.06,
            );
          }
        });
      });

      return () => {
        delete root.dataset.pageTheme;
        desktopMedia.revert();
      };
    },
    { scope: rootRef },
  );
}
