"use client";

import { cn } from "@/lib/utils";

interface GlowEffectProps {
  className?: string;
  children: React.ReactNode;
  glowColor?: string;
  intensity?: "low" | "medium" | "high";
}

export function GlowEffect({
  className,
  children,
  glowColor = "rgba(98, 82, 215, 0.5)",
  intensity = "medium",
}: GlowEffectProps) {
  const intensityMap = {
    low: "0 0 20px",
    medium: "0 0 30px",
    high: "0 0 50px",
  };

  return (
    <div
      className={cn("relative", className)}
      style={{
        filter: `drop-shadow(${intensityMap[intensity]} ${glowColor})`,
      }}
    >
      {children}
    </div>
  );
}

interface GlowBorderProps {
  className?: string;
  children: React.ReactNode;
  animated?: boolean;
}

export function GlowBorder({
  className,
  children,
  animated = false,
}: GlowBorderProps) {
  return (
    <div className={cn("relative p-[1px] rounded-xl overflow-hidden", className)}>
      <div
        className={cn(
          "absolute inset-0 rounded-xl",
          animated && "animated-border"
        )}
        style={{
          background: animated
            ? undefined
            : "linear-gradient(135deg, rgba(98, 82, 215, 0.5) 0%, rgba(78, 65, 171, 0.2) 50%, rgba(98, 82, 215, 0.5) 100%)",
        }}
      />
      <div className="relative bg-midnight-light rounded-xl h-full">{children}</div>
    </div>
  );
}
