"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineCheckCircle,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineCloudArrowUp,
  HiOutlineChartBarSquare,
  HiOutlineDevicePhoneMobile,
  HiOutlineLightBulb,
  HiArrowRight,
  HiArrowLeft,
} from "react-icons/hi2";
import GradientText from "@/components/ui/GradientText";
import { companyInfo } from "@/lib/data";

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICE_TILES = [
  { icon: HiOutlineGlobeAlt,         label: "Advanced Website" },
  { icon: HiOutlineShieldCheck,      label: "Client Portal" },
  { icon: HiOutlineCloudArrowUp,     label: "Cloud System" },
  { icon: HiOutlineChartBarSquare,   label: "Admin Dashboard" },
  { icon: HiOutlineDevicePhoneMobile,label: "Mobile App" },
  { icon: HiOutlineLightBulb,        label: "IT Consulting" },
];

const BUDGET_OPTIONS = ["< $5K", "$5K – $15K", "$15K – $50K", "$50K+", "Not sure yet"];

const TRUST_ITEMS = [
  { value: "< 24h",  label: "Avg. Response Time" },
  { value: "150+",   label: "Projects Delivered" },
  { value: "80+",    label: "Happy Clients" },
  { value: "99.9%",  label: "Uptime Guarantee" },
];

