import Image from "next/image";
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
  CircuitBoard,
  Microchip,
  FlaskConical,
  Layers,
  Package,
  Wrench,
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
  "circuit-board": CircuitBoard,
  microchip: Microchip,
  flask: FlaskConical,
  layers: Layers,
  package: Package,
  wrench: Wrench,
} as const;

const GROUPS = [
  {
    key: "software" as const,
    label: "Yazılım ve platformlar",
    blurb: "Özel yazılım, mobil, web, masaüstü ve backend.",
    image: "/images/services-software.jpg",
    imageAlt:
      "Koyu mühendislik ortamında yazılım geliştirme — monitör ışıltısı ve arayüz panelleri",
  },
  {
    key: "electronics" as const,
    label: "Elektronik ve ürün geliştirme",
    blurb: "Kart tasarımı, gömülü yazılım, Ar-Ge ve dizgi koordinasyonu.",
    image: "/images/services-electronics.jpg",
    imageAlt:
      "PCB ve elektronik kart makro çekimi — bakır izler ve gömülü donanım bileşenleri",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const Icon = iconMap[service.icon];
  const isViolet = service.accent === "violet";

  return (
    <Reveal delay={index * 0.04}>
      <article className="group flex min-h-[260px] flex-col justify-between rounded-xl bg-surface-container-low p-6 transition-all hover:bg-surface-container">
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
}

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
              Yazılımdan elektroniğe, tek ekip.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-6 text-on-surface-variant">
            Özel yazılım ve elektronik ürün geliştirmeyi aynı mühendislik
            disiplininde birleştiriyoruz. İhtiyacınıza göre tek katman veya uçtan
            uca kapsam.
          </p>
        </div>

        <div className="space-y-14">
          {GROUPS.map((group) => {
            const items = SERVICES.filter((s) => s.group === group.key);
            return (
              <div key={group.key}>
                <Reveal>
                  <div className="mb-6 overflow-hidden rounded-xl border border-outline-variant/30">
                    <div className="relative h-40 w-full md:h-52">
                      <Image
                        src={group.image}
                        alt={group.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 1100px"
                        className="object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-surface/55 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                        <h3 className="font-[family-name:var(--font-headline)] text-xl font-semibold text-on-surface md:text-2xl">
                          {group.label}
                        </h3>
                        <p className="mt-1 max-w-xl text-sm text-on-surface-variant">
                          {group.blurb}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((service, i) => (
                    <ServiceCard key={service.slug} service={service} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
