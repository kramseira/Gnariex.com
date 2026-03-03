interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
}

export default function GradientText({
  children,
  className = "",
  as: Tag = "span",
}: GradientTextProps) {
  return <Tag className={`gradient-text ${className}`}>{children}</Tag>;
}
