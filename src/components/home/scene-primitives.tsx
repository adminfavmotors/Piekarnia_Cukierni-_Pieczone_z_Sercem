import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ScenePanelTone = "light" | "cream" | "dark";
type SceneCalloutTone = "light" | "warm" | "glass";

const panelToneClasses: Record<ScenePanelTone, string> = {
  light:
    "border border-[rgba(79,45,30,0.08)] bg-[rgba(255,248,241,0.92)] shadow-[var(--shadow-scene)]",
  cream:
    "border border-[rgba(79,45,30,0.08)] bg-[linear-gradient(180deg,#fff8f1_0%,#f9ebdd_100%)] shadow-[var(--shadow-scene-soft)]",
  dark:
    "border border-[rgba(255,248,241,0.08)] bg-[linear-gradient(135deg,rgba(79,45,30,0.98),rgba(46,26,18,1))] text-[var(--color-cream-light)] shadow-[var(--shadow-scene-dark)]",
};

const calloutToneClasses: Record<SceneCalloutTone, string> = {
  light:
    "border border-[rgba(79,45,30,0.08)] bg-[rgba(255,248,241,0.92)] shadow-[var(--shadow-callout)]",
  warm:
    "border border-[rgba(79,45,30,0.08)] bg-white/72 shadow-[var(--shadow-callout-soft)]",
  glass:
    "border border-[rgba(255,248,241,0.1)] bg-[rgba(255,248,241,0.12)] shadow-[var(--shadow-callout-dark)] backdrop-blur-[6px]",
};

type ScenePanelProps = {
  children: ReactNode;
  className?: string;
  tone?: ScenePanelTone;
} & ComponentPropsWithoutRef<"div">;

export function ScenePanel({
  children,
  className,
  tone = "light",
  ...props
}: ScenePanelProps) {
  return (
    <div
      {...props}
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-scene)] px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10 lg:px-10 lg:pb-12 lg:pt-12",
        panelToneClasses[tone],
        className,
      )}
    >
      {children}
    </div>
  );
}

type SceneCalloutProps = {
  children: ReactNode;
  className?: string;
  tone?: SceneCalloutTone;
} & ComponentPropsWithoutRef<"div">;

export function SceneCallout({
  children,
  className,
  tone = "light",
  ...props
}: SceneCalloutProps) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-[var(--radius-callout)] p-5",
        calloutToneClasses[tone],
        className,
      )}
    >
      {children}
    </div>
  );
}
