"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, type Variants } from "motion/react";
import { easeOutExpo } from "@/lib/motion";
import { useParallax } from "@/lib/useParallax";
import { Container } from "@/components/ui/Container";

const HEADING_LINES = ["Travel, enjoy", "and live a new", "and full life"];

const intro: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutExpo } },
};

/** Each heading line slides up from behind its own mask. */
const lineReveal: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.9, ease: easeOutExpo } },
};

function Plane({ src, className, delay }: { src: string; className: string; delay: number }) {
  return (
    <motion.div
      aria-hidden
      className={`absolute ${className}`}
      initial={{ opacity: 0, x: -80, y: 60 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1.2, delay, ease: easeOutExpo }}
    >
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 5, delay: delay + 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src={src} alt="" width={113} height={72} className="h-auto w-full" />
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const artRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  useParallax(artRef, { from: { y: 0 }, to: { y: 90 }, start: "top top", end: "bottom top" });
  useParallax(blobRef, { from: { y: 0, rotate: 0 }, to: { y: 160, rotate: 4 }, start: "top top", end: "bottom top" });

  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-28 pb-12 lg:pt-0 lg:pb-0">
      {/* Faint lilac glow bleeding in from the top-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-17 -left-98.5 -z-10 h-124 w-120 rounded-full bg-[#d5aee4]/30 blur-[120px]"
      />

      <Container className="relative lg:h-200 xl:h-225">
        <motion.div
          variants={intro}
          initial="hidden"
          animate="visible"
          className="relative z-10 lg:absolute lg:top-52.5 lg:left-8 lg:max-w-[49%]"
        >
          <motion.p variants={rise} className="text-base leading-7.5 font-bold text-orange uppercase sm:text-xl">
            Best Destinations around the world
          </motion.p>

          <h1
            id="hero-title"
            className="relative isolate mt-4 font-serif text-[2.75rem] leading-[1.06] font-bold tracking-[-0.04em] text-[#181e4b] sm:text-[4rem] lg:mt-6 lg:text-[4.25rem] xl:text-[5.25rem]"
          >
            {HEADING_LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <motion.span variants={lineReveal} className="block">
                  {i === 0 ? (
                    <>
                      Travel,{" "}
                      <span className="relative isolate inline-block">
                        enjoy
                        {/* Brush stroke tied to the word, sized in em so it tracks the font size */}
                        <motion.span
                          aria-hidden
                          className="absolute top-[0.84em] -right-[0.3em] left-[-0.04em] -z-10 h-[0.16em] origin-left bg-[url('/images/hero/underline.svg')] bg-size-[100%_100%] bg-no-repeat"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.8, delay: 1, ease: easeOutExpo }}
                        />
                      </span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p variants={rise} className="mt-6 max-w-120 text-base leading-7.5 font-medium text-muted lg:mt-8">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.
            Park gate sell they west hard for the.
          </motion.p>

          <motion.div variants={rise} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-5 sm:gap-x-11 lg:mt-10">
            <motion.a
              href="#services"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-[10px] bg-[#f1a501] px-5 py-4.5 sm:px-6.5 text-lg leading-5.75 font-medium text-white shadow-[0_20px_35px_rgb(241_165_1/0.15)] transition-shadow hover:shadow-[0_24px_40px_rgb(241_165_1/0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange"
            >
              Find out more
            </motion.a>

            <a
              href="#book"
              className="group flex items-center gap-4 rounded-full sm:gap-5 text-[17px] leading-6.5 font-medium text-[#686d77] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange"
            >
              <span className="relative grid size-13 place-items-center rounded-full bg-orange shadow-[0_15px_30px_rgb(223_105_81/0.3)] transition-transform duration-300 group-hover:scale-110">
                {/* Pulsing ring draws the eye without moving the layout */}
                <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-orange/40 motion-reduce:hidden" />
                <svg aria-hidden width="15" height="16" viewBox="0 0 15 16" className="relative ml-1 fill-white">
                  <path d="M14 8 1.25 15.5V.5z" />
                </svg>
              </span>
              Play Demo
            </a>
          </motion.div>
        </motion.div>

        {/* Traveller artwork: cream backdrop, photo and planes, positioned from the Figma frame */}
        <div
          ref={artRef}
          className="relative mx-auto mt-16 w-full max-w-140 lg:absolute lg:top-24.5 lg:left-[calc(38%+2rem)] lg:mt-0 lg:w-[69%] lg:max-w-191.25"
        >
          <motion.div
            className="relative aspect-784/764"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: easeOutExpo }}
          >
            <div
              ref={blobRef}
              aria-hidden
              className="absolute top-[-33%] left-[21.8%] -z-10 h-[114%] w-[97.7%]"
            >
              <Image src="/images/hero/decore.svg" alt="" fill sizes="767px" className="object-contain object-top-left" />
            </div>

            <Image
              src="/images/hero/traveller.png"
              alt="Smiling traveller with a backpack, sitting on an orange suitcase and holding her phone and boarding pass"
              width={765}
              height={764}
              priority
              sizes="(min-width: 1024px) 765px, 90vw"
              className="absolute top-0 left-0 h-auto w-[97.6%]"
            />

            <Plane src="/images/hero/plane-left.svg" className="top-[15.8%] left-[21.9%] w-[12.6%]" delay={0.9} />
            <Plane src="/images/hero/plane-right.svg" className="top-[21.3%] left-[79.6%] w-[10.2%]" delay={1.1} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
