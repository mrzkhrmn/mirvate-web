import Link from "next/link";
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
import { JsonLd } from "@/components/seo/JsonLd";
import { SERVICES } from "@/lib/constants";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  servicesJsonLd,
  webPageJsonLd,
} from "@/lib/metadata";
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

export const metadata = createPageMetadata({
  title: "Hizmetler",
  description:
    "Özel yazılım geliştirme, mobil ve web uygulamaları, masaüstü, backend, entegrasyon ve DevOps. MIRVATE ile uçtan uca mühendislik.",
  path: "/services",
  keywords: [
    "özel yazılım hizmetleri",
    "mobil uygulama geliştirme",
    "web uygulaması geliştirme",
    "masaüstü uygulama geliştirme",
    "SaaS geliştirme",
    "backend API geliştirme",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Ana Sayfa", path: "/" },
            { name: "Hizmetler", path: "/services" },
          ]),
          webPageJsonLd({
            title: "Hizmetler",
            description:
              "Özel yazılım geliştirme, mobil, web, masaüstü ve backend hizmetleri.",
            path: "/services",
          }),
          servicesJsonLd(),
        ]}
      />

      <section className="bg-surface-container-lowest py-16 md:py-24">
        <Container>
          <span className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-widest text-primary">
            Hizmetler
          </span>
          <h1 className="mt-2 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-on-surface md:text-6xl">
            Özel yazılım. Uçtan uca mühendislik.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-on-surface-variant">
            Odak noktamız işinize özel ürün geliştirmek. Mobil, web, masaüstü ve
            ihtiyaç duyulan iş uygulamalarını keşiften canlıya alıma kadar tek
            ekiple ilerletiriz.
          </p>

          <div className="mt-12 space-y-6">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon];
              const isViolet = service.accent === "violet";
              return (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-28 rounded-xl border border-white/5 bg-surface-container p-6 md:p-8"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                    <div
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-container-highest",
                        isViolet ? "text-secondary" : "text-primary-container",
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="font-[family-name:var(--font-headline)] text-2xl font-semibold text-on-surface">
                        {service.title}
                      </h2>
                      <p className="mt-1 font-[family-name:var(--font-mono)] text-xs text-primary">
                        {service.meta}
                      </p>
                      <p className="mt-3 max-w-3xl text-on-surface-variant">
                        {service.details}
                      </p>
                      <Link
                        href={`/contact?type=${service.slug}`}
                        className="mt-4 inline-flex text-sm font-semibold text-primary-container hover:underline"
                      >
                        Bu hizmet için görüşme talep edin →
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
