import { Clock3, MapPin, Sparkles } from "lucide-react";

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
            className="rounded-[var(--radius-scene-lg)] bg-[linear-gradient(180deg,#fff7ef_0%,#f3dfcf_100%)] pb-8 pt-8 shadow-[var(--shadow-scene)] sm:pb-10 sm:pt-10 lg:pb-12 lg:pt-12"
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
                  className="grid gap-3 rounded-[1.6rem] bg-[rgba(255,248,241,0.78)] p-5"
                >
                  {dailyMeta.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="rounded-full bg-[rgba(233,79,60,0.12)] p-2.5 text-[var(--color-accent)]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brown-soft)]">
                          {label}
                        </p>
                        <p className="text-sm leading-6 text-[var(--color-brown-deep)]">
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

              <div
                data-daily-scene
                className="relative overflow-hidden rounded-[2.1rem] border border-[rgba(79,45,30,0.08)] bg-[rgba(255,248,241,0.68)] px-0 py-0 lg:cursor-grab lg:min-h-[29rem] lg:active:cursor-grabbing"
              >
                <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,248,241,0.28),transparent)]" />
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-16 bg-[linear-gradient(90deg,rgba(255,247,239,0.94),rgba(255,247,239,0))] lg:block" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 bg-[linear-gradient(270deg,rgba(255,247,239,0.96),rgba(255,247,239,0))] lg:block" />
                <div
                  data-daily-viewport
                  className="snap-x snap-mandatory touch-pan-x overscroll-x-contain select-none overflow-x-auto px-5 py-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:px-6 lg:h-full lg:snap-none lg:overflow-hidden lg:px-8 lg:py-8 lg:touch-auto"
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
                        className="w-[84vw] shrink-0 snap-start sm:w-[22rem] lg:w-[24rem]"
                      >
                        <BakeCard bake={bake} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-5 border-t border-[rgba(79,45,30,0.08)] pt-6 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:items-start">
                <div className="max-w-[28rem] space-y-3">
                  <SectionKicker>{siteData.daily.seasonalEyebrow}</SectionKicker>
                  <SectionTitle className="text-[2rem] sm:text-[2.35rem]">
                    {siteData.daily.seasonalTitle}
                  </SectionTitle>
                  <SectionLead className="text-[0.98rem]">
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
                        className="w-[82vw] max-w-[21rem] shrink-0 snap-start bg-[rgba(255,248,241,0.82)] p-6 shadow-[0_20px_60px_rgba(79,45,30,0.08)] sm:w-[22rem] lg:w-[24rem]"
                      >
                        <SectionKicker className="tracking-[0.24em]">
                          {siteData.daily.seasonLabels[index] ?? "Sezon"}
                        </SectionKicker>
                        <SectionTitle className="mt-4 text-[2rem] leading-none sm:text-[2rem]">
                          {siteData.daily.seasonLabels[index] ?? "Sezon"}
                        </SectionTitle>
                        <p className="mt-4 text-sm leading-6 text-[var(--color-brown-soft)]">
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
