"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import { services } from "@/lib/data";

const ACCENT_COLORS = [
  { glow: "rgba(0,208,132,0.4)", border: "rgba(0,208,132,0.25)", text: "text-primary" },
  { glow: "rgba(6,147,227,0.4)", border: "rgba(6,147,227,0.25)", text: "text-secondary" },
  { glow: "rgba(168,85,247,0.4)", border: "rgba(168,85,247,0.25)", text: "text-accent" },
  { glow: "rgba(249,115,22,0.4)", border: "rgba(249,115,22,0.25)", text: "text-[#f97316]" },
  { glow: "rgba(6,147,227,0.4)", border: "rgba(6,147,227,0.25)", text: "text-secondary" },
  { glow: "rgba(0,208,132,0.4)", border: "rgba(0,208,132,0.25)", text: "text-primary" },
];

export default function Services() {
  return (
    <SectionWrapper id="services" className="pb-8 lg:pb-10">
      <div className="mb-12 text-center">
        <span className="text-sm font-medium uppercase tracking-wider text-primary">
          What We Do
        </span>
        <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-5xl font-[family-name:var(--font-display)]">
          Our <GradientText>Services</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-text-secondary sm:text-base">
          From concept to deployment, we deliver end-to-end technology solutions
          that help businesses thrive in the digital age.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-white/6 bg-white/3 backdrop-blur-sm transition-all duration-300 hover:border-white/12 hover:bg-white/5"
              style={{
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.04)`,
              }}
              whileHover={{
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06), 0 0 24px ${accent.glow.replace("0.4", "0.08")}`,
              }}
            >
              {/* Subtle corner glow on hover */}
              <div
                className="pointer-events-none absolute -top-12 -right-12 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ backgroundColor: accent.glow.replace("0.4", "0.15") }}
              />

              {/* Image */}
              <div className="relative h-36 w-full overflow-hidden sm:h-40">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent" />

                {/* Icon badge on image */}
                <div
                  className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl shadow-lg transition-shadow duration-300"
                  style={{
                    backgroundColor: accent.glow.replace("0.4", "0.15"),
                    color: accent.glow.replace("0.4)", "1)"),
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 p-5">
                <div>
                  <h3 className="text-base font-semibold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-md border border-white/6 bg-white/3 px-2.5 py-0.5 text-[11px] font-medium text-text-muted transition-colors group-hover:border-white/10 group-hover:text-text-secondary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
