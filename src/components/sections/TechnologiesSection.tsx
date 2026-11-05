"use client";

import {
  Smartphone,
  Globe,
  Terminal,
  Database,
  Network,
  Users,
  Store,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax, ParallaxSection } from "@/components/motion/Parallax";
import { TECH_CAPABILITIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = {
  smartphone: Smartphone,
  globe: Globe,
  terminal: Terminal,
  database: Database,
  users: Users,
  store: Store,
} as const;

export function TechnologiesSection() {
  return (
    <ParallaxSection
      id="tech-ecosystem"
      className="w-full bg-surface-container-low py-16 md:py-24"
    >
      <Container>
        <Parallax offset={30} className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center md:mb-12">
          <div className="mb-2 inline-flex items-center gap-2 rounded bg-surface-container px-2 py-1 font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-wider text-primary">
            <Network className="h-3.5 w-3.5" />
            Teknoloji Ekosistemi
          </div>
          <h2 className="font-[family-name:var(--font-headline)] text-3xl font-bold tracking-tight text-on-surface md:text-5xl">
            Tek vizyon. Doğru yığın.
          </h2>
          <p className="mt-2 text-[15px] leading-6 text-on-surface-variant">
            Özel ürün mimarisinden mobil, web ve bulut altyapısına kadar ihtiyaca
            göre seçilen teknolojilerle aynı disiplin içinde ilerleriz.
          </p>
        </Parallax>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TECH_CAPABILITIES.map((card, i) => {
            const Icon = iconMap[card.icon];
            const isViolet = card.accent === "violet";
            return (
              <Reveal key={card.id} delay={i * 0.05}>
                <article className="group relative rounded-xl bg-surface-container/90 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container-high">
                  <div
                    className={cn(
                      "mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-highest transition-transform group-hover:scale-110",
                      isViolet ? "text-secondary" : "text-primary-container",
                    )}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <span
                    className={cn(
                      "font-[family-name:var(--font-mono)] text-[10px] font-bold tracking-widest uppercase",
                      isViolet ? "text-secondary" : "text-primary",
                    )}
                  >
                    Kabiliyet {card.id}
                  </span>
                  <h3 className="mt-1 mb-2 font-[family-name:var(--font-headline)] text-2xl font-semibold text-on-surface">
                    {card.title}
                  </h3>
                  <p className="mb-4 text-[13px] leading-5 text-on-surface-variant">
                    {card.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {card.tags.map((tag, idx) => (
                      <span
                        key={tag}
                        className={cn(
                          "rounded bg-surface-container-lowest px-2 py-1 font-[family-name:var(--font-mono)] text-xs",
                          idx === card.tags.length - 1
                            ? isViolet
                              ? "text-secondary"
                              : "text-primary"
                            : "text-on-surface",
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </ParallaxSection>
  );
}
