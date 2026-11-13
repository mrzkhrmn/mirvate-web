"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ParallaxBackdrop } from "@/components/motion/ParallaxBackdrop";

export function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative -mt-20 flex min-h-dvh w-full items-center overflow-hidden bg-surface-container-lowest">
      <ParallaxBackdrop intensity="hero" />

      <Container className="relative z-10 flex w-full flex-col items-center pt-32 pb-24 text-center lg:pt-40 lg:pb-28">
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight text-on-surface sm:text-6xl lg:text-7xl"
        >
          MIRVATE
        </motion.p>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-5 font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.22em] text-primary uppercase"
        >
          Özel Yazılım · Gömülü Sistem · Elektronik Kart
        </motion.p>

        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-3xl leading-[1.12] font-bold tracking-tight text-on-surface md:text-5xl lg:text-[56px] lg:leading-[1.08]"
        >
          Geleceğin teknolojisini{" "}
          <span className="text-gradient-brand">birlikte inşa ediyoruz.</span>
        </motion.h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-6 max-w-xl text-base leading-7 text-on-surface-variant md:text-lg"
        >
          Özel yazılım, gömülü sistem ve elektronik kart tasarımını şeffaf
          sprintlerle, omuz omuza hayata geçiriyoruz.
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.48 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary-container px-7 font-[family-name:var(--font-headline)] text-sm font-semibold text-on-primary-container shadow-[0_0_32px_rgba(0,240,255,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Projeye Başlayın
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/#birlikte-uretim"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-surface-container/80 px-6 font-[family-name:var(--font-headline)] text-sm font-semibold text-on-surface backdrop-blur-md transition-colors hover:bg-surface-container-high"
          >
            Nasıl Çalışıyoruz
          </Link>
        </motion.div>

        <motion.a
          href="/#birlikte-uretim"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-16 flex flex-col items-center gap-2 text-on-surface-variant"
        >
          <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.25em] uppercase">
            Kaydırın
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </motion.a>
      </Container>
    </section>
  );
}
