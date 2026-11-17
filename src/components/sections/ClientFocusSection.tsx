"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ParallaxBackdrop } from "@/components/motion/ParallaxBackdrop";

const FOCUS = [
  {
    label: "01",
    title: "Markanızın ürünü",
    text: "Kendi vitrin ürünümüzü satmıyoruz. Yazılım veya elektronik ürünü sizin markanız ve iş kurallarınız altında kuruyoruz.",
  },
  {
    label: "02",
    title: "Gizli ortaklık modeli",
    text: "Çoğu işimiz farklı firmalar adına ilerler; süreç şeffaf, görünürlük ise sizin tercihinize göre yönetilir.",
  },
  {
    label: "03",
    title: "Uçtan uca mühendislik",
    text: "Keşiften teslime kadar uygulama yazılımı, gömülü sistem ve elektronik kartı tek ekiple bağlarız.",
  },
] as const;

const SURFACES = [
  "Özel yazılım",
  "Mobil & web",
  "Gömülü yazılım",
  "Elektronik kart",
  "Ürün Ar-Ge",
  "PCB & dizgi",
] as const;

export function ClientFocusSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="yaklasim"
      className="relative w-full overflow-hidden bg-surface py-20 md:py-28"
    >
      <ParallaxBackdrop intensity="section" />

      <Container className="relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.22em] text-primary uppercase">
            Mühendislik ortağı
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-on-surface md:text-5xl">
            Ürün vitrini değil; sizin ürününüzü inşa ederiz.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-on-surface-variant md:text-base">
            Hazır paket satmıyoruz. Deneyimimiz, farklı şirketler adına üretilmiş
            yazılım ve elektronik ürünlerde birikiyor — burada o yaklaşımı öne
            çıkarıyoruz.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
          {FOCUS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <article className="h-full border-t border-primary-container/25 pt-5">
                <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-widest text-primary">
                  {item.label}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-headline)] text-xl font-semibold text-on-surface">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16">
          <p className="mb-5 text-center font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] text-on-surface-variant uppercase">
            Odaklandığımız yüzeyler
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {SURFACES.map((surface, i) => (
              <motion.span
                key={surface}
                initial={reduced ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="rounded-full border border-white/10 bg-surface-container-low px-4 py-2 font-[family-name:var(--font-headline)] text-sm text-on-surface"
              >
                {surface}
              </motion.span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-surface-container-high px-6 font-[family-name:var(--font-headline)] text-sm font-semibold text-on-surface transition-colors hover:bg-primary-container hover:text-on-primary-container"
          >
            Projenizi konuşalım
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
