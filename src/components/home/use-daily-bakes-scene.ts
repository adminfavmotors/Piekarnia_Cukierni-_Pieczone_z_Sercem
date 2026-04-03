"use client";

import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/dist/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { DAILY_MOTION } from "@/components/home/home-motion-config";

gsap.registerPlugin(ScrollTrigger, Draggable, useGSAP);

type RootRef = RefObject<HTMLElement | null>;

function createDesktopDailyScene(
  scene: HTMLElement,
  viewport: HTMLElement,
  track: HTMLElement,
) {
  const measureDistance = () =>
    Math.max(0, track.scrollWidth - viewport.clientWidth);
  const metrics = {
    distance: 0,
    span: 0,
  };

  const animation = gsap.to(track, {
    x: () => -(metrics.distance || measureDistance()),
    ease: "none",
    scrollTrigger: {
      trigger: scene,
      start: DAILY_MOTION.desktopStart,
      end: () => `+=${measureDistance()}`,
      scrub: DAILY_MOTION.scrub,
      pin: scene,
      anticipatePin: DAILY_MOTION.anticipatePin,
      invalidateOnRefresh: true,
      onRefresh(self) {
        metrics.distance = measureDistance();
        metrics.span = self.end - self.start;
      },
    },
  });

  const trigger = animation.scrollTrigger;

  if (!trigger) {
    return () => {
      animation.kill();
    };
  }

  const syncSceneOffset = (nextOffset: number) => {
    const distance = metrics.distance;

    if (!distance) {
      return;
    }

    const clampedOffset = gsap.utils.clamp(0, distance, nextOffset);
    const progress = clampedOffset / distance;

    trigger.scroll(trigger.start + metrics.span * progress);
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
      dragStartOffset = metrics.distance * trigger.progress;
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

      if (prefersReducedMotion || !dailyScene || !dailyViewport || !dailyTrack) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(DAILY_MOTION.desktopBreakpoint, () => {
        if (dailyTrack.scrollWidth <= dailyViewport.clientWidth) {
          return;
        }

        return createDesktopDailyScene(dailyScene, dailyViewport, dailyTrack);
      });

      return () => {
        mm.revert();
      };
    },
    { scope: rootRef },
  );
}
