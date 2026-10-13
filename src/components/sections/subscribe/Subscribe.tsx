"use client";

import Image from "next/image";
import { motion, useAnimationControls } from "motion/react";
import { easeOutExpo } from "@/lib/motion";
import { Container } from "@/components/ui/Container";
import { PlusPattern } from "@/components/ui/PlusPattern";
import { SubscribeForm } from "./SubscribeForm";

type Ring = [cx: number, cy: number, r: number];

/** Ring geometry from the Figma mask groups, in each corner SVG's own coordinates. */
const TOP_RIGHT_RINGS: Ring[] = [
  [204.5, 125.5, 142.5],
  [213.5, 137.5, 129.5],
  [219.5, 149.5, 121.5],
  [226, 161, 113],
  [231, 168, 103],
  [239.5, 178.5, 92.5],
];
const BOTTOM_LEFT_RINGS: Ring[] = [
  [222.5, 280.5, 194.5],
  [205, 293.5, 177],
  [189, 302, 166],
  [173, 309.5, 154],
  [163, 318, 141],
  [149, 328, 126],
];

function Rings({ rings, width, height, className }: { rings: Ring[]; width: number; height: number; className: string }) {
  return (
    <svg
      aria-hidden
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className={`pointer-events-none absolute ${className}`}
    >
      {rings.map(([cx, cy, r]) => (
        <circle key={r} cx={cx} cy={cy} r={r} stroke="var(--color-violet)" strokeOpacity={0.14} />
      ))}
    </svg>
  );
}

export function Subscribe() {
  const badge = useAnimationControls();

  // The paper plane "sends" itself, then glides back into place.
  const flyBadge = async () => {
    await badge.start({ x: 120, y: -120, rotate: 20, opacity: 0, transition: { duration: 0.6, ease: "easeIn" } });
    badge.set({ x: -40, y: 40, rotate: -10 });
    await badge.start({ x: 0, y: 0, rotate: 0, opacity: 1, transition: { duration: 0.6, ease: easeOutExpo } });
  };

  return (
    <section id="subscribe" aria-labelledby="subscribe-title" className="relative overflow-x-clip py-16 sm:py-20 lg:py-24">
      <Container className="relative">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
        >
          <div className="relative overflow-hidden rounded-[20px] rounded-tl-[64px] bg-[#dfd7f9]/20 px-5 pt-16 pb-10 sm:px-12 sm:pt-20 lg:rounded-tl-[129px] lg:pt-20 lg:pb-16">
            <Rings rings={TOP_RIGHT_RINGS} width={264} height={352} className="top-0 right-0 hidden sm:block" />
            <Rings rings={BOTTOM_LEFT_RINGS} width={393} height={361} className="bottom-0 left-0" />

            <h2
              id="subscribe-title"
              className="relative mx-auto max-w-215 text-center text-xl leading-normal font-semibold text-muted sm:text-[1.625rem] lg:text-[2.0625rem] lg:leading-13.5"
            >
              Subscribe to get information, latest news and other interesting offers about Jadoo
            </h2>

            <div className="relative">
              <SubscribeForm onSuccess={flyBadge} />
            </div>
          </div>

          {/* Send badge overlapping the panel's top-right corner */}
          <motion.div
            aria-hidden
            className="absolute -top-3.25 -right-2 sm:-right-5"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
          >
            <motion.div animate={badge}>
              <Image src="/images/subscribe/send-badge.svg" alt="" width={70} height={70} className="size-14 sm:size-17.5" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mirrored "+" grid peeking out past the bottom-right corner */}
        <div className="pointer-events-none absolute -right-2 -bottom-16 hidden -scale-x-100 lg:block xl:-right-24">
          <PlusPattern />
        </div>
      </Container>
    </section>
  );
}
