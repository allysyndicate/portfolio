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

const siteTitle = "Ally Zach — Research Engineer & Data Scientist";
const siteDescription =
  "Empirical research on markets, user networks, and AI systems. Research Engineer at Pantera Capital; technical cofounder of Syndicate.";

export const metadata: Metadata = {
  metadataBase: new URL("https://allyzach.com"),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ally Zach",
  url: "https://allyzach.com",
  jobTitle: "Research Engineer",
  worksFor: { "@type": "Organization", name: "Pantera Capital" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Illinois at Urbana-Champaign",
  },
  sameAs: [
    "https://twitter.com/0xallyzach",
    "https://www.linkedin.com/in/alexandra-zach-32714474",
  ],
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
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
