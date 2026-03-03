"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <SectionWrapper id="process">
      <div className="mb-16 text-center">
        <span className="text-sm font-medium uppercase tracking-wider text-primary">
          How We Work
        </span>
        <h2 className="mt-4 text-3xl font-bold md:text-5xl font-[family-name:var(--font-display)]">
          Our <GradientText>Process</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
          A proven methodology that delivers results, from initial concept to
          final deployment and beyond.
        </p>
      </div>

      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute top-0 bottom-0 left-[28px] hidden w-px bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2 md:block" />

        <div className="space-y-12">
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className="flex-1 md:text-right">
                <div
                  className={`glass glow-hover rounded-xl p-6 ${
                    index % 2 !== 0 ? "md:text-left" : ""
                  }`}
                >
                  <span className="text-3xl font-bold text-primary/30 font-[family-name:var(--font-display)]">
                    {step.step}
                  </span>
                  <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Node */}
              <div className="absolute left-[20px] hidden h-4 w-4 rounded-full border-2 border-primary bg-background md:relative md:left-auto md:block md:shrink-0" />

              {/* Spacer for alternating layout */}
              <div className="hidden flex-1 md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
