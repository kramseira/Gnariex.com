import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Gnariex offers web development, mobile apps, cloud systems, admin dashboards, and IT consulting for Papua New Guinea businesses and clients worldwide. End-to-end technology solutions delivered remotely.",
  keywords: [
    "web development Papua New Guinea",
    "mobile app development PNG",
    "cloud systems Papua New Guinea",
    "admin dashboard PNG",
    "IT consulting Papua New Guinea",
    "client portal PNG",
    "software services Port Moresby",
  ],
  alternates: { canonical: "https://gnariex.com/services" },
  openGraph: {
    title: "IT Services for Papua New Guinea & Worldwide | Gnariex",
    description:
      "Web development, mobile apps, cloud infrastructure, and IT consulting tailored for Papua New Guinea businesses and clients worldwide.",
    url: "https://gnariex.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
