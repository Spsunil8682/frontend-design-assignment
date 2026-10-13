"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import type { BookingStep } from "@/data/bookingSteps";
import { easeOutExpo } from "@/lib/motion";

const slideIn: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

type BookingStepItemProps = {
  step: BookingStep;
};

export function BookingStepItem({ step }: BookingStepItemProps) {
  const { title, description, icon, tileClass } = step;

  return (
    <motion.li variants={slideIn} className="group flex gap-5">
      <span
        aria-hidden
        className={`mt-1 grid size-12 shrink-0 place-items-center rounded-[13px] transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 motion-reduce:transition-none ${tileClass}`}
      >
        <Image src={icon.src} alt="" width={icon.width} height={icon.height} />
      </span>
      <div className="max-w-82">
        <h3 className="text-base leading-5 font-bold text-muted">{title}</h3>
        <p className="mt-1 text-base leading-5 text-muted">{description}</p>
      </div>
    </motion.li>
  );
}
