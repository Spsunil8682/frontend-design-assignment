import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// SSG: generated at build time. The page content only changes on deploy, so the build
// time is an honest lastModified; ISR would just re-stamp unchanged content.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
