/*!
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Part of Sankit Parasiya's portfolio — not licensed for reuse.
 */
import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${profile.url}/sitemap.xml`,
  };
}
