import { Suspense } from "react";
import { Mail, Clock, Shield, SlidersHorizontal, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { SITE } from "@/lib/constants";

const guarantees = [
  { icon: Clock, text: "24 iş saati içinde kapsamlı dönüş garantisi" },
  { icon: Shield, text: "Görüşme öncesi karşılıklı Gizlilik Sözleşmesi (NDA)" },
  { icon: BadgeCheck, text: "Doğrudan Baş Sistem Mimarı ile ücretsiz teknik keşif seansı" },
  { icon: SlidersHorizontal, text: "İhtiyaca ve geri bildirime göre esnek revizyon politikası" },
] as const;

export function ContactSection() {
  return (
    <section id="contact-section" className="relative w-full bg-surface-container-lowest py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded bg-surface-container px-2 py-1 font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-wider text-primary">
                <Mail className="h-3.5 w-3.5" />
                Bizimle İletişime Geçin
              </div>
              <h2 className="font-[family-name:var(--font-headline)] text-3xl font-bold tracking-tight text-on-surface md:text-5xl">
                Bir projeniz mi var?
                <br />
                Birlikte konuşalım.
              </h2>
              <p className="mt-2 leading-7 text-on-surface-variant">
                CRM, B2B/B2C platformu veya özel yazılım fikrinizi paylaşın. İlk teknik
                fizibilite ve yol haritası notlarını 24 saat içinde sunarız.
              </p>

              <div className="mt-6 space-y-2">
                {guarantees.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 text-[13px] text-on-surface"
                  >
                    <item.icon className="h-5 w-5 shrink-0 text-primary" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <a
                href={`mailto:${SITE.email}`}
                className="mt-6 inline-flex items-center gap-2 text-sm text-primary-container transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                {SITE.email}
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-3 pt-4 sm:flex-row sm:items-center">
              <Logo className="h-7" />
              <span className="font-[family-name:var(--font-mono)] text-xs text-on-surface-variant">
                Geleceğin teknolojisini birlikte inşa ediyoruz.
              </span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="h-[420px] animate-pulse rounded-xl bg-surface-container" />
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Container>
    </section>
  );
}
