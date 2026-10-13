"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

const ACTIONS = [
  { label: "Eco-friendly trip details", icon: "/images/book-trip/leaf.svg" },
  { label: "View route on map", icon: "/images/book-trip/map.svg" },
  { label: "Share this trip", icon: "/images/book-trip/send.svg" },
];

/** Preview card for an upcoming trip, with quick actions and a like toggle. */
export function TripCard({ className = "" }: { className?: string }) {
  const [liked, setLiked] = useState(true);

  return (
    <article
      aria-labelledby="trip-greece-title"
      className={`rounded-[26px] bg-white px-6 pt-5 pb-8 shadow-card transition-transform duration-500 ease-out hover:-translate-y-1.5 motion-reduce:transition-none ${className}`}
    >
      <div className="relative aspect-321/161 overflow-hidden rounded-3xl">
        <Image
          src="/images/book-trip/greece.jpg"
          alt="A traveller in a red dress overlooking the blue-domed churches of Santorini, Greece"
          fill
          sizes="(min-width: 640px) 321px, 85vw"
          className="object-cover"
        />
      </div>

      <h3 id="trip-greece-title" className="mt-6 text-lg leading-5.5 font-medium tracking-[0.015em] text-coal">
        Trip To Greece
      </h3>
      <p className="mt-3.5 flex items-center gap-3 text-base leading-5 font-medium tracking-tight text-slate">
        <span>14-29 June</span>
        <span aria-hidden className="h-4 w-px bg-slate" />
        <span>by Robbin joseph</span>
      </p>

      <ul className="mt-5 flex gap-4" aria-label="Trip actions">
        {ACTIONS.map(({ label, icon }) => (
          <li key={label}>
            <button
              type="button"
              aria-label={label}
              className="grid size-9 cursor-pointer place-items-center rounded-full bg-mist transition-colors duration-200 hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              <Image src={icon} alt="" width={14} height={14} />
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex items-center justify-between">
        <p className="flex items-center gap-3.5 text-base leading-5 font-medium tracking-tight text-slate">
          <Image src="/images/book-trip/building.svg" alt="" width={16} height={16} />
          24 people going
        </p>
        <motion.button
          type="button"
          aria-pressed={liked}
          aria-label={liked ? "Remove from favourites" : "Add to favourites"}
          onClick={() => setLiked((v) => !v)}
          whileTap={{ scale: 0.8 }}
          className="-m-2 cursor-pointer rounded-full p-2 focus-visible:outline-2 focus-visible:outline-orange"
        >
          <motion.span
            key={String(liked)}
            initial={{ scale: liked ? 0.4 : 1 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 12 }}
            className={`block transition-[filter,opacity] duration-300 ${liked ? "" : "opacity-40 grayscale"}`}
          >
            <Image src="/images/book-trip/heart.svg" alt="" width={20} height={19} />
          </motion.span>
        </motion.button>
      </div>
    </article>
  );
}
