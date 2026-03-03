"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import IdeaPlayground from "@/components/sections/IdeaPlayground";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      {/* Subtle hero-only ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(100,60,180,0.06), transparent)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 md:px-8 md:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left column: Hero text ──────────────────────────── */}
          <div className="min-w-0 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border-light bg-surface/50 px-4 py-1.5 text-xs font-medium text-text-secondary backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                Trusted IT Solutions Partner for PNG & Worldwide
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Built Around
              <br />
              <GradientText>Your Flow.</GradientText>{" "}
              <span className="text-white/65">Not Ours.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-xl text-text-secondary mx-auto lg:mx-0"
            >
              <span className="text-sm sm:text-base md:text-lg">
                Websites &bull; Portals &bull; Cloud Systems &bull; Mobile Apps &bull; Dashboards
              </span>
              <br />
              <span className="text-xs text-text-muted sm:text-sm">
                Serving Papua New Guinea businesses and clients worldwide.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4 items-center lg:items-start"
            >
              <Button href="/contact" variant="primary" size="md" className="sm:px-8 sm:py-4 sm:text-base">
                Start Your Project
              </Button>
              <Button href="/services" variant="outline" size="md" className="sm:px-8 sm:py-4 sm:text-base">
                Explore Services
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-xs text-text-muted sm:gap-6"
            >
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" />
                PNG-Based Team
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-secondary" />
                100% Custom-Built
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent" />
                Trusted by 80+ Clients
              </span>
            </motion.div>
          </div>

          {/* ── Right column: Interactive Blueprint ─────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="min-w-0 flex flex-col"
          >
            <IdeaPlayground />
          </motion.div>
        </div>
      </div>

    </section>
  );
}
