import {
  Cpu,
  Smartphone,
  Cloud,
  Laptop,
  Server,
  CreditCard,
  CloudCog,
  GitBranch,
  Users,
  Briefcase,
  ShoppingBag,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = {
  cpu: Cpu,
  smartphone: Smartphone,
  cloud: Cloud,
  laptop: Laptop,
  server: Server,
  "credit-card": CreditCard,
  "cloud-cog": CloudCog,
  "git-branch": GitBranch,
  users: Users,
  briefcase: Briefcase,
  "shopping-bag": ShoppingBag,
} as const;

export function ServicesSection() {
  return (
    <section id="hizmetler" className="relative w-full bg-surface py-16 md:py-24">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <div>
            <span className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-widest text-primary">
              Mühendislik hizmetleri
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-headline)] text-3xl font-bold tracking-tight text-on-surface md:text-5xl">
              Özel yazılımdan çoklu yüzeye.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-6 text-on-surface-variant">
            Odak noktamız işinize özel ürün geliştirmek. Mobil, web, masaüstü ve
            ihtiyaç duyulan iş uygulamalarını tek ekiple hayata geçiriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            const isViolet = service.accent === "violet";
            return (
              <Reveal key={service.slug} delay={i * 0.04}>
                <article className="group flex min-h-[280px] flex-col justify-between rounded-xl bg-surface-container-low p-6 transition-all hover:bg-surface-container">
                  <div>
                    <div
                      className={cn(
                        "mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-highest",
                        isViolet ? "text-secondary" : "text-primary-container",
                      )}
                    >
                      <Icon className="h-[22px] w-[22px]" />
                    </div>
                    <h3
                      className={cn(
                        "mb-2 font-[family-name:var(--font-headline)] text-xl font-semibold text-on-surface transition-colors",
                        isViolet
                          ? "group-hover:text-secondary-fixed"
                          : "group-hover:text-primary",
                      )}
                    >
                      {service.title}
                    </h3>
                    <p className="text-[13px] leading-5 text-on-surface-variant">
                      {service.description}
                    </p>
                  </div>
                  <div
                    className={cn(
                      "flex items-center gap-1 pt-4 font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase",
                      isViolet ? "text-secondary" : "text-primary",
                    )}
                  >
                    {service.meta}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
