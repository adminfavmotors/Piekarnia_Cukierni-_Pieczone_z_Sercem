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
import { useDailyBakesScene } from "@/components/home/use-daily-bakes-scene";
import { useHomePageMotion } from "@/components/home/use-home-page-motion";

export function HomePageClient() {
  const rootRef = useRef<HTMLElement | null>(null);

  useHomePageMotion(rootRef);
  useDailyBakesScene(rootRef);

  return (
    <main
      ref={rootRef}
      className="relative overflow-x-clip bg-[var(--color-cream)] text-[var(--color-brown-deep)]"
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
