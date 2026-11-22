import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ImageResponse } from "next/og";
import { SITE } from "./_lib/site";

export const dynamic = "force-static";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const __dirname = dirname(fileURLToPath(import.meta.url));
const iconBuffer = readFileSync(join(__dirname, "icon.png"));
const iconDataUrl = `data:image/png;base64,${iconBuffer.toString("base64")}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(25,215,255,0.20) 0%, rgba(22,119,255,0.08) 40%, transparent 70%), #07111F",
          color: "#F7FAFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "rgba(247,250,255,0.7)",
            fontSize: 28,
            letterSpacing: "-0.02em",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={iconDataUrl}
            width={56}
            height={56}
            alt=""
            style={{ borderRadius: 12, display: "block" }}
          />
          <span style={{ color: "#F4C95D", fontWeight: 600 }}>WHITE HORSE</span>
          <span>·</span>
          <span>lifestone-church-ai.vercel.app</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 1000,
          }}
        >
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.02,
              letterSpacing: "-0.05em",
              fontWeight: 600,
              color: "#F7FAFF",
            }}
          >
            LIFESTONE
          </div>
          <div
            style={{
              fontSize: 48,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              fontWeight: 500,
              color: "#19D7FF",
            }}
          >
            {SITE.tagline}
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.4,
              color: "rgba(247,250,255,0.7)",
              maxWidth: 920,
              marginTop: 8,
            }}
          >
            5 open-license Bible translations · 2,937 offline church hymns · Plug-and-play HDMI &amp; NDI broadcast output.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            color: "rgba(247,250,255,0.72)",
            fontSize: 22,
          }}
        >
          <span
            style={{
              padding: "8px 16px",
              borderRadius: 999,
              border: "1px solid rgba(25,215,255,0.35)",
            }}
          >
            100% Offline AI
          </span>
          <span
            style={{
              padding: "8px 16px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            2,937 Hymns
          </span>
          <span
            style={{
              padding: "8px 16px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            Windows · macOS · MIT Open Source
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
