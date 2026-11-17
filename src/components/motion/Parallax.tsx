"use client";

import { useRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

type ParallaxSectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
};

/** Section wrapper that provides a scroll root for nested Parallax layers. */
export function ParallaxSection({
  children,
  className,
  ...props
}: ParallaxSectionProps) {
  return (
    <section className={cn("relative overflow-hidden", className)} {...props}>
      {children}
    </section>
  );
}

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Max vertical travel in px (positive = moves down as you scroll). */
  offset?: number;
  /** Multiplier for travel distance (1 = full offset). */
  speed?: number;
};

export function Parallax({
  children,
  className,
  offset = 24,
  speed = 1,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    restDelta: 0.001,
  });

  const travel = offset * speed;
  const y = useTransform(
    smooth,
    [0, 1],
    reduced ? [0, 0] : [-travel, travel],
  );

  return (
    <motion.div ref={ref} className={cn("will-change-transform", className)} style={{ y }}>
      {children}
    </motion.div>
  );
}
