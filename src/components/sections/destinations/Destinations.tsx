"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "motion/react";
import { destinations } from "@/data/destinations";
import { staggerList } from "@/lib/motion";
import { useParallax } from "@/lib/useParallax";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DestinationCard } from "./DestinationCard";

export function Destinations() {
  const decorRef = useRef<HTMLDivElement>(null);
  useParallax(decorRef, { from: { y: 80, rotate: 8 }, to: { y: -60, rotate: -4 } });

  return (
    <section
      id="destinations"
      aria-labelledby="destinations-title"
      className="relative overflow-x-clip py-20 sm:py-24 lg:py-28"
    >
      <Container className="relative">
        <SectionHeading id="destinations-title" eyebrow="Top Selling" title="Top Destinations" />

        <div className="relative mt-12 lg:mt-15">
          {/* Swirl peeking out from behind the last card */}
          <div
            ref={decorRef}
            aria-hidden
            className="absolute top-39.5 -right-4 hidden lg:block"
          >
            <Image src="/images/destinations/decore.svg" alt="" width={97} height={253} />
          </div>

          <motion.ul
            {...staggerList}
            className="relative grid grid-cols-1 justify-items-center gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-[repeat(3,minmax(0,315px))] lg:justify-center lg:gap-x-9"
          >
            {destinations.map((destination) => (
              <DestinationCard key={destination.name} destination={destination} />
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
