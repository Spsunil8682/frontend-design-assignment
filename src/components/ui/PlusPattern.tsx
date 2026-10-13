"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useParallax } from "@/lib/useParallax";

/** Plus signs per column, top-aligned (matches the staggered grid in the design). */
const COLUMNS = [3, 4, 5, 5, 5];
const HIGHLIGHTS: Record<string, string> = {
  "0-0": "text-coral",
  "2-2": "text-violet",
};

type PlusPatternProps = {
  className?: string;
};

/** Decorative "+" grid that pops in, then drifts with a light parallax as the page scrolls. */
export function PlusPattern({ className = "" }: PlusPatternProps) {
  const ref = useRef<HTMLDivElement>(null);
  useParallax(ref, { from: { y: 60, rotate: -6 }, to: { y: -40, rotate: 0 } });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(el.querySelectorAll("span"), {
        opacity: 0,
        scale: 0,
        duration: 0.4,
        ease: "back.out(2)",
        stagger: 0.03,
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={ref} aria-hidden className={`pointer-events-none flex gap-5.5 select-none ${className}`}>
      {COLUMNS.map((rows, col) => (
        <div key={col} className="flex flex-col gap-2.25">
          {Array.from({ length: rows }, (_, row) => (
            <span
              key={row}
              className={`block h-6.5 text-[22px] leading-6.5 ${HIGHLIGHTS[`${col}-${row}`] ?? "text-line"}`}
            >
              +
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
