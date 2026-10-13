"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { services } from "@/data/services";
import { staggerList } from "@/lib/motion";
import { Container } from "@/components/ui/Container";
import { PlusPattern } from "@/components/ui/PlusPattern";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "./ServiceCard";

/** "Best Flights" is highlighted by default, as in the design. */
const DEFAULT_ACTIVE = 1;

export function Services() {
  const [active, setActive] = useState(DEFAULT_ACTIVE);

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative overflow-x-clip py-20 sm:py-24 lg:py-28"
    >
      <Container className="relative">
        <PlusPattern className="absolute -top-8 right-0 hidden lg:flex xl:-right-10" />

        <SectionHeading id="services-title" eyebrow="CATEGORY" title="We Offer Best Services" />

        <motion.ul
          {...staggerList}
          className="mt-12 grid grid-cols-1 justify-items-center gap-x-4 gap-y-6 sm:grid-cols-2 sm:gap-y-14 lg:mt-16 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              isActive={active === index}
              onActivate={() => setActive(index)}
            />
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
