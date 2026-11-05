"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/validation";
import {
  BUDGET_RANGES,
  PROJECT_TYPES,
  isProjectType,
  type ProjectTypeValue,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

function resolveProjectType(value: string | null): ProjectTypeValue {
  return isProjectType(value) ? value : "custom-software";
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialProjectType = resolveProjectType(searchParams.get("type"));
  const honeypotRef = useRef<HTMLInputElement>(null);

  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      budget: "100k-150k",
      projectType: initialProjectType,
    },
  });

  useEffect(() => {
    const nextType = resolveProjectType(searchParams.get("type"));
    setValue("projectType", nextType);
  }, [searchParams, setValue]);

  const onSubmit = async (data: ContactFormValues) => {
    setServerError(null);
    setServerMessage(null);

    if (honeypotRef.current) honeypotRef.current.value = "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, _hp: "" }),
      });
      const json = (await res.json()) as { message?: string; error?: string };

      if (!res.ok) {
        setServerError(json.error ?? "Gönderim başarısız. Lütfen tekrar deneyin.");
        return;
      }

      setServerMessage(json.message ?? "Mesajınız iletildi.");
      reset({
        name: "",
        company: "",
        email: "",
        message: "",
        projectType: resolveProjectType(searchParams.get("type")),
        budget: "100k-150k",
      });
    } catch {
      setServerError("Bağlantı hatası. Lütfen daha sonra tekrar deneyin.");
    }
  };

  const inputClass =
    "w-full h-11 px-4 rounded bg-surface-container-lowest text-on-surface text-[13px] focus:outline-none focus:ring-1 focus:ring-primary-container placeholder:text-outline";

  return (
    <div className="rounded-xl bg-surface-container p-6 shadow-[0_16px_48px_rgba(0,0,0,0.4)] lg:p-10">
      <h3 className="mb-4 font-[family-name:var(--font-headline)] text-2xl font-bold text-on-surface">
        Proje Talebi Oluşturun
      </h3>

      <form className="relative space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Honeypot: RHF dışında — autofill client Zod’u kilitlemesin */}
        <div
          className="pointer-events-none absolute -left-[10000px] top-0 h-0 w-0 overflow-hidden opacity-0"
          aria-hidden="true"
        >
          <label htmlFor="mirvate-fax">Fax</label>
          <input
            ref={honeypotRef}
            id="mirvate-fax"
            type="text"
            name="fax_number"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <label className="block font-[family-name:var(--font-mono)] text-xs text-on-surface-variant">
              Ad Soyad *
            </label>
            <input
              className={inputClass}
              placeholder="Ahmet Yılmaz"
              autoComplete="name"
              {...register("name")}
              aria-invalid={!!errors.name}
            />
            {errors.name ? (
              <p className="text-xs text-error" role="alert">
                {errors.name.message}
              </p>
            ) : null}
          </div>
          <div className="space-y-1">
            <label className="block font-[family-name:var(--font-mono)] text-xs text-on-surface-variant">
              Şirket / Kuruluş *
            </label>
            <input
              className={inputClass}
              placeholder="Teknoloji A.Ş."
              autoComplete="organization"
              {...register("company")}
              aria-invalid={!!errors.company}
            />
            {errors.company ? (
              <p className="text-xs text-error" role="alert">
                {errors.company.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <label className="block font-[family-name:var(--font-mono)] text-xs text-on-surface-variant">
              E-posta *
            </label>
            <input
              type="email"
              className={inputClass}
              placeholder="ornek@email.com"
              autoComplete="email"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email ? (
              <p className="text-xs text-error" role="alert">
                {errors.email.message}
              </p>
            ) : null}
          </div>
          <div className="space-y-1">
            <label className="block font-[family-name:var(--font-mono)] text-xs text-on-surface-variant">
              Hedef Platform / Kapsam
            </label>
            <select className={inputClass} {...register("projectType")}>
              {PROJECT_TYPES.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-1">
          <label className="block font-[family-name:var(--font-mono)] text-xs text-on-surface-variant">
            Öngörülen Proje Bütçesi
          </label>
          <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
            {BUDGET_RANGES.map((range) => (
              <label key={range.value} className="cursor-pointer">
                <input
                  type="radio"
                  value={range.value}
                  className="peer sr-only"
                  {...register("budget")}
                />
                <span className="block rounded bg-surface-container-lowest py-2 text-center font-[family-name:var(--font-mono)] text-xs text-on-surface transition-colors peer-checked:bg-primary-container peer-checked:text-on-primary-container">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <label className="block font-[family-name:var(--font-mono)] text-xs text-on-surface-variant">
            Proje Hedefleri & Detaylar *
          </label>
          <textarea
            rows={4}
            className={cn(inputClass, "h-auto py-3")}
            placeholder="Projenizin hedeflerini, çözmek istediğiniz problemleri ve hedeflenen takvimi kısaca özetleyin..."
            {...register("message")}
            aria-invalid={!!errors.message}
          />
          {errors.message ? (
            <p className="text-xs text-error" role="alert">
              {errors.message.message}
            </p>
          ) : null}
        </div>

        {serverMessage ? (
          <div
            className="flex items-center gap-2 rounded bg-surface-container-high p-4 font-[family-name:var(--font-mono)] text-xs text-emerald-400"
            role="status"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            <span>{serverMessage}</span>
          </div>
        ) : null}

        {serverError ? (
          <div className="rounded bg-error-container/40 p-4 text-xs text-error" role="alert">
            {serverError}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary-container font-[family-name:var(--font-headline)] text-sm font-semibold text-on-primary-container shadow-[0_0_24px_rgba(0,240,255,0.35)] transition-all hover:scale-[1.01] hover:shadow-[0_0_36px_rgba(0,240,255,0.6)] active:scale-[0.99] disabled:opacity-60"
        >
          <Send className="h-[18px] w-[18px]" />
          {isSubmitting
            ? "Gönderiliyor…"
            : "Talebi İletin • Mimari Keşif Görüşmesi Planlayın"}
        </button>

        <p className="text-center font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-on-surface-variant uppercase">
          Tüm başvurular gizlilik esasına tabidir. Bilgileriniz hiçbir koşulda üçüncü
          taraflarla paylaşılmaz.
        </p>
      </form>
    </div>
  );
}
