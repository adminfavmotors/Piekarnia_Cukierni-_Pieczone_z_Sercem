"use client";

import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import { Draggable } from "gsap/all";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { DAILY_MOTION } from "@/components/home/home-motion-config";

gsap.registerPlugin(ScrollTrigger, Draggable, useGSAP);

type RootRef = RefObject<HTMLElement | null>;

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

      let dailyDesktopTrigger: ScrollTrigger | null = null;
      const setWindowScroll = ScrollTrigger.getScrollFunc(window);
      const cleanups: Array<() => void> = [];

      const bindNativeHorizontalViewport = (
        viewport: HTMLElement,
        options?: { enableDesktopPointer?: boolean },
      ) => {
        let startX = 0;
        let startY = 0;
        let startScrollLeft = 0;
        let horizontalLock = false;
        let isPointerDragging = false;
        let activePointerId: number | null = null;
        let pointerStartX = 0;
        let pointerStartOffset = 0;

        const onTouchStart = (event: TouchEvent) => {
          if (event.touches.length !== 1) {
            return;
          }

          const touch = event.touches[0];
          startX = touch.clientX;
          startY = touch.clientY;
          startScrollLeft = viewport.scrollLeft;
          horizontalLock = false;
        };

        const onTouchMove = (event: TouchEvent) => {
          if (event.touches.length !== 1) {
            return;
          }

          const touch = event.touches[0];
          const deltaX = touch.clientX - startX;
          const deltaY = touch.clientY - startY;

          if (!horizontalLock) {
            if (
              Math.abs(deltaX) >
              Math.abs(deltaY) + DAILY_MOTION.swipeAxisLockThreshold
            ) {
              horizontalLock = true;
            } else if (Math.abs(deltaY) > Math.abs(deltaX)) {
              return;
            }
          }

          if (horizontalLock) {
            event.preventDefault();
            viewport.scrollLeft = startScrollLeft - deltaX;
          }
        };

        const onPointerDown = (event: PointerEvent) => {
          if (event.pointerType === "touch" || !options?.enableDesktopPointer) {
            return;
          }

          isPointerDragging = true;
          activePointerId = event.pointerId;
          pointerStartX = event.clientX;
          pointerStartOffset = viewport.scrollLeft;

          viewport.setPointerCapture(event.pointerId);
          event.preventDefault();
        };

        const onPointerMove = (event: PointerEvent) => {
          if (
            !isPointerDragging ||
            activePointerId !== event.pointerId ||
            window.innerWidth < 1024
          ) {
            return;
          }

          viewport.scrollLeft =
            pointerStartOffset - (event.clientX - pointerStartX);
          event.preventDefault();
        };

        const stopPointerDrag = (event: PointerEvent) => {
          if (activePointerId !== event.pointerId) {
            return;
          }

          isPointerDragging = false;
          activePointerId = null;

          if (viewport.hasPointerCapture(event.pointerId)) {
            viewport.releasePointerCapture(event.pointerId);
          }
        };

        viewport.addEventListener("touchstart", onTouchStart, {
          passive: true,
        });
        viewport.addEventListener("touchmove", onTouchMove, {
          passive: false,
        });
        viewport.addEventListener("pointerdown", onPointerDown);
        viewport.addEventListener("pointermove", onPointerMove);
        viewport.addEventListener("pointerup", stopPointerDrag);
        viewport.addEventListener("pointercancel", stopPointerDrag);

        cleanups.push(() => {
          viewport.removeEventListener("touchstart", onTouchStart);
          viewport.removeEventListener("touchmove", onTouchMove);
          viewport.removeEventListener("pointerdown", onPointerDown);
          viewport.removeEventListener("pointermove", onPointerMove);
          viewport.removeEventListener("pointerup", stopPointerDrag);
          viewport.removeEventListener("pointercancel", stopPointerDrag);
        });
      };

      if (dailyViewport) {
        bindNativeHorizontalViewport(dailyViewport, {
          enableDesktopPointer: false,
        });
      }

      if (seasonalViewport) {
        bindNativeHorizontalViewport(seasonalViewport, {
          enableDesktopPointer: true,
        });
      }

      if (prefersReducedMotion || !dailyScene || !dailyViewport || !dailyTrack) {
        return () => {
          cleanups.forEach((cleanup) => cleanup());
        };
      }

      const getDistance = () =>
        Math.max(0, dailyTrack.scrollWidth - dailyViewport.clientWidth);

      const syncSceneOffset = (nextOffset: number) => {
        if (!dailyDesktopTrigger) {
          return;
        }

        const distance = getDistance();
        if (!distance) {
          return;
        }

        const clampedOffset = gsap.utils.clamp(0, distance, nextOffset);
        const span = dailyDesktopTrigger.end - dailyDesktopTrigger.start;
        const progress = clampedOffset / distance;
        const targetY = dailyDesktopTrigger.start + span * progress;

        setWindowScroll(targetY);
        ScrollTrigger.update();
      };

      const mm = gsap.matchMedia();

      mm.add(DAILY_MOTION.desktopBreakpoint, () => {
        if (getDistance() <= 0) {
          return;
        }

        const animation = gsap.to(dailyTrack, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: dailyScene,
            start: DAILY_MOTION.desktopStart,
            end: () => `+=${getDistance()}`,
            scrub: DAILY_MOTION.scrub,
            pin: dailyScene,
            anticipatePin: DAILY_MOTION.anticipatePin,
            invalidateOnRefresh: true,
          },
        });

        dailyDesktopTrigger = animation.scrollTrigger ?? null;

        const dragProxy = document.createElement("div");
        let dragStartOffset = 0;

        const draggable = Draggable.create(dragProxy, {
          trigger: dailyViewport,
          type: "x",
          allowContextMenu: true,
          zIndexBoost: false,
          onPress() {
            dragStartOffset = Math.abs(
              Number(gsap.getProperty(dailyTrack, "x")) || 0,
            );
            dailyViewport.style.cursor = "grabbing";
            gsap.set(dragProxy, { x: 0 });
          },
          onDrag() {
            syncSceneOffset(dragStartOffset - this.x);
          },
          onRelease() {
            dailyViewport.style.cursor = "";
          },
        })[0];

        return () => {
          draggable.kill();
          dailyDesktopTrigger = null;
        };
      });

      return () => {
        mm.revert();
        cleanups.forEach((cleanup) => cleanup());
      };
    },
    { scope: rootRef },
  );
}
