"use client";

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlinePaintBrush,
  HiOutlineCodeBracket,
  HiOutlineRocketLaunch,
  HiOutlineWrench,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineCheck,
  HiOutlineArrowPath,
  HiOutlineSparkles,
  HiOutlineClock,
} from "react-icons/hi2";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";

/* ─── Types & Data ──────────────────────────────────────────────────── */

interface Milestone {
  id: string;
  label: string;
  description: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  color: string;
  weeks: number;
  deliverables: string[];
  tools: string[];
}

const MILESTONES: Milestone[] = [
  {
    id: "discover",
    label: "Discovery",
    description: "We learn your business, goals, and pain points inside-out.",
    icon: HiOutlineLightBulb,
    color: "#f97316",
    weeks: 1,
    deliverables: [
      "Requirements document",
      "User flow diagrams",
      "Project scope",
    ],
    tools: ["Notion", "Miro", "Google Meet"],
  },
  {
    id: "design",
    label: "Design",
    description: "Pixel-perfect mockups that bring your system to life.",
    icon: HiOutlinePaintBrush,
    color: "#a855f7",
    weeks: 2,
    deliverables: ["UI/UX mockups", "Brand integration", "Responsive layouts"],
    tools: ["Figma", "Adobe XD", "Framer"],
  },
  {
    id: "develop",
    label: "Development",
    description: "Clean, custom code built for your business logic.",
    icon: HiOutlineCodeBracket,
    color: "#0693e3",
    weeks: 4,
    deliverables: ["Frontend build", "Backend APIs", "Database setup"],
    tools: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    id: "test",
    label: "Testing",
    description: "Rigorous QA ensures everything works flawlessly.",
    icon: HiOutlineShieldCheck,
    color: "#22c55e",
    weeks: 1,
    deliverables: ["QA testing", "Performance audit", "Security review"],
    tools: ["Jest", "Playwright", "Lighthouse"],
  },
  {
    id: "launch",
    label: "Launch",
    description: "Deployed, optimized, and ready for the world.",
    icon: HiOutlineRocketLaunch,
    color: "#00d084",
    weeks: 1,
    deliverables: ["Cloud deployment", "DNS & SSL setup", "Go-live support"],
    tools: ["Vercel", "AWS", "Cloudflare"],
  },
  {
    id: "support",
    label: "Support",
    description: "Ongoing maintenance — we don't disappear after launch.",
    icon: HiOutlineWrench,
    color: "#eab308",
    weeks: 2,
    deliverables: ["24/7 monitoring", "Feature updates", "Performance tuning"],
    tools: ["Grafana", "Sentry", "Slack"],
  },
  {
    id: "scale",
    label: "Scale",
    description: "Your system evolves as your business grows.",
    icon: HiOutlineChartBar,
    color: "#ef4444",
    weeks: 3,
    deliverables: [
      "Load optimization",
      "New features",
      "Infrastructure scaling",
    ],
    tools: ["Docker", "Redis", "CDN"],
  },
];

/* ─── Component ─────────────────────────────────────────────────────── */

type ViewPhase = "select" | "building" | "timeline";