const STEPS = ["Service", "Details", "Project"];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [step, setStep]           = useState(0);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [service,  setService]  = useState("");
  const [name,     setName]     = useState("");
  const [email,    setEmail]    = useState("");
  const [phone,    setPhone]    = useState("");
  const [budget,   setBudget]   = useState("");
  const [message,  setMessage]  = useState("");

  // Anti-spam
  const [honeypot,    setHoneypot]    = useState("");
  const [formLoadTime]               = useState(() => Date.now());
  const [spamBlocked, setSpamBlocked] = useState(false);

  function go(next: number) {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Honeypot: bots fill hidden fields
    if (honeypot) { setSpamBlocked(true); return; }
    // Time check: bots submit too fast (< 3 s)
    if (Date.now() - formLoadTime < 3000) { setSpamBlocked(true); return; }
    setSubmitted(true);
  }

  const progress = ((step + 1) / STEPS.length) * 100;

  return (
    <div className="pt-20">
      <div className="grid lg:grid-cols-[420px_1fr]">

        {/* ── Left Panel ──────────────────────────────────────────────── */}
        <div className="dot-grid relative flex flex-col overflow-hidden border-b border-border bg-surface px-6 py-10 lg:min-h-screen lg:justify-between lg:border-b-0 lg:border-r lg:px-10 lg:py-24">
          {/* Gradient glow */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Get in Touch
              </span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-tight lg:text-4xl">
                Let&apos;s Build<br />
                <GradientText>Something Great</GradientText>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                Tell us about your project and we&apos;ll get back to you
                within one business day with a clear path forward.
              </p>
            </motion.div>

            {/* Trust metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 grid grid-cols-2 gap-3"
            >
              {TRUST_ITEMS.map((t) => (
                <div key={t.label} className="rounded-xl border border-border bg-surface-light p-4">
                  <p className="font-display text-xl font-bold text-primary">{t.value}</p>
                  <p className="mt-0.5 text-xs text-text-muted">{t.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 space-y-4"
            >
              {[
                { icon: HiOutlineEnvelope, href: `mailto:${companyInfo.email}`, label: companyInfo.email },
                { icon: HiOutlinePhone,    href: `tel:${companyInfo.phone}`,    label: companyInfo.phone },
                { icon: HiOutlineMapPin,   href: null,                          label: "Remote · Serving Worldwide" },
              ].map(({ icon: Icon, href, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-text-secondary">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  {href ? (
                    <a href={href} className="transition-colors hover:text-primary">{label}</a>
                  ) : (
                    <span>{label}</span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Testimonial snippet */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mt-10 hidden rounded-xl border border-border bg-surface-light p-5 lg:block"
          >
            <div className="absolute -top-3 left-5 font-display text-4xl leading-none text-primary/40">&ldquo;</div>
            <p className="text-sm italic leading-relaxed text-text-secondary">
              Gnariex transformed our platform in record time. Their process is clean, communication is excellent, and the product exceeded expectations.
            </p>
            <footer className="mt-3 text-xs font-medium text-text-muted">
              — Sarah Chen, CTO · TechVentures Inc.
            </footer>
          </motion.blockquote>
        </div>

        {/* ── Right Panel (Form) ──────────────────────────────────────── */}
        <div className="flex items-center justify-center px-5 py-10 lg:px-16 lg:py-24">
          <div className="w-full max-w-xl">

            {spamBlocked ? (
              /* ── Spam blocked ── */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                  <HiOutlineShieldCheck className="h-10 w-10 text-accent" />
                </div>
                <h2 className="mt-6 font-display text-3xl font-bold">Submission Blocked</h2>
                <p className="mt-3 text-text-secondary">
                  Our spam filter flagged this submission. If you&apos;re human, please try again.
                </p>
                <button
                  onClick={() => { setSpamBlocked(false); setStep(0); setHoneypot(""); }}
                  className="mt-8 text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Try again
                </button>
              </motion.div>
            ) : submitted ? (
              /* ── Success State ── */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <HiOutlineCheckCircle className="h-10 w-10 text-primary" />
                </div>
                <h2 className="mt-6 font-display text-3xl font-bold">Message Sent!</h2>
                <p className="mt-3 text-text-secondary">
                  Thanks for reaching out, <span className="font-medium text-text-primary">{name}</span>. We&apos;ll be in touch within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setStep(0); setService(""); setBudget(""); setMessage(""); }}
                  className="mt-8 text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                {/* Progress */}
                <div className="mb-10">
                  <div className="mb-3 flex items-center justify-between">
                    {STEPS.map((s, i) => (
                      <div key={s} className="flex items-center gap-2">
                        <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors duration-300 ${
                          i < step  ? "bg-primary text-background" :
                          i === step ? "border-2 border-primary text-primary" :
                          "border-2 border-border text-text-muted"
                        }`}>
                          {i < step ? <HiOutlineCheckCircle className="h-4 w-4" /> : i + 1}
                        </div>
                        <span className={`text-xs font-medium transition-colors duration-300 ${i === step ? "text-text-primary" : "text-text-muted"}`}>
                          {s}
                        </span>
                        {i < STEPS.length - 1 && (
                          <div className="mx-3 hidden h-px w-12 bg-border sm:block" />
                        )}
                      </div>
                    ))}
                  </div>
                  {/* Progress bar */}
                  <div className="h-1 w-full overflow-hidden rounded-full bg-border">
                    <motion.div
                      className="h-full rounded-full bg-linear-to-r from-primary via-secondary to-accent"
                      initial={false}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  </div>
                </div>

                {/* Step content */}
                <form onSubmit={handleSubmit}>
                  {/* Honeypot — visually hidden, only bots fill this */}
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={e => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
                  />
                  <AnimatePresence mode="wait" custom={direction}>

                    {/* ── Step 0: Service selection ── */}
                    {step === 0 && (
                      <motion.div
                        key="step0"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <h2 className="font-display text-2xl font-bold">What are you building?</h2>
                        <p className="mt-2 text-sm text-text-secondary">Select the service that best fits your project.</p>

                        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                          {SERVICE_TILES.map(({ icon: Icon, label }) => (
                            <button
                              key={label}
                              type="button"
                              onClick={() => setService(label)}
                              className={`group flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all duration-200 ${
                                service === label
                                  ? "border-primary bg-primary/10 text-primary"
                                  : "border-border bg-surface hover:border-border-light hover:bg-surface-light text-text-secondary hover:text-text-primary"
                              }`}
                            >
                              <Icon className="h-6 w-6" />
                              <span className="text-xs font-medium leading-tight">{label}</span>
                            </button>
                          ))}
                        </div>

                        <div className="mt-8 flex justify-end">
                          <button
                            type="button"
                            onClick={() => go(1)}
                            disabled={!service}
                            className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            Continue <HiArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* ── Step 1: Contact details ── */}
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <h2 className="font-display text-2xl font-bold">How can we reach you?</h2>
                        <p className="mt-2 text-sm text-text-secondary">We&apos;ll never share your info with anyone.</p>

                        <div className="mt-6 space-y-4">
                          <div>
                            <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Full Name <span className="text-primary">*</span></label>
                            <input
                              id="name" name="name" type="text" required
                              value={name} onChange={e => setName(e.target.value)}
                              placeholder="John Doe"
                              className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-primary"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email Address <span className="text-primary">*</span></label>
                            <input
                              id="email" name="email" type="email" required
                              value={email} onChange={e => setEmail(e.target.value)}
                              placeholder="john@company.com"
                              className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-primary"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">Phone <span className="text-text-muted font-normal">(optional)</span></label>
                            <input
                              id="phone" name="phone" type="tel"
                              value={phone} onChange={e => setPhone(e.target.value)}
                              placeholder="+1 (555) 000-0000"
                              className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-primary"
                            />
                          </div>
                        </div>

                        <div className="mt-8 flex justify-between">
                          <button type="button" onClick={() => go(0)} className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary">
                            <HiArrowLeft className="h-4 w-4" /> Back
                          </button>
                          <button
                            type="button"
                            onClick={() => go(2)}
                            disabled={!name || !email}
                            className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            Continue <HiArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* ── Step 2: Project details ── */}
                    {step === 2 && (
                      <motion.div
                        key="step2"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <h2 className="font-display text-2xl font-bold">Tell us more</h2>
                        <p className="mt-2 text-sm text-text-secondary">The more context, the better we can prepare.</p>

                        <div className="mt-6 space-y-5">
                          {/* Budget */}
                          <div>
                            <label className="mb-2 block text-sm font-medium">Estimated Budget</label>
                            <div className="flex flex-wrap gap-2">
                              {BUDGET_OPTIONS.map((b) => (
                                <button
                                  key={b} type="button"
                                  onClick={() => setBudget(b)}
                                  className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                                    budget === b
                                      ? "border-primary bg-primary/10 text-primary"
                                      : "border-border bg-surface text-text-secondary hover:border-border-light hover:text-text-primary"
                                  }`}
                                >
                                  {b}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Message */}
                          <div>
                            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Project Details <span className="text-primary">*</span></label>
                            <textarea
                              id="message" name="message" required rows={5}
                              value={message} onChange={e => setMessage(e.target.value)}
                              placeholder="Describe your project, goals, timeline, and any specific requirements..."
                              className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-primary"
                            />
                          </div>
                        </div>

                        <div className="mt-8 flex justify-between">
                          <button type="button" onClick={() => go(1)} className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary">
                            <HiArrowLeft className="h-4 w-4" /> Back
                          </button>
                          <button
                            type="submit"
                            disabled={!message}
                            className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            Send Message <HiArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
