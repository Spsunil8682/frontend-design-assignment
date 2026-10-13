"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ParallaxOptions = {
  from: gsap.TweenVars;
  to: gsap.TweenVars;
  /** ScrollTrigger range; defaults to the element's full pass through the viewport. */
  start?: string;
  end?: string;
};

/**
 * Scrubs an element between two states while it crosses the viewport.
 * Skipped entirely for users who prefer reduced motion.
 */
export function useParallax(
  ref: RefObject<HTMLElement | null>,
  { from, to, start = "top bottom", end = "bottom top" }: ParallaxOptions,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(el, from, {
        ...to,
        ease: "none",
        scrollTrigger: { trigger: el, start, end, scrub: true },
      });
    });

    return () => mm.revert();
    // Tween values are static per call site; re-running on identity change would restart the tween.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}
