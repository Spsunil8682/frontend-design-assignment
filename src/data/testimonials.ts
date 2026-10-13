export type Testimonial = {
  quote: string;
  name: string;
  /** Location or job title shown under the name. */
  meta: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    name: "Mike Taylor",
    meta: "Lahore, Pakistan",
    avatar: "/images/testimonials/mike-taylor.jpg",
  },
  {
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    name: "Chris Thomas",
    meta: "CEO of Red Button",
  },
  {
    quote:
      "Engrossed listening. Park gate sell they west hard for the. Barton vanity itself do in it, preferred to men it engrossed listening.",
    name: "Sara Lindqvist",
    meta: "Stockholm, Sweden",
  },
];
