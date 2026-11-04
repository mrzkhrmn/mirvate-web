import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Teknolojiler | React Native, Next.js, Electron",
  description:
    "Mobil uygulama (React Native), web uygulaması (Next.js), masaüstü (Electron), .NET, CRM/B2B/B2C yığını ve bulut altyapısı.",
  path: "/technologies",
  keywords: [
    "React Native mobil uygulama",
    "Next.js web uygulaması",
    "Electron masaüstü uygulama",
    "ASP.NET Core",
    "iOS Android geliştirme",
    "Kubernetes",
  ],
});

export default function TechnologiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Teknolojiler", path: "/technologies" },
        ])}
      />
      <section className="bg-surface-container-lowest py-16 md:pb-8">
        <Container>
          <span className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-widest text-primary">
            Teknoloji Yığını
          </span>
          <h1 className="mt-2 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-on-surface md:text-6xl">
            Tek Vizyon. CRM, B2B, B2C ve Ötesi.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-on-surface-variant">
            Bu teknolojiler kabiliyetlerimizdir; her projede hepsi kullanılmaz. CRM’den
            B2C mağazaya kadar ihtiyaca göre doğru yığını birlikte seçeriz.
          </p>
        </Container>
      </section>
      <TechnologiesSection />
    </>
  );
}
