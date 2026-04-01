import { BakeCard } from "@/components/home/bake-card";
import { Pill } from "@/components/home/home-ui";
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

const seasonLabels = ["Wiosna", "Lato", "Jesień", "Zima"] as const;

export function DailyBakesSection() {
  return (
    <section
      id="co-dzis-pieczemy"
      data-theme-section="daily"
      className="relative z-50 -mt-8 px-4 pt-0 sm:-mt-12 sm:px-6 lg:-mt-[22svh] lg:px-10"
    >
      <ScenePanel
        data-daily-shell
        tone="cream"
        className="mx-auto max-w-[92rem] rounded-[2.5rem] bg-[linear-gradient(180deg,#fff7ef_0%,#f3dfcf_100%)] pb-10 pt-10 shadow-[0_42px_120px_rgba(79,45,30,0.14)] sm:pb-12 sm:pt-12 lg:pb-14 lg:pt-14"
      >
        <div className="grid gap-6">
          <div className="max-w-[46rem] space-y-4">
            <SectionKicker>Co dziś pieczemy</SectionKicker>
            <SectionTitle>
              Codzienna tablica wypieków pokazuje, co dziś trafia do pieca i na
              ladę.
            </SectionTitle>
            <SectionLead className="max-w-2xl">
              Najpierw pokazujemy to, co dziś trafia na ladę, a niżej osobno
              zbieramy sezonowe smaki i powroty, na które warto czekać.
            </SectionLead>
          </div>

          <div className="flex flex-wrap gap-2">
            {siteData.categories.map((category) => (
              <Pill key={category}>{category}</Pill>
            ))}
          </div>

          <div
            data-daily-scene
            className="relative overflow-hidden rounded-[2.1rem] border border-[rgba(79,45,30,0.08)] bg-[rgba(255,248,241,0.5)] px-0 py-0 lg:cursor-grab lg:min-h-[31rem] lg:active:cursor-grabbing"
          >
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

          <div className="grid gap-5 pt-2">
            <div className="max-w-[38rem] space-y-3">
              <SectionKicker>Sezonowość</SectionKicker>
              <SectionTitle className="text-[2rem] sm:text-[2.5rem]">
                Sezonowe smaki dostają własny rytm i własną karuzelę.
              </SectionTitle>
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
                      {seasonLabels[index] ?? "Sezon"}
                    </SectionKicker>
                    <SectionTitle className="mt-4 text-[2rem] leading-none sm:text-[2rem]">
                      {seasonLabels[index] ?? "Sezon"}
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
    </section>
  );
}
