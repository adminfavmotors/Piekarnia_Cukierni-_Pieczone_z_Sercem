"use client";

import Image from "next/image";
import {
  CakeSlice,
  Clock3,
  HeartHandshake,
  Leaf,
  MapPin,
  PhoneCall,
  Wheat,
} from "lucide-react";

import { bakeryMedia } from "@/components/home/bakery-media";
import { ActionLink, Pill } from "@/components/home/home-ui";
import { PageContainer } from "@/components/home/layout-primitives";
import {
  SceneCallout,
  ScenePanel,
} from "@/components/home/scene-primitives";
import {
  SectionKicker,
  SectionLead,
  SectionTitle,
} from "@/components/home/section-copy";
import { SectionHeading } from "@/components/home/section-heading";
import { siteData } from "@/data/site";

const scenePillarIcons = [Wheat, Leaf, HeartHandshake] as const;
const HERO_IMAGE_QUALITY = 68;
const SCENE_IMAGE_QUALITY = 72;
const DESKTOP_DETAIL_IMAGE_SIZES = "(max-width: 1023px) 0px, 15rem";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(79,45,30,0.08)] bg-[var(--header-bg)]/96 backdrop-blur-md transition-colors duration-500">
      <PageContainer className="flex items-center justify-between gap-4 py-3">
        <div className="flex min-w-0 flex-col">
          <a
            href="#top"
            className="font-display text-[1.75rem] leading-none tracking-[-0.05em] sm:text-[2rem]"
          >
            {siteData.name}
          </a>
          <span className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brown-soft)] sm:text-[0.72rem]">
            {siteData.city}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-full border border-[rgba(79,45,30,0.12)] bg-white/68 px-3 py-2 text-[0.72rem] font-semibold text-[var(--color-brown-deep)] lg:flex">
            <Clock3 className="h-3.5 w-3.5 text-[var(--color-accent)]" />
            <span>{siteData.hours}</span>
          </div>
          {siteData.phone ? (
            <a
              href={`tel:${siteData.phone}`}
              className="hidden items-center gap-2 rounded-full border border-[rgba(79,45,30,0.12)] bg-white/68 px-3 py-2 text-[0.72rem] font-semibold text-[var(--color-brown-deep)] lg:flex"
            >
              <PhoneCall className="h-3.5 w-3.5 text-[var(--color-accent)]" />
              <span>{siteData.phone}</span>
            </a>
          ) : null}
          <a
            href="#kontakt"
            className="inline-flex items-center rounded-full bg-[var(--color-accent)] px-4 py-2 text-[0.72rem] font-semibold text-white shadow-[0_14px_30px_rgba(233,79,60,0.2)]"
          >
            {siteData.phone ? siteData.header.phoneLabel : siteData.header.contactFallback}
          </a>
        </div>
      </PageContainer>
    </header>
  );
}

