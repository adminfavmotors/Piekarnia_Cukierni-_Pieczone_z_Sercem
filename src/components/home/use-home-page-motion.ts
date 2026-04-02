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
        document.body.dataset.theme = theme;
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
          delete document.body.dataset.theme;
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

      selectAll<HTMLElement>("[data-reveal]").forEach((element) => {
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
          gsap.to(heroMainImage, {
            scale: heroScroll.imageScale,
            yPercent: heroScroll.imageYPercent,
            ease: "none",
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "bottom top",
              scrub: 0.9,
            },
          });
        }

        if (heroSection && heroLayerCopy) {
          gsap.to(heroLayerCopy, {
            yPercent: heroScroll.copyYPercent,
            opacity: heroScroll.copyOpacity,
            ease: "none",
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "bottom top",
              scrub: 0.85,
            },
          });
        }

        if (heroSection && heroDetailCards.length) {
          gsap.to(heroDetailCards, {
            yPercent: heroScroll.cardYPercent,
            stagger: heroScroll.cardStagger,
            ease: "none",
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        if (heroSection && heroBackdrop) {
          gsap.to(heroBackdrop, {
            opacity: heroScroll.backdropOpacity,
            ease: "none",
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        }

        if (heroSection && heroFloor) {
          gsap.to(heroFloor, {
            opacity: 1,
            yPercent: heroScroll.floorYPercent,
            ease: "none",
            scrollTrigger: {
              trigger: heroSection,
              start: "top 20%",
              end: "bottom top",
              scrub: 0.85,
            },
          });
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

          gsap.fromTo(
            panelEl,
            {
              y: scene.fromY,
              scale: scene.fromScale,
              clipPath: `inset(${scene.inset} 0% 0% 0% round ${scene.radius})`,
            },
            {
              y: 0,
              scale: 1,
              clipPath: `inset(0% 0% 0% 0% round ${scene.radius})`,
              ease: "none",
              scrollTrigger: {
                trigger: sectionEl,
                start: HOME_MOTION.sceneTransition.start,
                end: HOME_MOTION.sceneTransition.end,
                scrub: scene.panelScrub,
              },
            },
          );

          if (photoEl) {
            gsap.to(photoEl, {
              yPercent: scene.photoYPercent,
              scale: scene.photoScale,
              ease: "none",
              scrollTrigger: {
                trigger: sectionEl,
                start: "top bottom",
                end: "bottom top",
                scrub: scene.photoScrub,
              },
            });
          }

          if (floorEl) {
            gsap.to(floorEl, {
              opacity: 1,
              yPercent: -12,
              ease: "none",
              scrollTrigger: {
                trigger: sectionEl,
                start: HOME_MOTION.floorTransition.start,
                end: HOME_MOTION.floorTransition.end,
                scrub: HOME_MOTION.floorTransition.scrub,
              },
            });
          }
        });
      });

      return () => {
        delete document.body.dataset.theme;
        desktopMedia.revert();
      };
    },
    { scope: rootRef },
  );
}
