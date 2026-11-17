import { ImageResponse } from "next/og";

export const alt = "MIRVATE — Özel yazılım · Elektronik · Gömülü sistem";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(145deg, #08090C 0%, #12141C 45%, #1A1D28 100%)",
          color: "#F8FAFC",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#00F0FF",
          }}
        >
          MIRVATE
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            Özel Yazılım &amp; Elektronik
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#94A3B8",
              maxWidth: 860,
            }}
          >
            Gömülü sistem · Kart tasarımı · Engineering What&rsquo;s Next.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#64748B",
          }}
        >
          <span>mirvate.com</span>
          <span style={{ color: "#818CF8" }}>info@mirvate.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
