import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Gnariex — a trusted IT solutions partner serving Papua New Guinea businesses and clients worldwide. Our team of engineers, designers, and strategists deliver next-level technology solutions.",
  keywords: [
    "about Gnariex",
    "IT company Papua New Guinea",
    "software company PNG",
    "Port Moresby tech team",
    "Papua New Guinea developers",
  ],
  alternates: { canonical: "https://gnariex.com/about" },
  openGraph: {
    title: "About Gnariex | Trusted IT Solutions Partner for PNG & Worldwide",
    description:
      "Meet the team behind Gnariex — dedicated IT professionals serving Papua New Guinea businesses and clients worldwide.",
    url: "https://gnariex.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
