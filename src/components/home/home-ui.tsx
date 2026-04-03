import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

import { cn } from "@/lib/cn";

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

const actionLinkClasses: Record<NonNullable<ActionLinkProps["variant"]>, string> = {
  primary:
    "bg-[var(--color-accent)] text-white shadow-[0_18px_42px_rgba(233,79,60,0.26)] hover:-translate-y-0.5",
  secondary:
    "border border-[rgba(255,248,241,0.3)] bg-[rgba(36,18,12,0.28)] text-[var(--color-cream-light)] hover:border-[rgba(255,248,241,0.44)] hover:bg-[rgba(36,18,12,0.36)]",
};

export function ActionLink({
  children,
  className,
  variant = "primary",
  ...props
}: ActionLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[0.92rem] font-semibold transition-transform duration-300 transition-colors",
        actionLinkClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

type PillTone = "accent" | "neutral" | "warm" | "darkGlass";

const pillClasses: Record<PillTone, string> = {
  accent: "bg-[var(--color-accent)] text-white",
  neutral:
    "border border-[rgba(79,45,30,0.12)] bg-[var(--surface-strong)] text-[var(--color-brown-deep)]",
  warm: "border border-[rgba(205,110,95,0.14)] bg-[rgba(235,171,163,0.62)] text-[var(--color-brown-ink)]",
  darkGlass: "border border-[rgba(255,248,241,0.22)] bg-[rgba(36,18,12,0.38)] text-[var(--color-cream-light)]",
};

type PillProps = {
  children: ReactNode;
  className?: string;
  tone?: PillTone;
};

export function Pill({ children, className, tone = "neutral" }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase leading-none tracking-[0.14em]",
        pillClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function IconButton({
  children,
  className,
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "relative inline-flex items-center gap-2 rounded-full border border-[rgba(233,79,60,0.18)] bg-white/75 px-3 py-2 text-sm font-semibold text-[var(--color-brown-deep)] transition-colors duration-300 hover:border-[rgba(233,79,60,0.35)] hover:text-[var(--color-accent)]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

type IconBadgeProps = {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

export function IconBadge({
  children,
  className,
  ...props
}: IconBadgeProps) {
  return (
    <div
      {...props}
      className={cn(
        "relative inline-flex shrink-0 items-center gap-2 rounded-full border border-[rgba(233,79,60,0.18)] bg-[var(--surface-strong)] px-3 py-2 text-sm font-semibold text-[var(--color-brown-ink)] shadow-[0_10px_24px_rgba(79,45,30,0.08)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
