"use client";

import { useState, useEffect, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineRocketLaunch,
  HiOutlineSparkles,
  HiOutlinePlus,
  HiOutlineXMark,
  HiOutlineArrowPath,
  HiOutlineCursorArrowRays,
  HiOutlineDocumentDuplicate,
  HiOutlineWrenchScrewdriver,
  HiOutlineArrowTrendingUp,
  HiOutlineUserGroup,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";

interface DraggableItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  category: "pain" | "wish";
  color: string;
}

const PRESET_ITEMS: DraggableItem[] = [
  { id: "high-cost", label: "High Operating Cost", icon: HiOutlineCurrencyDollar, category: "pain", color: "border-red-400/40 bg-red-500/10 text-red-400" },
  { id: "manual", label: "Manual Processes", icon: HiOutlineDocumentDuplicate, category: "pain", color: "border-orange-400/40 bg-orange-500/10 text-orange-400" },
  { id: "slow-delivery", label: "Slow Turnaround", icon: HiOutlineClock, category: "pain", color: "border-yellow-400/40 bg-yellow-500/10 text-yellow-400" },
  { id: "no-data", label: "No Real-Time Data", icon: HiOutlineChartBar, category: "pain", color: "border-pink-400/40 bg-pink-500/10 text-pink-400" },
  { id: "outdated-system", label: "Outdated Systems", icon: HiOutlineWrenchScrewdriver, category: "pain", color: "border-red-400/40 bg-red-500/10 text-red-400" },
  { id: "automate", label: "Automate Workflows", icon: HiOutlineSparkles, category: "wish", color: "border-primary/40 bg-primary/10 text-primary" },
  { id: "cut-costs", label: "Cut Costs 50%", icon: HiOutlineArrowTrendingUp, category: "wish", color: "border-secondary/40 bg-secondary/10 text-secondary" },
  { id: "scale", label: "Scale Operations", icon: HiOutlineRocketLaunch, category: "wish", color: "border-accent/40 bg-accent/10 text-accent" },
  { id: "secure", label: "Enterprise Security", icon: HiOutlineShieldCheck, category: "wish", color: "border-cyan-400/40 bg-cyan-500/10 text-cyan-400" },
  { id: "team", label: "Empower My Team", icon: HiOutlineUserGroup, category: "wish", color: "border-yellow-400/40 bg-yellow-500/10 text-yellow-400" },
];

interface CanvasItem {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  color: string;
  isCustom: boolean;
}

