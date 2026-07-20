import type { MetadataRoute } from "next";

// Shared by direct link only (job applications): keep the whole site out of
// search engines. This blocks crawling site-wide; the `noindex, nofollow`
// directives in layout.tsx metadata and the X-Robots-Tag header in
// next.config.ts keep any already-known URLs out of the index. Fully
// reversible: delete this file (or switch disallow -> allow) to reopen.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
