"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import GradientText from "@/components/ui/GradientText";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <SectionWrapper id="services">
      <div className="mb-16 text-center">
        <span className="text-sm font-medium uppercase tracking-wider text-primary">
          What We Do
        </span>
        <h2 className="mt-4 text-3xl font-bold md:text-5xl font-[family-name:var(--font-display)]">
          Our <GradientText>Services</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
          From concept to deployment, we deliver end-to-end technology solutions
          that help businesses thrive in the digital age.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <GlassCard className="h-full group">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-md bg-surface-light px-2.5 py-1 text-xs text-text-muted"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
