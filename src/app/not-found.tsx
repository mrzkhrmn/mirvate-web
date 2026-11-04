import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center px-6 pt-20 pb-24 text-center">
        <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-primary uppercase">
          404
        </span>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold text-on-surface md:text-5xl">
          Sayfa bulunamadı
        </h1>
        <p className="mt-3 max-w-md text-on-surface-variant">
          Aradığınız rota mevcut değil veya taşınmış olabilir.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center rounded-lg bg-primary-container px-6 font-semibold text-on-primary-container"
        >
          Ana sayfaya dön
        </Link>
      </main>
      <Footer />
    </>
  );
}
