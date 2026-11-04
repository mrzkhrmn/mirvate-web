import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Gizlilik Politikası",
  description: "MIRVATE gizlilik politikası özeti.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-3xl">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-on-surface">
          Gizlilik Politikası
        </h1>
        <p className="mt-4 text-on-surface-variant leading-7">
          İletişim formları ve bülten abonelikleri aracılığıyla paylaştığınız bilgiler
          yalnızca proje değerlendirmesi ve iletişim amacıyla kullanılır. Bilgileriniz
          üçüncü taraflarla satılmaz veya paylaşılmaz. Detaylı hukuki metin canlıya
          alınmadan önce hukuki danışmanlıkla tamamlanmalıdır.
        </p>
      </Container>
    </section>
  );
}
