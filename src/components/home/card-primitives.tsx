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
          "group relative flex min-h-[22.5rem] flex-col overflow-hidden rounded-[var(--radius-card)] border border-[rgba(79,45,30,0.14)] bg-[var(--surface-strong)] p-5 shadow-[0_18px_42px_rgba(79,45,30,0.09)] transition-transform duration-300 hover:-translate-y-1 sm:min-h-[23rem] sm:p-6",
          className,
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,241,0.08),rgba(255,248,241,0))]" />
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
          "flex min-h-[4.75rem] items-start rounded-[1rem] border border-[rgba(79,45,30,0.1)] bg-[rgba(255,248,241,0.9)] px-4 py-3 text-[0.92rem] leading-6 text-[var(--color-brown-deep)]",
          className,
        )}
      >
      {children}
    </div>
  );
}
