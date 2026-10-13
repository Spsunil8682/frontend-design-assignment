"use client";

import { motion } from "motion/react";
import { easeOutExpo } from "@/lib/motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  id?: string;
  align?: "center" | "left";
  className?: string;
};

/** Small eyebrow + large serif title, revealed on scroll. */
export function SectionHeading({
  eyebrow,
  title,
  id,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <motion.div
      className={`${alignment} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: easeOutExpo }}
    >
      <p className="text-base font-semibold text-muted sm:text-lg">{eyebrow}</p>
      <h2
        id={id}
        className="mt-2 font-serif text-[2rem] leading-tight font-bold text-navy sm:text-[2.5rem] lg:text-[3.125rem] lg:leading-[1.28]"
      >
        {title}
      </h2>
    </motion.div>
  );
}
