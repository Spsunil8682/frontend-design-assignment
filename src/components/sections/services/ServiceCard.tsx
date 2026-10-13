"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Service } from "@/data/services";
import { fadeUp } from "@/lib/motion";

type ServiceCardProps = {
  service: Service;
  isActive: boolean;
  onActivate: () => void;
};

const highlightSpring = { type: "spring", stiffness: 380, damping: 34 } as const;

export function ServiceCard({ service, isActive, onActivate }: ServiceCardProps) {
  const { title, description, icon, accent } = service;

  return (
    <motion.li
      variants={fadeUp}
      onPointerEnter={onActivate}
      className="group relative isolate flex w-full max-w-66.75 flex-col items-center px-7 pt-10 pb-11 text-center"
    >
      {/* The white card + orange corner slide between cards via shared layout ids */}
      {isActive && (
        <>
          <motion.span
            layoutId="service-accent"
            transition={highlightSpring}
            aria-hidden
            className="absolute -bottom-8.25 -left-8.75 -z-20 size-25 rounded-[30px_0_10px_0] bg-orange"
          />
          <motion.span
            layoutId="service-card"
            transition={highlightSpring}
            aria-hidden
            className="absolute inset-0 -z-10 rounded-[36px] bg-white shadow-card"
          />
        </>
      )}

      <div className="flex h-19.5 items-center justify-center">
        <div className="relative transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
          <span
            aria-hidden
            className="absolute -z-10 h-12.25 w-12.5 rounded-[18px_5px_10px_5px] bg-cream"
            style={{ left: accent.x, top: accent.y }}
          />
          <Image src={icon.src} alt="" width={icon.width} height={icon.height} />
        </div>
      </div>

      <h3 className="mt-8.5 font-open text-xl leading-[1.35] font-semibold text-ink">{title}</h3>
      <p className="mt-4 max-w-47.5 text-base leading-relaxed font-medium text-muted">{description}</p>
    </motion.li>
  );
}
