import { Container } from "@/components/ui/Container";
import { HOME_FAQS } from "@/lib/metadata";

export function FaqSection() {
  return (
    <section id="sss" className="relative w-full bg-surface py-16 md:py-24" aria-labelledby="faq-heading">
      <Container className="max-w-3xl">
        <span className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-widest text-primary">
          Sık Sorulanlar
        </span>
        <h2
          id="faq-heading"
          className="mt-2 font-[family-name:var(--font-headline)] text-3xl font-bold tracking-tight text-on-surface md:text-4xl"
        >
          Merak edilenler
        </h2>
        <p className="mt-2 text-[15px] leading-6 text-on-surface-variant">
          Süreç, kapsam ve iletişim hakkında kısa yanıtlar.
        </p>

        <div className="mt-8 space-y-3">
          {HOME_FAQS.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-white/5 bg-surface-container-low open:bg-surface-container"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-[family-name:var(--font-headline)] text-base font-semibold text-on-surface marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-primary transition group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-white/5 px-5 py-4 text-[14px] leading-6 text-on-surface-variant">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
