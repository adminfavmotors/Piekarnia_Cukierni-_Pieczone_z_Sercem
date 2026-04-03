import { Heart } from "lucide-react";

import {
  CardInfoTile,
  CardSurface,
} from "@/components/home/card-primitives";
import { IconBadge, Pill } from "@/components/home/home-ui";
import { siteData, type DailyBake } from "@/data/site";

type BakeCardProps = {
  bake: DailyBake;
};

export function BakeCard({ bake }: BakeCardProps) {
  return (
    <CardSurface>
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex min-h-[3rem] flex-wrap content-start items-start gap-2">
            <Pill tone="accent">{bake.badge}</Pill>
            <Pill>{bake.category}</Pill>
            {bake.season ? <Pill tone="warm">{bake.season}</Pill> : null}
          </div>

          <div className="space-y-3">
            <div className="min-h-[4.8rem]">
              <h3 className="text-balance font-display text-[1.8rem] leading-[0.98] tracking-[-0.03em] text-[var(--color-brown-ink)] sm:text-[1.95rem]">
                {bake.name}
              </h3>
            </div>
            <p className="text-pretty min-h-[6rem] max-w-[19rem] text-[0.95rem] leading-6 text-[var(--color-brown-muted)] sm:min-h-[6.5rem] sm:max-w-[20rem] sm:text-[0.98rem]">
              {bake.description}
            </p>
          </div>
        </div>

        <IconBadge aria-label={`Liczba polubień: ${bake.likes}`} className="mt-0.5">
          <Heart className="h-4 w-4" aria-hidden="true" />
          <span>{bake.likes}</span>
        </IconBadge>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-3 pt-8 text-sm">
        <CardInfoTile>{siteData.daily.cardNotes.primary}</CardInfoTile>
        <CardInfoTile>{siteData.daily.cardNotes.secondary}</CardInfoTile>
      </div>
    </CardSurface>
  );
}
