"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
      <div className="pointer-events-none absolute top-0 left-1/4 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold md:text-5xl font-[family-name:var(--font-display)]">
          Ready to build something{" "}
          <span className="gradient-text">amazing</span>?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-text-secondary">
          Let&apos;s turn your vision into reality. Get in touch with our team
          and start your project today.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" variant="primary" size="lg">
            Start Your Project
          </Button>
          <Button href="/services" variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
