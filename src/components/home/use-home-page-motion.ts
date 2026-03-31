"use client";

import { RefObject, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RootRef = RefObject<HTMLElement | null>;

export function useHomePageMotion(rootRef: RootRef) {
  useEffect(() => {
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
    const context = gsap.context(() => {
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
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => setTheme(theme),
          onEnterBack: () => setTheme(theme),
        });
      });

      if (prefersReducedMotion) {
        return;
      }

      const heroTimeline = gsap.timeline({
        defaults: {
          duration: 0.95,
          ease: "power3.out",
        },
      });

      heroTimeline
        .from("[data-hero-label]", {
          opacity: 0,
          y: 18,
        })
        .from(
          "[data-hero-copy]",
          {
            opacity: 0,
            y: 34,
          },
          "-=0.55",
        )
        .from(
          "[data-hero-actions]",
          {
            opacity: 0,
            y: 24,
          },
          "-=0.55",
        )
        .from(
          "[data-hero-photo-main]",
          {
            opacity: 0,
            y: 18,
            scale: 1.06,
          },
          "-=0.75",
        )
        .from(
          "[data-hero-detail-card]",
          {
            opacity: 0,
            y: 28,
            scale: 0.96,
            stagger: 0.08,
          },
          "-=0.55",
        )
        .from(
          "[data-hero-scroll-note]",
          {
            opacity: 0,
            y: 12,
          },
          "-=0.35",
        );

      const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");

      reveals.forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 44,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      const staggerGroups = gsap.utils.toArray<HTMLElement>("[data-stagger-group]");

      staggerGroups.forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-stagger-item]");

        if (!items.length) {
          return;
        }

        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      desktopMedia.add("(min-width: 1024px)", () => {
        gsap.to("[data-hero-main-image]", {
          scale: 1.08,
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='hero']",
            start: "top top",
            end: "bottom top",
            scrub: 0.9,
          },
        });

        gsap.to("[data-hero-layer='copy']", {
          yPercent: -16,
          opacity: 0.45,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='hero']",
            start: "top top",
            end: "bottom top",
            scrub: 0.85,
          },
        });

        gsap.to("[data-hero-detail-card]", {
          yPercent: -14,
          stagger: 0.06,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='hero']",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to("[data-hero-backdrop]", {
          opacity: 0.72,
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
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='hero']",
            start: "top 20%",
            end: "bottom top",
            scrub: 0.85,
          },
        });

        gsap.fromTo(
          "[data-scene-panel='taste']",
          {
            y: 70,
            scale: 0.97,
            clipPath: "inset(14% 0% 0% 0% round 2.5rem)",
          },
          {
            y: 0,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0% round 2.5rem)",
            ease: "none",
            scrollTrigger: {
              trigger: "[data-theme-section='taste']",
              start: "top 92%",
              end: "top 24%",
              scrub: 0.95,
            },
          },
        );

        gsap.to("[data-scene-photo='taste']", {
          yPercent: -16,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='taste']",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.fromTo(
          "[data-scene-panel='ingredients']",
          {
            y: 64,
            scale: 0.975,
            clipPath: "inset(16% 0% 0% 0% round 2.5rem)",
          },
          {
            y: 0,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0% round 2.5rem)",
            ease: "none",
            scrollTrigger: {
              trigger: "[data-theme-section='ingredients']",
              start: "top 92%",
              end: "top 24%",
              scrub: 0.95,
            },
          },
        );

        gsap.to("[data-scene-photo='ingredients']", {
          yPercent: -18,
          scale: 1.04,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='ingredients']",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to("[data-ingredients-floor]", {
          opacity: 1,
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='ingredients']",
            start: "top 24%",
            end: "bottom top",
            scrub: 0.85,
          },
        });

        gsap.fromTo(
          "[data-scene-panel='heart']",
          {
            y: 56,
            scale: 0.98,
            clipPath: "inset(18% 0% 0% 0% round 2.6rem)",
          },
          {
            y: 0,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0% round 2.6rem)",
            ease: "none",
            scrollTrigger: {
              trigger: "[data-theme-section='heart']",
              start: "top 92%",
              end: "top 24%",
              scrub: 0.9,
            },
          },
        );

        gsap.to("[data-scene-photo='heart']", {
          yPercent: -14,
          scale: 1.03,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='heart']",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.9,
          },
        });

        gsap.to("[data-heart-floor]", {
          opacity: 1,
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='heart']",
            start: "top 24%",
            end: "bottom top",
            scrub: 0.85,
          },
        });
      });
    }, root);

    return () => {
      delete document.body.dataset.theme;
      desktopMedia.revert();
      context.revert();
    };
  }, [rootRef]);
}
