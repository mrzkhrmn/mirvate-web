"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl transition-shadow",
        scrolled && "shadow-[0_1px_8px_rgba(0,0,0,0.25)]",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 lg:px-12">
        <Link href="/" aria-label="MIRVATE Ana Sayfa" className="shrink-0">
          <Logo priority />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Ana navigasyon">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href + link.label}
                href={link.href}
                className={cn(
                  "text-[13px] leading-5 transition-colors",
                  active
                    ? "font-semibold text-primary"
                    : "text-on-surface-variant hover:text-on-surface",
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="glow-cyan-sm hidden h-10 items-center justify-center rounded-lg bg-surface-container-high px-4 text-[13px] font-semibold text-on-surface transition-all hover:bg-primary-container hover:text-on-primary-container sm:inline-flex"
          >
            Projeye Başlayın
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
