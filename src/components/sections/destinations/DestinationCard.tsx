"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Destination } from "@/data/destinations";
import { fadeUp } from "@/lib/motion";

type DestinationCardProps = {
  destination: Destination;
};

export function DestinationCard({ destination }: DestinationCardProps) {
  const { name, price, priceLabel, duration, image, imageAlt } = destination;

  // In the 2-column tablet grid, a lone last card spans both columns so it centers.
  return (
    <motion.li variants={fadeUp} className="w-full max-w-78.75 sm:max-lg:last:odd:col-span-2">
      <article className="group relative h-114.25 overflow-hidden rounded-3xl bg-white shadow-card transition-transform duration-500 ease-out hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 315px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
        />

        <div className="absolute inset-x-0 bottom-0 flex h-32.5 flex-col justify-center gap-5 rounded-b-3xl bg-white px-5">
          <div className="flex items-center justify-between gap-4 text-lg leading-5.5 font-medium text-muted">
            <h3>{name}</h3>
            <p>
              <span aria-hidden>{price}</span>
              <span className="sr-only">{priceLabel}</span>
            </p>
          </div>
          <p className="flex items-center gap-3.5 text-base leading-5 font-medium text-muted">
            <Image
              src="/images/destinations/navigation.svg"
              alt=""
              width={17}
              height={17}
              className="transition-transform duration-500 ease-out group-hover:rotate-45"
            />
            {duration}
          </p>
        </div>
      </article>
    </motion.li>
  );
}
