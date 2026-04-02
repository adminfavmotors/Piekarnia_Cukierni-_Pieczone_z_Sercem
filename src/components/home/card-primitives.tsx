import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

type CardSurfaceProps = {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"article">;

export function CardSurface({
  children,
  className,
  ...props
}: CardSurfaceProps) {
  return (
    <article
      {...props}
      className={cn(
        "group relative flex min-h-[20rem] flex-col overflow-hidden rounded-[var(--radius-card)] border border-[rgba(79,45,30,0.12)] bg-[rgba(255,248,241,0.94)] p-5 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1 sm:min-h-[21rem]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,79,60,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(235,171,163,0.16),transparent_34%)] opacity-90" />
      <div className="relative flex flex-1 flex-col">{children}</div>
      <div className="absolute inset-x-5 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(79,45,30,0.2),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  );
}

type CardInfoTileProps = {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

export function CardInfoTile({
  children,
  className,
  ...props
}: CardInfoTileProps) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-[1rem] border border-[rgba(79,45,30,0.08)] bg-white/78 px-4 py-3 text-[var(--color-brown)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
