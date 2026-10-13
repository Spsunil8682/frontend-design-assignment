import type { Transition, Variants } from "motion/react";

export const easeOutExpo: Transition["ease"] = [0.22, 1, 0.36, 1];

/** Child reveal: fade + rise. Parent lists drive it with `initial="hidden" whileInView="visible"`. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

/** Shared props for a list that staggers its `fadeUp` children into view once. */
export const staggerList = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.25 },
  transition: { staggerChildren: 0.12 },
} as const;
