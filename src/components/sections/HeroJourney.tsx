"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Lightbulb,
  Map,
  PenTool,
  Code2,
  Rocket,
  MessageCircle,
} from "lucide-react";

const STEPS = [
  {
    title: "Fikir",
    detail: "Hedefinizi dinliyoruz",
    icon: Lightbulb,
  },
  {
    title: "Plan",
    detail: "Kapsamı birlikte netleştiriyoruz",
    icon: Map,
  },
  {
    title: "Tasarım",
    detail: "Geri bildiriminizle şekilleniyor",
    icon: PenTool,
  },
  {
    title: "Geliştirme",
    detail: "Haftalık demolarla ilerliyoruz",
    icon: Code2,
  },
  {
    title: "Canlıya Alma",
    detail: "Ürünü birlikte yayınlıyoruz",
    icon: Rocket,
  },
] as const;

export function HeroJourney() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-container/80 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-48 w-48 rounded-full bg-primary-container/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 -bottom-20 h-56 w-56 rounded-full bg-secondary-container/20 blur-3xl" />

      {/* Header */}
      <div className="relative flex flex-col gap-3 border-b border-white/[0.06] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            {!reduced ? (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-container opacity-60" />
            ) : null}
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-container" />
          </span>
          <div>
            <p className="font-[family-name:var(--font-headline)] text-sm font-semibold text-on-surface">
              Birlikte Üretim Akışı
            </p>
            <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-on-surface-variant uppercase">
              Siz + MIRVATE • Her adımda yan yana
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 self-start rounded-full border border-primary-container/25 bg-primary-container/10 px-3 py-1.5 sm:self-auto">
          <MessageCircle className="h-3.5 w-3.5 text-primary-container" />
          <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-primary uppercase">
            Sürece dahilsiniz
          </span>
        </div>
      </div>

      {/* Journey track */}
      <div className="relative px-4 py-8 sm:px-8 sm:py-10">
        {/* Connecting line (desktop) */}
        <div className="pointer-events-none absolute top-[4.75rem] right-12 left-12 hidden h-px bg-gradient-to-r from-transparent via-primary-container/40 to-transparent md:block" />

        {/* Animated pulse traveling along the line */}
        {!reduced ? (
          <motion.div
            className="pointer-events-none absolute top-[4.6rem] hidden h-2 w-2 rounded-full bg-primary-container shadow-[0_0_16px_rgba(0,240,255,0.8)] md:block"
            initial={{ left: "8%" }}
            animate={{ left: ["8%", "92%", "8%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        ) : null}

        <ol className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5 md:gap-3">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.title}
                initial={reduced ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: reduced ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                <div className="flex h-full flex-col items-center rounded-xl border border-white/[0.06] bg-surface-container-low/80 p-4 text-center transition-colors duration-300 hover:border-primary-container/30 hover:bg-surface-container-high/80 md:items-center">
                  <motion.div
                    className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-surface-container-highest text-primary-container shadow-[0_0_24px_-8px_rgba(0,240,255,0.35)]"
                    whileHover={reduced ? undefined : { scale: 1.06 }}
                    animate={
                      reduced
                        ? undefined
                        : {
                            boxShadow: [
                              "0 0 20px -8px rgba(0,240,255,0.2)",
                              "0 0 28px -6px rgba(0,240,255,0.45)",
                              "0 0 20px -8px rgba(0,240,255,0.2)",
                            ],
                          }
                    }
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      delay: index * 0.35,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  <span className="mb-1 font-[family-name:var(--font-mono)] text-[10px] tracking-widest text-primary uppercase">
                    0{index + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-headline)] text-base font-semibold text-on-surface">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-5 text-on-surface-variant">
                    {step.detail}
                  </p>
                </div>

                {/* Mobile connector */}
                {index < STEPS.length - 1 ? (
                  <div className="mx-auto my-1 h-4 w-px bg-gradient-to-b from-primary-container/50 to-transparent md:hidden" />
                ) : null}
              </motion.li>
            );
          })}
        </ol>

        {/* Bottom collaboration strip */}
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-6 flex flex-col items-center justify-between gap-3 rounded-xl border border-white/[0.05] bg-surface-container-lowest/60 px-4 py-3 sm:flex-row sm:px-5"
        >
          <p className="text-center text-[13px] text-on-surface-variant sm:text-left">
            Kararlar, demolar ve revizyonlar{" "}
            <span className="text-on-surface">sizinle birlikte</span> ilerler.
          </p>
          <div className="flex items-center gap-2">
            {["Siz", "MIRVATE"].map((label, i) => (
              <motion.span
                key={label}
                className={
                  i === 0
                    ? "rounded-full border border-secondary/40 bg-secondary/15 px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-secondary uppercase"
                    : "rounded-full border border-primary-container/40 bg-primary-container/15 px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-primary-container uppercase"
                }
                animate={
                  reduced
                    ? undefined
                    : { y: [0, -2, 0] }
                }
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              >
                {label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
