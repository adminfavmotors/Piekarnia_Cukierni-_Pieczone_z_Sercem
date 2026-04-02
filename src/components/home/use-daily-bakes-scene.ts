"use client";

import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import { Draggable } from "gsap/all";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { DAILY_MOTION } from "@/components/home/home-motion-config";

gsap.registerPlugin(ScrollTrigger, Draggable, useGSAP);

type RootRef = RefObject<HTMLElement | null>;

function createDesktopScrollableRail(viewport: HTMLElement) {
  const dragProxy = document.createElement("div");
  let dragStartOffset = 0;

  const draggable = Draggable.create(dragProxy, {
    trigger: viewport,
    type: "x",
    allowContextMenu: true,
    zIndexBoost: false,
    minimumMovement: 6,
    onPress() {
      dragStartOffset = viewport.scrollLeft;
      viewport.style.cursor = "grabbing";
      gsap.set(dragProxy, { x: 0 });
    },
    onDrag() {
      viewport.scrollLeft = dragStartOffset - this.x;
    },
    onRelease() {
      viewport.style.cursor = "";
    },
  })[0];

  return () => {
    draggable.kill();
  };
}

function createDesktopDailyScene(
  scene: HTMLElement,
  viewport: HTMLElement,
  track: HTMLElement,
) {
  const getDistance = () =>
    Math.max(0, track.scrollWidth - viewport.clientWidth);

  const animation = gsap.to(track, {
    x: () => -getDistance(),
    ease: "none",
    scrollTrigger: {
      trigger: scene,
      start: DAILY_MOTION.desktopStart,
      end: () => `+=${getDistance()}`,
      scrub: DAILY_MOTION.scrub,
      pin: scene,
      anticipatePin: DAILY_MOTION.anticipatePin,
      invalidateOnRefresh: true,
    },
  });

  const trigger = animation.scrollTrigger;

  if (!trigger) {
    return () => {
      animation.kill();
    };
  }

  const syncSceneOffset = (nextOffset: number) => {
    const distance = getDistance();

    if (!distance) {
      return;
    }

    const clampedOffset = gsap.utils.clamp(0, distance, nextOffset);
    const span = trigger.end - trigger.start;
    const progress = clampedOffset / distance;

    trigger.scroll(trigger.start + span * progress);
  };

  const dragProxy = document.createElement("div");
  let dragStartOffset = 0;

  const draggable = Draggable.create(dragProxy, {
    trigger: viewport,
    type: "x",
    allowContextMenu: true,
    zIndexBoost: false,
    minimumMovement: 6,
    onPress() {
      dragStartOffset = Math.abs(Number(gsap.getProperty(track, "x")) || 0);
      viewport.style.cursor = "grabbing";
      gsap.set(dragProxy, { x: 0 });
    },
    onDrag() {
      syncSceneOffset(dragStartOffset - this.x);
    },
    onRelease() {
      viewport.style.cursor = "";
    },
  })[0];

  return () => {
    draggable.kill();
    animation.kill();
  };
}

export function useDailyBakesScene(rootRef: RootRef) {
  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) {
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const dailyScene = root.querySelector<HTMLElement>("[data-daily-scene]");
      const dailyViewport =
        root.querySelector<HTMLElement>("[data-daily-viewport]");
      const dailyTrack = root.querySelector<HTMLElement>("[data-daily-track]");
      const seasonalViewport = root.querySelector<HTMLElement>(
        "[data-seasonal-viewport]",
      );

      if (prefersReducedMotion || !dailyScene || !dailyViewport || !dailyTrack) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(DAILY_MOTION.desktopBreakpoint, () => {
        const cleanups: Array<() => void> = [];

        if (dailyTrack.scrollWidth <= dailyViewport.clientWidth) {
          if (seasonalViewport && seasonalViewport.scrollWidth > seasonalViewport.clientWidth) {
            cleanups.push(createDesktopScrollableRail(seasonalViewport));
          }

          return () => {
            cleanups.forEach((cleanup) => cleanup());
          };
        }

        cleanups.push(createDesktopDailyScene(dailyScene, dailyViewport, dailyTrack));

        if (seasonalViewport && seasonalViewport.scrollWidth > seasonalViewport.clientWidth) {
          cleanups.push(createDesktopScrollableRail(seasonalViewport));
        }

        return () => {
          cleanups.forEach((cleanup) => cleanup());
        };
      });

      return () => {
        mm.revert();
      };
    },
    { scope: rootRef },
  );
}
