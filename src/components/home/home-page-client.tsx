"use client";

import { useEffect, useRef } from "react";
import {
  CakeSlice,
  Clock3,
  HeartHandshake,
  Leaf,
  MapPin,
  Wheat,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BakeCard } from "@/components/home/bake-card";
import { SectionHeading } from "@/components/home/section-heading";
import { siteData } from "@/data/site";

const tasteHighlights = [
  {
    icon: Wheat,
    title: "Codzienna świeżość",
    description:
      "Chleb i wypieki, po które wpada się rano, w południe i po prostu z przyjemnością.",
  },
  {
    icon: Leaf,
    title: "Uczciwe składniki",
    description:
      "Proste podejście, które zostawia miejsce na to, co naprawdę ważne: smak i jakość.",
  },
  {
    icon: HeartHandshake,
    title: "Domowy klimat",
    description:
      "Miejsce, które ma być bliskie, serdeczne i przyjemne już od pierwszego wejścia.",
  },
] as const;

gsap.registerPlugin(ScrollTrigger);

export function HomePageClient() {
  const rootRef = useRef<HTMLElement | null>(null);

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
      const themeSections = gsap.utils.toArray<HTMLElement>(
        "[data-theme-section]",
      );

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
          duration: 0.9,
          ease: "power3.out",
        },
      });

      heroTimeline
        .from("[data-hero-eyebrow]", {
          opacity: 0,
          y: 20,
        })
        .from(
          "[data-hero-title]",
          {
            opacity: 0,
            y: 36,
          },
          "-=0.55",
        )
        .from(
          "[data-hero-copy]",
          {
            opacity: 0,
            y: 26,
          },
          "-=0.55",
        )
        .from(
          "[data-hero-actions]",
          {
            opacity: 0,
            y: 22,
          },
          "-=0.5",
        )
        .from(
          "[data-hero-card]",
          {
            opacity: 0,
            y: 32,
            scale: 0.96,
            stagger: 0.08,
          },
          "-=0.5",
        )
        .from(
          "[data-hero-panel]",
          {
            opacity: 0,
            y: 36,
            scale: 0.96,
          },
          "-=0.8",
        );

      const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");

      reveals.forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 36,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      const staggerGroups = gsap.utils.toArray<HTMLElement>(
        "[data-stagger-group]",
      );

      staggerGroups.forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-stagger-item]");

        if (!items.length) {
          return;
        }

        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: 28,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      desktopMedia.add("(min-width: 1024px)", () => {
        gsap.to("[data-hero-content]", {
          yPercent: -9,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='hero']",
            start: "top top",
            end: "bottom top",
            scrub: 0.7,
          },
        });

        gsap.to("[data-hero-panel]", {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='hero']",
            start: "top top",
            end: "bottom top",
            scrub: 0.7,
          },
        });

        gsap.to("[data-hero-highlights]", {
          yPercent: -14,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='hero']",
            start: "top top",
            end: "bottom top",
            scrub: 0.9,
          },
        });

        gsap.to("[data-hero-glow]", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='hero']",
            start: "top top",
            end: "bottom top",
            scrub: 0.7,
          },
        });

        gsap.to("[data-float-badge]", {
          yPercent: -18,
          xPercent: 10,
          rotation: 8,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='hero']",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.fromTo(
          "[data-taste-shell]",
          {
            y: 50,
            scale: 0.97,
          },
          {
            y: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-theme-section='taste']",
              start: "top 92%",
              end: "top 35%",
              scrub: 0.9,
            },
          },
        );

        gsap.fromTo(
          "[data-taste-card]",
          {
            y: 36,
            opacity: 0.7,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-theme-section='taste']",
              start: "top 84%",
              end: "top 38%",
              scrub: 0.7,
            },
          },
        );

        gsap.fromTo(
          "[data-brand-copy]",
          {
            y: 40,
            opacity: 0.65,
          },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-brand-scene]",
              start: "top 85%",
              end: "top 28%",
              scrub: 0.8,
            },
          },
        );

        gsap.to("[data-brand-glow]", {
          xPercent: -12,
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-brand-scene]",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.fromTo(
          "[data-daily-chips] [data-chip]",
          {
            y: 18,
            opacity: 0.5,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.04,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-daily-chips]",
              start: "top 88%",
              end: "top 42%",
              scrub: 0.7,
            },
          },
        );

        gsap.to("[data-daily-ambient]", {
          yPercent: 22,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-theme-section='daily']",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.fromTo(
          "[data-daily-card]",
          {
            y: 24,
            scale: 0.985,
          },
          {
            y: 0,
            scale: 1,
            stagger: 0.06,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-daily-grid]",
              start: "top 85%",
              end: "top 32%",
              scrub: 0.8,
            },
          },
        );

        gsap.fromTo(
          "[data-season-panel]",
          {
            y: 34,
            scale: 0.985,
          },
          {
            y: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-season-panel]",
              start: "top 88%",
              end: "top 36%",
              scrub: 0.9,
            },
          },
        );
      });
    }, root);

    return () => {
      delete document.body.dataset.theme;
      desktopMedia.revert();
      context.revert();
    };
  }, []);

  return (
    <main ref={rootRef} className="relative overflow-hidden bg-[var(--color-cream)]">
      <div
        data-hero-glow
        className="hero-glow absolute inset-x-0 top-0 h-[42rem] sm:h-[48rem]"
      />

      <header className="sticky top-0 z-50 border-b border-[rgba(79,45,30,0.08)] bg-[var(--header-bg)] backdrop-blur-xl transition-colors duration-500">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="font-display text-2xl tracking-[-0.04em] text-[var(--color-brown-deep)] sm:text-3xl"
          >
            Pieczone z Sercem
          </a>
          <a
            href="#kontakt"
            className="hidden rounded-full border border-[var(--color-line)] bg-white/75 px-4 py-2 text-sm font-semibold text-[var(--color-brown-deep)] transition-colors duration-300 hover:border-[rgba(233,79,60,0.28)] hover:text-[var(--color-accent)] sm:inline-flex"
          >
            Kontakt
          </a>
        </div>
      </header>

      <section
        id="top"
        data-theme-section="hero"
        className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-8 lg:pb-28 lg:pt-20"
      >
        <div data-hero-content className="relative z-10 flex flex-col justify-center space-y-8">
          <div className="space-y-5">
            <p
              data-hero-eyebrow
              className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] sm:text-sm"
            >
              {siteData.hero.eyebrow}
            </p>
            <h1
              data-hero-title
              className="max-w-3xl font-display text-5xl leading-[0.94] tracking-[-0.06em] text-[var(--color-brown-deep)] sm:text-6xl lg:text-7xl"
            >
              {siteData.hero.title}
            </h1>
            <p
              data-hero-copy
              className="max-w-xl text-base leading-7 text-[var(--color-brown-soft)] sm:text-lg sm:leading-8"
            >
              {siteData.hero.description}
            </p>
          </div>

          <div data-hero-actions className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#co-dzis-pieczemy"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(233,79,60,0.28)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              {siteData.hero.primaryCta}
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[var(--color-brown-deep)] transition-colors duration-300 hover:border-[rgba(233,79,60,0.25)] hover:text-[var(--color-accent)]"
            >
              {siteData.hero.secondaryCta}
            </a>
          </div>

          <div data-hero-highlights className="grid gap-3 sm:grid-cols-3">
            {tasteHighlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                data-hero-card
                className="rounded-[1.5rem] border border-[rgba(79,45,30,0.08)] bg-[rgba(255,248,241,0.72)] p-4 shadow-[0_18px_40px_rgba(79,45,30,0.06)] backdrop-blur-sm"
              >
                <Icon className="mb-3 h-5 w-5 text-[var(--color-accent)]" />
                <p className="text-sm font-semibold text-[var(--color-brown-deep)]">
                  {title}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-brown-soft)]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div data-hero-panel className="relative">
          <div
            data-float-badge
            className="pointer-events-none absolute left-8 top-20 z-10 hidden h-20 w-20 rounded-full border border-[rgba(79,45,30,0.08)] bg-[rgba(255,248,241,0.7)] shadow-[0_18px_30px_rgba(79,45,30,0.08)] lg:block"
          />
          <div className="pointer-events-none absolute -left-5 top-10 hidden rounded-full border border-[rgba(79,45,30,0.08)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brown-soft)] shadow-[0_18px_30px_rgba(79,45,30,0.08)] lg:inline-flex">
            świeżo z pieca
          </div>
          <div className="pointer-events-none absolute -right-4 bottom-16 hidden rounded-full border border-[rgba(233,79,60,0.14)] bg-[rgba(255,248,241,0.85)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] shadow-[0_18px_30px_rgba(79,45,30,0.08)] lg:inline-flex">
            domowy rytuał dnia
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(79,45,30,0.08)] bg-[linear-gradient(180deg,rgba(255,248,241,0.92),rgba(249,229,199,0.78))] p-5 shadow-[0_28px_80px_rgba(79,45,30,0.12)] sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,79,60,0.18),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(235,171,163,0.32),transparent_35%)]" />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between">
                <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  Dziś w piekarni
                </span>
                <span className="text-sm text-[var(--color-brown-soft)]">
                  Kraków
                </span>
              </div>

              <div className="grid gap-3">
                {siteData.dailyBakes.slice(0, 3).map((bake, index) => (
                  <div
                    key={bake.name}
                    className={`rounded-[1.5rem] border px-4 py-4 ${
                      index === 0
                        ? "border-[rgba(233,79,60,0.18)] bg-[rgba(255,255,255,0.78)]"
                        : "border-[rgba(79,45,30,0.08)] bg-[rgba(255,248,241,0.72)]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-display text-2xl tracking-[-0.03em] text-[var(--color-brown-deep)]">
                          {bake.name}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[var(--color-brown-soft)]">
                          {bake.description}
                        </p>
                      </div>
                      <span className="inline-flex rounded-full bg-[rgba(233,79,60,0.12)] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                        {bake.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.5rem] bg-[var(--color-brown-deep)] px-5 py-5 text-[var(--color-cream-light)]">
                <p className="text-xs uppercase tracking-[0.24em] text-[rgba(255,248,241,0.72)]">
                  Domowy klimat
                </p>
                <p className="mt-3 font-display text-3xl tracking-[-0.04em]">
                  Chleb, coś słodkiego i chwila spokoju.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
        <div
          data-reveal
          data-info-strip
          className="grid gap-4 rounded-[2rem] border border-[rgba(79,45,30,0.08)] bg-[rgba(255,248,241,0.78)] px-5 py-5 shadow-[0_20px_60px_rgba(79,45,30,0.08)] sm:grid-cols-3 sm:px-6"
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Gdzie jesteśmy
            </p>
            <p className="text-sm leading-6 text-[var(--color-brown-soft)]">
              {siteData.address}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Kiedy zajrzeć
            </p>
            <p className="text-sm leading-6 text-[var(--color-brown-soft)]">
              {siteData.hours}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Na co stawiamy
            </p>
            <p className="text-sm leading-6 text-[var(--color-brown-soft)]">
              Chleb, coś słodkiego i codzienną świeżość bez zbędnego pośpiechu.
            </p>
          </div>
        </div>
      </section>

      <section
        data-theme-section="taste"
        data-reveal
        className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
      >
        <div
          data-taste-shell
          className="grid gap-6 rounded-[2rem] border border-[rgba(79,45,30,0.08)] bg-[rgba(255,248,241,0.85)] px-5 py-6 shadow-[0_20px_60px_rgba(79,45,30,0.08)] sm:px-8 lg:grid-cols-3 lg:gap-8"
        >
          {siteData.pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              data-taste-card
              className={`rounded-[1.5rem] p-5 ${
                index === 0
                  ? "bg-[rgba(255,255,255,0.5)]"
                  : index === 1
                    ? "bg-[rgba(235,171,163,0.18)]"
                    : "bg-[rgba(79,45,30,0.05)]"
              }`}
            >
              <div className="space-y-3">
              <h2 className="font-display text-3xl leading-none tracking-[-0.04em] text-[var(--color-brown-deep)]">
                {pillar.title}
              </h2>
              <p className="text-sm leading-6 text-[var(--color-brown-soft)] sm:text-base">
                {pillar.description}
              </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        data-theme-section="ingredients"
        className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8"
      >
        <div data-reveal>
          <SectionHeading
            eyebrow="Naturalne składniki"
            title="Uczciwe podejście do pieczenia"
            description="Dobre wypieki nie potrzebują przesady. Potrzebują dobrych podstaw, codziennej uwagi i składników, którym można zaufać."
          />
        </div>

        <div data-stagger-group className="grid gap-4 sm:grid-cols-2">
          <div
            data-stagger-item
            className="rounded-[1.75rem] bg-[rgba(255,255,255,0.68)] p-6 shadow-[0_18px_50px_rgba(79,45,30,0.08)]"
          >
            <Leaf className="h-6 w-6 text-[var(--color-accent)]" />
            <p className="mt-4 font-display text-3xl leading-none tracking-[-0.03em] text-[var(--color-brown-deep)]">
              Proste składniki
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--color-brown-soft)]">
              Bez zbędnego komplikowania, bez pustych obietnic i bez udawania
              czegoś, czym piekarnia nie jest.
            </p>
          </div>
          <div
            data-stagger-item
            className="rounded-[1.75rem] bg-[rgba(235,171,163,0.26)] p-6 shadow-[0_18px_50px_rgba(79,45,30,0.06)]"
          >
            <Clock3 className="h-6 w-6 text-[var(--color-accent)]" />
            <p className="mt-4 font-display text-3xl leading-none tracking-[-0.03em] text-[var(--color-brown-deep)]">
              Świeżość każdego dnia
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--color-brown-soft)]">
              To, co trafia do naszych gości, ma smakować dobrze od pierwszego
              kęsa i zostawać w pamięci.
            </p>
          </div>
          <div
            data-stagger-item
            className="rounded-[1.75rem] bg-[rgba(255,255,255,0.68)] p-6 shadow-[0_18px_50px_rgba(79,45,30,0.08)] sm:col-span-2"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Wypiekane z sercem
            </p>
            <p className="mt-4 font-display text-4xl leading-none tracking-[-0.04em] text-[var(--color-brown-deep)]">
              Chcemy, żeby było tu swojsko, przyjemnie i po prostu dobrze.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-brown-soft)]">
              Pieczone z Sercem to miejsce, które ma dawać ludziom coś więcej
              niż dobry wypiek. Ma dawać serdeczność, znajomy klimat i codzienną
              małą przyjemność, po którą chce się wracać.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-2 sm:px-6 lg:px-8">
        <div
          data-reveal
          data-brand-scene
          className="relative overflow-hidden rounded-[2rem] border border-[rgba(79,45,30,0.08)] bg-[linear-gradient(135deg,rgba(79,45,30,0.96),rgba(46,26,18,0.98))] px-6 py-8 text-[var(--color-cream-light)] shadow-[0_28px_70px_rgba(46,26,18,0.2)] sm:px-8 lg:px-10"
        >
          <div
            data-brand-glow
            className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(233,79,60,0.18),transparent_55%)]"
          />
          <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div data-brand-copy className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(255,248,241,0.72)]">
                Piekarnia z charakterem
              </p>
              <p className="font-display text-4xl leading-none tracking-[-0.05em] sm:text-5xl">
                Miejsce, do którego wpada się po smak, zapach i odrobinę spokoju.
              </p>
            </div>
            <p className="max-w-xl text-base leading-7 text-[rgba(255,248,241,0.82)]">
              Nie chcemy być tylko kolejnym punktem na mapie. Chcemy być
              piekarnią, która ma własny rytm, własny smak i atmosferę, do
              której chce się wracać po prostu po coś dobrego.
            </p>
          </div>
        </div>
      </section>

      <section
        id="co-dzis-pieczemy"
        data-theme-section="daily"
        className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,248,241,1),rgba(235,171,163,0.18))]"
      >
        <div
          data-daily-ambient
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_20%_20%,rgba(233,79,60,0.14),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(235,171,163,0.32),transparent_24%)]"
        />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col gap-10">
            <div data-reveal>
              <SectionHeading
                eyebrow="Co dziś pieczemy"
                title="Codzienna tablica wypieków"
                description="Sekcja dnia nie udaje sklepu online. Pokazuje świeżo przygotowane propozycje, sezonowe akcenty i to, co najbardziej lubią nasi goście."
              />
            </div>

            <div
              data-reveal
              data-daily-chips
              className="flex flex-wrap gap-2"
            >
              {siteData.categories.map((category) => (
                <span
                  key={category}
                  data-chip
                  className="inline-flex rounded-full border border-[rgba(79,45,30,0.1)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brown-soft)]"
                >
                  {category}
                </span>
              ))}
            </div>

            <div
              data-stagger-group
              data-daily-grid
              className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3"
            >
              {siteData.dailyBakes.map((bake, index) => (
                <div
                  key={bake.name}
                  data-stagger-item
                  data-daily-card
                  className={index === 0 ? "xl:col-span-2" : ""}
                >
                  <BakeCard bake={bake} featured={index === 0} />
                </div>
              ))}
            </div>

            <div
              data-reveal
              data-season-panel
              className="grid gap-4 rounded-[2rem] border border-[rgba(79,45,30,0.08)] bg-[rgba(255,248,241,0.76)] p-5 shadow-[0_20px_60px_rgba(79,45,30,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-8"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Sezonowość
                </p>
                <p className="mt-4 font-display text-4xl leading-none tracking-[-0.04em] text-[var(--color-brown-deep)]">
                  Polska rytmem sezonów
                </p>
              </div>
              <div className="grid gap-3">
                {siteData.seasonalMoments.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/70 px-4 py-4 text-sm leading-6 text-[var(--color-brown-soft)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-theme-section="categories"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-reveal>
            <SectionHeading
              eyebrow="Nasze wypieki"
              title="To, co lubimy piec najbardziej"
              description="Od codziennych klasyków po słodkie przyjemności. Ta część strony ma pokazywać zakres oferty bez zamieniania projektu w katalog czy sklep."
            />
          </div>
          <div data-stagger-group className="grid gap-4 sm:grid-cols-2">
            {siteData.categories.map((category) => (
              <div
                key={category}
                data-stagger-item
                className="rounded-[1.75rem] border border-[var(--color-line)] bg-[rgba(255,248,241,0.72)] p-5 shadow-[0_18px_50px_rgba(79,45,30,0.06)]"
              >
                <CakeSlice className="h-5 w-5 text-[var(--color-accent)]" />
                <h3 className="mt-4 font-display text-3xl leading-none tracking-[-0.03em] text-[var(--color-brown-deep)]">
                  {category}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-brown-soft)]">
                  Spokojna, estetyczna prezentacja oferty, która zostawia miejsce
                  na przyszłą rozbudowę treści i materiałów wizualnych.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="kontakt"
        data-theme-section="contact"
        className="mx-auto max-w-6xl px-4 pb-20 pt-4 sm:px-6 lg:px-8"
      >
        <div
          data-reveal
          className="grid gap-6 rounded-[2rem] bg-[var(--color-brown-deep)] px-5 py-8 text-[var(--color-cream-light)] shadow-[0_28px_70px_rgba(46,26,18,0.24)] sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-end"
        >
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(255,248,241,0.72)]">
              Zapraszamy do nas
            </p>
            <h2 className="font-display text-4xl leading-none tracking-[-0.04em] sm:text-5xl">
              Smak, serdeczność i świeże wypieki każdego dnia.
            </h2>
            <p className="max-w-xl text-base leading-7 text-[rgba(255,248,241,0.82)]">
              Jeśli jesteś w okolicy, zajrzyj po coś dobrego na wynos albo po
              chleb, który od razu pachnie domem.
            </p>
          </div>

          <div className="grid gap-4 rounded-[1.5rem] bg-[rgba(255,248,241,0.08)] p-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-[var(--color-accent)]" />
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[rgba(255,248,241,0.6)]">
                  Adres
                </p>
                <p className="mt-2 text-base leading-7">{siteData.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 className="mt-1 h-5 w-5 text-[var(--color-accent)]" />
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[rgba(255,248,241,0.6)]">
                  Godziny
                </p>
                <p className="mt-2 text-base leading-7">{siteData.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
