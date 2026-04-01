import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ScenePanelTone = "light" | "cream" | "dark";
type SceneCalloutTone = "light" | "warm" | "glass";

const panelToneClasses: Record<ScenePanelTone, string> = {
  light:
    "border border-[rgba(79,45,30,0.08)] bg-[rgba(255,248,241,0.92)] shadow-[0_40px_120px_rgba(79,45,30,0.14)] backdrop-blur-sm",
  cream:
    "border border-[rgba(79,45,30,0.08)] bg-[linear-gradient(180deg,#fff8f1_0%,#f9ebdd_100%)] shadow-[0_40px_120px_rgba(79,45,30,0.12)]",
  dark:
    "border border-[rgba(255,248,241,0.08)] bg-[linear-gradient(135deg,rgba(79,45,30,0.98),rgba(46,26,18,1))] text-[var(--color-cream-light)] shadow-[0_44px_130px_rgba(20,8,5,0.32)]",
};

const calloutToneClasses: Record<SceneCalloutTone, string> = {
  light:
    "border border-[rgba(79,45,30,0.08)] bg-[rgba(255,248,241,0.92)] shadow-[0_20px_60px_rgba(79,45,30,0.12)]",
  warm:
    "border border-[rgba(79,45,30,0.08)] bg-white/72 shadow-[0_18px_40px_rgba(79,45,30,0.06)]",
  glass:
    "border border-[rgba(255,248,241,0.1)] bg-[rgba(255,248,241,0.1)] shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-md",
};

type ScenePanelProps = {
  children: ReactNode;
  className?: string;
  tone?: ScenePanelTone;
};

export function ScenePanel({
  children,
  className,
  tone = "light",
}: ScenePanelProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2.4rem] px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10 lg:px-10 lg:pb-12 lg:pt-12",
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
};

export function SceneCallout({
  children,
  className,
  tone = "light",
}: SceneCalloutProps) {
  return (
    <div
      className={cn(
        "rounded-[1.8rem] p-5",
        calloutToneClasses[tone],
        className,
      )}
    >
      {children}
    </div>
  );
}
