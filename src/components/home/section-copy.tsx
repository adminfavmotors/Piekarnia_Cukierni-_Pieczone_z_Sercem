import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionKickerProps = {
  children: ReactNode;
  className?: string;
  tone?: "accent" | "light";
} & ComponentPropsWithoutRef<"p">;

export function SectionKicker({
  children,
  className,
  tone = "accent",
  ...props
}: SectionKickerProps) {
  return (
    <p
      {...props}
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.28em] sm:text-sm",
        tone === "accent"
          ? "text-[var(--color-accent)]"
          : "text-[rgba(255,248,241,0.72)]",
        className,
      )}
    >
      {children}
    </p>
  );
}

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "light";
  size?: "section" | "display";
} & ComponentPropsWithoutRef<"h2">;

export function SectionTitle({
  children,
  className,
  tone = "default",
  size = "section",
  ...props
}: SectionTitleProps) {
  return (
    <h2
      {...props}
      className={cn(
        "font-display tracking-[-0.05em]",
        size === "section"
          ? "text-4xl leading-[0.94] sm:text-5xl"
          : "text-[2.8rem] leading-[0.92] sm:text-6xl",
        tone === "light"
          ? "text-[var(--color-cream-light)]"
          : "text-[var(--color-brown-deep)]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

type SectionLeadProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "light";
} & ComponentPropsWithoutRef<"p">;

export function SectionLead({
  children,
  className,
  tone = "default",
  ...props
}: SectionLeadProps) {
  return (
    <p
      {...props}
      className={cn(
        "text-base leading-7 sm:text-lg",
        tone === "light"
          ? "text-[rgba(255,248,241,0.82)]"
          : "text-[var(--color-brown-soft)]",
        className,
      )}
    >
      {children}
    </p>
  );
}
