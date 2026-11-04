"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container text-on-surface"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-20 z-50 border-t border-white/5 bg-surface-container-lowest/95 px-6 py-6 backdrop-blur-xl"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobil navigasyon">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-sm transition-colors",
                    active
                      ? "bg-surface-container font-semibold text-primary"
                      : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex h-11 items-center justify-center rounded-lg bg-primary-container text-sm font-semibold text-on-primary-container"
            >
              Projeye Başlayın
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
