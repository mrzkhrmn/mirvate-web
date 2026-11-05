"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

type ParallaxBackdropProps = {
  className?: string;
  /** Stronger glow for hero; softer for mid-page sections */
  intensity?: "hero" | "section";
};

export function ParallaxBackdrop({
  className,
  intensity = "section",
}: ParallaxBackdropProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 28,
    restDelta: 0.001,
  });

  const farY = useTransform(smooth, [0, 1], reduced ? [0, 0] : [-80, 120]);
  const midY = useTransform(smooth, [0, 1], reduced ? [0, 0] : [-40, 70]);
  const nearY = useTransform(smooth, [0, 1], reduced ? [0, 0] : [-20, 40]);
  const gridY = useTransform(smooth, [0, 1], reduced ? [0, 0] : [0, 60]);
  const rotate = useTransform(smooth, [0, 1], reduced ? [0, 0] : [-4, 6]);

  const isHero = intensity === "hero";
  const cyan = isHero ? "rgba(0,240,255,0.18)" : "rgba(0,240,255,0.1)";
  const violet = isHero ? "rgba(49,49,192,0.2)" : "rgba(49,49,192,0.1)";

  return (
    <div
      ref={ref}
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      {/* Soft base wash */}
      <div
        className="absolute inset-0"
        style={{
          background: isHero
            ? `radial-gradient(ellipse at 30% 20%, ${cyan}, transparent 55%), radial-gradient(ellipse at 80% 75%, ${violet}, transparent 50%)`
            : `radial-gradient(ellipse at 70% 0%, ${cyan}, transparent 50%)`,
        }}
      />

      {/* Far orb */}
      <motion.div
        className="absolute -top-[15%] left-[8%] h-[420px] w-[420px] rounded-full blur-[100px]"
        style={{
          y: farY,
          background: `radial-gradient(circle, ${cyan} 0%, transparent 70%)`,
        }}
      />

      {/* Mid orb */}
      <motion.div
        className="absolute top-[35%] -right-[10%] h-[480px] w-[480px] rounded-full blur-[110px]"
        style={{
          y: midY,
          rotate,
          background: `radial-gradient(circle, ${violet} 0%, transparent 68%)`,
        }}
      />

      {/* Near accent */}
      <motion.div
        className="absolute bottom-[-5%] left-[35%] h-[280px] w-[280px] rounded-full blur-[80px]"
        style={{
          y: nearY,
          background: `radial-gradient(circle, rgba(0,219,233,0.12) 0%, transparent 70%)`,
        }}
      />

      {/* Slow grid / horizon lines */}
      <motion.div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          y: gridY,
          backgroundImage:
            "linear-gradient(to right, rgba(227,226,230,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(227,226,230,0.25) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />

      {/* Soft edge fade */}
      {isHero ? (
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface-container-lowest to-transparent" />
      ) : null}
    </div>
  );
}
