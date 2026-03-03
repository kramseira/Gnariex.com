"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NO_SHELL_ROUTES = ["/portal"];

export default function ShellWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideShell = NO_SHELL_ROUTES.includes(pathname);

  return (
    <>
      {!hideShell && <Navbar />}
      <main className="relative z-10">{children}</main>
      {!hideShell && <Footer />}
    </>
  );
}
