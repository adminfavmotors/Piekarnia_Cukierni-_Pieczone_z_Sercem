import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

const sectionTitleSizeClasses = {
  section:
    "[font-size:var(--type-title-section)] [line-height:0.98]",
  display:
    "[font-size:var(--type-title-display)] [line-height:0.92]",
  callout:
    "[font-size:var(--type-title-callout)] [line-height:1.02]",
} as const;

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
        "[font-size:var(--type-kicker)] font-bold uppercase leading-none tracking-[0.22em]",
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
  size?: keyof typeof sectionTitleSizeClasses;
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
        sectionTitleSizeClasses[size],
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
        "text-pretty [font-size:var(--type-body-lead)] leading-7 sm:leading-[1.9]",
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
