import { BookTrip } from "@/components/sections/book-trip/BookTrip";
import { Destinations } from "@/components/sections/destinations/Destinations";
import { Hero } from "@/components/sections/hero/Hero";
import { Partners } from "@/components/sections/partners/Partners";
import { Services } from "@/components/sections/services/Services";
import { Subscribe } from "@/components/sections/subscribe/Subscribe";
import { Testimonials } from "@/components/sections/testimonials/Testimonials";

// SSG: the landing page has no per-request data, so it is prerendered once at build
// time and served from the CDN. Fails the build if anything ever makes it dynamic.
export const dynamic = "error";

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
