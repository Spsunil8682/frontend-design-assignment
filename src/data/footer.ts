export type FooterLink = { label: string; href: string };
export type FooterColumn = { title: string; links: FooterLink[] };

// Pages behind these links don't exist yet, so they point to "#" placeholders.
export const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Mobile", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Help/FAQ", href: "#" },
      { label: "Press", href: "#" },
      { label: "Affiliates", href: "#" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Airline fees", href: "#" },
      { label: "Airline", href: "#" },
      { label: "Low fare tips", href: "#" },
    ],
  },
];

export const socialLinks = [
  { label: "Jadoo on Facebook", href: "https://www.facebook.com", icon: "/images/footer/facebook.svg", size: 61 },
  { label: "Jadoo on Instagram", href: "https://www.instagram.com", icon: "/images/footer/instagram.svg", size: 65 },
  { label: "Jadoo on Twitter", href: "https://twitter.com", icon: "/images/footer/twitter.svg", size: 61 },
];

export const appStores = [
  {
    label: "Get it on Google Play",
    href: "https://play.google.com/store",
    badge: "/images/footer/google-play.svg",
    width: 107,
    height: 35,
  },
  {
    label: "Available on the Apple App Store",
    href: "https://www.apple.com/app-store/",
    badge: "/images/footer/app-store.svg",
    width: 100,
    height: 35,
  },
];
