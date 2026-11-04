import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Kullanım Koşulları",
  description: "MIRVATE web sitesi kullanım koşulları özeti.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-3xl">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-on-surface">
          Kullanım Koşulları
        </h1>
        <p className="mt-4 text-on-surface-variant leading-7">
          Bu web sitesindeki içerikler bilgilendirme amaçlıdır. Hizmet sözleşmeleri
          proje bazında ayrıca düzenlenir. Siteyi kullanarak güncel koşulları kabul
          etmiş sayılırsınız.
        </p>
      </Container>
    </section>
  );
}
