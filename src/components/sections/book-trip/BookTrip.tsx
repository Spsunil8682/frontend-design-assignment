"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { bookingSteps } from "@/data/bookingSteps";
import { easeOutExpo, staggerList } from "@/lib/motion";
import { useParallax } from "@/lib/useParallax";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookingStepItem } from "./BookingStepItem";
import { OngoingTripCard } from "./OngoingTripCard";
import { TripCard } from "./TripCard";

export function BookTrip() {
  const glowRef = useRef<HTMLDivElement>(null);
  useParallax(glowRef, { from: { y: 60, scale: 0.9 }, to: { y: -60, scale: 1.1 } });

  return (
    <section
      id="book"
      aria-labelledby="book-title"
      className="relative overflow-x-clip py-20 sm:py-24 lg:py-28"
    >
      <Container className="grid items-center gap-x-16 gap-y-16 lg:grid-cols-[minmax(0,1fr)_485px]">
        <div>
          <SectionHeading
            id="book-title"
            align="left"
            eyebrow="Easy and Fast"
            title="Book your next trip in 3 easy steps"
            className="max-w-128"
          />

          <motion.ol {...staggerList} className="mt-10 flex flex-col gap-10 lg:mt-8 lg:gap-12">
            {bookingSteps.map((step) => (
              <BookingStepItem key={step.title} step={step} />
            ))}
          </motion.ol>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-121.25 sm:h-114.75"
          initial={{ opacity: 0, y: 48, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
        >
          {/* Soft blue glow behind the cards */}
          <div
            ref={glowRef}
            aria-hidden
            className="absolute top-0 left-1/2 -z-10 h-92 w-88.5 -translate-x-1/2 rounded-full bg-sky/30 blur-[100px] sm:left-15 sm:translate-x-0"
          />

          <div className="sm:absolute sm:top-14.75 sm:left-0 sm:w-92.5">
            <TripCard />
          </div>
          {/* Overlaps the photo corner rather than the trip details, so no text is hidden */}
          <OngoingTripCard className="mt-6 ml-auto sm:absolute sm:top-40 sm:left-55.5 sm:mt-0" />
        </motion.div>
      </Container>
    </section>
  );
}
