"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import IdeaPlayground from "@/components/sections/IdeaPlayground";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Effects */}
      <div className="dot-grid pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(100,60,180,0.08), transparent), radial-gradient(ellipse 40% 40% at 80% 60%, rgba(100,60,180,0.05), transparent)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 md:px-8 md:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left column: Hero text ──────────────────────────── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border-light bg-surface/50 px-4 py-1.5 text-xs font-medium text-text-secondary backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                Advanced Technology Solutions
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 text-5xl font-bold leading-tight tracking-tight font-[family-name:var(--font-display)] md:text-6xl lg:text-7xl"
            >
              Built Around
              <br />
              <GradientText>Your Flow.</GradientText>
              <br />
              Not Ours.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-xl text-text-secondary"
            >
              <span className="text-lg">
                Advanced websites &bull; Portals &bull; Cloud Systems &bull; Mobile Apps &bull; Dashboards
              </span>
              <br />
              <span className="text-base text-text-muted">
                Don&apos;t Adapt to Software. Let Software Adapt to You.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button href="/contact" variant="primary" size="lg">
                Start Your Project
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Services
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 flex flex-wrap gap-6 text-xs text-text-muted"
            >
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" />
                Fast Delivery
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-secondary" />
                100% Custom-Built
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent" />
                Built to Scale
              </span>
            </motion.div>
          </div>

          {/* ── Right column: Interactive Blueprint ─────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col"
          >
            <IdeaPlayground />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
