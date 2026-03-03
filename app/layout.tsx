import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import ShellWrapper from "@/components/layout/ShellWrapper";
import CookieConsent from "@/components/ui/CookieConsent";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const BASE_URL = "https://gnariex.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Gnariex | Trusted IT Solutions Partner for Papua New Guinea & Worldwide",
    template: "%s | Gnariex — Trusted IT Solutions Partner",
  },
  description:
    "Gnariex is a trusted IT solutions partner delivering advanced websites, client portals, admin dashboards, cloud systems, and mobile apps for Papua New Guinea businesses and clients worldwide.",
  keywords: [
    "IT company Papua New Guinea",
    "web development Papua New Guinea",
    "software development PNG",
    "Port Moresby IT services",
    "Papua New Guinea technology company",
    "website development PNG",
    "mobile app development Papua New Guinea",
    "cloud solutions PNG",
    "admin dashboard Papua New Guinea",
    "client portal PNG",
    "IT consulting Papua New Guinea",
    "Gnariex",
    "Gnariex PNG",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  authors: [{ name: "Gnariex", url: BASE_URL }],
  creator: "Gnariex",
  publisher: "Gnariex",
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Gnariex | Trusted IT Solutions Partner for Papua New Guinea & Worldwide",
    description:
      "Trusted IT solutions partner for Papua New Guinea & worldwide — advanced websites, portals, cloud systems, and mobile apps.",
    url: BASE_URL,
    siteName: "Gnariex",
    type: "website",
    locale: "en_PG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gnariex | Trusted IT Solutions Partner for Papua New Guinea & Worldwide",
    description:
      "Trusted IT solutions partner for Papua New Guinea & worldwide — websites, portals, cloud systems, and mobile apps.",
    site: "@gnariex",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  other: {
    "geo.region":    "PG",
    "geo.placename": "Papua New Guinea",
    "geo.position":  "-9.4438;147.1803",
    "ICBM":          "-9.4438, 147.1803",
  },
};

// JSON-LD LocalBusiness schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gnariex",
  description:
    "Gnariex is a trusted IT solutions partner specialising in web development, mobile apps, cloud systems, and IT consulting for Papua New Guinea businesses and clients worldwide.",
  url: BASE_URL,
  telephone: "+63 956 043 1217",
  email: "info@gnariex.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PG",
    addressRegion: "Papua New Guinea",
    addressLocality: "Port Moresby",
  },
  areaServed: [
    { "@type": "Country", name: "Papua New Guinea" },
    { "@type": "State",   name: "National Capital District" },
    { "@type": "Country", name: "Australia" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Admin Dashboard" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Client Portal" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Consulting" } },
    ],
  },
  sameAs: [
    "https://twitter.com/gnariex",
    "https://linkedin.com/company/gnariex",
    "https://github.com/gnariex",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PG" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Global gradient orbs */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-[20vw] -top-[20vh] h-[60vw] w-[60vw] rounded-full bg-primary/8 blur-[120px]" />
          <div className="absolute -right-[15vw] top-[30vh] h-[50vw] w-[50vw] rounded-full bg-secondary/6 blur-[120px]" />
          <div className="absolute bottom-0 left-[30vw] h-[40vw] w-[40vw] rounded-full bg-accent/5 blur-[100px]" />
        </div>
        <ShellWrapper>{children}</ShellWrapper>
        <CookieConsent />
      </body>
    </html>
  );
}
