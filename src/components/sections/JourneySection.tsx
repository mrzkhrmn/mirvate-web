"use client";

import { HeroJourney } from "@/components/sections/HeroJourney";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ParallaxBackdrop } from "@/components/motion/ParallaxBackdrop";

export function JourneySection() {
  return (
    <section id="birlikte-uretim" className="relative w-full overflow-hidden bg-surface-container-low py-16 md:py-24">
      <ParallaxBackdrop intensity="section" />
      <Container className="relative z-10 flex flex-col items-center">
        <Reveal className="mb-8 max-w-2xl text-center">
          <span className="font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.22em] text-primary uppercase">
            Birlikte üretim
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-on-surface md:text-5xl">
            Her adımda yan yana.
          </h2>
          <p className="mt-3 text-[15px] leading-6 text-on-surface-variant">
            Fikirden canlıya alıma kadar kararlar, demolar ve revizyonlar sizinle birlikte ilerler.
          </p>
        </Reveal>
        <HeroJourney />
      </Container>
    </section>
  );
}