export function HeroScene() {
  return (
    <section
      id="top"
      data-theme-section="hero"
      className="relative isolate min-h-[100svh] overflow-hidden sm:min-h-[104svh] lg:min-h-[124svh]"
    >
      <div className="relative min-h-[100svh] overflow-hidden sm:min-h-[104svh] lg:sticky lg:top-0 lg:h-svh lg:min-h-0">
        <div data-hero-main-image className="absolute inset-0 scale-[1.01]">
          <Image
            src={bakeryMedia.heroBerries}
            alt="Domowe drożdżówki i słodkie wypieki na blasze"
            fill
            priority
            fetchPriority="high"
            placeholder="blur"
            quality={HERO_IMAGE_QUALITY}
            className="object-cover object-[28%_48%] sm:object-[34%_44%] lg:object-[42%_42%]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,18,12,0.18)_0%,rgba(36,18,12,0.12)_26%,rgba(36,18,12,0.48)_100%)]" />
        <div
          data-hero-backdrop
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,18,12,0.4)_0%,rgba(36,18,12,0.12)_44%,rgba(36,18,12,0.22)_100%)] opacity-55"
        />
        <div
          data-hero-floor
          className="absolute inset-x-0 bottom-0 h-[34vh] translate-y-[10%] bg-[linear-gradient(180deg,rgba(36,18,12,0)_0%,rgba(36,18,12,0.18)_30%,rgba(255,248,241,0.76)_100%)] opacity-0"
        />

        <PageContainer className="relative flex min-h-[100svh] flex-col gap-7 pb-5 pt-10 sm:min-h-[104svh] sm:gap-9 sm:pb-6 sm:pt-12 lg:h-full lg:min-h-0 lg:gap-8 lg:pb-8 lg:pt-16">
          <div className="grid gap-6 lg:grid-cols-[0.58fr_0.42fr] lg:items-start">
            <div
              data-hero-layer="copy"
              className="relative z-10 flex max-w-[22rem] flex-col justify-end pt-4 text-[var(--color-cream-light)] sm:max-w-[26rem] lg:max-w-[28rem] lg:pt-14"
            >
              <div data-hero-label>
                <SectionKicker
                  tone="light"
                  className="tracking-[0.32em] text-[rgba(255,248,241,0.82)] sm:text-xs"
                >
                  {siteData.hero.eyebrow}
                </SectionKicker>
              </div>
              <div data-hero-copy className="mt-4 space-y-4">
                <h1 className="text-balance max-w-[10ch] font-display [font-size:var(--type-hero-title)] leading-[0.92] tracking-[-0.07em] text-white drop-shadow-[0_12px_28px_rgba(20,8,5,0.34)]">
                  {siteData.hero.title}
                </h1>
                <SectionLead
                  tone="light"
                  className="max-w-md text-[rgba(255,248,241,0.94)] drop-shadow-[0_8px_18px_rgba(20,8,5,0.28)]"
                >
                  {siteData.hero.description}
                </SectionLead>
              </div>
              <div
                data-hero-actions
                className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <ActionLink href="#co-dzis-pieczemy">
                  {siteData.hero.primaryCta}
                </ActionLink>
                <ActionLink href="#kontakt" variant="secondary">
                  {siteData.hero.secondaryCta}
                </ActionLink>
              </div>
            </div>

            <div className="relative z-10 hidden min-h-[23rem] lg:block">
              <div
                data-hero-detail-card
                className="absolute right-0 top-0 w-[15rem] overflow-hidden rounded-[2rem] border border-[rgba(255,248,241,0.16)] bg-[rgba(255,248,241,0.14)] p-4 shadow-[0_22px_54px_rgba(0,0,0,0.16)] backdrop-blur-[4px]"
              >
                <div className="relative aspect-[0.86] overflow-hidden rounded-[1.4rem]">
                  <Image
                    src={bakeryMedia.breadBasket}
                    alt="Świeże chleby i bułki w wiklinowym koszu"
                    fill
                    loading="lazy"
                    quality={SCENE_IMAGE_QUALITY}
                    placeholder="blur"
                    className="object-cover"
                    sizes={DESKTOP_DETAIL_IMAGE_SIZES}
                  />
                </div>
                <div className="mt-4">
                  <SectionKicker
                    tone="light"
                    className="text-[0.7rem] tracking-[0.2em] text-[rgba(255,248,241,0.7)]"
                  >
                    {siteData.hero.breadLabel}
                  </SectionKicker>
                  <p className="mt-2 text-[0.94rem] leading-6 text-[rgba(255,248,241,0.92)]">
                    {siteData.hero.breadDescription}
                  </p>
                </div>
              </div>

              <div
                data-hero-detail-card
                className="absolute bottom-0 right-12 max-w-[18rem] rounded-[2rem] border border-[rgba(255,248,241,0.16)] bg-[rgba(36,18,12,0.52)] px-5 py-5 shadow-[0_22px_56px_rgba(0,0,0,0.18)] backdrop-blur-[6px]"
              >
                <SectionKicker
                  tone="light"
                  className="text-[0.7rem] tracking-[0.22em] text-[rgba(255,248,241,0.7)]"
                >
                  {siteData.hero.todayLabel}
                </SectionKicker>
                <div className="mt-4 flex flex-wrap gap-2">
                  {siteData.dailyBakes.slice(0, 3).map((bake) => (
                    <Pill key={bake.name} tone="darkGlass">
                      {bake.category}
                    </Pill>
                  ))}
                </div>
                <p className="mt-4 text-[0.94rem] leading-6 text-[rgba(255,248,241,0.9)]">
                  {siteData.city}, {siteData.hours}
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-1 flex items-end justify-between gap-4 lg:mt-auto">
            <Pill
              tone="darkGlass"
              className="max-w-[14rem] border border-[rgba(255,248,241,0.18)] bg-[rgba(255,248,241,0.12)] px-4 py-2 text-[0.68rem] tracking-[0.18em] backdrop-blur-[4px] sm:max-w-[18rem] sm:text-[0.72rem]"
              data-hero-detail-card
            >
              {siteData.hero.freshLabel}
            </Pill>
            <div
              data-hero-scroll-note
              className="text-right text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[rgba(255,248,241,0.68)] sm:text-[0.72rem] sm:tracking-[0.24em]"
            >
              {siteData.hero.scrollLabel}
            </div>
          </div>
        </PageContainer>
      </div>
    </section>
  );
}

