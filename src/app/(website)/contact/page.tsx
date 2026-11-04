import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "İletişim",
  description:
    "CRM, B2B/B2C veya özel yazılım projeniz için talep oluşturun. info@mirvate.com — mümkün olduğunca hızlı dönüş.",
  path: "/contact",
  keywords: ["MIRVATE iletişim", "yazılım teklifi", "proje talebi", SITE.email],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "İletişim", path: "/contact" },
        ])}
      />
      <ContactSection />
    </>
  );
}
