import type { Metadata } from "next";
import { SITE, SERVICES, SEO_KEYWORDS } from "./constants";

const DEFAULT_OG_PATH = "/opengraph-image";

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  images?: string[];
};

export function absoluteUrl(path = "") {
  const base = SITE.url.replace(/\/$/, "");
  if (!path) return base;
  return path.startsWith("http") ? path : `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path = "",
  noIndex = false,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  images,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const isHome = path === "/" || path === "";
  const fullTitle = isHome ? `${SITE.name} — ${title}` : `${title} | ${SITE.name}`;
  const ogImages = (images?.length ? images : [DEFAULT_OG_PATH]).map((src) => ({
    url: absoluteUrl(src),
    width: 1200,
    height: 630,
    alt: fullTitle,
  }));

  return {
    title: fullTitle,
    description,
    keywords: keywords?.length ? keywords : undefined,
    authors: authors?.map((name) => ({ name })) ?? [{ name: SITE.name }],
    creator: SITE.name,
    publisher: SITE.name,
    category: "technology",
    alternates: {
      canonical: url,
      languages: {
        "tr-TR": url,
        "x-default": url,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type,
      images: ogImages,
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime: modifiedTime ?? publishedTime,
            authors: authors ?? [SITE.name],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ogImages.map((img) => img.url),
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: SITE.name,
    legalName: SITE.name,
    url: SITE.url,
    logo: absoluteUrl("/images/mirvate-logo-v2.png"),
    image: absoluteUrl("/opengraph-image"),
    description: SITE.description,
    email: SITE.email,
    slogan: SITE.tagline,
    areaServed: {
      "@type": "Country",
      name: "Turkey",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.email,
        availableLanguage: ["Turkish", "English"],
        url: absoluteUrl("/contact"),
      },
    ],
    knowsAbout: [
      "Mobil uygulama geliştirme",
      "Web uygulaması geliştirme",
      "Masaüstü uygulama geliştirme",
      "iOS uygulama geliştirme",
      "Android uygulama geliştirme",
      "CRM",
      "B2B platforms",
      "B2C platforms",
      "Software engineering",
      "React Native",
      "Next.js",
      "Electron",
      "ASP.NET Core",
      "Cloud & DevOps",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "tr-TR",
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: absoluteUrl("/images/mirvate-logo-v2.png"),
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function servicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MIRVATE Hizmetleri",
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: absoluteUrl(`/services#${service.slug}`),
        provider: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
        },
        areaServed: "TR",
        serviceType: service.title,
      },
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  date: string;
  author: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.date,
    dateModified: input.date,
    author: {
      "@type": "Organization",
      name: input.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/mirvate-logo-v2.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(input.path),
    articleSection: input.category,
    inLanguage: "tr-TR",
    image: absoluteUrl("/opengraph-image"),
  };
}

export function faqJsonLd(
  items: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** Site genelinde sık sorulan gerçekçi sorular — uydurma metrik yok */
export const HOME_FAQS = [
  {
    question: "MIRVATE hangi tür yazılımları geliştiriyor?",
    answer:
      "Mobil uygulama geliştirme (iOS/Android, React Native), web uygulaması ve SaaS geliştirme (Next.js/React), masaüstü uygulama geliştirme (Electron), CRM, B2B/B2C platformları ve backend çözümleri sunuyoruz.",
  },
  {
    question: "Mobil, web ve masaüstü uygulamayı birlikte mi geliştiriyorsunuz?",
    answer:
      "Evet. Aynı iş mantığını web, mobil ve masaüstü kanallarına taşıyarak uçtan uca ürünler inşa ediyoruz. Tek başına mobil, web veya masaüstü projeleri de alıyoruz.",
  },
  {
    question: "Süreç nasıl işliyor?",
    answer:
      "Keşif, mimari, esnek tasarım, şeffaf sprintler, canlıya alma ve birlikte büyüme adımlarıyla ilerliyoruz. Her aşamada sizinle birlikte karar alırız.",
  },
  {
    question: "Proje talebi nasıl iletilir?",
    answer:
      "İletişim formundan veya info@mirvate.com adresinden bize yazabilirsiniz. İlk teknik fizibilite notlarını mümkün olduğunca hızlı paylaşırız.",
  },
] as const;

export { SEO_KEYWORDS };
