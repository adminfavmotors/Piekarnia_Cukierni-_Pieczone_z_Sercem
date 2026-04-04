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
const HERO_DETAIL_RAIL_CLASS = "grid w-full max-w-[28rem] grid-cols-12 gap-y-7";
const HERO_DETAIL_PRIMARY_SLOT_CLASS = "col-span-8 col-start-5";
const HERO_DETAIL_SECONDARY_SLOT_CLASS = "col-span-9 col-start-1";
const WIDE_SCENE_CONTAINER_CLASS = "xl:max-w-[96rem] 2xl:max-w-[104rem]";
const TASTE_PANEL_LAYOUT_CLASS =
  "lg:grid lg:grid-cols-[minmax(0,0.56fr)_minmax(30rem,0.44fr)] lg:items-center lg:gap-16 xl:gap-20";

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
      className="relative isolate min-h-svh overflow-x-hidden"
    >
      <div className="relative min-h-svh">
      <div data-hero-scroll-layer="main-image" className="absolute inset-0 scale-[1.01]">
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
        data-hero-scroll-layer="backdrop"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,18,12,0.34)_0%,rgba(36,18,12,0.1)_44%,rgba(36,18,12,0.18)_100%)] opacity-45"
      />
      <div
        data-hero-scroll-layer="floor"
        className="absolute inset-x-0 bottom-0 h-[34vh] translate-y-[10%] bg-[linear-gradient(180deg,rgba(36,18,12,0)_0%,rgba(36,18,12,0.18)_30%,rgba(255,248,241,0.76)_100%)] opacity-0"
      />

        <PageContainer
          className={`relative flex min-h-svh flex-col justify-between gap-10 pb-6 pt-10 sm:gap-12 sm:pb-7 sm:pt-12 lg:pb-8 lg:pt-14 ${WIDE_SCENE_CONTAINER_CLASS}`}
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,28rem)] lg:items-center lg:gap-16">
            <div
            data-hero-scroll-layer="copy"
            className="relative z-10 flex max-w-[24rem] flex-col text-[var(--color-cream-light)] sm:max-w-[30rem] lg:max-w-[37rem]"
            >
              <SectionKicker
                tone="light"
                className="tracking-[0.3em] text-[rgba(255,248,241,0.78)] sm:text-[0.7rem]"
              >
                {siteData.hero.eyebrow}
              </SectionKicker>
              <div className="mt-3.5 space-y-3.5">
                <h1 className="text-balance max-w-[11ch] font-display [font-size:var(--type-hero-title)] leading-[0.9] tracking-[-0.07em] text-white drop-shadow-[0_12px_28px_rgba(20,8,5,0.34)]">
                  {siteData.hero.title}
                </h1>
                <SectionLead
                  tone="light"
                  className="max-w-[28rem] text-[0.98rem] leading-7 text-[rgba(255,248,241,0.88)] drop-shadow-[0_8px_18px_rgba(20,8,5,0.22)] sm:text-[1rem] sm:leading-[1.85] xl:max-w-[30rem]"
                >
                  {siteData.hero.description}
                </SectionLead>
              </div>
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                <ActionLink href="#co-dzis-pieczemy">
                  {siteData.hero.primaryCta}
                </ActionLink>
                <ActionLink href="#kontakt" variant="secondary">
                  {siteData.hero.secondaryCta}
                </ActionLink>
              </div>
            </div>

            <div className="relative z-10 hidden lg:block">
              <div className={HERO_DETAIL_RAIL_CLASS}>
                <div className={HERO_DETAIL_PRIMARY_SLOT_CLASS}>
                  <div
                  data-hero-scroll-layer="primary"
                  className="overflow-hidden rounded-[2rem] border border-[rgba(255,248,241,0.14)] bg-[rgba(255,248,241,0.12)] p-4 shadow-[0_18px_46px_rgba(0,0,0,0.14)] backdrop-blur-[4px]"
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
                    <div className="mt-3.5">
                      <SectionKicker
                        tone="light"
                        className="text-[0.68rem] tracking-[0.18em] text-[rgba(255,248,241,0.66)]"
                      >
                        {siteData.hero.breadLabel}
                      </SectionKicker>
                      <p className="mt-1.5 text-[0.9rem] leading-6 text-[rgba(255,248,241,0.86)]">
                        {siteData.hero.breadDescription}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={HERO_DETAIL_SECONDARY_SLOT_CLASS}>
                  <div
                    data-hero-scroll-layer="secondary"
                    className="rounded-[2rem] border border-[rgba(255,248,241,0.14)] bg-[rgba(36,18,12,0.44)] px-5 py-4.5 shadow-[0_18px_48px_rgba(0,0,0,0.16)] backdrop-blur-[6px]"
                  >
                    <SectionKicker
                      tone="light"
                      className="text-[0.68rem] tracking-[0.2em] text-[rgba(255,248,241,0.66)]"
                    >
                      {siteData.hero.todayLabel}
                    </SectionKicker>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {siteData.dailyBakes.slice(0, 3).map((bake) => (
                        <Pill key={bake.name} tone="darkGlass">
                          {bake.category}
                        </Pill>
                      ))}
                    </div>
                    <p className="mt-3.5 text-[0.9rem] leading-6 text-[rgba(255,248,241,0.86)]">
                      {siteData.city}, {siteData.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-end justify-between gap-4">
            <Pill
              tone="darkGlass"
              className="max-w-[14rem] border border-[rgba(255,248,241,0.18)] bg-[rgba(255,248,241,0.12)] px-4 py-2 text-[0.68rem] tracking-[0.18em] backdrop-blur-[4px] sm:max-w-[18rem] sm:text-[0.72rem]"
            data-hero-scroll-layer="pill"
          >
              {siteData.hero.freshLabel}
            </Pill>
            <div className="text-right text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[rgba(255,248,241,0.68)] sm:text-[0.72rem] sm:tracking-[0.24em]">
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
      className="relative z-20 -mt-6 px-4 pb-12 pt-0 sm:-mt-8 sm:px-6 sm:pb-14 lg:-mt-28 lg:pb-18 lg:px-10 xl:-mt-32 2xl:-mt-36"
    >
      <PageContainer className={WIDE_SCENE_CONTAINER_CLASS}>
        <div data-reveal data-scene-panel="taste">
          <ScenePanel
            className={`${TASTE_PANEL_LAYOUT_CLASS} lg:px-10 lg:pb-12 lg:pt-14 xl:px-12 xl:pb-14 xl:pt-16`}
          >
            <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(233,79,60,0.08),rgba(233,79,60,0))]" />
            <div className="relative space-y-7 lg:max-w-[41rem]">
              <div className="space-y-4.5 lg:max-w-[34rem] xl:max-w-[36rem]">
                <SectionKicker>{siteData.taste.eyebrow}</SectionKicker>
                <SectionTitle className="max-w-[12ch] lg:max-w-[11ch]">
                  {siteData.taste.title}
                </SectionTitle>
                <SectionLead className="max-w-[28rem] xl:max-w-[30rem]">
                  {siteData.taste.description}
                </SectionLead>
              </div>

              <div
                data-stagger-group
                data-stagger-mode="manual"
                className="grid gap-4 sm:grid-cols-2 lg:max-w-[39rem] lg:content-start xl:gap-5"
              >
                {siteData.taste.pillars.map(({ label, title, description }, index) => {
                  const Icon = scenePillarIcons[index];

                  return (
                    <SceneCallout
                      key={label}
                      data-stagger-item
                      tone="warm"
                      className={
                        index === 0
                          ? "min-h-[11.75rem] rounded-[1.6rem] sm:col-span-2 lg:min-h-[13rem]"
                          : "min-h-[11rem] rounded-[1.6rem] lg:min-h-[12rem]"
                      }
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="rounded-full bg-[rgba(233,79,60,0.12)] p-3 text-[var(--color-accent)]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="space-y-1.5">
                          <SectionKicker className="tracking-[0.24em]">
                            {label}
                          </SectionKicker>
                          <SectionTitle as="h3" size="callout" className="max-w-[16ch]">
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

            <div
              data-scene-photo="taste"
              className="relative mt-6 lg:mt-0 lg:w-full lg:max-w-[36rem] lg:justify-self-end lg:self-center xl:max-w-[39rem]"
            >
              <div className="relative aspect-[0.92] overflow-hidden rounded-[2.2rem] shadow-[0_24px_56px_rgba(79,45,30,0.14)] xl:aspect-[0.9]">
                <Image
                  src={bakeryMedia.cinnamonRolls}
                  alt="Cynamonki i drożdżówki pokazane w dużym, apetycznym kadrze"
                  fill
                  placeholder="blur"
                  loading="lazy"
                  quality={SCENE_IMAGE_QUALITY}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(46,26,18,0.02),rgba(46,26,18,0.24))]" />
              </div>
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
      <PageContainer className={WIDE_SCENE_CONTAINER_CLASS}>
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

              <div
                data-stagger-group
                data-stagger-mode="manual"
                className="grid gap-4 sm:grid-cols-2"
              >
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
            className="rounded-[var(--radius-scene-lg)] pb-10 pt-10 sm:pb-12 sm:pt-12 lg:grid lg:grid-cols-[minmax(0,0.54fr)_minmax(0,0.46fr)] lg:items-center lg:gap-10 lg:pb-14 lg:pt-12"
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(233,79,60,0.08),rgba(233,79,60,0))]" />
            <div className="relative space-y-4 lg:max-w-[34rem]">
              <SectionKicker tone="light" className="tracking-[0.3em]">
                {siteData.heart.eyebrow}
              </SectionKicker>
              <SectionTitle tone="light" size="display" className="max-w-[11ch]">
                {siteData.heart.title}
              </SectionTitle>
              <SectionLead tone="light" className="max-w-[27rem]">
                {siteData.heart.description}
              </SectionLead>
            </div>

            <div data-scene-photo="heart" className="relative mt-6 lg:mt-0 lg:self-center">
              <div className="relative ml-auto aspect-[0.92] max-w-[30rem] overflow-hidden rounded-[2.2rem] border border-[rgba(255,248,241,0.12)] shadow-[0_22px_60px_rgba(0,0,0,0.18)]">
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
                <SceneCallout
                  tone="glass"
                  className="absolute bottom-5 left-5 max-w-[15.5rem] sm:bottom-6 sm:left-6"
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
