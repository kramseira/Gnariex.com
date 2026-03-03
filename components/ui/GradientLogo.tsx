"use client";

interface GradientLogoProps {
  className?: string;
}

export default function GradientLogo({ className = "h-14" }: GradientLogoProps) {
  return (
    <div
      className={`${className} aspect-[18/5]`}
      style={{
        background: "linear-gradient(135deg, #00d084, #0693e3, #9b51e0)",
        WebkitMaskImage: "url(/logo.png)",
        maskImage: "url(/logo.png)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "left center",
        maskPosition: "left center",
      }}
    />
  );
}
