import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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

export const metadata: Metadata = {
  title: {
    default: "Gnariex | Next-Level Solutions",
    template: "%s | Gnariex",
  },
  description:
    "Gnariex builds advanced websites, client portals, admin dashboards, cloud-based systems, and mobile applications. Next-level technology solutions for modern businesses.",
  keywords: [
    "web development",
    "client portal",
    "admin dashboard",
    "cloud solutions",
    "mobile apps",
    "IT consulting",
    "Gnariex",
  ],
  openGraph: {
    title: "Gnariex | Next-Level Solutions",
    description:
      "Advanced websites, client portals, cloud systems, and more. Technology solutions that drive your business forward.",
    url: "https://gnariex.com",
    siteName: "Gnariex",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
