"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="relative px-4 py-16 md:px-8 md:py-20 lg:py-24">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <h2 className="font-display text-2xl font-bold sm:text-3xl md:text-5xl">
          Ready to build something{" "}
          <span className="gradient-text">amazing</span>?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-text-secondary">
          Let&apos;s turn your vision into reality. Get in touch with our team
          and start your project today.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <Button href="/contact" variant="primary" size="md" className="sm:px-8 sm:py-4 sm:text-base">
            Start Your Project
          </Button>
          <Button href="/services" variant="outline" size="md" className="sm:px-8 sm:py-4 sm:text-base">
            Learn More
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
