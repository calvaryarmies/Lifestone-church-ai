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
            "radial-gradient(65% 55% at 75% 10%, rgba(228,180,76,0.22) 0%, rgba(217,119,54,0.08) 42%, transparent 72%), #0B0A09",
          color: "#F5EFE6",
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
            color: "rgba(245,239,230,0.68)",
            fontSize: 24,
            letterSpacing: "0.02em",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={iconDataUrl}
            width={52}
            height={52}
            alt=""
            style={{ borderRadius: 12, display: "block" }}
          />
          <span style={{ color: "#E4B44C", fontWeight: 700 }}>LIFESTONE</span>
          <span>·</span>
          <span>by WHITE HORSE</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: 1020,
          }}
        >
          <div
            style={{
              fontSize: 74,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              fontWeight: 700,
              color: "#F5EFE6",
            }}
          >
            Living Scripture, Anchored for Every Sanctuary.
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "rgba(245,239,230,0.72)",
              maxWidth: 920,
            }}
          >
            Offline AI voice-to-verse projection · 5 open Bible translations · 2,937 hymns · HDMI &amp; NDI broadcast ready.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            color: "#F3D382",
            fontSize: 21,
          }}
        >
          <span
            style={{
              padding: "8px 18px",
              borderRadius: 999,
              border: "1px solid rgba(228,180,76,0.35)",
              background: "rgba(228,180,76,0.1)",
            }}
          >
            100% Offline AI
          </span>
          <span
            style={{
              padding: "8px 18px",
              borderRadius: 999,
              border: "1px solid rgba(245,239,230,0.16)",
              color: "rgba(245,239,230,0.8)",
            }}
          >
            2,937 Hymns
          </span>
          <span
            style={{
              padding: "8px 18px",
              borderRadius: 999,
              border: "1px solid rgba(245,239,230,0.16)",
              color: "rgba(245,239,230,0.8)",
            }}
          >
            Free &amp; MIT Open Source
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
