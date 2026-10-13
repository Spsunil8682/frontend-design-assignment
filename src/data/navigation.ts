export type NavLink = { label: string; href: string };

/** Primary navigation; each item scrolls to the closest matching section on the page. */
export const navLinks: NavLink[] = [
  { label: "Destinations", href: "#destinations" },
  { label: "Hotels", href: "#services" },
  { label: "Flights", href: "#book" },
  { label: "Bookings", href: "#testimonials" },
];

export const languages = [
  { code: "EN", label: "English" },
  { code: "FR", label: "Français" },
  { code: "ES", label: "Español" },
  { code: "HI", label: "हिन्दी" },
];
