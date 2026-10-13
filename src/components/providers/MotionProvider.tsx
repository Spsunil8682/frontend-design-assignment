"use client";

import { MotionConfig } from "motion/react";

/** Makes every Motion animation honour the user's reduced-motion setting. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
