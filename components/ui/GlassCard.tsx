"use client";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`glass rounded-xl p-6 ${hover ? "glow-hover" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
