import { AboutSection } from "@/components/sections/AboutSection";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { ABOUT_VALUES } from "@/lib/constants";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hakkımızda",
  description:
    "MIRVATE; özel yazılım, gömülü sistem ve elektronik kart tasarımını birleştiren mühendislik şirketi.",
  path: "/about",
  keywords: [
    "özel yazılım şirketi",
    "elektronik mühendislik",
    "gömülü yazılım şirketi",
    "MIRVATE hakkında",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Hakkımızda", path: "/about" },
        ])}
      />
      <section className="bg-surface-container-lowest py-16 md:py-24">
        <Container>
          <span className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-widest text-primary">
            Hakkımızda
          </span>
          <h1 className="mt-2 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-on-surface md:text-6xl">
            Yazılım ve elektroniği birlikte inşa ediyoruz.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-on-surface-variant">
            MIRVATE; özel yazılım, gömülü sistem ve elektronik kart tasarımını
            ihtiyaca göre birleştirir. Keşiften teslime kadar uçtan uca ürün
            geliştiririz.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ABOUT_VALUES.map((item) => (
              <article
                key={item.title}
                className="rounded-xl bg-surface-container p-6"
              >
                <h2 className="mb-2 font-[family-name:var(--font-headline)] text-xl font-semibold text-primary">
                  {item.title}
                </h2>
                <p className="text-[13px] leading-5 text-on-surface-variant">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <AboutSection />
    </>
  );
}
