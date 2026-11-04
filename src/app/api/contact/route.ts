import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendInquiry } from "@/features/contact/services/sendInquiry";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  hits.set(ip, entry);
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Çok fazla istek. Lütfen bir dakika sonra tekrar deneyin." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Doğrulama hatası",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    // Honeypot filled → pretend success
    if (parsed.data.companyUrl) {
      return NextResponse.json({
        message: "Mesajınız iletildi.",
      });
    }

    const result = await sendInquiry(parsed.data);
    return NextResponse.json({ message: result.message });
  } catch {
    return NextResponse.json(
      { error: "Sunucu hatası. Lütfen daha sonra tekrar deneyin." },
      { status: 500 },
    );
  }
}
