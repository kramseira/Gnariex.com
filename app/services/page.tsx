"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";
import { services } from "@/lib/data";

const ACCENT_COLORS = [
  "rgba(0,208,132,0.4)",
  "rgba(6,147,227,0.4)",
  "rgba(168,85,247,0.4)",
  "rgba(249,115,22,0.4)",
  "rgba(6,147,227,0.4)",
  "rgba(0,208,132,0.4)",
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 -top-32 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-secondary/8 blur-3xl" />
        <SectionWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Services
              </span>
              <h1 className="mt-4 text-3xl font-bold sm:text-4xl md:text-6xl font-display">
                What We <GradientText>Build</GradientText>
              </h1>
              <p className="mt-4 text-base text-text-secondary leading-relaxed sm:mt-6 sm:text-lg">
                End-to-end technology solutions crafted with precision. From
                websites to cloud infrastructure, we handle it all.
              </p>
            </motion.div>
          </div>
        </SectionWrapper>
      </div>

      {/* Services Grid */}
      <SectionWrapper>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface/40 transition-all duration-300 hover:border-border-light hover:bg-surface/60"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/30 to-transparent" />

                  {/* Icon badge */}
                  <div
                    className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 shadow-lg backdrop-blur-md"
                    style={{
                      backgroundColor: accent.replace("0.4", "0.15"),
                      color: accent.replace("0.4)", "1)"),
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-text-primary font-display">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-border/40 pt-5">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2.5 text-[13px] text-text-muted transition-colors group-hover:text-text-secondary"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: accent.replace("0.4)", "0.8)") }}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom gradient line on hover */}
                <div className="h-px w-0 bg-linear-to-r from-primary via-secondary to-accent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl font-display">
            Ready to get <GradientText>started</GradientText>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Tell us about your project and we&apos;ll help you find the right
            solution.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Start Your Project
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
