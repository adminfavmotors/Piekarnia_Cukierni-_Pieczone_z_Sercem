import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type CardSurfaceProps = {
  children: ReactNode;
  className?: string;
};

export function CardSurface({ children, className }: CardSurfaceProps) {
  return (
    <article
      className={cn(
        "group relative flex min-h-[20rem] flex-col overflow-hidden rounded-[1.5rem] border border-[var(--color-line)] bg-[rgba(255,248,241,0.88)] p-5 shadow-[0_24px_60px_rgba(79,45,30,0.08)] transition-transform duration-300 hover:-translate-y-1 sm:min-h-[21rem]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,79,60,0.08),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(235,171,163,0.18),transparent_38%)] opacity-90" />
      <div className="relative flex flex-1 flex-col">{children}</div>
      <div className="absolute inset-x-5 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(79,45,30,0.2),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  );
}

type CardInfoTileProps = {
  children: ReactNode;
  className?: string;
};

export function CardInfoTile({ children, className }: CardInfoTileProps) {
  return (
    <div
      className={cn(
        "rounded-[1rem] border border-[rgba(79,45,30,0.08)] bg-white/65 px-4 py-3 text-[var(--color-brown-soft)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
