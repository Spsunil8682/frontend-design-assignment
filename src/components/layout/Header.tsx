"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { languages, navLinks } from "@/data/navigation";
import { easeOutExpo } from "@/lib/motion";
import { Container } from "@/components/ui/Container";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange";

function LanguageSelect({ id }: { id: string }) {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        Language
      </label>
      <select
        id={id}
        defaultValue="EN"
        className={`cursor-pointer appearance-none rounded-sm bg-transparent py-1 pr-5 text-[17px] leading-5.5 font-medium text-[#212832] ${focusRing}`}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} aria-label={lang.label}>
            {lang.code}
          </option>
        ))}
      </select>
      <Image
        src="/images/hero/chevron-down.svg"
        alt=""
        width={9}
        height={4}
        className="pointer-events-none absolute top-1/2 right-0.5 -translate-y-1/2"
      />
    </div>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  const bar = "absolute left-0 h-0.5 w-6 rounded-full bg-[#212832] transition-transform duration-300";
  return (
    <span aria-hidden className="relative block h-4 w-6">
      <span className={`${bar} top-0 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
      <span className={`${bar} top-[7px] transition-opacity ${open ? "opacity-0" : ""}`} />
      <span className={`${bar} top-[14px] ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const desktopLangId = useId();
  const mobileLangId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: easeOutExpo }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-300 ${
        solid ? "bg-white/85 py-4 shadow-[0_8px_30px_rgb(24_30_75/0.06)] backdrop-blur-md" : "py-6 lg:py-10"
      }`}
    >
      <Container className="flex items-center justify-between gap-6">
        <a href="#top" aria-label="Jadoo home" className={`shrink-0 rounded-sm ${focusRing}`}>
          <Image src="/images/hero/logo.svg" alt="" width={115} height={34} priority />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-10 lg:flex xl:gap-14">
          <ul className="flex items-center gap-8 xl:gap-14">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`group relative rounded-sm text-[17px] leading-5.5 text-[#212832] transition-colors hover:text-orange ${focusRing}`}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className="absolute -bottom-1.5 left-1/2 size-1.5 -translate-x-1/2 scale-0 rounded-full bg-orange transition-transform duration-300 group-hover:scale-100"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 xl:gap-10">
            <a href="#" className={`rounded-sm text-[17px] leading-5.5 font-medium text-[#212832] transition-colors hover:text-orange ${focusRing}`}>
              Login
            </a>
            <a
              href="#"
              className={`rounded-[5px] border border-[#212832] px-5 py-2 text-[17px] leading-5.5 font-medium text-[#212832] transition-colors duration-200 hover:bg-[#212832] hover:text-white ${focusRing}`}
            >
              Sign up
            </a>
            <LanguageSelect id={desktopLangId} />
          </div>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={`-m-2 grid size-11 cursor-pointer place-items-center rounded-md lg:hidden ${focusRing}`}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id={menuId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOutExpo }}
            className="overflow-hidden lg:hidden"
          >
            <Container>
              <nav aria-label="Mobile" className="pt-4 pb-2">
                <ul className="flex flex-col">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`block rounded-sm border-b border-line py-3.5 text-lg text-[#212832] ${focusRing}`}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-4">
                  <a href="#" className={`flex-1 rounded-[5px] py-2.5 text-center font-medium text-[#212832] ${focusRing}`}>
                    Login
                  </a>
                  <a
                    href="#"
                    className={`flex-1 rounded-[5px] border border-[#212832] py-2.5 text-center font-medium text-[#212832] ${focusRing}`}
                  >
                    Sign up
                  </a>
                  <LanguageSelect id={mobileLangId} />
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
