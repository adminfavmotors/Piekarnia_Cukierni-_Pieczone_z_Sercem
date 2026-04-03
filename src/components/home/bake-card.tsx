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
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Pill tone="accent">{bake.badge}</Pill>
            <Pill>{bake.category}</Pill>
            {bake.season ? <Pill tone="warm">{bake.season}</Pill> : null}
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
        <IconBadge aria-label={`Liczba polubień: ${bake.likes}`}>
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
