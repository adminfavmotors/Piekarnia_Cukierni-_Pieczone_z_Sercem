"use client";

import { useRef } from "react";

import { DailyBakesSection } from "@/components/home/daily-bakes-section";
import {
  ContactSection,
  HeartScene,
  HeroScene,
  IngredientsScene,
  SiteHeader,
  TasteScene,
} from "@/components/home/home-scenes";
import { useHomePageMotion } from "@/components/home/use-home-page-motion";

export function HomePageClient() {
  const rootRef = useRef<HTMLElement | null>(null);

  useHomePageMotion(rootRef);

  return (
    <main
      ref={rootRef}
      data-page-theme="hero"
      className="page-theme-shell relative overflow-x-clip text-[var(--page-foreground)]"
    >
      <SiteHeader />
      <HeroScene />
      <TasteScene />
      <IngredientsScene />
      <HeartScene />
      <DailyBakesSection />
      <ContactSection />
    </main>
  );
}
