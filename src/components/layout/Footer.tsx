import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { FOOTER_EXPLORE, FOOTER_SERVICES } from "@/lib/constants";

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
