"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineMegaphone,
  HiOutlineCog6Tooth,
  HiOutlineLockClosed,
} from "react-icons/hi2";

const STORAGE_KEY = "gnariex-cookie-consent";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  functional: false,
};

const ALL_ACCEPTED: CookiePreferences = {
  essential: true,
  analytics: true,
  marketing: true,
  functional: true,
};

const CATEGORIES = [
  {
    key: "essential" as const,
    label: "Essential",
    description: "Required for the website to function properly.",
    icon: HiOutlineLockClosed,
    locked: true,
  },
  {
    key: "analytics" as const,
    label: "Analytics",
    description: "Help us understand how visitors interact with our site.",
    icon: HiOutlineChartBar,
    locked: false,
  },
  {
    key: "marketing" as const,
    label: "Marketing",
    description: "Used to deliver relevant ads and track campaigns.",
    icon: HiOutlineMegaphone,
    locked: false,
  },
  {
    key: "functional" as const,
    label: "Functional",
    description: "Enable enhanced features like chat and preferences.",
    icon: HiOutlineCog6Tooth,
    locked: false,
  },
];

/* ─── Toggle Switch ──────────────────────────────────────────────────── */

function Toggle({
  checked,
  onChange,
  disabled,
}: {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors duration-200 ${
        disabled
          ? "cursor-not-allowed opacity-60"
          : "cursor-pointer"
      } ${checked ? "bg-primary" : "bg-white/10"}`}
    >
      <span
        className={`inline-block h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
          checked ? "translate-x-4.5" : "translate-x-0.75"
        }`}
      />
    </button>
  );
}

/* ─── Cookie Consent ─────────────────────────────────────────────────── */

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function saveAndClose(prefs: CookiePreferences) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setVisible(false);
  }

  function handleAcceptAll() {
    saveAndClose(ALL_ACCEPTED);
  }

  function handleDeclineAll() {
    saveAndClose(DEFAULT_PREFERENCES);
  }

  function handleSavePreferences() {
    saveAndClose(preferences);
  }

  function toggleCategory(key: keyof CookiePreferences) {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-3 left-3 right-3 z-50 mx-auto max-w-lg sm:bottom-4 sm:left-4 sm:right-4"
        >
          <div className="overflow-hidden rounded-xl border border-white/8 bg-surface/90 shadow-2xl backdrop-blur-xl">
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <HiOutlineShieldCheck className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-text-primary">
                    We value your privacy
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-text-muted">
                    We use cookies to enhance your browsing experience and
                    analyze site traffic. Customize your preferences or accept
                    all cookies.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-3 flex flex-wrap items-center gap-2 pl-0 sm:pl-11">
                <button
                  onClick={handleAcceptAll}
                  className="rounded-lg bg-primary px-3.5 py-1.5 text-xs font-semibold text-background transition-all hover:bg-primary-dark hover:shadow-[0_0_16px_rgba(0,208,132,0.25)]"
                >
                  Accept All
                </button>
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="rounded-lg border border-white/10 px-3.5 py-1.5 text-xs font-medium text-text-secondary transition-all hover:border-white/20 hover:text-text-primary"
                >
                  {expanded ? "Hide" : "Customize"}
                </button>
                <button
                  onClick={handleDeclineAll}
                  className="rounded-lg border border-white/10 px-3.5 py-1.5 text-xs font-medium text-text-secondary transition-all hover:border-white/20 hover:text-text-primary"
                >
                  Decline All
                </button>
              </div>
            </div>

            {/* Expandable category toggles */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-white/6 px-4 pt-3 pb-4">
                    <div className="space-y-2.5">
                      {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        return (
                          <div
                            key={cat.key}
                            className="flex items-center justify-between gap-3 rounded-lg border border-white/5 bg-white/2 px-3 py-2.5"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <Icon className="h-3.5 w-3.5 shrink-0 text-text-muted" />
                              <div className="min-w-0">
                                <p className="text-xs font-medium text-text-primary">
                                  {cat.label}
                                  {cat.locked && (
                                    <span className="ml-1.5 text-[10px] font-normal text-text-muted">
                                      (Required)
                                    </span>
                                  )}
                                </p>
                                <p className="text-[10px] leading-relaxed text-text-muted">
                                  {cat.description}
                                </p>
                              </div>
                            </div>
                            <Toggle
                              checked={preferences[cat.key]}
                              onChange={() => toggleCategory(cat.key)}
                              disabled={cat.locked}
                            />
                          </div>
                        );
                      })}
                    </div>

                    <button
                      onClick={handleSavePreferences}
                      className="mt-3 w-full rounded-lg bg-primary/10 py-2 text-xs font-semibold text-primary transition-all hover:bg-primary/20"
                    >
                      Save Preferences
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