export function TasteScene() {
  return (
    <section
      data-theme-section="taste"
      className="relative z-20 -mt-8 px-4 pb-12 pt-0 sm:-mt-10 sm:px-6 sm:pb-14 lg:-mt-[18svh] lg:pb-18 lg:px-10"
    >
      <PageContainer>
        <div data-reveal data-scene-panel="taste">
          <ScenePanel className="lg:grid lg:grid-cols-[0.5fr_0.5fr] lg:items-end lg:gap-8">
            <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(233,79,60,0.08),rgba(233,79,60,0))]" />
            <div className="relative space-y-6 lg:max-w-[32rem]">
              <SectionHeading
                eyebrow={siteData.taste.eyebrow}
                title={siteData.taste.title}
                description={siteData.taste.description}
              />

              <div data-stagger-group className="grid gap-4">
                {siteData.taste.pillars.map(({ label, title, description }, index) => {
                  const Icon = scenePillarIcons[index];

                  return (
                    <SceneCallout
                      key={label}
                      data-stagger-item
                      tone="warm"
                      className="min-h-[14.5rem] rounded-[1.6rem]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-[rgba(233,79,60,0.12)] p-3 text-[var(--color-accent)]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="space-y-2">
                          <SectionKicker className="tracking-[0.24em]">
                            {label}
                          </SectionKicker>
                          <SectionTitle as="h3" size="callout">
                            {title}
                          </SectionTitle>
                          <p className="text-pretty text-[0.96rem] leading-6 text-[var(--color-brown-muted)]">
                            {description}
                          </p>
                        </div>
                      </div>
                    </SceneCallout>
                  );
                })}
              </div>
            </div>

            <div data-scene-photo="taste" className="relative mt-6 lg:mt-0 lg:pl-3">
              <div className="relative aspect-[0.92] overflow-hidden rounded-[2.2rem] shadow-[0_24px_56px_rgba(79,45,30,0.14)]">
                <Image
                  src={bakeryMedia.cinnamonRolls}
                  alt="Cynamonki i drożdżówki pokazane w dużym, apetycznym kadrze"
                  fill
                  placeholder="blur"
                  loading="lazy"
                  quality={SCENE_IMAGE_QUALITY}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(46,26,18,0.02),rgba(46,26,18,0.24))]" />
              </div>
              <SceneCallout className="absolute -bottom-8 left-0 hidden max-w-[18rem] sm:left-8 lg:block">
                <SectionKicker>{siteData.taste.photoKicker}</SectionKicker>
                <p className="mt-3 text-[0.96rem] leading-6 text-[var(--color-brown-muted)]">
                  {siteData.taste.photoDescription}
                </p>
              </SceneCallout>
            </div>
          </ScenePanel>
        </div>
      </PageContainer>
      <div
        data-ingredients-floor
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-44 translate-y-[14%] bg-[linear-gradient(180deg,rgba(255,248,241,0)_0%,rgba(255,248,241,0.26)_40%,rgba(249,235,221,0.92)_100%)] opacity-0 lg:block"
      />
    </section>
  );
}

