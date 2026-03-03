import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on web development, AI, cloud, and technology trends from Gnariex — trusted IT solutions partner for Papua New Guinea & worldwide. Practical advice for businesses going digital.",
  keywords: [
    "tech blog Papua New Guinea",
    "IT insights PNG",
    "web development articles Papua New Guinea",
    "technology news PNG",
    "digital transformation Papua New Guinea",
  ],
  alternates: { canonical: "https://gnariex.com/blog" },
  openGraph: {
    title: "Tech Insights & Ideas | Gnariex Blog",
    description:
      "Technology insights from Gnariex — trusted IT solutions partner for Papua New Guinea & worldwide — web dev, AI, cloud, and digital transformation.",
    url: "https://gnariex.com/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
