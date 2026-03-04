"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiXMark, HiArrowTopRightOnSquare, HiOutlineArrowRight } from "react-icons/hi2";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import { portfolio } from "@/lib/data";

const PREVIEW_COUNT = 6;

type Project = (typeof portfolio)[number];

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = portfolio.slice(0, PREVIEW_COUNT);

  // Close on ESC
  useEffect(() => {
    if (!selected) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <>
      <SectionWrapper id="portfolio" className="pb-8 lg:pb-10">
        <div className="mb-10 text-center sm:mb-16">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Our Work
          </span>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-5xl font-display">
            Featured <GradientText>Projects</GradientText>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-text-secondary sm:text-base">
            A selection of projects that showcase our expertise in building
            modern digital solutions.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <button
                onClick={() => setSelected(project)}
                className="group relative w-full cursor-pointer overflow-hidden rounded-2xl border border-border/60 bg-surface/40 text-left transition-all duration-300 hover:border-border-light hover:bg-surface/70 hover:shadow-[0_0_24px_-6px_rgba(0,208,132,0.12)]"
              >
                {/* Image */}
                <div className="relative h-32 w-full overflow-hidden sm:h-36">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-surface/90 via-surface/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 h-px w-12 bg-linear-to-r from-primary via-secondary to-accent opacity-50 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
                </div>

                <div className="space-y-3 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-medium uppercase tracking-wider text-text-muted">
                        {project.category}
                      </span>
                      <h3 className="mt-1.5 text-base font-semibold leading-snug text-text-primary transition-colors group-hover:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-text-secondary line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    <span className="mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <HiArrowTopRightOnSquare className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/4 px-2.5 py-1 text-[11px] text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="rounded-full bg-white/4 px-2.5 py-1 text-[11px] text-text-muted">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* View All link */}
        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
          >
            View All Projects
            <HiOutlineArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md"
              onClick={() => setSelected(null)}
            />

            {/* Panel */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-4 top-1/2 z-50 mx-auto max-w-2xl -translate-y-1/2 overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl sm:inset-x-6"
            >
              {/* Image */}
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

                {/* Category badge */}
                <span className="absolute bottom-4 left-5 inline-block rounded-md bg-primary/20 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                  {selected.category}
                </span>

                {/* Close */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-background/60 text-text-secondary backdrop-blur-sm transition-colors hover:bg-background hover:text-text-primary"
                  aria-label="Close"
                >
                  <HiXMark className="h-4 w-4" />
                </button>
              </div>

              {/* Content */}
              <div className="max-h-[55vh] overflow-y-auto p-5 sm:p-7">
                <h2 className="text-2xl font-bold font-display">
                  {selected.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {selected.longDescription}
                </p>

                {/* Metrics */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {selected.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-lg border border-border bg-surface-light p-3 text-center"
                    >
                      <p className="text-base font-bold text-primary font-display">
                        {m.value}
                      </p>
                      <p className="mt-0.5 text-xs text-text-muted">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
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

                {/* Actions */}
                <div className="mt-6 flex gap-3">
                  <a
                    href="/contact"
                    className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-primary-dark"
                  >
                    <HiArrowTopRightOnSquare className="h-4 w-4" />
                    Start a Similar Project
                  </a>
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
