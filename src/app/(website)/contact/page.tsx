import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "İletişim",
  description:
    "Özel yazılım projeniz için MIRVATE ile iletişime geçin. info@mirvate.com — mümkün olduğunca hızlı dönüş.",
  path: "/contact",
  keywords: [
    "özel yazılım teklifi",
    "yazılım proje talebi",
    "MIRVATE iletişim",
    SITE.email,
  ],
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
