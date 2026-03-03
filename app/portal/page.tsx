"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineExclamationCircle,
  HiOutlineCreditCard,
  HiOutlineChartBarSquare,
  HiOutlineClipboardDocumentList,
  HiOutlineLifebuoy,
} from "react-icons/hi2";
import GradientLogo from "@/components/ui/GradientLogo";
import GradientText from "@/components/ui/GradientText";

const features = [
  {
    icon: HiOutlineCreditCard,
    title: "Billing & Invoices",
    desc: "View and download your invoices anytime.",
  },
  {
    icon: HiOutlineChartBarSquare,
    title: "Subscription Plans",
    desc: "Manage, upgrade, or change your active plan.",
  },
  {
    icon: HiOutlineClipboardDocumentList,
    title: "Project Status",
    desc: "Track progress on all your active projects.",
  },
  {
    icon: HiOutlineLifebuoy,
    title: "Service Requests",
    desc: "Raise and track support cases with our team.",
  },
];

export default function PortalPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(true);
  }

  return (
    <div className="flex min-h-screen">
      {/* ── Left branding panel ── */}
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-surface p-10 md:flex lg:p-14">
        {/* Orbs */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-3xl" />

        {/* Logo */}
        <Link href="/" aria-label="Back to Gnariex">
          <GradientLogo />
        </Link>

        {/* Center content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10"
        >
          <h2 className="font-display text-2xl font-bold leading-tight lg:text-3xl">
            Your projects, billing, plans &{" "}
            <GradientText>support</GradientText> — all in one place.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text-secondary">
            The Gnariex client portal gives you complete visibility and control
            over your services — available 24/7.
          </p>

          <ul className="mt-8 space-y-4">
            {features.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{title}</p>
                  <p className="mt-0.5 text-xs text-text-secondary">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Footer note */}
        <p className="relative z-10 text-xs text-text-muted">
          © {new Date().getFullYear()} Gnariex. All rights reserved.
        </p>
      </div>

      {/* ── Right form panel ── */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-8">
        {/* Mobile logo */}
        <div className="mb-8 md:hidden">
          <Link href="/" aria-label="Back to Gnariex">
            <GradientLogo />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm"
        >
          {/* Heading */}
          <div className="mb-8">
            <h1 className="font-display text-2xl font-bold">Welcome back</h1>
            <p className="mt-1.5 text-sm text-text-secondary">
              Sign in to your Gnariex client account.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs font-medium text-text-secondary"
              >
                Email address
              </label>
              <div className="relative">
                <HiOutlineEnvelope className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(false);
                  }}
                  className="w-full rounded-lg border border-border bg-surface py-3 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs font-medium text-text-secondary"
                >
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs text-primary transition-colors hover:text-primary-dark"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <HiOutlineLockClosed className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  className="w-full rounded-lg border border-border bg-surface py-3 pl-10 pr-11 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted transition-colors hover:text-text-primary"
                >
                  {showPassword ? (
                    <HiOutlineEyeSlash className="h-4 w-4" />
                  ) : (
                    <HiOutlineEye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Error notice */}
            <AnimatePresence>
              {error && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-2.5 rounded-lg border border-red-500/20 bg-red-500/8 px-4 py-3 text-sm text-red-400"
                >
                  <HiOutlineExclamationCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    Incorrect email or password. Please check your credentials
                    and try again.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-background transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-text-muted">Need access?</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Contact CTA */}
          <p className="text-center text-sm text-text-secondary">
            Not a client yet?{" "}
            <Link
              href="/contact"
              className="font-medium text-primary transition-colors hover:text-primary-dark"
            >
              Contact us to get started →
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
