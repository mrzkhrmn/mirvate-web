"use client";

import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { HeroJourney } from "@/components/sections/HeroJourney";

export function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative -mt-20 w-full overflow-hidden bg-surface-container-lowest">
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-container/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 right-10 h-[400px] w-[500px] rounded-full bg-secondary-container/20 blur-[130px]" />

      <Container className="relative flex flex-col items-center pt-36 pb-24 lg:pt-44 lg:pb-32">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-surface-container-high/70 px-4 py-1 shadow-[0_0_24px_-4px_rgba(0,240,255,0.15)] backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-container opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-container" />
          </span>
          <span className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-widest text-primary">
            CRM • B2B • B2C • Ürün Mühendisliği
          </span>
        </motion.div>

        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="max-w-4xl text-center font-[family-name:var(--font-display)] text-4xl leading-[1.15] font-bold tracking-tight text-on-surface md:text-6xl lg:text-[72px] lg:leading-[80px]"
        >
          Geleceğin Teknolojisini{" "}
          <span className="text-gradient-brand">Birlikte İnşa Ediyoruz.</span>
        </motion.h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-6 max-w-2xl text-center text-lg leading-7 text-on-surface-variant"
        >
          Mobil uygulama, web uygulaması ve masaüstü yazılım geliştirmenin yanı sıra CRM,
          B2B ve B2C platformları kuruyoruz. Sizi sürecin dışında bırakmıyoruz; şeffaf
          sprintler ve esnek revizyonlarla omuz omuza ilerliyoruz.
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary-container px-8 font-[family-name:var(--font-headline)] text-sm font-semibold text-on-primary-container shadow-[0_0_32px_rgba(0,240,255,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_0_48px_rgba(0,240,255,0.65)] active:scale-[0.98]"
          >
            Projeye Başlayın
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/#tech-ecosystem"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-surface-container/80 px-8 font-[family-name:var(--font-headline)] text-sm font-semibold text-on-surface backdrop-blur-md transition-all hover:bg-surface-container-high"
          >
            Kabiliyetleri Keşfedin
            <Terminal className="h-[18px] w-[18px] text-on-surface-variant" />
          </Link>
        </motion.div>

        <HeroJourney />

        <div className="mt-10 grid w-full grid-cols-2 gap-4 pt-4 text-center text-on-surface-variant md:grid-cols-4">
          {[
            { value: "Mobil", label: "iOS & Android uygulama" },
            { value: "Web", label: "Web & SaaS uygulama" },
            { value: "Masaüstü", label: "Electron & yerel yazılım" },
            { value: "CRM / B2B / B2C", label: "İş platformları" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1">
              <span className="font-[family-name:var(--font-headline)] text-lg font-bold text-on-surface md:text-xl">
                {item.value}
              </span>
              <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
