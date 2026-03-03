"use client";

import { motion } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlinePaintBrush,
  HiOutlineCodeBracket,
  HiOutlineRocketLaunch,
  HiOutlineWrench,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineClock,
} from "react-icons/hi2";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";

const PHASES = [
  {
    id: "discover",
    label: "Discovery",
    description: "We learn your business, goals, and pain points inside-out.",
    icon: HiOutlineLightBulb,
    color: "#f97316",
    weeks: 1,
    deliverables: ["Requirements document", "User flow diagrams", "Project scope"],
  },
  {
    id: "design",
    label: "Design",
    description: "Pixel-perfect mockups that bring your system to life.",
    icon: HiOutlinePaintBrush,
    color: "#a855f7",
    weeks: 2,
    deliverables: ["UI/UX mockups", "Brand integration", "Responsive layouts"],
  },
  {
    id: "develop",
    label: "Development",
    description: "Clean, custom code built for your exact business logic.",
    icon: HiOutlineCodeBracket,
    color: "#0693e3",
    weeks: 4,
    deliverables: ["Frontend build", "Backend APIs", "Database setup"],
  },
  {
    id: "test",
    label: "Testing",
    description: "Rigorous QA ensures everything works flawlessly.",
    icon: HiOutlineShieldCheck,
    color: "#22c55e",
    weeks: 1,
    deliverables: ["QA testing", "Performance audit", "Security review"],
  },
  {
    id: "launch",
    label: "Launch",
    description: "Deployed, optimized, and ready for the world.",
    icon: HiOutlineRocketLaunch,
    color: "#00d084",
    weeks: 1,
    deliverables: ["Cloud deployment", "DNS & SSL setup", "Go-live support"],
  },
  {
    id: "support",
    label: "Support",
    description: "Ongoing maintenance — we don't disappear after launch.",
    icon: HiOutlineWrench,
    color: "#eab308",
    weeks: 2,
    deliverables: ["24/7 monitoring", "Feature updates", "Performance tuning"],
  },
  {
    id: "scale",
    label: "Scale",
    description: "Your system evolves as your business grows.",
    icon: HiOutlineChartBar,
    color: "#ef4444",
    weeks: 3,
    deliverables: ["Load optimization", "New features", "Infrastructure scaling"],
  },
];

export default function ProjectTimeline() {
  return (
    <SectionWrapper id="project-timeline">
      {/* Header */}
      <div className="mb-10 text-center sm:mb-14">
        <span className="text-sm font-medium uppercase tracking-wider text-primary">
          How We Work
        </span>
        <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-5xl font-[family-name:var(--font-display)]">
          Your Project <GradientText>Journey</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-text-secondary sm:text-base">
          A transparent, structured process from first conversation to
          long-term growth — with you at every step.
        </p>
      </div>

      {/* Phase grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PHASES.map((phase, i) => {
          const Icon = phase.icon;
          return (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div
                className="group relative h-full overflow-hidden rounded-xl border border-white/6 bg-white/3 p-4 backdrop-blur-sm transition-all hover:border-white/12 hover:bg-white/5"
              >
                {/* Corner glow */}
                <div
                  className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20"
                  style={{ backgroundColor: phase.color }}
                />

                {/* Step number */}
                <span
                  className="mb-3 inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-background"
                  style={{ backgroundColor: phase.color }}
                >
                  {i + 1}
                </span>

                {/* Icon */}
                <div
                  className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${phase.color}15`, color: phase.color }}
                >
                  <Icon className="h-4.5 w-4.5" />
                </div>

                {/* Title + duration */}
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-text-primary">
                    {phase.label}
                  </h3>
                  <span className="flex shrink-0 items-center gap-1 text-[10px] text-text-muted">
                    <HiOutlineClock className="h-3 w-3" />~{phase.weeks}w
                  </span>
                </div>

                {/* Description */}
                <p className="mt-1.5 text-xs leading-relaxed text-text-muted">
                  {phase.description}
                </p>

                {/* Deliverables */}
                <ul className="mt-3 space-y-1 border-t border-white/6 pt-3">
                  {phase.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-1.5">
                      <span
                        className="h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: phase.color }}
                      />
                      <span className="text-[10px] text-text-secondary">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: PHASES.length * 0.07 }}
        >
          <div className="flex h-full flex-col items-center justify-center rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm font-semibold text-text-primary">
              Ready to start your project?
            </p>
            <p className="mt-2 text-xs text-text-muted">
              Let&apos;s build something great together.
            </p>
            <Button href="/contact" variant="primary" size="sm" className="mt-4">
              Get a Free Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
