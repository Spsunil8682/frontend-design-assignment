export type Partner = {
  name: string;
  logo: string;
  /** Intrinsic display size from the design (px); the logos carry their own padding. */
  width: number;
  height: number;
  /** Responsive width classes so the row scales down on smaller screens. */
  sizeClass: string;
};

export const partners: Partner[] = [
  { name: "Axon Airlines", logo: "/images/logos/axon.png", width: 130, height: 130, sizeClass: "w-16 sm:w-26 lg:w-32.5" },
  { name: "Jetstar", logo: "/images/logos/jetstar.png", width: 173, height: 110, sizeClass: "w-20 sm:w-34 lg:w-43.25" },
  { name: "Expedia", logo: "/images/logos/expedia.png", width: 162, height: 162, sizeClass: "w-20 sm:w-32 lg:w-40.5" },
  { name: "Qantas", logo: "/images/logos/qantas.png", width: 162, height: 32, sizeClass: "w-24 sm:w-34 lg:w-40.5" },
  { name: "Alitalia", logo: "/images/logos/alitalia.png", width: 94, height: 21, sizeClass: "w-18 sm:w-22 lg:w-23.5" },
];
