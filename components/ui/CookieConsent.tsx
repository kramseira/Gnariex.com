"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineShieldCheck } from "react-icons/hi2";

const STORAGE_KEY = "gnariex-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // Small delay so it doesn't compete with page load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-lg"
        >
          <div className="overflow-hidden rounded-xl border border-white/8 bg-surface/90 p-4 shadow-2xl backdrop-blur-xl">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <HiOutlineShieldCheck className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-text-primary">
                  We value your privacy
                </p>
                <p className="mt-1 text-xs leading-relaxed text-text-muted">
                  We use cookies to enhance your browsing experience and analyze
                  site traffic. By clicking &quot;Accept&quot;, you consent to
                  our use of cookies.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <button
                    onClick={handleAccept}
                    className="rounded-lg bg-primary px-3.5 py-1.5 text-xs font-semibold text-background transition-all hover:bg-primary-dark hover:shadow-[0_0_16px_rgba(0,208,132,0.25)]"
                  >
                    Accept
                  </button>
                  <button
                    onClick={handleDecline}
                    className="rounded-lg border border-white/10 px-3.5 py-1.5 text-xs font-medium text-text-secondary transition-all hover:border-white/20 hover:text-text-primary"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
