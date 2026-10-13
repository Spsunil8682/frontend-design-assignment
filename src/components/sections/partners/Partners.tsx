"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { partners } from "@/data/partners";
import { fadeUp, staggerList } from "@/lib/motion";
import { Container } from "@/components/ui/Container";

/** Expedia sits on the white card by default, as in the design. */
const DEFAULT_ACTIVE = 2;

export function Partners() {
  const [active, setActive] = useState(DEFAULT_ACTIVE);

  return (
    <section id="partners" aria-labelledby="partners-title" className="py-12 sm:py-16">
      <h2 id="partners-title" className="sr-only">
        Our travel partners
      </h2>
      <Container>
        <motion.ul
          {...staggerList}
          onPointerLeave={() => setActive(DEFAULT_ACTIVE)}
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-10 sm:gap-y-4 lg:flex-nowrap lg:justify-between lg:gap-x-4"
        >
          {partners.map((partner, index) => (
            <motion.li
              key={partner.name}
              variants={fadeUp}
              onPointerEnter={() => setActive(index)}
              className="relative isolate flex h-18 items-center justify-center px-3 sm:h-32 sm:px-5 lg:h-40.5"
            >
              {/* White card glides to whichever logo is hovered */}
              {active === index && (
                <motion.span
                  layoutId="partner-card"
                  aria-hidden
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  className="absolute inset-x-0 top-1/2 -z-10 -mt-7 h-14 rounded-[10px] bg-white shadow-card sm:-mt-10.75 sm:h-21.5 lg:-inset-x-5"
                />
              )}
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className={`h-auto ${partner.sizeClass} transition-[filter,opacity] duration-300 ${
                  active === index ? "" : "opacity-70 grayscale"
                }`}
              />
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
