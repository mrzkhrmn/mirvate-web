import type { ContactFormValues } from "@/lib/validation";
import { BUDGET_RANGES, PROJECT_TYPES, SITE } from "@/lib/constants";

/**
 * Delivers project inquiries to info@mirvate.com (or CONTACT_TO_EMAIL).
 *
 * Options (env):
 * 1. RESEND_API_KEY — preferred; sends mail via Resend from this Next.js API route
 * 2. CONTACT_WEBHOOK_URL — forward JSON to an external webhook / ASP.NET API
 *
 * No separate backend is required if Resend (or similar) is configured here.
 */
export async function sendInquiry(payload: ContactFormValues): Promise<{
  success: boolean;
  message: string;
}> {
  const to = process.env.CONTACT_TO_EMAIL ?? SITE.email;
  const resendKey = process.env.RESEND_API_KEY;
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  const webhookKey = process.env.CONTACT_API_KEY;

  const projectLabel =
    PROJECT_TYPES.find((p) => p.value === payload.projectType)?.label ??
    payload.projectType;
  const budgetLabel =
    BUDGET_RANGES.find((b) => b.value === payload.budget)?.label ??
    payload.budget ??
    "Belirtilmedi";

  if (resendKey) {
    const from =
      process.env.CONTACT_FROM_EMAIL ?? "MIRVATE Website <onboarding@resend.dev>";

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject: `[MIRVATE] Yeni proje talebi — ${payload.company}`,
        text: [
          `Ad Soyad: ${payload.name}`,
          `Şirket: ${payload.company}`,
          `E-posta: ${payload.email}`,
          `Kapsam: ${projectLabel}`,
          `Bütçe: ${budgetLabel}`,
          "",
          "Mesaj:",
          payload.message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error("[contact] Resend failed", response.status, detail);
      throw new Error("Inquiry delivery failed");
    }

    return {
      success: true,
      message:
        "Mesajınız başarıyla iletildi. Ekibimiz gereksinimlerinizi inceleyerek 24 saat içinde sizinle iletişime geçecektir.",
    };
  }

  if (webhook) {
    const response = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(webhookKey ? { Authorization: `Bearer ${webhookKey}` } : {}),
      },
      body: JSON.stringify({ ...payload, to }),
    });

    if (!response.ok) {
      throw new Error("Inquiry delivery failed");
    }

    return {
      success: true,
      message:
        "Mesajınız başarıyla iletildi. Ekibimiz gereksinimlerinizi inceleyerek 24 saat içinde sizinle iletişime geçecektir.",
    };
  }

  // Dev fallback: no mail provider configured yet
  console.info("[contact] inquiry received (no mail provider configured)", {
    to,
    projectType: payload.projectType,
    budget: payload.budget,
    hasCompany: Boolean(payload.company),
    messageLength: payload.message.length,
  });

  return {
    success: true,
    message:
      "Mesajınız alındı. Ekibimiz 24 saat içinde sizinle iletişime geçecektir.",
  };
}
