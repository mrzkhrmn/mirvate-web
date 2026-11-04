import { HeroSection } from "@/components/sections/HeroSection";
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
} from "@/lib/metadata";
import { SITE, SEO_KEYWORDS } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Mobil, Web ve Masaüstü Uygulama Geliştirme",
  description:
    "Mobil uygulama geliştirme, web uygulaması geliştirme ve masaüstü yazılım; CRM, B2B ve B2C platformlarıyla uçtan uca. MIRVATE ile ürününüzü birlikte inşa edin.",
  path: "/",
  keywords: [...SEO_KEYWORDS],
});

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <JsonLd
        data={[
          servicesJsonLd(),
          faqJsonLd([...HOME_FAQS]),
        ]}
      />
      <HeroSection />
      <TechnologiesSection />
      <ServicesSection />
      <ProcessSection />
      {/* Proje vitrini — henüz gerçek proje yok; veri geldiğinde açılacak
      <ProjectsSection />
      */}
      <AboutSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
