"use client";

import Image from "next/image";
import { Columns2, PenTool, RefreshCw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax, ParallaxSection } from "@/components/motion/Parallax";
import { PROCESS_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  return (
    <ParallaxSection
      id="surec"
      className="w-full bg-surface-container-lowest py-16 md:py-24"
    >
      <Container>
        <Parallax offset={28} className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <span className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-widest text-primary">
            Şeffaf Mühendislik Süreci
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-headline)] text-3xl font-bold tracking-tight text-on-surface md:text-5xl">
            Her Adımda Siz de Varsınız.
          </h2>
          <p className="mt-2 text-[15px] leading-6 text-on-surface-variant">
            Projeyi kapalı kapılar ardında bitirip teslim etmiyoruz. Esnek tasarım
            revizyonları, düzenli demolar ve canlı test ortamlarıyla süreci sizinle
            birlikte yürütüyoruz.
          </p>
        </Parallax>

        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          {PROCESS_STEPS.map((step, i) => {
            const isViolet = step.accent === "violet";
            return (
              <Reveal key={step.step} delay={i * 0.04}>
                <article className="group flex h-full flex-col justify-between rounded-xl bg-surface-container-low p-4 transition-colors hover:bg-surface-container">
                  <div>
                    <div
                      className={cn(
                        "mb-1 font-[family-name:var(--font-mono)] text-[10px] font-bold tracking-wider uppercase",
                        isViolet ? "text-secondary" : "text-primary",
                      )}
                    >
                      AŞAMA // {step.step}
                    </div>
                    <h4 className="mb-1 font-[family-name:var(--font-headline)] text-xl font-semibold text-on-surface">
                      {step.title}
                    </h4>
                    <p className="text-[13px] leading-5 text-on-surface-variant">
                      {step.description}
                    </p>
                  </div>
                  <div className="mt-4 rounded bg-surface-container-lowest/50 p-2 pt-2">
                    <span className="block font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-on-surface-variant uppercase">
                      Birlikte Üretilen Çıktı:
                    </span>
                    <span
                      className={cn(
                        "font-[family-name:var(--font-mono)] text-xs font-medium",
                        isViolet ? "text-secondary-fixed" : "text-primary",
                      )}
                    >
                      {step.output}
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Parallax offset={40} speed={0.7} className="mt-10 md:mt-12">
        <Reveal className="relative overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container/90 p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl md:p-6">
          <div className="flex flex-col justify-between gap-4 border-b border-outline-variant/30 pb-4 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-container/30 bg-primary-container/15 px-2 py-1 font-[family-name:var(--font-mono)] text-xs text-primary">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary-container" />
                Canlı İş Birliği & İterasyon Görünümü
              </div>
              <span className="hidden font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-on-surface-variant uppercase sm:inline">
                Sprint V2.4 • Eşzamanlı Tasarım-Geliştirici Masası
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded bg-surface-container-highest px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] text-on-surface">
                <PenTool className="h-3.5 w-3.5 text-primary" /> Tel Çerçeveden Canlı Arayüze
              </span>
              <span className="inline-flex items-center gap-1.5 rounded bg-surface-container-highest px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] text-on-surface">
                <Columns2 className="h-3.5 w-3.5 text-secondary" /> Sürüm Karşılaştırma
              </span>
            </div>
          </div>

          <div className="group relative mt-4 overflow-hidden rounded-xl border border-outline-variant/30">
            <Image
              src="/images/design-iteration.png"
              alt="İteratif çevik tasarım kanvası — wireframe'den yüksek kaliteli arayüze sürüm karşılaştırma"
              width={1600}
              height={900}
              className="h-auto max-h-[560px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/20 to-transparent" />
            <div className="absolute right-4 bottom-4 left-4 flex flex-col justify-between gap-3 md:right-6 md:bottom-6 md:left-6 md:flex-row md:items-end">
              <div className="max-w-xl rounded-xl border border-outline-variant/40 bg-surface-container-lowest/85 p-4 backdrop-blur-md">
                <div className="mb-1 flex items-center gap-2">
                  <RefreshCw className="h-[18px] w-[18px] text-primary" />
                  <span className="font-[family-name:var(--font-headline)] text-base font-semibold text-on-surface">
                    Talebe Göre Şekillenen Canlı Tasarım Döngüsü
                  </span>
                </div>
                <p className="text-[13px] leading-5 text-on-surface-variant">
                  Müşteri geri bildirimleri doğrudan kanvas üzerinde işaretlenir;
                  wireframe aşamasından yüksek kaliteli kodlanabilir bileşenlere kadar
                  tüm varyasyonlar birlikte karşılaştırılarak netleştirilir.
                </p>
              </div>
              <div className="flex items-center gap-2 self-start rounded-lg border border-outline-variant/40 bg-surface-container-lowest/80 px-3 py-2 backdrop-blur-md md:self-end">
                <span className="font-[family-name:var(--font-mono)] text-[10px] text-primary">
                  Ortak tasarım & geliştirme masası
                </span>
              </div>
            </div>
          </div>
        </Reveal>
        </Parallax>
      </Container>
    </ParallaxSection>
  );
}
