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
          "text-[0.68rem] font-bold uppercase leading-none tracking-[0.22em] sm:text-[0.74rem]",
          tone === "accent"
            ? "text-[var(--color-accent)]"
            : "text-[rgba(255,248,241,0.82)]",
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
  as?: "h1" | "h2" | "h3" | "p" | "div";
} & ComponentPropsWithoutRef<"h2">;

export function SectionTitle({
  children,
  className,
  tone = "default",
  size = "section",
  as = "h2",
  ...props
}: SectionTitleProps) {
  const Tag = as;

  return (
      <Tag
        {...props}
        className={cn(
          "text-balance font-display tracking-[-0.045em]",
          size === "section"
            ? "text-[2.2rem] leading-[0.98] sm:text-[2.85rem] lg:text-[3.3rem]"
            : "text-[2.7rem] leading-[0.92] sm:text-[4.25rem] lg:text-[5.35rem]",
          tone === "light"
            ? "text-[var(--color-cream-light)]"
            : "text-[var(--color-brown-ink)]",
          className,
        )}
    >
      {children}
    </Tag>
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
          "text-pretty text-[0.98rem] leading-7 sm:text-[1.05rem] sm:leading-8",
          tone === "light"
            ? "text-[rgba(255,248,241,0.9)]"
            : "text-[var(--color-brown-muted)]",
          className,
        )}
    >
      {children}
    </p>
  );
}
