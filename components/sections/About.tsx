"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-surface/30">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Text */}
        <div>
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            About Gnariex
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl font-[family-name:var(--font-display)]">
            Why Choose <GradientText>Gnariex</GradientText>?
          </h2>
          <p className="mt-6 text-text-secondary leading-relaxed">
            We are a team of passionate engineers and designers dedicated to
            building technology that makes a difference. With expertise spanning
            web development, cloud architecture, and enterprise solutions, we
            transform complex challenges into elegant digital experiences.
          </p>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Every project we take on is built with scalability, security, and
            performance at its core. We don&apos;t just build software — we build
            solutions that grow with your business.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass glow-hover rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-primary md:text-4xl font-[family-name:var(--font-display)]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
