import { Suspense } from "react";
import { Mail, Phone, Clock, Shield, SlidersHorizontal, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { SITE, SITE_TEL_HREF } from "@/lib/constants";

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
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                Bizimle İletişime Geçin
              </div>
              <h2 className="font-[family-name:var(--font-headline)] text-3xl font-bold tracking-tight text-on-surface md:text-5xl">
                Bir projeniz mi var?
                <br />
                Birlikte konuşalım.
              </h2>
              <p className="mt-2 leading-7 text-on-surface-variant">
                Özel yazılım, gömülü sistem veya elektronik kart fikrinizi
                paylaşın. İlk teknik fizibilite notlarını 24 saat içinde sunarız.
              </p>

              <div className="mt-6 space-y-2">
                {guarantees.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 text-[13px] text-on-surface"
                  >
                    <item.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-sm text-primary-container transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {SITE.email}
                </a>
                <a
                  href={SITE_TEL_HREF}
                  className="inline-flex items-center gap-2 text-sm text-primary-container transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary-container transition-colors hover:text-primary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp ile yazın
                </a>
              </div>
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
