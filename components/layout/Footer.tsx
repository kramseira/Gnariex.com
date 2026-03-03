import Link from "next/link";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { companyInfo, navLinks, services } from "@/lib/data";
import GradientLogo from "@/components/ui/GradientLogo";

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 overflow-hidden md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="min-w-0 space-y-1">
            <Link href="/" aria-label="Gnariex Home">
              <GradientLogo />
            </Link>
            <p className="text-sm font-medium text-text-primary">
              Next-Level Solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Services
            </h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <Link
                    href="/services"
                    className="text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-primary"
                >
                  <HiOutlineEnvelope className="h-4 w-4 shrink-0" />
                  <span className="truncate">{companyInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-primary"
                >
                  <HiOutlinePhone className="h-4 w-4 shrink-0" />
                  <span className="truncate">{companyInfo.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Gnariex. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-text-muted transition-colors hover:text-text-secondary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-text-muted transition-colors hover:text-text-secondary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