export default function IdeaPlayground() {
  const [canvas, setCanvas] = useState<CanvasItem[]>([]);
  const [customInput, setCustomInput] = useState("");
  const [building, setBuilding] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [usedPresets, setUsedPresets] = useState<Set<string>>(new Set());
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [typedHint, setTypedHint] = useState("");
  const [hintIndex, setHintIndex] = useState(0);

  const HINT_EXAMPLES = [
    "We still use spreadsheets for everything...",
    "Payroll takes 3 days to process manually",
    "Our team wastes hours on repetitive tasks",
    "Customers complain about slow response time",
    "We can't track inventory in real-time",
  ];

  // Typewriter effect for input placeholder hint
  useEffect(() => {
    if (customInput || canvas.length >= 8 || building || completed) {
      setTypedHint("");
      return;
    }
    const currentHint = HINT_EXAMPLES[hintIndex];
    let charIndex = 0;
    setTypedHint("");

    const typeInterval = setInterval(() => {
      if (charIndex <= currentHint.length) {
        setTypedHint(currentHint.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        // Pause then move to next hint
        setTimeout(() => {
          setHintIndex((prev) => (prev + 1) % HINT_EXAMPLES.length);
        }, 2000);
      }
    }, 60);

    return () => clearInterval(typeInterval);
  }, [hintIndex, customInput, canvas.length, building, completed]);

  // Cycle a highlight shimmer across preset buttons to hint interactivity
  useEffect(() => {
    if (canvas.length > 0 || building || completed) return;
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % PRESET_ITEMS.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [canvas.length, building, completed]);

  const addPreset = (item: DraggableItem) => {
    if (usedPresets.has(item.id) || canvas.length >= 8) return;
    setCanvas([
      ...canvas,
      { id: item.id, label: item.label, icon: item.icon, color: item.color, isCustom: false },
    ]);
    setUsedPresets(new Set([...usedPresets, item.id]));
  };

  const addCustom = () => {
    const trimmed = customInput.trim();
    if (!trimmed || canvas.length >= 8) return;
    const id = `custom-${Date.now()}`;
    setCanvas([
      ...canvas,
      {
        id,
        label: trimmed,
        color: "border-primary/40 bg-primary/10 text-primary",
        isCustom: true,
      },
    ]);
    setCustomInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addCustom();
  };

  const removeItem = (id: string) => {
    setCanvas(canvas.filter((c) => c.id !== id));
    setUsedPresets((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const buildSolution = () => {
    if (canvas.length < 3) return;
    setBuilding(true);
    setTimeout(() => {
      setBuilding(false);
      setCompleted(true);
    }, 2500);
  };

  const reset = () => {
    setCanvas([]);
    setUsedPresets(new Set());
    setCustomInput("");
    setBuilding(false);
    setCompleted(false);
  };

  const painItems = PRESET_ITEMS.filter((i) => i.category === "pain");
  const wishItems = PRESET_ITEMS.filter((i) => i.category === "wish");

  return (
    <div className="lg:pt-6">
      {/* Header */}
      <div className="mb-5 flex items-center gap-4">
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <HiOutlineCursorArrowRays className="h-6 w-6 text-primary" />
        </motion.div>
        <div>
          <h3 className="text-base font-bold text-text-primary font-[family-name:var(--font-display)]">
            What&apos;s <GradientText>holding you back</GradientText>?
          </h3>
          <p className="text-xs text-text-muted">
            Tell us your challenges — we&apos;ll design the solution
          </p>
        </div>
        <motion.span
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="ml-auto rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary"
        >
          Interactive
        </motion.span>
      </div>

      <div>
        {!building && !completed && (
          <>
            {/* Preset items */}
            <div className="mb-5 space-y-4">
              <div>
                <p className="mb-2.5 text-sm font-medium uppercase tracking-wider text-red-400/70">
                  Pain Points
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {painItems.map((item) => {
                    const Icon = item.icon;
                    const used = usedPresets.has(item.id);
                    const isHighlighted = canvas.length === 0 && PRESET_ITEMS[highlightIndex]?.id === item.id;
                    return (
                      <span key={item.id} className="relative">
                        <motion.button
                          onClick={() => addPreset(item)}
                          disabled={used || canvas.length >= 8}
                          whileHover={{ scale: used ? 1 : 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          animate={
                            isHighlighted
                              ? { scale: [1, 1.08, 1], boxShadow: ["0 0 0px transparent", "0 0 12px rgba(239,68,68,0.3)", "0 0 0px transparent"] }
                              : {}
                          }
                          transition={isHighlighted ? { duration: 0.8 } : { duration: 0.2 }}
                          className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
                            used
                              ? "cursor-not-allowed border-border/20 bg-surface/20 text-text-muted/30 opacity-50"
                              : `${item.color} cursor-pointer hover:shadow-md`
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          {item.label}
                        </motion.button>
                      </span>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="mb-2.5 text-sm font-medium uppercase tracking-wider text-primary/70">
                  Wishes
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {wishItems.map((item) => {
                    const Icon = item.icon;
                    const used = usedPresets.has(item.id);
                    const isHighlighted = canvas.length === 0 && PRESET_ITEMS[highlightIndex]?.id === item.id;
                    return (
                      <span key={item.id} className="relative">
                        <motion.button
                          onClick={() => addPreset(item)}
                          disabled={used || canvas.length >= 8}
                          whileHover={{ scale: used ? 1 : 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          animate={
                            isHighlighted
                              ? { scale: [1, 1.08, 1], boxShadow: ["0 0 0px transparent", "0 0 12px rgba(0,208,132,0.3)", "0 0 0px transparent"] }
                              : {}
                          }
                          transition={isHighlighted ? { duration: 0.8 } : { duration: 0.2 }}
                          className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
                            used
                              ? "cursor-not-allowed border-border/20 bg-surface/20 text-text-muted/30 opacity-50"
                              : `${item.color} cursor-pointer hover:shadow-md`
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          {item.label}
                        </motion.button>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Custom input */}
              <div className="relative flex gap-2.5">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder=""
                    maxLength={60}
                    disabled={canvas.length >= 8}
                    className="w-full rounded-xl border border-border bg-surface/50 px-5 py-3 text-sm text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 disabled:opacity-40"
                  />
                  {!customInput && (
                    <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-sm text-text-muted">
                      {typedHint}
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                        className="ml-px inline-block h-3.5 w-px bg-text-muted align-middle"
                      />
                    </span>
                  )}
                </div>
                <button
                  onClick={addCustom}
                  disabled={!customInput.trim() || canvas.length >= 8}
                  className="flex items-center gap-1.5 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-background transition-all hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <HiOutlinePlus className="h-4 w-4" />
                  Add
                </button>
              </div>
            </div>
          </>
        )}

        {/* Canvas */}
        <div
          className={`relative min-h-[140px] rounded-2xl border-2 border-dashed p-5 transition-all duration-700 ${
            completed
              ? "border-primary/40 bg-primary/5 shadow-[0_0_60px_rgba(0,208,132,0.12)]"
              : building
                ? "border-accent/40 bg-accent/5"
                : "border-border/40 bg-surface/30"
          }`}
        >
          {canvas.length === 0 && !building && !completed && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-text-muted">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <HiOutlineSparkles className="mb-2 h-7 w-7 opacity-40" />
              </motion.div>
              <p className="text-xs font-medium">Your ideas will land here</p>
              <motion.p
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-1 text-[10px]"
              >
                Tap the buttons above to get started
              </motion.p>
            </div>
          )}

          {/* Building animation */}
          {building && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-6"
            >
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 0px rgba(0,208,132,0)",
                    "0 0 60px rgba(0,208,132,0.4)",
                    "0 0 0px rgba(0,208,132,0)",
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent"
              >
                <HiOutlineSparkles className="h-8 w-8 text-background" />
              </motion.div>
              <p className="text-sm font-semibold text-text-primary">
                Processing your ideas...
              </p>
              <p className="mt-1 text-xs text-text-muted">
                Crafting the perfect solution
              </p>
            </motion.div>
          )}

          {/* Canvas items */}
          {!building && !completed && (
            <div className="flex flex-wrap justify-center gap-2.5">
              <AnimatePresence mode="popLayout">
                {canvas.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0, rotate: -15 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className={`group relative flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium ${item.color}`}
                    >
                      {Icon && <Icon className="h-3.5 w-3.5" />}
                      {item.label}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-1 rounded-full p-0.5 opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <HiOutlineXMark className="h-3 w-3" />
                      </button>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}

          {/* Completed */}
          {completed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring" }}
              className="py-3 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20"
              >
                <HiOutlineRocketLaunch className="h-6 w-6 text-primary" />
              </motion.div>

              <h3 className="text-base font-bold font-[family-name:var(--font-display)]">
                We heard <GradientText>every idea</GradientText>.
              </h3>

              <p className="mx-auto mt-1.5 max-w-sm text-xs leading-relaxed text-text-secondary">
                {canvas.length} ideas captured. Each one becomes a building
                block of your custom system.
              </p>

              <div className="mx-auto mt-3 flex max-w-xs flex-wrap justify-center gap-1.5">
                {canvas.map((item) => (
                  <span
                    key={item.id}
                    className="rounded-md bg-primary/10 px-2 py-0.5 text-[9px] font-medium text-primary"
                  >
                    {item.label}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
                <Button href="/contact" variant="primary">
                  Let&apos;s Make It Real
                </Button>
                <button
                  onClick={reset}
                  className="flex items-center gap-1.5 text-xs text-text-muted transition-colors hover:text-primary"
                >
                  <HiOutlineArrowPath className="h-3 w-3" />
                  Play Again
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Build button */}
        {canvas.length >= 3 && !building && !completed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center"
          >
            <motion.button
              onClick={buildSolution}
              animate={{ boxShadow: ["0 0 0px rgba(0,208,132,0)", "0 0 20px rgba(0,208,132,0.3)", "0 0 0px rgba(0,208,132,0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent px-5 py-2.5 text-xs font-semibold text-background transition-all"
            >
              <HiOutlineSparkles className="h-4 w-4" />
              Build My Solution
            </motion.button>
          </motion.div>
        )}

        {canvas.length > 0 && canvas.length < 3 && !building && !completed && (
          <p className="mt-3 text-center text-[10px] text-text-muted">
            Add {3 - canvas.length} more idea{3 - canvas.length > 1 ? "s" : ""} to build your solution
          </p>
        )}
      </div>
    </div>
  );
}
