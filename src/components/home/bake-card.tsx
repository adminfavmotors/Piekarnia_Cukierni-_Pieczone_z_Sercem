import { Heart } from "lucide-react";

import type { DailyBake } from "@/data/site";

type BakeCardProps = {
  bake: DailyBake;
};

export function BakeCard({ bake }: BakeCardProps) {
  return (
    <article
      className="group relative flex min-h-[20rem] flex-col overflow-hidden rounded-[1.5rem] border border-[var(--color-line)] bg-[rgba(255,248,241,0.88)] p-5 shadow-[0_24px_60px_rgba(79,45,30,0.08)] transition-transform duration-300 hover:-translate-y-1 sm:min-h-[21rem]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,79,60,0.08),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(235,171,163,0.18),transparent_38%)] opacity-90" />
      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="relative space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex rounded-full bg-[var(--color-accent)] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white">
                {bake.badge}
              </span>
              <span className="inline-flex rounded-full border border-[rgba(79,45,30,0.1)] bg-white/70 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brown-soft)]">
                {bake.category}
              </span>
              {bake.season ? (
                <span className="inline-flex rounded-full bg-[rgba(235,171,163,0.45)] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brown-deep)]">
                  {bake.season}
                </span>
              ) : null}
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-[2rem] leading-none tracking-[-0.03em] text-[var(--color-brown-deep)] sm:text-[2.15rem]">
                {bake.name}
              </h3>
              <p className="max-w-[20rem] text-sm leading-6 text-[var(--color-brown-soft)] sm:text-[0.96rem] sm:leading-7">
                {bake.description}
              </p>
            </div>
          </div>
          <button
            type="button"
            aria-label={`Polub ${bake.name}`}
            className="relative inline-flex items-center gap-2 rounded-full border border-[rgba(233,79,60,0.18)] bg-white/75 px-3 py-2 text-sm font-semibold text-[var(--color-brown-deep)] transition-colors duration-300 hover:border-[rgba(233,79,60,0.35)] hover:text-[var(--color-accent)]"
          >
            <Heart className="h-4 w-4" />
            <span>{bake.likes}</span>
          </button>
        </div>

        <div className="relative mt-auto grid grid-cols-2 gap-3 pt-8 text-sm">
          <div className="rounded-[1rem] border border-[rgba(79,45,30,0.08)] bg-white/65 px-4 py-3 text-[var(--color-brown-soft)]">
            Świeżo przygotowane na dziś
          </div>
          <div className="rounded-[1rem] border border-[rgba(79,45,30,0.08)] bg-white/65 px-4 py-3 text-[var(--color-brown-soft)]">
            Najlepiej smakuje jeszcze ciepłe
          </div>
        </div>
      </div>
      <div className="absolute inset-x-5 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(79,45,30,0.2),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  );
}
