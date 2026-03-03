"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineArrowTrendingUp,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";

/* ─── Data ──────────────────────────────────────────────────────────── */

const IMPACTS = [
  {
    id: "speed",
    icon: HiOutlineBolt,
    label: "Speed",
    problem: "Slow, clunky systems frustrating your team and customers.",
    solution: "Lightning-fast apps that load in under 1 second.",
    before: { value: 4.2, unit: "s", label: "Load Time" },
    after: { value: 0.8, unit: "s", label: "Load Time" },
    color: "#00d084",
  },
  {
    id: "security",
    icon: HiOutlineShieldCheck,
    label: "Security",
    problem: "Vulnerable systems putting your data and reputation at risk.",
    solution: "Enterprise-grade security built into every layer.",
    before: { value: 62, unit: "%", label: "Threat Coverage" },
    after: { value: 99, unit: "%", label: "Threat Coverage" },
    color: "#0693e3",
  },
  {
    id: "growth",
    icon: HiOutlineArrowTrendingUp,
    label: "Growth",
    problem: "Systems that break when your business scales up.",
    solution: "Architecture that grows with your business, effortlessly.",
    before: { value: 500, unit: "", label: "Max Users" },
    after: { value: 50, unit: "K+", label: "Max Users" },
    color: "#a855f7",
  },
  {
    id: "time",
    icon: HiOutlineClock,
    label: "Efficiency",
    problem: "Manual processes eating up hours of productive time.",
    solution: "Automated workflows that free your team to focus on growth.",
    before: { value: 20, unit: "hrs", label: "Manual Work / Week" },
    after: { value: 2, unit: "hrs", label: "Manual Work / Week" },
    color: "#f97316",
  },
  {
    id: "cost",
    icon: HiOutlineCurrencyDollar,
    label: "Cost",
    problem: "Overpaying for generic tools that don't fit your needs.",
    solution: "Custom-built systems that eliminate waste and reduce costs.",
    before: { value: 100, unit: "%", label: "of Budget" },
    after: { value: 40, unit: "%", label: "Cost Saved" },
    color: "#22c55e",
  },
  {
    id: "experience",
    icon: HiOutlineUserGroup,
    label: "Experience",
    problem: "Customers leaving due to poor digital experience.",
    solution: "Polished, intuitive interfaces that keep users coming back.",
    before: { value: 34, unit: "%", label: "Satisfaction" },
    after: { value: 96, unit: "%", label: "Satisfaction" },
    color: "#06b6d4",
  },
];

/* ─── Animated Counter ──────────────────────────────────────────────── */

function AnimatedNumber({
  value,
  duration = 1.2,
}: {
  value: number;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setDisplay(end);
        clearInterval(timer);
      } else {
        setDisplay(Math.round(start * 10) / 10);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [value, duration, inView]);

  return <span ref={ref}>{Number.isInteger(value) ? Math.round(display) : display.toFixed(1)}</span>;
}

/* ─── Component ─────────────────────────────────────────────────────── */

export default function TechStack() {
  const [activeId, setActiveId] = useState(IMPACTS[0].id);
  const active = IMPACTS.find((i) => i.id === activeId)!;

  return (
    <SectionWrapper id="business-impact">
      <div className="mb-12 text-center">
        <span className="text-sm font-medium uppercase tracking-wider text-primary">
          Why It Matters
        </span>
        <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-5xl font-[family-name:var(--font-display)]">
          Real <GradientText>Impact</GradientText> for Your Business
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-text-secondary sm:text-base">
          We don&apos;t just build software — we solve problems that cost you time,
          money, and customers.
        </p>
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Category pills */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {IMPACTS.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "border-transparent bg-white/10 text-white"
                    : "border-white/8 text-text-muted hover:border-white/15 hover:text-text-secondary"
                }`}
                style={
                  isActive
                    ? {
                        boxShadow: `0 0 16px ${item.color}20, inset 0 1px 0 rgba(255,255,255,0.06)`,
                        borderColor: `${item.color}40`,
                      }
                    : undefined
                }
              >
                <Icon
                  className="h-3.5 w-3.5"
                  style={isActive ? { color: item.color } : undefined}
                />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Content card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden rounded-2xl border border-white/6 bg-white/3 backdrop-blur-sm"
          >
            <div className="grid md:grid-cols-2">
              {/* Before */}
              <div className="relative border-b border-white/6 p-4 sm:p-6 md:border-b-0 md:border-r">
                <div className="mb-4 flex items-center gap-2">
                  <span className="rounded-full bg-red-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-red-400">
                    Without Us
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-text-muted">
                  {active.problem}
                </p>
                <div className="mt-6 rounded-xl border border-red-500/10 bg-red-500/5 p-4">
                  <p className="text-[10px] uppercase tracking-wider text-red-400/70">
                    {active.before.label}
                  </p>
                  <p className="mt-1 text-2xl font-bold text-red-400 sm:text-3xl">
                    <AnimatedNumber value={active.before.value} />
                    <span className="ml-0.5 text-lg">{active.before.unit}</span>
                  </p>
                </div>
              </div>

              {/* After */}
              <div className="relative p-4 sm:p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                    style={{
                      backgroundColor: `${active.color}15`,
                      color: active.color,
                    }}
                  >
                    With Gnariex
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {active.solution}
                </p>
                <div
                  className="mt-6 rounded-xl border p-4"
                  style={{
                    borderColor: `${active.color}15`,
                    backgroundColor: `${active.color}08`,
                  }}
                >
                  <p
                    className="text-[10px] uppercase tracking-wider"
                    style={{ color: `${active.color}90` }}
                  >
                    {active.after.label}
                  </p>
                  <p
                    className="mt-1 text-2xl font-bold sm:text-3xl"
                    style={{ color: active.color }}
                  >
                    <AnimatedNumber value={active.after.value} />
                    <span className="ml-0.5 text-lg">{active.after.unit}</span>
                  </p>
                </div>

                {/* Subtle glow */}
                <div
                  className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-20 blur-3xl"
                  style={{ backgroundColor: active.color }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
