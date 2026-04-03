"use client";

import { Clock3, MapPin, MoveLeft, MoveRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { BakeCard } from "@/components/home/bake-card";
import { Pill } from "@/components/home/home-ui";
import { PageContainer } from "@/components/home/layout-primitives";
import {
  SceneCallout,
  ScenePanel,
} from "@/components/home/scene-primitives";
import {
  SectionKicker,
  SectionLead,
  SectionTitle,
} from "@/components/home/section-copy";
import { siteData } from "@/data/site";

const dailyMeta = [
  {
    icon: Clock3,
    ...siteData.daily.meta[0],
  },
  {
    icon: Sparkles,
    ...siteData.daily.meta[1],
  },
  {
    icon: MapPin,
    ...siteData.daily.meta[2],
  },
] as const;

export function DailyBakesSection() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(siteData.dailyBakes.length > 1);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const getItems = () =>
      Array.from(
        viewport.querySelectorAll<HTMLDivElement>("[data-carousel-item]"),
      );

    const updateCarouselState = () => {
      const items = getItems();

      if (!items.length) {
        setCanScrollPrev(false);
        setCanScrollNext(false);
        setActiveIndex(0);
        return;
      }

      const maxScrollLeft = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
      const viewportPaddingLeft =
        Number.parseFloat(window.getComputedStyle(viewport).paddingLeft) || 0;
      const nextScrollLeft = viewport.scrollLeft;

      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      items.forEach((item, index) => {
        const itemStart = Math.max(0, item.offsetLeft - viewportPaddingLeft);
        const distance = Math.abs(itemStart - nextScrollLeft);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveIndex(nearestIndex);
      setCanScrollPrev(nextScrollLeft > 8);
      setCanScrollNext(nextScrollLeft < maxScrollLeft - 8);
    };

    const frameId = window.requestAnimationFrame(updateCarouselState);
    viewport.addEventListener("scroll", updateCarouselState, { passive: true });
    window.addEventListener("resize", updateCarouselState);

    return () => {
      window.cancelAnimationFrame(frameId);
      viewport.removeEventListener("scroll", updateCarouselState);
      window.removeEventListener("resize", updateCarouselState);
    };
  }, []);

  const scrollToIndex = (index: number) => {
    const viewport = viewportRef.current;
    const items = viewport
      ? Array.from(viewport.querySelectorAll<HTMLDivElement>("[data-carousel-item]"))
      : [];

    if (!viewport || !items.length) {
      return;
    }

    const nextIndex = Math.max(0, Math.min(index, items.length - 1));
    const nextItem = items[nextIndex];
    const viewportPaddingLeft =
      Number.parseFloat(window.getComputedStyle(viewport).paddingLeft) || 0;

    setActiveIndex(nextIndex);

    nextItem.scrollIntoView({
      behavior: "auto",
      block: "nearest",
      inline: "nearest",
    });

    viewport.scrollTo({
      left: Math.max(0, nextItem.offsetLeft - viewportPaddingLeft),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="co-dzis-pieczemy"
      data-theme-section="daily"
      className="relative z-50 -mt-6 px-4 pt-0 sm:-mt-8 sm:px-6 lg:-mt-[14svh] lg:px-10"
    >
      <PageContainer>
        <div data-daily-shell>
          <ScenePanel
            tone="cream"
            className="rounded-[var(--radius-scene-lg)] bg-[linear-gradient(180deg,#fff7ef_0%,#f2ddce_100%)] pb-8 pt-8 shadow-[var(--shadow-scene)] sm:pb-10 sm:pt-10 lg:pb-12 lg:pt-12"
          >
            <div className="grid gap-6">
              <div className="grid gap-4 lg:grid-cols-[minmax(0,0.7fr)_minmax(18rem,0.3fr)] lg:items-end">
                <div className="max-w-[42rem] space-y-4">
                  <SectionKicker>{siteData.daily.eyebrow}</SectionKicker>
                  <SectionTitle>{siteData.daily.title}</SectionTitle>
                  <SectionLead className="max-w-2xl">
                    {siteData.daily.description}
                  </SectionLead>
                </div>

                <SceneCallout
                  tone="light"
                  className="grid gap-3 rounded-[1.6rem] bg-[rgba(255,248,241,0.9)] p-5"
                >
                  {dailyMeta.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="rounded-full bg-[rgba(233,79,60,0.12)] p-2.5 text-[var(--color-accent)]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--color-brown-muted)]">
                          {label}
                        </p>
                        <p className="text-[0.96rem] leading-6 text-[var(--color-brown-ink)]">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </SceneCallout>
              </div>

                <div className="flex flex-wrap gap-2">
                  {siteData.categories.map((category) => (
                    <Pill key={category}>{category}</Pill>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-4">
                  <p className="text-[0.95rem] leading-6 text-[var(--color-brown-muted)]">
                    Przewijaj swobodnie albo przechodź kartami jak w lekkiej karuzeli.
                  </p>
                  <div className="hidden items-center gap-2 lg:flex">
                    <button
                      type="button"
                      data-carousel-prev
                      aria-label="Poprzedni wypiek"
                      disabled={!canScrollPrev}
                      onClick={() => scrollToIndex(activeIndex - 1)}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(79,45,30,0.12)] bg-white/78 text-[var(--color-brown-deep)] transition-colors duration-300 hover:border-[rgba(233,79,60,0.3)] hover:text-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <MoveLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      data-carousel-next
                      aria-label="Następny wypiek"
                      disabled={!canScrollNext}
                      onClick={() => scrollToIndex(activeIndex + 1)}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(79,45,30,0.12)] bg-white/78 text-[var(--color-brown-deep)] transition-colors duration-300 hover:border-[rgba(233,79,60,0.3)] hover:text-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <MoveRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

              <div
                data-daily-scene
                className="relative overflow-hidden rounded-[2.1rem] border border-[rgba(79,45,30,0.1)] bg-[rgba(255,248,241,0.84)] px-0 py-0 lg:min-h-[29rem]"
              >
                <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,248,241,0.28),transparent)]" />
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-16 bg-[linear-gradient(90deg,rgba(255,247,239,0.94),rgba(255,247,239,0))] lg:block" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 bg-[linear-gradient(270deg,rgba(255,247,239,0.96),rgba(255,247,239,0))] lg:block" />
                <div
                  data-daily-viewport
                  ref={viewportRef}
                  className="snap-x snap-mandatory touch-pan-x overscroll-x-contain select-none overflow-x-auto px-5 py-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:px-6 lg:h-full lg:snap-x lg:snap-mandatory lg:px-8 lg:py-8"
                >
                  <div
                    data-daily-track
                    data-stagger-group
                    className="flex w-max gap-4 pr-4 sm:pr-6 lg:gap-5 lg:pr-[10vw]"
                  >
                    {siteData.dailyBakes.map((bake) => (
                      <div
                        key={bake.name}
                        data-stagger-item
                        data-carousel-item
                        className="w-[84vw] shrink-0 snap-start sm:w-[22rem] lg:w-[24rem]"
                      >
                        <BakeCard bake={bake} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {siteData.dailyBakes.map((bake, index) => (
                    <button
                      key={bake.name}
                      type="button"
                      data-carousel-dot
                      aria-label={`Przejdź do karty ${index + 1}`}
                      aria-pressed={index === activeIndex}
                      onClick={() => scrollToIndex(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "w-8 bg-[var(--color-accent)]"
                          : "w-2.5 bg-[rgba(79,45,30,0.22)] hover:bg-[rgba(79,45,30,0.36)]"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brown-soft)]">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(siteData.dailyBakes.length).padStart(2, "0")}
                </p>
              </div>

              <div className="grid gap-5 border-t border-[rgba(79,45,30,0.08)] pt-6 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:items-start">
                <div className="max-w-[28rem] space-y-3">
                  <SectionKicker>{siteData.daily.seasonalEyebrow}</SectionKicker>
                  <SectionTitle className="text-[2rem] sm:text-[2.35rem]">
                    {siteData.daily.seasonalTitle}
                  </SectionTitle>
                  <SectionLead className="max-w-[30rem] text-[0.98rem]">
                    {siteData.daily.seasonalDescription}
                  </SectionLead>
                </div>

                <div
                  data-seasonal-viewport
                  className="snap-x snap-mandatory touch-pan-x overscroll-x-contain select-none overflow-x-auto pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:cursor-grab lg:pb-1 lg:active:cursor-grabbing"
                >
                  <div className="flex w-max gap-4 pr-4 sm:pr-6">
                    {siteData.seasonalMoments.map((item, index) => (
                      <SceneCallout
                        key={item}
                        className="flex min-h-[15rem] w-[82vw] max-w-[21rem] shrink-0 snap-start flex-col bg-[rgba(255,248,241,0.92)] p-6 shadow-[0_20px_60px_rgba(79,45,30,0.08)] sm:w-[22rem] lg:w-[24rem]"
                      >
                        <SectionKicker className="tracking-[0.24em]">
                          {siteData.daily.seasonLabels[index] ?? "Sezon"}
                        </SectionKicker>
                        <SectionTitle
                          as="h3"
                          className="mt-4 text-[2rem] leading-none sm:text-[2rem]"
                        >
                          {siteData.daily.seasonLabels[index] ?? "Sezon"}
                        </SectionTitle>
                        <p className="text-pretty mt-4 text-[0.96rem] leading-6 text-[var(--color-brown-muted)]">
                          {item}
                        </p>
                      </SceneCallout>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScenePanel>
        </div>
      </PageContainer>
    </section>
  );
}
