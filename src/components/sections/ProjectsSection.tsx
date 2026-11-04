import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SAMPLE_PROJECTS } from "@/lib/constants";

export function ProjectsSection() {
  return (
    <section id="projeler" className="relative w-full bg-surface-container-low py-16 md:py-24">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <div>
            <span className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-widest text-primary">
              Seçili Çalışmalar
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-headline)] text-3xl font-bold tracking-tight text-on-surface md:text-5xl">
              Örnek Proje Vitrini
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-6 text-on-surface-variant">
            Aşağıdaki kartlar örnek placeholder&apos;lardır. Gerçek proje verileri
            sağlandığında buraya bağlanacaktır.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SAMPLE_PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <article className="group flex h-full flex-col justify-between rounded-xl border border-white/5 bg-surface-container/90 p-6 transition-all hover:-translate-y-1 hover:bg-surface-container-high">
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded bg-surface-container-lowest px-2 py-1 font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-primary uppercase">
                      {project.category}
                    </span>
                    {project.placeholder ? (
                      <span className="font-[family-name:var(--font-mono)] text-[10px] text-on-surface-variant uppercase">
                        Örnek
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-headline)] text-xl font-semibold text-on-surface">
                    {project.title}
                  </h3>
                  <p className="text-[13px] leading-5 text-on-surface-variant">
                    {project.summary}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-surface-container-lowest px-2 py-1 font-[family-name:var(--font-mono)] text-xs text-on-surface"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects#${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs text-primary transition-colors hover:text-primary-container"
                    aria-label={`${project.title} detay`}
                  >
                    İncele <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
