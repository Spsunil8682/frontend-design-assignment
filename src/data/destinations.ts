export type Destination = {
  name: string;
  price: string;
  /** Accessible version of the price, read by screen readers instead of the short form. */
  priceLabel: string;
  duration: string;
  image: string;
  imageAlt: string;
};

export const destinations: Destination[] = [
  {
    name: "Rome, Italy",
    price: "$5.42k",
    priceLabel: "$5,420",
    duration: "10 Days Trip",
    image: "/images/destinations/rome.jpg",
    imageAlt: "The Colosseum in Rome lit by the setting sun",
  },
  {
    name: "London, UK",
    price: "$4.2k",
    priceLabel: "$4,200",
    duration: "12 Days Trip",
    image: "/images/destinations/london.jpg",
    imageAlt: "Big Ben and the Houses of Parliament beside the River Thames in autumn",
  },
  {
    name: "Full Europe",
    price: "$15k",
    priceLabel: "$15,000",
    duration: "28 Days Trip",
    image: "/images/destinations/europe.jpg",
    imageAlt: "Helsinki harbour with the green-domed cathedral on the skyline",
  },
];
