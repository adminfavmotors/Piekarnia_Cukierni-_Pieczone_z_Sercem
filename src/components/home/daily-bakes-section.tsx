import { BakeCard } from "@/components/home/bake-card";
import { siteData } from "@/data/site";

const seasonLabels = ["Wiosna", "Lato", "Jesień", "Zima"] as const;

export function DailyBakesSection() {
  return (
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
              Codzienna tablica wypieków pokazuje, co dziś trafia do pieca i na
              ladę.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-brown-soft)] sm:text-lg">
              Najpierw pokazujemy to, co dziś trafia na ladę, a niżej osobno
              zbieramy sezonowe smaki i powroty, na które warto czekać.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {siteData.categories.map((category) => (
              <span
                key={category}
                className="inline-flex rounded-full border border-[rgba(79,45,30,0.12)] bg-white/76 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brown-soft)]"
              >
                {category}
              </span>
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
            <div className="max-w-[38rem]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Sezonowość
              </p>
              <p className="mt-3 font-display text-[2rem] leading-[0.96] tracking-[-0.04em] text-[var(--color-brown-deep)] sm:text-[2.5rem]">
                Sezonowe smaki dostają własny rytm i własną karuzelę.
              </p>
            </div>

            <div
              data-seasonal-viewport
              className="snap-x snap-mandatory touch-pan-x overscroll-x-contain select-none overflow-x-auto pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:cursor-grab lg:pb-1 lg:active:cursor-grabbing"
            >
              <div className="flex w-max gap-4 pr-4 sm:pr-6">
                {siteData.seasonalMoments.map((item, index) => (
                  <div
                    key={item}
                    className="w-[82vw] max-w-[21rem] shrink-0 snap-start rounded-[1.8rem] border border-[rgba(79,45,30,0.08)] bg-[rgba(255,248,241,0.82)] p-6 shadow-[0_20px_60px_rgba(79,45,30,0.08)] sm:w-[22rem] lg:w-[24rem]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                      {seasonLabels[index] ?? "Sezon"}
                    </p>
                    <p className="mt-4 font-display text-[2rem] leading-none tracking-[-0.04em] text-[var(--color-brown-deep)]">
                      {seasonLabels[index] ?? "Sezon"}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-[var(--color-brown-soft)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
