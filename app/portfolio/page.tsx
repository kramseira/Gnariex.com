"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiXMark, HiArrowTopRightOnSquare, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";
import { portfolio } from "@/lib/data";

const PER_PAGE = 9;

const ACCENT_COLORS = [
  { bg: "bg-primary/15", text: "text-primary", glow: "rgba(0,208,132,0.15)" },
  { bg: "bg-secondary/15", text: "text-secondary", glow: "rgba(6,147,227,0.15)" },
  { bg: "bg-accent/15", text: "text-accent", glow: "rgba(155,81,224,0.15)" },
  { bg: "bg-[#f97316]/15", text: "text-[#f97316]", glow: "rgba(249,115,22,0.15)" },
  { bg: "bg-secondary/15", text: "text-secondary", glow: "rgba(6,147,227,0.15)" },
  { bg: "bg-primary/15", text: "text-primary", glow: "rgba(0,208,132,0.15)" },
];

type Project = (typeof portfolio)[number];

export default function PortfolioPage() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(portfolio.length / PER_PAGE);
  const visible = portfolio.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

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
    return () => { document.body.style.overflow = ""; };
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
                  From concept to deployment, we design and build software
                  that solves real problems — for startups, enterprises, and
                  government agencies worldwide.
                </p>
              </motion.div>
            </div>
          </SectionWrapper>
        </div>

        {/* Grid */}
        <SectionWrapper>
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((project, index) => {
              const accent = ACCENT_COLORS[(page * PER_PAGE + index) % ACCENT_COLORS.length];

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: (index % 3) * 0.06 }}
                >
                  <button
                    onClick={() => setSelected(project)}
                    className="group relative w-full cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface text-left transition-all duration-300 hover:border-border-light hover:bg-surface-light"
                  >
                    {/* Corner glow on hover */}
                    <div
                      className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      style={{ backgroundColor: accent.glow }}
                    />

                    {/* Image */}
                    <div className="relative h-40 w-full overflow-hidden sm:h-44">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

                      {/* Category badge */}
                      <span className={`absolute bottom-3 left-4 rounded-md ${accent.bg} ${accent.text} px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-3 p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-semibold leading-snug text-text-primary transition-colors group-hover:text-white">
                            {project.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-text-secondary line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                          <HiArrowTopRightOnSquare className="h-4 w-4" />
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-border bg-surface-light/50 px-2.5 py-0.5 text-[11px] font-medium text-text-muted transition-colors group-hover:border-border-light group-hover:text-text-secondary"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="rounded-md border border-border bg-surface-light/50 px-2.5 py-0.5 text-[11px] font-medium text-text-muted">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-3">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-text-secondary transition-colors hover:border-border-light hover:text-text-primary disabled:pointer-events-none disabled:opacity-30"
                aria-label="Previous page"
              >
                <HiChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === page
                        ? "w-6 bg-primary"
                        : "w-2 bg-text-muted/40 hover:bg-text-muted/70"
                    }`}
                    aria-label={`Page ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page === totalPages - 1}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-text-secondary transition-colors hover:border-border-light hover:text-text-primary disabled:pointer-events-none disabled:opacity-30"
                aria-label="Next page"
              >
                <HiChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
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
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

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
                      className="rounded-md border border-border bg-surface-light px-3 py-1 text-xs text-text-secondary"
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
