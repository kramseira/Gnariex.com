"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 -top-32 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-secondary/8 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/6 blur-3xl" />
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

      {/* Services Detail */}
      <SectionWrapper className="bg-surface/30">
        <div className="space-y-12 sm:space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`grid items-center gap-8 md:gap-12 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold md:text-3xl font-[family-name:var(--font-display)]">
                  {service.title}
                </h2>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={800}
                    height={500}
                    className="h-72 w-full object-cover lg:h-80"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl font-[family-name:var(--font-display)]">
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
