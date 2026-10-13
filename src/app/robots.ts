import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// SSG: generated once at build time and served as a static /robots.txt.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
