"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { appStores, footerColumns, socialLinks } from "@/data/footer";
import { fadeUp, staggerList } from "@/lib/motion";
import { Container } from "@/components/ui/Container";

const focusRing =
  "rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden pt-16 pb-10 sm:pt-20 lg:pt-24">
      {/* Soft lilac glow bleeding off the bottom-right corner */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-60 -bottom-72 -z-10 h-124 w-120 rounded-full bg-[#d5aee4]/70 blur-[120px] sm:-right-40"
      />

      <Container>
        <motion.div
          {...staggerList}
          className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-[207px_repeat(3,minmax(0,1fr))_auto] lg:gap-x-10 xl:gap-x-16"
        >
          <motion.div variants={fadeUp} className="col-span-2 sm:col-span-3 lg:col-span-1">
            <p className="text-[2.75rem] leading-16.5 font-medium text-[#181e4b]">Jadoo.</p>
            <p className="mt-4 max-w-52 text-[13px] leading-4 font-medium text-muted">
              Book your trip in minute, get full Control for much longer.
            </p>
          </motion.div>

          {footerColumns.map((column) => (
            <motion.nav key={column.title} variants={fadeUp} aria-label={column.title} className="lg:pt-5">
              <h2 className="text-[21px] leading-6.5 font-bold text-coal">{column.title}</h2>
              <ul className="mt-6 flex flex-col gap-3 lg:mt-8.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`group relative inline-block text-lg leading-5.5 font-medium text-muted transition-colors duration-200 hover:text-orange ${focusRing}`}
                    >
                      {link.label}
                      <span
                        aria-hidden
                        className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-orange transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          ))}

          <motion.div variants={fadeUp} className="col-span-2 sm:col-span-3 lg:col-span-1 lg:pt-5">
            <ul className="-m-2.5 flex items-center" aria-label="Social media">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="block rounded-full transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-105 focus-visible:outline-2 focus-visible:-outline-offset-8 focus-visible:outline-orange motion-reduce:transition-none"
                  >
                    <Image src={social.icon} alt="" width={social.size} height={social.size} />
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xl leading-6.25 font-medium tracking-[0.005em] text-muted">Discover our app</p>
            <ul className="mt-4 flex gap-3" aria-label="Download the app">
              {appStores.map((store) => (
                <li key={store.label}>
                  <a
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={store.label}
                    className="block rounded-full transition-transform duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange motion-reduce:transition-none"
                  >
                    <Image src={store.badge} alt="" width={store.width} height={store.height} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <p className="mt-16 text-center text-sm leading-4.25 font-medium text-muted lg:mt-20">
          All rights reserved &copy; jadoo.co
        </p>
      </Container>
    </footer>
  );
}
