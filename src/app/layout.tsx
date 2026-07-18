import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Ally Zach · Research Engineer & Data Scientist";
const siteDescription =
  "Empirical research on financial markets, user networks, and AI systems. Research Engineer at Pantera Capital; technical cofounder of Syndicate.";

export const metadata: Metadata = {
  metadataBase: new URL("https://allyzach.com"),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  // Intentionally hidden from search engines: the site is shared by direct
  // link only (job applications). Keep crawlable so bots can SEE the noindex;
  // do not add a robots.txt Disallow, which would mask this directive.
  robots: { index: false, follow: false },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://allyzach.com",
    siteName: "Ally Zach",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@0xallyzach",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
