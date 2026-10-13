# Jadoo — Travel Agency Landing Page

A responsive, animated travel landing page built from the provided Figma design.

- **Live preview:** _add Vercel URL here_
- **Repository:** _add GitHub URL here_

## Tech stack

| | |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router) + React 19 + TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com); design tokens (colours, fonts, shadows) live in `src/app/globals.css` |
| Animation | [Motion](https://motion.dev) (Framer Motion) for entrances and micro-interactions; [GSAP](https://gsap.com) + ScrollTrigger for scroll-linked parallax |
| Fonts | Volkhov, Poppins, Open Sans via `next/font` (self-hosted, no layout shift) |

## Getting started

Requires **Node.js 18.18 or newer** (developed on Node 24).

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
```

## Project structure

```
src/
├── app/                 # layout (header + footer), page, global styles and design tokens
├── components/
│   ├── layout/          # Header (sticky nav + mobile menu), Footer
│   ├── sections/        # one folder per page section: hero, services, destinations,
│   │                    # book-trip, testimonials, partners, subscribe
│   ├── ui/              # reusable pieces: Container, SectionHeading, PlusPattern
│   └── providers/       # MotionProvider (global reduced-motion setting)
├── data/                # section content (cards, links, testimonials…) kept out of the markup
└── lib/                 # shared animation variants and the useParallax hook
public/images/           # assets exported from Figma, grouped by section
```

Content lives in `src/data/*`, so copy changes don't touch components.

## Implementation details

**Responsive design:** every section is built mobile-first and checked at 390px, 820px, 1024px and 1440px. Layouts that only exist for desktop in Figma (the stacked testimonial cards, the hero artwork, the trip cards) were adapted for tablet and mobile.

**Animations and interactions**
- Scroll-triggered reveals with staggered cards; the hero headline reveals line by line, and a brush stroke draws in under "enjoy".
- GSAP ScrollTrigger parallax on the hero artwork and the decorative shapes.
- Services and logos: a highlight card slides between items on hover (shared-layout animation).
- Testimonials: a stacked carousel controlled by arrows, dots or swipe.
- Subscribe: email validation with loading, success and error states; the paper-plane badge "flies" on success.
- Smaller touches: an animated progress bar, a like button with a pop, floating planes, hover lifts, and a sticky header that turns solid on scroll.
- Animations use only `transform` and `opacity`. All motion respects `prefers-reduced-motion`.

**Accessibility**
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) with labelled sections, and correct heading order.
- Everything interactive is a real `button` or `a` with a visible focus outline and an accessible name. Decorative images have empty `alt`.
- The mobile menu uses `aria-expanded` and closes on Esc. The carousel and form announce changes through `aria-live`. The progress bar uses `role="progressbar"`.

**Performance**
- `next/image` serves responsive AVIF/WebP images, and the hero image is preloaded. Photos exported from Figma were recompressed (for example, Europe went from 1.2 MB to 166 KB).
- The page is statically prerendered. The production build shows no console errors or warnings.

## Changes from the Figma design

- **Typos fixed:** "Desitnations", "Rome, Italty", "Affilates" and "Airlinefees".
- **Fonts:** Google Sans and Gilroy aren't freely licensed web fonts, so Poppins is used instead.
- **Book a trip:** the floating "Trip to rome" card covers part of the Greece card's text in Figma. It was moved up to overlap the photo instead, so no text is hidden.
- **Testimonials:** the design shows three dots but only two testimonials, so a **third placeholder testimonial** was added. People without a photo get an initials avatar.
- **Logos:** logos not under the highlight card are shown in greyscale, so the hover highlight stands out.

## Known limitations and next steps

- **Newsletter:** sign-up is simulated client-side, because there's no backend. Next step: connect a real provider (Mailchimp, Resend, Formspree) through a Next.js route handler.
- **Links:** nav items scroll to the nearest matching section. Footer links, Login and Sign up are `#` placeholders, because those pages aren't part of the design.
- **"Play Demo":** scrolls to the booking steps, because no demo video was provided.
- **With more time:**
  - Add end-to-end tests (Playwright) and visual regression tests per breakpoint.
  - Run a Lighthouse audit in CI.
  - Move content into a CMS.
  - Add a dark theme.
