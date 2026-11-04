import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Container } from "@/components/ui/Container";
import { SAMPLE_PROJECTS } from "@/lib/constants";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Projeler",
  description:
    "MIRVATE proje vitrini. Gerçek proje verileri sağlandığında güncellenir; şu an örnek placeholder kartlar gösterilir.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Ana Sayfa", path: "/" },
              { name: "Projeler", path: "/projects" },
            ]),
          ),
        }}
      />
      <section className="bg-surface-container-lowest py-16 md:pb-8">
        <Container>
          <span className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-widest text-primary">
            Projeler
          </span>
          <h1 className="mt-2 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-on-surface md:text-6xl">
            Seçili Çalışmalar
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-on-surface-variant">
            Aşağıdaki projeler örnek placeholder&apos;lardır (
            {SAMPLE_PROJECTS.length} kart). Gerçek referanslar eklendiğinde bu sayfa
            güncellenir.
          </p>
        </Container>
      </section>
      <ProjectsSection />
    </>
  );
}