export default function ProjectTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [allIds, setAllIds] = useState<string[]>(
    MILESTONES.map((m) => m.id)
  );
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [viewPhase, setViewPhase] = useState<ViewPhase>("select");

  /* ── Derived state ─────────────────────────────────────────── */

  const selectionOrder = useMemo(() => {
    const order = new Map<string, number>();
    let num = 1;
    for (const id of allIds) {
      if (selectedIds.has(id)) order.set(id, num++);
    }
    return order;
  }, [allIds, selectedIds]);

  const selectedMilestones = useMemo(
    () =>
      allIds
        .filter((id) => selectedIds.has(id))
        .map((id) => MILESTONES.find((m) => m.id === id)!),
    [allIds, selectedIds]
  );

  const totalWeeks = useMemo(
    () => selectedMilestones.reduce((s, m) => s + m.weeks, 0),
    [selectedMilestones]
  );

  const totalDeliverables = useMemo(
    () => selectedMilestones.reduce((s, m) => s + m.deliverables.length, 0),
    [selectedMilestones]
  );

  /* ── Handlers ──────────────────────────────────────────────── */

  const toggle = (id: string) => {
    if (viewPhase !== "select") return;
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    if (expandedId === id) setExpandedId(null);
  };

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const build = () => {
    if (selectedIds.size < 3) return;
    setViewPhase("building");
    scrollToSection();
    setTimeout(() => {
      setViewPhase("timeline");
      scrollToSection();
    }, 2200);
  };

  const reset = () => {
    setAllIds(MILESTONES.map((m) => m.id));
    setSelectedIds(new Set());
    setExpandedId(null);
    setViewPhase("select");
  };

  /* ── Render ────────────────────────────────────────────────── */

  return (
    <SectionWrapper id="project-timeline">
      <div ref={sectionRef} className="absolute -top-20" />

      {/* Header */}
      <div className="mb-12 text-center">
        <span className="text-sm font-medium uppercase tracking-wider text-primary">
          Your Project Roadmap
        </span>
        <h2 className="mt-4 text-3xl font-bold md:text-5xl font-[family-name:var(--font-display)]">
          Build Your <GradientText>Journey</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
          Select phases, drag to reorder, and watch your custom roadmap come to
          life.
        </p>
      </div>

      <div className="mx-auto max-w-5xl">
        <AnimatePresence mode="wait">
          {/* ─── SELECT & REORDER (unified) ─────────────── */}
          {viewPhase === "select" && (
            <motion.div
              key="select"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="rounded-2xl border border-border/30 bg-surface/20 p-3 backdrop-blur-sm sm:p-4">
              <Reorder.Group
                as="div"
                axis="y"
                values={allIds}
                onReorder={setAllIds}
                className="flex flex-wrap gap-2"
              >
                {allIds.map((id, i) => {
                  const m = MILESTONES.find((x) => x.id === id)!;
                  const Icon = m.icon;
                  const on = selectedIds.has(id);
                  const order = selectionOrder.get(id);
                  const open = expandedId === id;

                  return (
                    <Reorder.Item
                      key={id}
                      value={id}
                      as="div"
                      layout={false}
                      whileDrag={{
                        scale: 1.05,
                        boxShadow: `0 12px 40px ${m.color}30`,
                        zIndex: 50,
                        cursor: "grabbing",
                      }}
                      className="w-[calc(50%-4px)] cursor-grab sm:w-[calc(33.333%-6px)] lg:w-[calc(25%-6px)] active:cursor-grabbing"
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.03,
                          y: -4,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => toggle(id)}
                        className={`relative overflow-hidden rounded-xl border-2 p-3 transition-all select-none ${
                          on
                            ? "bg-surface/80"
                            : "border-border/20 bg-surface/30 hover:border-border/50"
                        }`}
                        style={
                          on
                            ? {
                                borderColor: `${m.color}50`,
                                boxShadow: `0 0 30px ${m.color}12, inset 0 1px 0 ${m.color}10`,
                              }
                            : undefined
                        }
                      >
                        {/* Ambient glow on selected */}
                        {on && (
                          <motion.div
                            className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full opacity-20 blur-2xl"
                            style={{ backgroundColor: m.color }}
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.15, 0.25, 0.15],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        )}

                        {/* Order badge */}
                        {on && order && (
                          <motion.span
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-background"
                            style={{ backgroundColor: m.color }}
                          >
                            {order}
                          </motion.span>
                        )}

                        {/* Icon with pulse */}
                        <motion.span
                          className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg"
                          style={{
                            backgroundColor: `${m.color}15`,
                            color: m.color,
                          }}
                          animate={
                            on
                              ? {
                                  boxShadow: [
                                    `0 0 0px ${m.color}00`,
                                    `0 0 18px ${m.color}40`,
                                    `0 0 0px ${m.color}00`,
                                  ],
                                }
                              : {}
                          }
                          transition={
                            on
                              ? {
                                  duration: 2.5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }
                              : {}
                          }
                        >
                          <Icon className="h-4 w-4" />
                        </motion.span>

                        {/* Title row */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-text-primary">
                            {m.label}
                          </span>
                          {on && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              <HiOutlineCheck
                                className="h-3.5 w-3.5"
                                style={{ color: m.color }}
                              />
                            </motion.span>
                          )}
                        </div>

                        {/* Week estimate */}
                        <span className="mt-0.5 flex items-center gap-1 text-[9px] text-text-muted">
                          <HiOutlineClock className="h-2.5 w-2.5" />~{m.weeks}w
                        </span>

                        {/* Description */}
                        <p className="mt-1 text-[10px] leading-relaxed text-text-muted line-clamp-2">
                          {m.description}
                        </p>

                        {/* Deliverables (expandable) */}
                        {on && (
                          <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedId(open ? null : id);
                            }}
                            className="mt-2 text-[9px] font-medium"
                            style={{ color: m.color }}
                          >
                            {open ? "Hide details" : "View deliverables"}
                          </motion.button>
                        )}

                        <AnimatePresence>
                          {open && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-1.5 space-y-1 border-t border-border/20 pt-2">
                                {m.deliverables.map((d, j) => (
                                  <motion.div
                                    key={d}
                                    initial={{ x: -8, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: j * 0.06 }}
                                    className="flex items-center gap-1.5"
                                  >
                                    <span
                                      className="h-1 w-1 shrink-0 rounded-full"
                                      style={{ backgroundColor: m.color }}
                                    />
                                    <span className="text-[9px] text-text-secondary">
                                      {d}
                                    </span>
                                  </motion.div>
                                ))}
                                <div className="mt-1.5 flex flex-wrap gap-1">
                                  {m.tools.map((t) => (
                                    <span
                                      key={t}
                                      className="rounded px-1.5 py-0.5 text-[8px] font-medium"
                                      style={{
                                        backgroundColor: `${m.color}12`,
                                        color: m.color,
                                      }}
                                    >
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </Reorder.Item>
                  );
                })}
              </Reorder.Group>

              {/* ─── LIVE STATS BAR ────────────────────────── */}
              <AnimatePresence>
                {selectedIds.size > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="mt-4 flex flex-col items-center gap-4 border-t border-border/20 pt-4 sm:flex-row sm:justify-between"
                  >
                    <div className="flex gap-8">
                      {[
                        {
                          v: selectedIds.size,
                          label: "Phases",
                          c: "text-primary",
                        },
                        {
                          v: `~${totalWeeks}`,
                          label: "Weeks",
                          c: "text-secondary",
                        },
                        {
                          v: totalDeliverables,
                          label: "Deliverables",
                          c: "text-accent",
                        },
                      ].map((s) => (
                        <div key={s.label} className="text-center">
                          <motion.span
                            key={String(s.v)}
                            initial={{ y: -8, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className={`block text-xl font-bold ${s.c}`}
                          >
                            {s.v}
                          </motion.span>
                          <span className="text-[10px] text-text-muted">
                            {s.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {selectedIds.size >= 3 ? (
                      <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 0 30px rgba(0,208,132,0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={build}
                        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent px-6 py-3 text-sm font-semibold text-background"
                      >
                        <HiOutlineSparkles className="h-4 w-4" />
                        See My Roadmap
                      </motion.button>
                    ) : (
                      <span className="text-sm text-text-muted">
                        Select {3 - selectedIds.size} more phase
                        {3 - selectedIds.size > 1 ? "s" : ""}
                      </span>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* ─── BUILDING ────────────────────────────────── */}
          {viewPhase === "building" && (
            <motion.div
              key="building"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center py-20"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 rgba(0,208,132,0)",
                    "0 0 60px rgba(0,208,132,0.4)",
                    "0 0 0 rgba(0,208,132,0)",
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent"
              >
                <HiOutlineSparkles className="h-8 w-8 text-background" />
              </motion.div>
              <p className="text-sm font-semibold">Crafting your roadmap...</p>
              <div className="mt-4 h-1 w-48 overflow-hidden rounded-full bg-border/20">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                />
              </div>
            </motion.div>
          )}

          {/* ─── TIMELINE VISUALIZATION ──────────────────── */}
          {viewPhase === "timeline" && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-background to-transparent sm:hidden" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-background to-transparent sm:hidden" />

                <div
                  className="overflow-x-auto pb-4"
                  style={{ scrollbarWidth: "none" }}
                >
                  <div
                    className="relative mx-auto px-6"
                    style={{
                      minWidth: `${Math.max(selectedMilestones.length * 170, 600)}px`,
                    }}
                  >
                    <div className="absolute left-10 right-10 top-[24px] h-[2px] bg-border/20" />
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: selectedMilestones.length * 0.5,
                        ease: "easeOut",
                      }}
                      className="absolute left-10 right-10 top-[24px] h-[2px] origin-left bg-gradient-to-r from-primary via-secondary to-accent"
                    />

                    <div className="relative flex justify-between">
                      {selectedMilestones.map((m, i) => {
                        const Icon = m.icon;
                        const d = i * 0.4;
                        return (
                          <div
                            key={m.id}
                            className="flex flex-col items-center"
                            style={{
                              width: `${100 / selectedMilestones.length}%`,
                            }}
                          >
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                delay: d + 0.2,
                                type: "spring",
                                stiffness: 200,
                              }}
                              className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2"
                              style={{
                                borderColor: m.color,
                                backgroundColor: `${m.color}15`,
                                boxShadow: `0 0 20px ${m.color}25`,
                              }}
                            >
                              <Icon
                                className="h-5 w-5"
                                style={{ color: m.color }}
                              />
                            </motion.div>

                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: d + 0.35 }}
                              className="mt-2 rounded-full px-2 py-0.5 text-[9px] font-medium"
                              style={{
                                backgroundColor: `${m.color}10`,
                                color: m.color,
                              }}
                            >
                              ~{m.weeks}w
                            </motion.span>

                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: d + 0.45, type: "spring" }}
                              className="mt-3 w-full max-w-[150px] rounded-xl border border-border/20 bg-surface/50 p-3 text-center backdrop-blur-sm"
                            >
                              <h4
                                className="text-xs font-bold"
                                style={{ color: m.color }}
                              >
                                {m.label}
                              </h4>
                              <div className="mt-1.5 space-y-0.5">
                                {m.deliverables.map((del, j) => (
                                  <motion.p
                                    key={del}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                      delay: d + 0.6 + j * 0.08,
                                    }}
                                    className="text-[9px] text-text-muted"
                                  >
                                    {del}
                                  </motion.p>
                                ))}
                              </div>
                              <div className="mt-2 flex flex-wrap justify-center gap-0.5">
                                {m.tools.map((t) => (
                                  <span
                                    key={t}
                                    className="rounded px-1 py-0.5 text-[8px]"
                                    style={{
                                      backgroundColor: `${m.color}10`,
                                      color: `${m.color}bb`,
                                    }}
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: selectedMilestones.length * 0.4 + 0.5 }}
                className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center"
              >
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)]">
                  Your <GradientText>Roadmap</GradientText> Is Ready
                </h3>
                <div className="mt-3 flex justify-center gap-8">
                  {[
                    {
                      v: selectedMilestones.length,
                      l: "Phases",
                      c: "text-primary",
                    },
                    {
                      v: `~${totalWeeks}`,
                      l: "Weeks",
                      c: "text-secondary",
                    },
                    {
                      v: totalDeliverables,
                      l: "Deliverables",
                      c: "text-accent",
                    },
                  ].map((s) => (
                    <div key={s.l}>
                      <span className={`text-2xl font-bold ${s.c}`}>
                        {s.v}
                      </span>
                      <p className="text-[10px] text-text-muted">{s.l}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
                  <Button href="/contact" variant="primary" size="lg">
                    Get a Free Quote
                  </Button>
                  <button
                    onClick={reset}
                    className="flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-primary"
                  >
                    <HiOutlineArrowPath className="h-3.5 w-3.5" />
                    Plan Again
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
