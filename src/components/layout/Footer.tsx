import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import {
  FOOTER_EXPLORE,
  FOOTER_SERVICES,
  SITE,
  SITE_TEL_HREF,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest py-10 text-on-surface-variant">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div className="space-y-4 lg:col-span-2">
          <Logo />
          <p className="max-w-sm text-[13px] leading-5">
            Yüksek hassasiyetli yazılım mimarisi, ölçeklenebilir platform mühendisliği
            ve modern işletmeler için iş birliğine dayalı dijital ürün geliştirme.
          </p>
          <div className="flex flex-col gap-2 text-[13px]">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              {SITE.email}
            </a>
            <a
              href={SITE_TEL_HREF}
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              WhatsApp ile yazın
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Dağıtık Sistemler", "Bulut Odaklı", "Gerçek Zamanlı Çekirdek"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded bg-surface-container px-2 py-1 font-[family-name:var(--font-mono)] text-xs text-primary-fixed"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-[family-name:var(--font-headline)] text-xl font-semibold text-on-surface">
            Hizmetler
          </h4>
          <ul className="space-y-2 text-[13px]">
            {FOOTER_SERVICES.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-[family-name:var(--font-headline)] text-xl font-semibold text-on-surface">
            Keşfet
          </h4>
          <ul className="space-y-2 text-[13px]">
            {FOOTER_EXPLORE.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 px-6 pt-6 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-on-surface-variant lg:px-12 md:flex-row">
        <p>
          © 2026 MIRVATE. Tüm hakları saklıdır. Geleceğin Teknolojisini Birlikte İnşa
          Ediyoruz.
        </p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-on-surface">
            Gizlilik Politikası
          </Link>
          <Link href="/terms" className="hover:text-on-surface">
            Kullanım Koşulları
          </Link>
          <Link href="/security" className="hover:text-on-surface">
            Güvenlik Bildirimi
          </Link>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`fill-current ${className ?? ""}`}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
