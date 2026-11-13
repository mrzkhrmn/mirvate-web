import { HeroSection } from "@/components/sections/HeroSection";
import { ClientFocusSection } from "@/components/sections/ClientFocusSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
// import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  createPageMetadata,
  faqJsonLd,
  HOME_FAQS,
  servicesJsonLd,
  webPageJsonLd,
} from "@/lib/metadata";
import { SEO_KEYWORDS, SITE } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Özel Yazılım & Elektronik Mühendislik",
  description:
    "MIRVATE: özel yazılım, gömülü sistem ve elektronik kart tasarımı. Mobil, web, masaüstü ve ürün Ar-Ge’yi birlikte inşa ediyoruz.",
  path: "/",
  keywords: [...SEO_KEYWORDS],
});

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <JsonLd
        data={[
          webPageJsonLd({
            title: `${SITE.name} — Özel Yazılım & Elektronik Mühendislik`,
            description: SITE.description,
            path: "/",
          }),
          servicesJsonLd(),
          faqJsonLd([...HOME_FAQS]),
        ]}
      />
      <HeroSection />
      <ClientFocusSection />
      <JourneySection />
      <TechnologiesSection />
      <ServicesSection />
      <ProcessSection />
      {/* Proje vitrini — henüz gerçek / gösterilebilir proje yok
      <ProjectsSection />
      */}
      <AboutSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
