import { BookTrip } from "@/components/sections/book-trip/BookTrip";
import { Destinations } from "@/components/sections/destinations/Destinations";
import { Hero } from "@/components/sections/hero/Hero";
import { Partners } from "@/components/sections/partners/Partners";
import { Services } from "@/components/sections/services/Services";
import { Subscribe } from "@/components/sections/subscribe/Subscribe";
import { Testimonials } from "@/components/sections/testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Destinations />
      <BookTrip />
      <Testimonials />
      <Partners />
      <Subscribe />
    </main>
  );
}
