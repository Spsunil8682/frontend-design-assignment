export type BookingStep = {
  title: string;
  description: string;
  icon: { src: string; width: number; height: number };
  /** Tailwind background class for the rounded icon tile. */
  tileClass: string;
};

export const bookingSteps: BookingStep[] = [
  {
    title: "Choose Destination",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    icon: { src: "/images/book-trip/selection.svg", width: 22, height: 22 },
    tileClass: "bg-mustard",
  },
  {
    title: "Make Payment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    icon: { src: "/images/book-trip/water-sport.svg", width: 23, height: 18 },
    tileClass: "bg-flame",
  },
  {
    title: "Reach Airport on Selected Date",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    icon: { src: "/images/book-trip/taxi.svg", width: 23, height: 19 },
    tileClass: "bg-teal",
  },
];
