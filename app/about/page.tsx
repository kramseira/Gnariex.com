"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { stats } from "@/lib/data";

const team = [
  {
    name: "Alex Mercer",
    role: "Founder & CEO",
    bio: "Visionary technologist with 10+ years building enterprise software solutions.",
  },
  {
    name: "Jordan Lee",
    role: "Lead Engineer",
    bio: "Full-stack architect specializing in cloud-native applications and scalable systems.",
  },
  {
    name: "Maya Singh",
    role: "Head of Design",
    bio: "UX strategist creating intuitive interfaces that users love.",
  },
  {
    name: "Chris Nakamura",
    role: "DevOps Lead",
    bio: "Infrastructure expert ensuring 99.9% uptime across all client deployments.",
  },
];

const values = [
  {
    title: "Innovation First",
    description:
      "We stay ahead of the curve, adopting and mastering new technologies to deliver cutting-edge solutions.",
  },
  {
    title: "Quality Over Quantity",
    description:
      "Every line of code we write is crafted with care. We believe in doing fewer things exceptionally well.",
  },
  {
    title: "Client Partnership",
    description:
      "We don't just build software — we become an extension of your team, aligned with your goals and vision.",
  },
  {
    title: "Transparent Process",
    description:
      "From project kickoff to deployment, you'll have full visibility into progress, decisions, and timelines.",
  },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl md:text-6xl font-[family-name:var(--font-display)]">
              Building the <GradientText>Future</GradientText> of Technology
            </h1>
            <p className="mt-4 text-base text-text-secondary leading-relaxed sm:mt-6 sm:text-lg">
              Gnariex is a team of passionate engineers, designers, and
              strategists dedicated to delivering next-level technology
              solutions that transform businesses.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper className="bg-surface/30">
        <div className="grid gap-8 md:grid-cols-2">
          <GlassCard>
            <h2 className="text-2xl font-bold font-[family-name:var(--font-display)]">
              Our <GradientText>Mission</GradientText>
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              To empower businesses with advanced technology solutions that are
              secure, scalable, and built for the future. We bridge the gap
              between complex technology and practical business outcomes.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-bold font-[family-name:var(--font-display)]">
              Our <GradientText>Vision</GradientText>
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              To be the trusted technology partner for businesses worldwide,
              known for exceptional quality, innovative thinking, and
              solutions that consistently exceed expectations.
            </p>
          </GlassCard>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-5xl font-[family-name:var(--font-display)]">
            Our <GradientText>Values</GradientText>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <h3 className="text-lg font-semibold text-primary">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper className="bg-surface/30">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl font-[family-name:var(--font-display)]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper>
        <div className="mb-12 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Our Team
          </span>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-5xl font-[family-name:var(--font-display)]">
            Meet the <GradientText>Experts</GradientText>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <GlassCard className="text-center h-full">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-4 font-semibold">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                  {member.bio}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-surface/30">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl font-[family-name:var(--font-display)]">
            Want to work with us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            We&apos;re always looking for exciting projects and partnerships.
            Let&apos;s build something great together.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
