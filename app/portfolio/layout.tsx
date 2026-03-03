import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Gnariex — Web & Software Projects in Papua New Guinea",
  description:
    "Explore Gnariex's portfolio of custom software, web applications, ERP systems, and digital solutions built for businesses across Papua New Guinea.",
  keywords: [
    "Gnariex portfolio",
    "Papua New Guinea software projects",
    "PNG web development",
    "custom ERP Papua New Guinea",
    "fleet management PNG",
    "booking system PNG",
    "government portal PNG",
  ],
  openGraph: {
    title: "Portfolio | Gnariex",
    description:
      "Custom software and web solutions built for PNG businesses — fleet tracking, ERP, booking systems, and more.",
    url: "https://gnariex.com/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