export function IngredientsScene() {
  return (
    <section
      data-theme-section="ingredients"
      className="relative z-30 -mt-6 px-4 pb-12 pt-0 sm:-mt-8 sm:px-6 sm:pb-14 lg:-mt-[14svh] lg:pb-18 lg:px-10"
    >
      <PageContainer>
        <div data-reveal data-scene-panel="ingredients">
          <ScenePanel
            tone="cream"
            className="lg:grid lg:grid-cols-[0.44fr_0.56fr] lg:items-center lg:gap-8"
          >
            <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(233,79,60,0.06),rgba(233,79,60,0))]" />
            <div
              data-scene-photo="ingredients"
              className="relative order-2 mt-6 lg:order-1 lg:mt-0"
            >
              <div className="relative aspect-[0.98] overflow-hidden rounded-[2.2rem] shadow-[0_24px_56px_rgba(79,45,30,0.12)]">
                <Image
                  src={bakeryMedia.breadBasket}
                  alt="Świeże wypieki w koszu jako spokojny kadr sekcji o składnikach"
                  fill
                  placeholder="blur"
                  loading="lazy"
                  quality={SCENE_IMAGE_QUALITY}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </div>
              <SceneCallout className="absolute -bottom-8 right-0 hidden max-w-[17rem] sm:right-8 lg:block">
                <SectionKicker>{siteData.ingredients.photoKicker}</SectionKicker>
                <p className="mt-3 text-sm leading-6 text-[var(--color-brown-soft)]">
                  {siteData.ingredients.photoDescription}
                </p>
              </SceneCallout>
            </div>

            <div className="relative order-1 space-y-6 lg:order-2 lg:pl-8">
              <SectionHeading
                eyebrow={siteData.ingredients.eyebrow}
                title={siteData.ingredients.title}
                description={siteData.ingredients.description}
              />

              <div data-stagger-group className="grid gap-4 sm:grid-cols-2">
                {siteData.ingredients.notes.map((note, index) => (
                  <SceneCallout
                    key={note}
                    data-stagger-item
                    tone="light"
                    className={
                      index === 0
                        ? "bg-white/78 sm:col-span-2"
                        : index === 1
                          ? "bg-[rgba(235,171,163,0.22)]"
                          : "bg-[rgba(79,45,30,0.06)]"
                    }
                  >
                    <p className="text-pretty text-[0.96rem] leading-6 text-[var(--color-brown-muted)]">
                      {note}
                    </p>
                  </SceneCallout>
                ))}
              </div>
            </div>
          </ScenePanel>
        </div>
      </PageContainer>
      <div
        data-heart-floor
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-44 translate-y-[14%] bg-[linear-gradient(180deg,rgba(249,235,221,0)_0%,rgba(249,235,221,0.2)_40%,rgba(46,26,18,0.92)_100%)] opacity-0 lg:block"
      />
    </section>
  );
}

