"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { testimonials } from "@/data/testimonials";
import { easeOutExpo } from "@/lib/motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialStack } from "./TestimonialStack";

function Chevron({ up }: { up?: boolean }) {
  return (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden className={up ? "" : "rotate-180"}>
      <path d="M1 7l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const arrowButton =
  "grid size-10 cursor-pointer place-items-center rounded-full text-plum transition-colors duration-200 hover:bg-mist disabled:cursor-not-allowed disabled:text-haze disabled:hover:bg-transparent focus-visible:outline-2 focus-visible:outline-orange";

export function Testimonials() {
  const [[index, direction], setState] = useState<[number, 1 | -1]>([0, 1]);
  const last = testimonials.length - 1;

  const goTo = (target: number) => {
    if (target < 0 || target > last || target === index) return;
    setState([target, target > index ? 1 : -1]);
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="relative overflow-x-clip py-20 sm:py-24 lg:py-28"
    >
      <Container className="grid items-start gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,620px)]">
        <div className="flex flex-col">
          <SectionHeading
            id="testimonials-title"
            align="left"
            eyebrow="Testimonials"
            title="What people say about Us."
            className="max-w-104"
          />

          {/* Dots double as direct slide navigation */}
          <div className="mt-10 flex gap-3.5 lg:mt-20" role="group" aria-label="Choose testimonial">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show testimonial ${i + 1} of ${testimonials.length}: ${t.name}`}
                aria-current={i === index}
                className="group grid size-6 cursor-pointer place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-orange"
              >
                <span
                  className={`block size-3 rounded-full transition-[background-color,transform] duration-300 group-hover:scale-125 ${
                    i === index ? "bg-gunmetal" : "bg-line"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <motion.div
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
          className="flex items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
        >
          <div className="min-w-0 flex-1" aria-live="polite">
            <TestimonialStack
              current={testimonials[index]}
              next={testimonials[index + 1]}
              direction={direction}
              onNext={() => goTo(index + 1)}
              onPrev={() => goTo(index - 1)}
            />
          </div>

          <div className="hidden shrink-0 flex-col gap-6 sm:flex">
            <button type="button" className={arrowButton} onClick={() => goTo(index - 1)} disabled={index === 0} aria-label="Previous testimonial">
              <Chevron up />
            </button>
            <button type="button" className={arrowButton} onClick={() => goTo(index + 1)} disabled={index === last} aria-label="Next testimonial">
              <Chevron />
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
