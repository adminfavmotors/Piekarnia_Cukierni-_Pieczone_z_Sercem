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

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const setTheme = (theme: string) => {
        document.body.dataset.theme = theme;
      };

      const desktopMedia = gsap.matchMedia();
      const themeSections = gsap.utils.toArray<HTMLElement>("[data-theme-section]");
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

      const heroIntro = HOME_MOTION.heroIntro;
      const heroScroll = HOME_MOTION.heroScroll;

      const heroTimeline = gsap.timeline({
        defaults: {
          duration: heroIntro.duration,
          ease: heroIntro.ease,
        },
      });

      heroTimeline
        .from("[data-hero-label]", {
          opacity: 0,
          y: heroIntro.labelY,
        })
        .from(
          "[data-hero-copy]",
          {
            opacity: 0,
            y: heroIntro.copyY,
          },
          "-=0.55",
        )
        .from(
          "[data-hero-actions]",
          {
            opacity: 0,
            y: heroIntro.actionsY,
          },
          "-=0.55",
        )
        .from(
          "[data-hero-photo-main]",
          {
            opacity: 0,
            y: heroIntro.mediaY,
            scale: heroIntro.mediaScale,
          },
          "-=0.75",
        )
        .from(
          "[data-hero-detail-card]",
          {
            opacity: 0,
            y: heroIntro.detailY,
            scale: heroIntro.detailScale,
            stagger: heroIntro.detailStagger,
          },
          "-=0.55",
        )
        .from(
          "[data-hero-scroll-note]",
          {
            opacity: 0,
            y: heroIntro.scrollNoteY,
          },
          "-=0.35",
        );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
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

      gsap.utils
        .toArray<HTMLElement>("[data-stagger-group]")
        .forEach((group) => {
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
        gsap.to("[data-hero-main-image]", {
          scale: heroScroll.imageScale,
          yPercent: heroScroll.imageYPercent,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='hero']",
            start: "top top",
            end: "bottom top",
            scrub: 0.9,
          },
        });

        gsap.to("[data-hero-layer='copy']", {
          yPercent: heroScroll.copyYPercent,
          opacity: heroScroll.copyOpacity,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='hero']",
            start: "top top",
            end: "bottom top",
            scrub: 0.85,
          },
        });

        gsap.to("[data-hero-detail-card]", {
          yPercent: heroScroll.cardYPercent,
          stagger: heroScroll.cardStagger,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='hero']",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to("[data-hero-backdrop]", {
          opacity: heroScroll.backdropOpacity,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='hero']",
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });

        gsap.to("[data-hero-floor]", {
          opacity: 1,
          yPercent: heroScroll.floorYPercent,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='hero']",
            start: "top 20%",
            end: "bottom top",
            scrub: 0.85,
          },
        });

        HOME_SCENES.forEach((scene) => {
          gsap.fromTo(
            `[data-scene-panel='${scene.panel}']`,
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
                trigger: `[data-theme-section='${scene.section}']`,
                start: HOME_MOTION.sceneTransition.start,
                end: HOME_MOTION.sceneTransition.end,
                scrub: scene.panelScrub,
              },
            },
          );

          gsap.to(`[data-scene-photo='${scene.section}']`, {
            yPercent: scene.photoYPercent,
            scale: scene.photoScale,
            ease: "none",
            scrollTrigger: {
              trigger: `[data-theme-section='${scene.section}']`,
              start: "top bottom",
              end: "bottom top",
              scrub: scene.photoScrub,
            },
          });

          if (scene.floorSelector) {
            gsap.to(scene.floorSelector, {
              opacity: 1,
              yPercent: -12,
              ease: "none",
              scrollTrigger: {
                trigger: `[data-theme-section='${scene.section}']`,
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
