"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { easeOutExpo } from "@/lib/motion";

const PROGRESS = 40;

/** Floating status card showing progress on a trip that's under way. */
export function OngoingTripCard({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`w-full max-w-65.75 ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
    >
      <article
        aria-label="Ongoing trip to Rome"
        className="flex gap-3 rounded-[18px] bg-white px-5 pt-4 pb-6 shadow-card"
      >
        <Image
          src="/images/book-trip/rome-avatar.png"
          alt=""
          width={50}
          height={50}
          className="size-12.5 shrink-0 rounded-full shadow-[1px_9px_6px_rgb(0_0_0/0.08)]"
        />
        <div className="min-w-0 flex-1">
          <p className="text-sm leading-4.25 font-medium tracking-tight text-slate">Ongoing</p>
          <h3 className="mt-1.5 text-lg leading-5.5 font-medium tracking-tight text-coal">Trip to rome</h3>
          <p className="mt-3.5 text-sm leading-4.25 font-bold tracking-tight text-coal">
            {PROGRESS}% completed
          </p>
          <div
            role="progressbar"
            aria-valuenow={PROGRESS}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Trip progress"
            className="mt-2.5 h-1.25 w-full max-w-39 overflow-hidden rounded-full bg-mist"
          >
            <motion.div
              className="h-full rounded-full bg-lavender"
              initial={{ width: 0 }}
              whileInView={{ width: `${PROGRESS}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.4, ease: easeOutExpo }}
            />
          </div>
        </div>
      </article>
    </motion.div>
  );
}
