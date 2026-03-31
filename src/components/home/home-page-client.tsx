"use client";

import Image from "next/image";
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

const scenePillars = [
  {
    icon: Wheat,
    label: "Smak",
    title: "Codzienna świeżość, którą czuć od wejścia",
    description:
      "Świeże pieczywo i słodkie wypieki, które kuszą zapachem już od progu.",
  },
  {
    icon: Leaf,
    label: "Składniki",
    title: "Proste produkty i uczciwe pieczenie",
    description:
      "Prosty skład, codzienne przygotowanie i sezonowe dodatki bez zbędnego nadęcia.",
  },
  {
    icon: HeartHandshake,
    label: "Serce",
    title: "Domowy rytm, do którego chce się wracać",
    description:
      "To miejsce ma być ciepłe, znajome i przyjemne już od pierwszego spojrzenia.",
  },
] as const;

const ingredientNotes = [
  "Mąka, masło, owoce i prosty skład są tu ważniejsze niż przesadnie ozdobna forma.",
  "Każdy wypiek zaczyna się od świeżych produktów i codziennego rytmu pracy.",
  "Sezonowe dodatki pojawiają się wtedy, kiedy naprawdę smakują najlepiej.",
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

        gsap.fromTo(
          "[data-daily-shell]",
          {
            y: 58,
            scale: 0.985,
            clipPath: "inset(18% 0% 0% 0% round 2.6rem)",
          },
          {
            y: 0,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0% round 2.6rem)",
            ease: "none",
            scrollTrigger: {
              trigger: "[data-theme-section='daily']",
              start: "top 92%",
              end: "top 24%",
              scrub: 0.95,
            },
          },
        );

        const dailyCarousel = root.querySelector<HTMLElement>(
          "[data-daily-carousel]",
        );
        const dailyViewport = root.querySelector<HTMLElement>(
          "[data-daily-viewport]",
        );
        const dailyTrack = root.querySelector<HTMLElement>("[data-daily-track]");

        if (dailyCarousel && dailyViewport && dailyTrack) {
          const getDistance = () =>
            Math.max(0, dailyTrack.scrollWidth - dailyViewport.clientWidth);

          if (getDistance() > 0) {
            gsap.to(dailyTrack, {
              x: () => -getDistance(),
              ease: "none",
              scrollTrigger: {
                trigger: dailyCarousel,
                start: "top top+=112",
                end: () => `+=${getDistance() + window.innerHeight * 0.25}`,
                scrub: 0.95,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });
          }
        }
      });
    }, root);

    return () => {
      delete document.body.dataset.theme;
      desktopMedia.revert();
      context.revert();
    };
  }, []);

  return (
    <main
      ref={rootRef}
      className="relative overflow-x-clip bg-[var(--color-cream)] text-[var(--color-brown-deep)]"
    >
      <header className="sticky top-0 z-50 border-b border-[rgba(79,45,30,0.08)] bg-[var(--header-bg)]/95 backdrop-blur-xl transition-colors duration-500">
        <div className="mx-auto flex max-w-[92rem] items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <a
            href="#top"
            className="font-display text-2xl tracking-[-0.05em] sm:text-3xl"
          >
            Pieczone z Sercem
          </a>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-brown-soft)] sm:inline-flex">
            Kraków
          </span>
        </div>
      </header>

      <section
        id="top"
        data-theme-section="hero"
        className="relative isolate min-h-[122svh] overflow-hidden sm:min-h-[132svh] lg:min-h-[182svh]"
      >
        <div className="relative min-h-[122svh] overflow-hidden sm:min-h-[132svh] lg:sticky lg:top-0 lg:h-svh lg:min-h-0">
          <div
            data-hero-main-image
            className="absolute inset-0 scale-[1.01]"
          >
            <Image
              src="/images/bakery/hero-berries.png"
              alt="Domowe drożdżówki i słodkie wypieki na blasze"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,18,12,0.18)_0%,rgba(36,18,12,0.08)_24%,rgba(36,18,12,0.44)_100%)]" />
          <div
            data-hero-backdrop
            className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(249,229,199,0.18),transparent_24%),radial-gradient(circle_at_84%_14%,rgba(233,79,60,0.14),transparent_18%),linear-gradient(90deg,rgba(36,18,12,0.42)_0%,rgba(36,18,12,0.08)_44%,rgba(36,18,12,0.3)_100%)] opacity-50"
          />
          <div
            data-hero-floor
            className="absolute inset-x-0 bottom-0 h-[34vh] translate-y-[10%] bg-[linear-gradient(180deg,rgba(36,18,12,0)_0%,rgba(36,18,12,0.22)_30%,rgba(255,248,241,0.76)_100%)] opacity-0"
          />

          <div className="relative mx-auto flex min-h-[122svh] max-w-[92rem] flex-col justify-between px-4 pb-6 pt-14 sm:min-h-[132svh] sm:px-6 sm:pb-8 lg:h-full lg:min-h-0 lg:px-10 lg:pb-10 lg:pt-20">
            <div className="grid gap-8 lg:grid-cols-[0.58fr_0.42fr] lg:items-start">
              <div
                data-hero-layer="copy"
                className="relative z-10 flex max-w-[24rem] flex-col justify-end pt-6 text-[var(--color-cream-light)] sm:max-w-[28rem] lg:pt-24"
              >
                <p
                  data-hero-label
                  className="text-xs font-semibold uppercase tracking-[0.32em] text-[rgba(255,248,241,0.76)]"
                >
                  {siteData.hero.eyebrow}
                </p>
                <div data-hero-copy className="mt-6 space-y-5">
                  <h1 className="font-display text-[2.9rem] leading-[0.88] tracking-[-0.07em] sm:text-6xl lg:text-[5.8rem]">
                    {siteData.hero.title}
                  </h1>
                  <p className="max-w-md text-base leading-7 text-[rgba(255,248,241,0.82)] sm:text-lg sm:leading-8">
                    {siteData.hero.description}
                  </p>
                </div>
                <div
                  data-hero-actions
                  className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
                >
                  <a
                    href="#co-dzis-pieczemy"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(233,79,60,0.26)] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    {siteData.hero.primaryCta}
                  </a>
                  <a
                    href="#kontakt"
                    className="inline-flex items-center justify-center rounded-full border border-[rgba(255,248,241,0.22)] bg-[rgba(255,248,241,0.08)] px-6 py-3.5 text-sm font-semibold text-[var(--color-cream-light)] transition-colors duration-300 hover:border-[rgba(255,248,241,0.38)] hover:bg-[rgba(255,248,241,0.14)]"
                  >
                    {siteData.hero.secondaryCta}
                  </a>
                </div>
              </div>

              <div className="relative z-10 hidden min-h-[26rem] lg:block">
                <div
                  data-hero-detail-card
                  className="absolute right-0 top-0 w-[15rem] overflow-hidden rounded-[2rem] border border-[rgba(255,248,241,0.16)] bg-[rgba(255,248,241,0.12)] p-4 shadow-[0_28px_70px_rgba(0,0,0,0.2)] backdrop-blur-sm"
                >
                  <div className="relative aspect-[0.86] overflow-hidden rounded-[1.4rem]">
                    <Image
                      src="/images/bakery/bread-basket.png"
                      alt="Świeże chleby i bułki w wiklinowym koszu"
                      fill
                      className="object-cover"
                      sizes="15rem"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[rgba(255,248,241,0.7)]">
                      chleb dnia
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-cream-light)]">
                      Miękkie, świeże bochenki jako drugi plan zamiast kolejnego boxa z tekstem.
                    </p>
                  </div>
                </div>

                <div
                  data-hero-detail-card
                  className="absolute bottom-0 right-12 max-w-[18rem] rounded-[2rem] border border-[rgba(255,248,241,0.16)] bg-[rgba(36,18,12,0.48)] px-5 py-5 shadow-[0_28px_70px_rgba(0,0,0,0.22)] backdrop-blur-md"
                >
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[rgba(255,248,241,0.7)]">
                    dziś w piekarni
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {siteData.dailyBakes.slice(0, 3).map((bake) => (
                      <span
                        key={bake.name}
                        className="inline-flex rounded-full bg-[rgba(255,248,241,0.14)] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-cream-light)]"
                      >
                        {bake.category}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[rgba(255,248,241,0.82)]">
                    Kraków, {siteData.hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-end justify-between gap-4">
              <div
                data-hero-detail-card
                className="max-w-[14rem] rounded-full border border-[rgba(255,248,241,0.18)] bg-[rgba(255,248,241,0.1)] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-cream-light)] backdrop-blur-md sm:max-w-[18rem] sm:text-[0.72rem]"
              >
                świeżo z pieca
              </div>
              <div
                data-hero-scroll-note
                className="text-right text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[rgba(255,248,241,0.68)] sm:text-[0.72rem] sm:tracking-[0.24em]"
              >
                przewiń dalej
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-theme-section="taste"
        className="relative z-20 -mt-10 px-4 pb-16 pt-0 sm:-mt-14 sm:px-6 sm:pb-20 lg:-mt-[28svh] lg:pb-28 lg:px-10"
      >
        <div className="mx-auto max-w-[92rem]">
          <div
            data-reveal
            data-scene-panel="taste"
            className="relative overflow-hidden rounded-[2.4rem] border border-[rgba(79,45,30,0.08)] bg-[rgba(255,248,241,0.92)] px-5 pb-8 pt-8 shadow-[0_40px_120px_rgba(79,45,30,0.14)] backdrop-blur-sm sm:px-8 sm:pb-10 sm:pt-10 lg:grid lg:grid-cols-[0.5fr_0.5fr] lg:items-end lg:gap-8 lg:px-10 lg:pb-12 lg:pt-12"
          >
            <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_14%_18%,rgba(233,79,60,0.12),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(235,171,163,0.24),transparent_22%)]" />
            <div className="relative space-y-8 lg:max-w-[32rem]">
              <SectionHeading
                eyebrow="Smak, który zatrzymuje"
                title="Świeże wypieki, po które wpada się rano, w południe i po prostu z przyjemnością."
                description="Na pierwszym planie są zapach, kolor i ciepło pieca. Tekstu jest mniej, bo tutaj najpierw ma działać apetyt."
              />

              <div data-stagger-group className="grid gap-4">
                {scenePillars.map(({ icon: Icon, label, title, description }) => (
                  <div
                    key={label}
                    data-stagger-item
                    className="rounded-[1.6rem] border border-[rgba(79,45,30,0.08)] bg-white/72 px-5 py-5 shadow-[0_18px_40px_rgba(79,45,30,0.06)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-[rgba(233,79,60,0.12)] p-3 text-[var(--color-accent)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                          {label}
                        </p>
                        <p className="mt-2 font-display text-3xl leading-none tracking-[-0.04em]">
                          {title}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-[var(--color-brown-soft)]">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-scene-photo="taste" className="relative mt-8 lg:mt-0 lg:pl-4">
              <div className="relative aspect-[0.92] overflow-hidden rounded-[2.2rem] shadow-[0_36px_100px_rgba(79,45,30,0.18)]">
                <Image
                  src="/images/bakery/cinnamon-rolls.png"
                  alt="Cynamonki i drożdżówki pokazane w dużym, apetycznym kadrze"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(46,26,18,0.02),rgba(46,26,18,0.24))]" />
              </div>
              <div className="absolute -bottom-8 left-0 hidden max-w-[18rem] rounded-[1.8rem] border border-[rgba(79,45,30,0.08)] bg-[rgba(255,248,241,0.92)] p-5 shadow-[0_20px_60px_rgba(79,45,30,0.12)] sm:left-8 lg:block">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  Od rana pachnie piecem
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--color-brown-soft)]">
                  Najmocniej działa prosty widok: świeża blacha, miękki środek i złoty wierzch.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-ingredients-floor
          className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-44 translate-y-[14%] bg-[linear-gradient(180deg,rgba(255,248,241,0)_0%,rgba(255,248,241,0.26)_40%,rgba(249,235,221,0.92)_100%)] opacity-0 lg:block"
        />
      </section>

      <section
        data-theme-section="ingredients"
        className="relative z-30 -mt-8 px-4 pb-16 pt-0 sm:-mt-12 sm:px-6 sm:pb-20 lg:-mt-[22svh] lg:pb-28 lg:px-10"
      >
        <div className="mx-auto max-w-[92rem]">
          <div
            data-reveal
            data-scene-panel="ingredients"
            className="relative overflow-hidden rounded-[2.4rem] border border-[rgba(79,45,30,0.08)] bg-[linear-gradient(180deg,#fff8f1_0%,#f9ebdd_100%)] px-5 pb-8 pt-8 shadow-[0_40px_120px_rgba(79,45,30,0.12)] sm:px-8 sm:pb-10 sm:pt-10 lg:grid lg:grid-cols-[0.44fr_0.56fr] lg:items-center lg:gap-8 lg:px-10 lg:pb-12 lg:pt-12"
          >
            <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_18%_16%,rgba(233,79,60,0.1),transparent_24%),radial-gradient(circle_at_84%_16%,rgba(255,248,241,0.92),transparent_18%)]" />
            <div data-scene-photo="ingredients" className="relative order-2 mt-8 lg:order-1 lg:mt-0">
              <div className="relative aspect-[0.98] overflow-hidden rounded-[2.2rem] shadow-[0_36px_100px_rgba(79,45,30,0.16)]">
                <Image
                  src="/images/bakery/bread-basket.png"
                  alt="Świeże wypieki w koszu jako spokojny kadr sekcji o składnikach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </div>
              <div className="absolute -bottom-8 right-0 hidden max-w-[17rem] rounded-[1.8rem] border border-[rgba(79,45,30,0.08)] bg-[rgba(255,248,241,0.92)] p-5 shadow-[0_20px_60px_rgba(79,45,30,0.12)] sm:right-8 lg:block">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  Prosty skład
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--color-brown-soft)]">
                  Dobre wypieki zaczynają się od mąki, masła, owoców i codziennej dbałości o jakość.
                </p>
              </div>
            </div>

            <div className="relative order-1 space-y-8 lg:order-2 lg:pl-10">
              <SectionHeading
                eyebrow="Naturalne składniki"
                title="Naturalne składniki i codzienna świeżość bez zbędnych dodatków."
                description="Zamiast długiej listy obietnic pokazujemy to, co najważniejsze: prosty skład, spokojny rytm pracy i wypieki robione na bieżąco."
              />

              <div data-stagger-group className="grid gap-4 sm:grid-cols-2">
                {ingredientNotes.map((note, index) => (
                  <div
                    key={note}
                    data-stagger-item
                    className={`rounded-[1.6rem] px-5 py-5 shadow-[0_18px_48px_rgba(79,45,30,0.07)] ${
                      index === 0
                        ? "bg-white/78 sm:col-span-2"
                        : index === 1
                          ? "bg-[rgba(235,171,163,0.22)]"
                          : "bg-[rgba(79,45,30,0.06)]"
                    }`}
                  >
                    <p className="text-sm leading-6 text-[var(--color-brown-soft)]">
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          data-heart-floor
          className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-44 translate-y-[14%] bg-[linear-gradient(180deg,rgba(249,235,221,0)_0%,rgba(249,235,221,0.2)_40%,rgba(46,26,18,0.92)_100%)] opacity-0 lg:block"
        />
      </section>

      <section
        data-theme-section="heart"
        className="relative z-40 -mt-8 px-4 pb-16 pt-0 text-[var(--color-cream-light)] sm:-mt-12 sm:px-6 sm:pb-20 lg:-mt-[22svh] lg:pb-28 lg:px-10"
      >
        <div className="mx-auto max-w-[92rem]">
          <div
            data-reveal
            data-scene-panel="heart"
            className="relative overflow-hidden rounded-[2.5rem] border border-[rgba(255,248,241,0.08)] bg-[linear-gradient(135deg,rgba(79,45,30,0.98),rgba(46,26,18,1))] px-5 pb-10 pt-10 shadow-[0_44px_130px_rgba(20,8,5,0.32)] sm:px-8 sm:pb-12 sm:pt-12 lg:grid lg:grid-cols-[0.6fr_0.4fr] lg:items-end lg:gap-8 lg:px-10 lg:pb-14 lg:pt-14"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(233,79,60,0.24),transparent_24%),radial-gradient(circle_at_20%_80%,rgba(235,171,163,0.14),transparent_30%)]" />
            <div className="relative space-y-6 lg:max-w-[44rem]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(255,248,241,0.72)]">
                Wypiekane z sercem
              </p>
              <p className="font-display text-[2.8rem] leading-[0.92] tracking-[-0.06em] sm:text-6xl">
                Domowy klimat, serdeczność i smak, do którego chce się wracać.
              </p>
              <p className="max-w-xl text-base leading-7 text-[rgba(255,248,241,0.82)] sm:text-lg">
                Pieczone z Sercem ma być miejscem bliskim i spokojnym. Takim, do którego zagląda się po coś dobrego i wychodzi z lepszym nastrojem.
              </p>
            </div>

            <div data-scene-photo="heart" className="relative mt-8 lg:mt-0">
              <div className="relative ml-auto aspect-[0.92] max-w-[29rem] overflow-hidden rounded-[2.2rem] border border-[rgba(255,248,241,0.12)] shadow-[0_28px_90px_rgba(0,0,0,0.24)]">
                <Image
                  src="/images/bakery/hero-berries.png"
                  alt="Zbliżenie na domowe wypieki jako ciepła, emocjonalna scena"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(46,26,18,0.08),rgba(46,26,18,0.28))]" />
              </div>
              <div className="absolute -bottom-8 left-0 hidden max-w-[17rem] rounded-[1.8rem] border border-[rgba(255,248,241,0.1)] bg-[rgba(255,248,241,0.1)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-md sm:left-6 lg:block">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(255,248,241,0.76)]">
                  Domowy rytm
                </p>
                <p className="mt-3 text-sm leading-6 text-[rgba(255,248,241,0.82)]">
                  Tu liczy się nie tylko smak. Liczy się też ciepło miejsca i zwykła ludzka życzliwość.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-daily-floor
          className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-44 translate-y-[14%] bg-[linear-gradient(180deg,rgba(46,26,18,0)_0%,rgba(46,26,18,0.18)_36%,rgba(255,247,239,0.96)_100%)] opacity-100 lg:block"
        />
      </section>

      <section
        id="co-dzis-pieczemy"
        data-theme-section="daily"
        className="relative z-50 -mt-8 px-4 pt-0 sm:-mt-12 sm:px-6 lg:-mt-[22svh] lg:px-10"
      >
        <div
          data-daily-shell
          className="mx-auto max-w-[92rem] overflow-hidden rounded-[2.5rem] border border-[rgba(79,45,30,0.08)] bg-[linear-gradient(180deg,#fff7ef_0%,#f3dfcf_100%)] px-5 pb-10 pt-10 shadow-[0_42px_120px_rgba(79,45,30,0.14)] sm:px-8 sm:pb-12 sm:pt-12 lg:px-10 lg:pb-14 lg:pt-14"
        >
          <div className="grid gap-6">
            <div className="max-w-[46rem]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Co dziś pieczemy
              </p>
              <p className="mt-4 font-display text-[2.5rem] leading-[0.94] tracking-[-0.05em] text-[var(--color-brown-deep)] sm:text-5xl">
                Codzienna tablica wypieków pokazuje, co dziś trafia do pieca i na ladę.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-brown-soft)] sm:text-lg">
                Zamiast rozstrzelonego układu jest jeden płynny moduł: wprowadzenie, wypieki dnia i sezonowość w tym samym rytmie przewijania.
              </p>
            </div>

            <div data-daily-carousel className="grid gap-6">
              <div
                data-daily-viewport
                className="snap-x snap-mandatory overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:overflow-hidden lg:pb-0"
              >
                <div
                  data-daily-track
                  data-stagger-group
                  className="flex w-max gap-4 lg:gap-6"
                >
                  <div
                    data-stagger-item
                    className="w-[84vw] max-w-[24rem] shrink-0 snap-start rounded-[1.8rem] border border-[rgba(79,45,30,0.08)] bg-[rgba(255,248,241,0.9)] p-6 shadow-[0_20px_60px_rgba(79,45,30,0.08)] sm:w-[26rem] lg:w-[29rem]"
                  >
                    <SectionHeading
                      eyebrow="Dzisiejsza tablica"
                      title="Sprawdź, co dziś czeka na Ciebie w piekarni."
                      description="To nie jest sklep online, tylko prosta tablica dnia: ulubione wypieki, sezonowe akcenty i szybki sygnał, co znika najchętniej."
                    />

                    <div className="mt-6 flex flex-wrap gap-2">
                      {siteData.categories.map((category) => (
                        <span
                          key={category}
                          className="inline-flex rounded-full border border-[rgba(79,45,30,0.12)] bg-white/76 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brown-soft)]"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>

                  {siteData.dailyBakes.map((bake, index) => (
                    <div
                      key={bake.name}
                      data-stagger-item
                      className={`w-[84vw] shrink-0 snap-start sm:w-[26rem] lg:w-[30rem] ${
                        index === 0 ? "lg:w-[38rem]" : ""
                      }`}
                    >
                      <BakeCard bake={bake} featured={index === 0} />
                    </div>
                  ))}

                  <div
                    data-stagger-item
                    className="w-[84vw] max-w-[24rem] shrink-0 snap-start rounded-[1.8rem] border border-[rgba(79,45,30,0.08)] bg-[rgba(255,248,241,0.8)] p-6 shadow-[0_20px_60px_rgba(79,45,30,0.08)] sm:w-[28rem] lg:w-[32rem]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-accent)]">
                      Sezonowość
                    </p>
                    <div className="mt-5 grid gap-3">
                      {siteData.seasonalMoments.map((item) => (
                        <div
                          key={item}
                          className="rounded-[1.25rem] border border-[rgba(79,45,30,0.08)] bg-white/72 px-4 py-4 text-sm leading-6 text-[var(--color-brown-soft)]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-theme-section="contact"
        id="kontakt"
        className="relative z-50 bg-[linear-gradient(180deg,#f3dfcf_0%,#f1d8cb_100%)] pb-20 pt-8"
      >
        <div className="mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-10">
          <div
            data-reveal
            className="grid gap-6 rounded-[2.2rem] bg-[var(--color-brown-deep)] px-5 py-8 text-[var(--color-cream-light)] shadow-[0_28px_70px_rgba(46,26,18,0.24)] sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-end"
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
              <div className="flex items-start gap-3">
                <CakeSlice className="mt-1 h-5 w-5 text-[var(--color-accent)]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[rgba(255,248,241,0.6)]">
                    Klimat miejsca
                  </p>
                  <p className="mt-2 text-base leading-7">
                    Domowo, spokojnie i bez pośpiechu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

