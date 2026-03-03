"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-background hover:bg-primary-dark hover:shadow-[0_0_20px_rgba(0,208,132,0.3)]",
    secondary:
      "bg-secondary text-white hover:bg-secondary/90 hover:shadow-[0_0_20px_rgba(6,147,227,0.3)]",
    outline:
      "border border-border-light text-text-primary hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(0,208,132,0.1)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
