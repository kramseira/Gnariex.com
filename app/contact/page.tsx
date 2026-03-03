"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from "react-icons/hi2";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";
import { companyInfo, services } from "@/lib/data";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Contact
            </span>
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl md:text-6xl font-[family-name:var(--font-display)]">
              Let&apos;s <GradientText>Connect</GradientText>
            </h1>
            <p className="mt-4 text-base text-text-secondary sm:mt-6 sm:text-lg">
              Have a project in mind? We&apos;d love to hear about it. Get in
              touch and let&apos;s start building something great together.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Contact Form & Info */}
      <SectionWrapper className="bg-surface/30">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6">
            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <HiOutlineEnvelope className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="mt-1 text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <HiOutlinePhone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="mt-1 text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <HiOutlineMapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    Remote-First Company
                    <br />
                    Serving Clients Worldwide
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <GlassCard hover={false}>
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-3xl">&#10003;</span>
                  </div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-display)]">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-text-secondary">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                  <div className="mt-6">
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-medium"
                      >
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-primary"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.title} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-primary"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
