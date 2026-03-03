"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import { portfolio } from "@/lib/data";

export default function Portfolio() {
  return (
    <SectionWrapper id="portfolio">
      <div className="mb-16 text-center">
        <span className="text-sm font-medium uppercase tracking-wider text-primary">
          Our Work
        </span>
        <h2 className="mt-4 text-3xl font-bold md:text-5xl font-[family-name:var(--font-display)]">
          Featured <GradientText>Projects</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
          A selection of projects that showcase our expertise in building
          modern digital solutions.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {portfolio.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="glass glow-hover group relative overflow-hidden rounded-xl p-8">
              {/* Gradient overlay */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition-opacity group-hover:opacity-100`}
              />

              <div className="relative z-10">
                <span className="inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {project.category}
                </span>

                <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
