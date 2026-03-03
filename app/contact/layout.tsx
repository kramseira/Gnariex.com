import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Gnariex — trusted IT solutions partner for Papua New Guinea & worldwide clients. Start your web, mobile, or cloud project today. We respond within 24 hours.",
  keywords: [
    "contact Gnariex",
    "hire IT company Papua New Guinea",
    "web development quote PNG",
    "software project Papua New Guinea",
    "Port Moresby IT contact",
    "PNG tech company contact",
  ],
  alternates: { canonical: "https://gnariex.com/contact" },
  openGraph: {
    title: "Contact Gnariex | Trusted IT Solutions Partner",
    description:
      "Start your project with Gnariex — trusted IT partner for Papua New Guinea & worldwide. Get a response within 24 hours.",
    url: "https://gnariex.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
