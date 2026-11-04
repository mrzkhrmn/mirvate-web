import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Güvenlik Bildirimi",
  description: "MIRVATE güvenlik bildirimi ve sorumlu açıklama yaklaşımı.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-3xl">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-on-surface">
          Güvenlik Bildirimi
        </h1>
        <p className="mt-4 text-on-surface-variant leading-7">
          Güvenlik açığı bildirimlerini sorumlu açıklama ilkeleriyle değerlendiririz.
          Hassas bulgular için lütfen{" "}
          <a href="mailto:info@mirvate.com" className="text-primary-container">
            info@mirvate.com
          </a>{" "}
          adresine yazın.
        </p>
      </Container>
    </section>
  );
}
