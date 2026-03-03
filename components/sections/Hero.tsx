"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Effects */}
      <div className="dot-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 left-0 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border-light bg-surface/50 px-4 py-1.5 text-xs font-medium text-text-secondary backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Advanced Technology Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl font-[family-name:var(--font-display)]"
          >
            <GradientText>Next-Level</GradientText>
            <br />
            Solutions.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary md:text-xl"
          >
            We build advanced websites, client portals, cloud-based systems,
            mobile apps, and admin dashboards that drive your business forward.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
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
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-xs text-text-muted"
          >
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-primary" />
              Next.js & React
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-secondary" />
              Cloud Infrastructure
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent" />
              Enterprise Security
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
