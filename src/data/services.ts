export type Service = {
  title: string;
  description: string;
  icon: {
    src: string;
    width: number;
    height: number;
  };
  /** Position of the cream accent square, relative to the icon's top-left corner (px). */
  accent: { x: number; y: number };
};

export const services: Service[] = [
  {
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: { src: "/images/services/satellite-dish.svg", width: 67, height: 70 },
    accent: { x: 42, y: 29 },
  },
  {
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    icon: { src: "/images/services/plane.svg", width: 113, height: 72 },
    accent: { x: 23, y: -1 },
  },
  {
    title: "Local Events",
    description: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    icon: { src: "/images/services/microphone.png", width: 40, height: 69 },
    accent: { x: 17, y: -6 },
  },
  {
    title: "Customization",
    description: "We deliver outsourced aviation services for military customers",
    icon: { src: "/images/services/power-supply.svg", width: 50, height: 50 },
    accent: { x: 27, y: 17 },
  },
];
