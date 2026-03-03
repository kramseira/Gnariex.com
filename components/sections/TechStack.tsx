"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import { techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <SectionWrapper id="tech-stack">
      <div className="mb-16 text-center">
        <span className="text-sm font-medium uppercase tracking-wider text-primary">
          Technologies
        </span>
        <h2 className="mt-4 text-3xl font-bold md:text-5xl font-[family-name:var(--font-display)]">
          Our <GradientText>Tech Stack</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
          We use industry-leading technologies to build robust, scalable, and
          maintainable solutions.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            className="glass glow-hover group flex flex-col items-center justify-center rounded-xl p-4 text-center"
          >
            <span className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
              {tech.name}
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-wider text-text-muted">
              {tech.category}
            </span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
