import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "İletişim",
  description:
    "Özel yazılım, gömülü sistem veya elektronik kart projeniz için MIRVATE ile iletişime geçin.",
  path: "/contact",
  keywords: [
    "özel yazılım teklifi",
    "elektronik kart teklifi",
    "gömülü yazılım proje talebi",
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
