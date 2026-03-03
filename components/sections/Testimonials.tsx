"use client";

import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi2";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="bg-surface/30">
      <div className="mb-16 text-center">
        <span className="text-sm font-medium uppercase tracking-wider text-primary">
          Testimonials
        </span>
        <h2 className="mt-4 text-3xl font-bold md:text-5xl font-[family-name:var(--font-display)]">
          What Clients <GradientText>Say</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
          Don&apos;t just take our word for it — hear from the businesses
          we&apos;ve helped transform.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="glass glow-hover flex h-full flex-col rounded-xl p-6">
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <HiStar key={i} className="h-4 w-4 text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-xs text-text-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
