import type { NextConfig } from "next";

const securityHeaders = [
  // Enforce HTTPS for two years, including subdomains.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  // Never MIME-sniff responses away from their declared content type.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Disallow embedding the site in iframes (clickjacking).
  { key: "X-Frame-Options", value: "DENY" },
  // Send only the origin as referrer when navigating cross-origin.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // This site never needs these browser features.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // Shared by direct link only: keep every route (pages, images, the PDF)
  // out of search engines. Complements the robots metadata in layout.tsx.
  { key: "X-Robots-Tag", value: "noindex, nofollow" },
];

const nextConfig: NextConfig = {
  // Two lockfiles exist (repo root + site/); pin the workspace root so
  // Turbopack doesn't infer the wrong one.
  turbopack: { root: __dirname },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
