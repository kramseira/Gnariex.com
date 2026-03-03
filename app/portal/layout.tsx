import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Portal | Gnariex",
  description:
    "Sign in to your Gnariex client portal to manage your subscription, billing, and project status.",
  robots: { index: false, follow: false },
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