export function HeartScene() {
  return (
    <section
      data-theme-section="heart"
      className="relative z-40 -mt-6 px-4 pb-12 pt-0 text-[var(--color-cream-light)] sm:-mt-8 sm:px-6 sm:pb-14 lg:-mt-[14svh] lg:pb-18 lg:px-10"
    >
      <PageContainer>
        <div data-reveal data-scene-panel="heart">
          <ScenePanel
            tone="dark"
            className="rounded-[var(--radius-scene-lg)] pb-10 pt-10 sm:pb-12 sm:pt-12 lg:grid lg:grid-cols-[0.6fr_0.4fr] lg:items-end lg:gap-8 lg:pb-14 lg:pt-14"
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(233,79,60,0.08),rgba(233,79,60,0))]" />
            <div className="relative space-y-5 lg:max-w-[42rem]">
              <SectionKicker tone="light" className="tracking-[0.3em]">
                {siteData.heart.eyebrow}
              </SectionKicker>
              <SectionTitle tone="light" size="display">
                {siteData.heart.title}
              </SectionTitle>
              <SectionLead tone="light" className="max-w-xl">
                {siteData.heart.description}
              </SectionLead>
            </div>

            <div data-scene-photo="heart" className="relative mt-6 lg:mt-0">
              <div className="relative ml-auto aspect-[0.92] max-w-[29rem] overflow-hidden rounded-[2.2rem] border border-[rgba(255,248,241,0.12)] shadow-[0_22px_60px_rgba(0,0,0,0.18)]">
                <Image
                  src={bakeryMedia.heroBerries}
                  alt="Zbliżenie na domowe wypieki jako ciepła, emocjonalna scena"
                  fill
                  placeholder="blur"
                  loading="lazy"
                  quality={SCENE_IMAGE_QUALITY}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(46,26,18,0.08),rgba(46,26,18,0.28))]" />
              </div>
              <SceneCallout
                tone="glass"
                className="absolute -bottom-8 left-0 hidden max-w-[17rem] sm:left-6 lg:block"
              >
                <SectionKicker
                  tone="light"
                  className="text-[rgba(255,248,241,0.76)]"
                >
                  {siteData.heart.photoKicker}
                </SectionKicker>
                <p className="mt-3 text-[0.96rem] leading-6 text-[rgba(255,248,241,0.9)]">
                  {siteData.heart.photoDescription}
                </p>
              </SceneCallout>
            </div>
          </ScenePanel>
        </div>
      </PageContainer>
      <div
        data-daily-floor
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-44 translate-y-[14%] bg-[linear-gradient(180deg,rgba(46,26,18,0)_0%,rgba(46,26,18,0.18)_36%,rgba(255,247,239,0.96)_100%)] opacity-100 lg:block"
      />
    </section>
  );
}

export function ContactSection() {
  return (
    <section
      data-theme-section="contact"
      id="kontakt"
      className="relative z-50 bg-[linear-gradient(180deg,#f3dfcf_0%,#f1d8cb_100%)] pb-14 pt-6"
    >
      <PageContainer>
        <div
          data-reveal
          className="grid gap-5 rounded-[2.2rem] bg-[var(--color-brown-deep)] px-5 py-7 text-[var(--color-cream-light)] shadow-[0_20px_52px_rgba(46,26,18,0.18)] sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-end"
        >
          <div className="space-y-5">
            <SectionKicker tone="light">{siteData.contact.eyebrow}</SectionKicker>
            <SectionTitle tone="light">{siteData.contact.title}</SectionTitle>
            <SectionLead tone="light" className="max-w-xl">
              {siteData.contact.description}
            </SectionLead>
          </div>

          <div className="grid gap-4 rounded-[1.5rem] bg-[rgba(255,248,241,0.08)] p-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-[var(--color-accent)]" />
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[rgba(255,248,241,0.6)]">
                  {siteData.contact.addressLabel}
                </p>
                <p className="mt-2 text-[1rem] leading-7 text-[rgba(255,248,241,0.94)]">{siteData.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 className="mt-1 h-5 w-5 text-[var(--color-accent)]" />
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[rgba(255,248,241,0.6)]">
                  {siteData.contact.hoursLabel}
                </p>
                <p className="mt-2 text-[1rem] leading-7 text-[rgba(255,248,241,0.94)]">{siteData.hours}</p>
              </div>
            </div>
            {siteData.phone ? (
              <div className="flex items-start gap-3">
                <PhoneCall className="mt-1 h-5 w-5 text-[var(--color-accent)]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[rgba(255,248,241,0.6)]">
                    {siteData.contact.phoneLabel}
                  </p>
                  <a
                    href={`tel:${siteData.phone}`}
                    className="mt-2 inline-flex text-base leading-7 text-[var(--color-cream-light)] underline decoration-[rgba(255,248,241,0.3)] underline-offset-4"
                  >
                    {siteData.phone}
                  </a>
                </div>
              </div>
            ) : null}
            <div className="flex items-start gap-3">
              <CakeSlice className="mt-1 h-5 w-5 text-[var(--color-accent)]" />
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[rgba(255,248,241,0.6)]">
                  {siteData.contact.atmosphereLabel}
                </p>
                  <p className="mt-2 text-[1rem] leading-7 text-[rgba(255,248,241,0.94)]">
                    {siteData.contact.atmosphereValue}
                  </p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
