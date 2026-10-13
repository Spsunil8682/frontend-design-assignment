"use client";

import Image from "next/image";
import { AnimatePresence, motion, type PanInfo, type Variants } from "motion/react";
import type { Testimonial } from "@/data/testimonials";
import { easeOutExpo } from "@/lib/motion";

type TestimonialStackProps = {
  current: Testimonial;
  next?: Testimonial;
  /** 1 when moving forward, -1 when moving back; drives the enter/exit direction. */
  direction: 1 | -1;
  onNext: () => void;
  onPrev: () => void;
};

const SWIPE_THRESHOLD = 60;

/** Forward: the new card rises from the "back card" slot. Back: it drops in from above. */
const frontCard: Variants = {
  enter: (dir: number) => (dir > 0 ? { opacity: 0, x: 50, y: 90, scale: 0.96 } : { opacity: 0, y: -60 }),
  center: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.55, ease: easeOutExpo } },
  exit: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? -60 : 90,
    x: dir > 0 ? 0 : 50,
    transition: { duration: 0.35, ease: "easeIn" },
  }),
};

function Avatar({ testimonial }: { testimonial: Testimonial }) {
  const { avatar, name } = testimonial;
  const base = "absolute -top-8.5 -left-6 size-17 rounded-full sm:-left-9.25";

  if (avatar) {
    return <Image src={avatar} alt="" width={68} height={68} className={`${base} object-cover`} />;
  }

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <span aria-hidden className={`${base} grid place-items-center bg-cream font-serif text-xl font-bold text-orange`}>
      {initials}
    </span>
  );
}

export function TestimonialStack({ current, next, direction, onNext, onPrev }: TestimonialStackProps) {
  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) onNext();
    else if (info.offset.x > SWIPE_THRESHOLD) onPrev();
  };

  return (
    <div className="relative mt-8.5 ml-6 pr-3 pb-19.25 sm:ml-9.25 sm:pr-12">
      {/* Peek of the next testimonial, sitting behind the active card */}
      <AnimatePresence initial={false}>
        {next && (
          <motion.div
            key={next.name}
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-22.5 right-0 bottom-0 left-6 rounded-[10px] border-2 border-snow bg-white shadow-card sm:left-12.5"
          >
            <div className="absolute bottom-5.5 left-8.5">
              <p className="text-lg leading-6.75 font-semibold text-muted">{next.name}</p>
              <p className="mt-1.5 text-sm leading-5.25 font-medium text-muted">{next.meta}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="popLayout" initial={false} custom={direction}>
        <motion.figure
          key={current.name}
          custom={direction}
          variants={frontCard}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.25}
          onDragEnd={handleDragEnd}
          className="relative min-h-61.25 cursor-grab rounded-[10px] bg-white px-6 pt-7 pb-8 shadow-card active:cursor-grabbing sm:px-8.5"
        >
          <Avatar testimonial={current} />
          <blockquote className="text-base leading-8 font-medium text-muted">
            <p>&ldquo;{current.quote}&rdquo;</p>
          </blockquote>
          <figcaption className="mt-8">
            <p className="text-lg leading-6.75 font-semibold text-muted">{current.name}</p>
            <p className="mt-1.5 text-sm leading-5.25 font-medium text-muted">{current.meta}</p>
          </figcaption>
        </motion.figure>
      </AnimatePresence>
    </div>
  );
}
