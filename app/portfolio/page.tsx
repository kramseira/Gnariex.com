"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiXMark, HiArrowTopRightOnSquare } from "react-icons/hi2";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";
import { portfolio } from "@/lib/data";

type Project = (typeof portfolio)[number];

export default function PortfolioPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected]);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
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
                  Our Work
                </span>
                <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl md:text-6xl">
                  Featured <GradientText>Projects</GradientText>
                </h1>
                <p className="mt-4 text-base leading-relaxed text-text-secondary sm:mt-6 sm:text-lg">
                  Every project we deliver is built with precision, purpose, and
                  a deep understanding of your business needs — from SMEs to
                  government agencies across Papua New Guinea.
                </p>
              </motion.div>
            </div>
          </SectionWrapper>
        </div>

        {/* Grid */}
        <SectionWrapper>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
              >
                <button
                  onClick={() => setSelected(project)}
                  className="glass glow-hover group relative w-full cursor-pointer overflow-hidden rounded-xl text-left"
                >
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-surface/90 via-surface/30 to-transparent" />
                    <div
                      className={`pointer-events-none absolute inset-0 bg-linear-to-br ${project.color} opacity-0 transition-opacity duration-300 group-hover:opacity-60`}
                    />
                  </div>

                  <div className="relative z-10 p-4">
                    <span className="inline-block rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-base font-bold">{project.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-text-secondary line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Click to view details →
                    </p>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper className="bg-surface/30">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold sm:text-3xl md:text-4xl">
              Have a project in <GradientText>mind</GradientText>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-secondary">
              Let&apos;s turn your vision into reality. Get in touch with our
              team and start your project today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg">
                Start Your Project
              </Button>
              <Button href="/about" variant="outline" size="lg">
                Learn About Us
              </Button>
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md"
              onClick={() => setSelected(null)}
            />

            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-4 top-1/2 z-50 mx-auto max-w-2xl -translate-y-1/2 overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl sm:inset-x-6"
            >
              <div className="relative h-52 w-full sm:h-64">
                <Image
                  src={selected.image}
                  alt={selected.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 672px) 100vw, 672px"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/40 to-transparent" />
                <span className="absolute bottom-4 left-5 inline-block rounded-md bg-primary/20 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                  {selected.category}
                </span>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-background/60 text-text-secondary backdrop-blur-sm transition-colors hover:bg-background hover:text-text-primary"
                  aria-label="Close"
                >
                  <HiXMark className="h-4 w-4" />
                </button>
              </div>

              <div className="max-h-[55vh] overflow-y-auto p-5 sm:p-7">
                <h2 className="font-display text-2xl font-bold">
                  {selected.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {selected.longDescription}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {selected.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-lg border border-border bg-surface-light p-3 text-center"
                    >
                      <p className="font-display text-base font-bold text-primary">
                        {m.value}
                      </p>
                      <p className="mt-0.5 text-xs text-text-muted">{m.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-surface px-3 py-1 text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-primary-dark"
                  >
                    <HiArrowTopRightOnSquare className="h-4 w-4" />
                    Start a Similar Project
                  </Link>
                  <button
                    onClick={() => setSelected(null)}
                    className="rounded-lg border border-border px-4 py-2 text-sm text-text-secondary transition-colors hover:border-border-light hover:text-text-primary"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
