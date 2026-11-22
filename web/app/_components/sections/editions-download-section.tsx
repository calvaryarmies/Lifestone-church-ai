"use client";

import { useEffect, useState } from "react";
import {
  IconBolt,
  IconBrandApple,
  IconCheck,
  IconDownload,
  IconFeather,
  IconTerminal2,
} from "@tabler/icons-react";
import { Reveal } from "../ui/reveal";
import {
  CURRENT_VERSION,
  DEFAULT_URLS,
  fetchLatestReleaseData,
  triggerDirectDownload,
} from "../ui/download-button";
import { SITE } from "../../_lib/site";

export function EditionsDownloadSection() {
  const [version, setVersion] = useState(CURRENT_VERSION);
  const [urls, setUrls] = useState(DEFAULT_URLS);
  const [downloadingKey, setDownloadingKey] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchLatestReleaseData().then((data) => {
      if (cancelled || !data) return;
      if (data.tag_name) setVersion(data.tag_name);

      const assets = data.assets || [];
      const standard = assets.find(
        (a: { name?: string; browser_download_url?: string }) =>
          !a.name?.toLowerCase().includes("lite") &&
          (a.name?.endsWith("setup.exe") || a.name?.endsWith(".exe"))
      );
      const lite = assets.find(
        (a: { name?: string; browser_download_url?: string }) =>
          a.name?.toLowerCase().includes("lite") &&
          (a.name?.endsWith(".exe") || a.name?.endsWith(".msi"))
      );
      const mac = assets.find(
        (a: { name?: string; browser_download_url?: string }) =>
          a.name?.endsWith(".dmg")
      );
      const linux =
        assets.find(
          (a: { name?: string; browser_download_url?: string }) =>
            a.name?.endsWith(".deb")
        ) ||
        assets.find(
          (a: { name?: string; browser_download_url?: string }) =>
            a.name?.endsWith(".AppImage")
        );

      setUrls((prev) => ({
        ...prev,
        windows: standard?.browser_download_url ?? prev.windows,
        windowsLite: lite?.browser_download_url ?? prev.windowsLite,
        mac: mac?.browser_download_url ?? prev.mac,
        linux: linux?.browser_download_url ?? prev.linux,
      }));
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleDownload = (key: keyof typeof DEFAULT_URLS) => {
    setDownloadingKey(key);
    triggerDirectDownload(urls[key]);
    setTimeout(() => setDownloadingKey(null), 2400);
  };

  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="border-t border-border py-20 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-12 px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Free Desktop Editions · {version}
            </span>
            <h2
              id="download-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[44px]"
            >
              Pick the build tuned for your church computer.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            No paywalls, no feature gating, and no login screens. Both builds
            include all 5 open Bible translations, 2,937 hymns, and HDMI
            auto-detection.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Standard Edition Card */}
          <Reveal>
            <div className="relative flex h-full flex-col justify-between rounded-[24px] border border-accent/40 bg-gradient-to-b from-accent/[0.1] via-background-elevated to-background-elevated p-7 sm:p-9 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
                    <IconBolt size={14} />
                    Standard Edition · ~330 MB
                  </span>
                  <span className="font-mono text-xs text-accent-gold">
                    Windows 10 / 11 (64-bit)
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  Full Offline AI &amp; GPU Performance
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Designed for modern Intel Core, AMD Ryzen, and dedicated GPU
                  media booth machines running full live sermon transcription.
                </p>

                <ul className="mt-6 space-y-2.5 text-sm text-foreground/90">
                  {[
                    "Heavy Dual Whisper AI models (Base + Tiny) bundled offline",
                    "AVX2 vector acceleration & sub-second verse matching",
                    "5 open Bible translations + 344,799 cross-references",
                    "2,937 built-in church hymns + HDMI & NDI broadcast output",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <IconCheck
                        size={17}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-accent/20">
                <button
                  type="button"
                  onClick={() => handleDownload("windows")}
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_rgba(228,180,76,0.28)] hover:bg-accent-gold transition-all cursor-pointer"
                >
                  {downloadingKey === "windows" ? (
                    <>
                      <IconCheck size={17} stroke={2.5} />
                      <span>Starting Standard installer download...</span>
                    </>
                  ) : (
                    <>
                      <IconDownload size={17} stroke={2} />
                      <span>Download Standard for Windows ({version})</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </Reveal>

          {/* Lite Edition Card */}
          <Reveal>
            <div className="relative flex h-full flex-col justify-between rounded-[24px] border border-accent-cyan/35 bg-gradient-to-b from-accent-cyan/[0.08] via-background-elevated to-background-elevated p-7 sm:p-9">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/40 bg-accent-cyan/15 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-accent-cyan">
                    <IconFeather size={14} />
                    Lite Edition · ~114 MB
                  </span>
                  <span className="font-mono text-xs text-accent-cyan/90">
                    Pentium / Celeron / Budget PC
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  Universal Compatibility &amp; Zero Lag
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Engineered specifically for older church laptops without AVX2
                  instructions so every fellowship can project Scripture reliably.
                </p>

                <ul className="mt-6 space-y-2.5 text-sm text-foreground/90">
                  {[
                    "Pure SSE4 binary — eliminates illegal-instruction crashes on Pentium/Celeron",
                    "Safe GPU rendering mode with ultra-low memory footprint (<150 MB RAM)",
                    "Same 5 open Bible translations & 2,937 offline church hymns",
                    "Plug-and-play HDMI auto-detection & clean Verse Screen projection",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <IconCheck
                        size={17}
                        className="mt-0.5 shrink-0 text-accent-cyan"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-accent-cyan/20">
                <button
                  type="button"
                  onClick={() => handleDownload("windowsLite")}
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-full border border-accent-cyan/45 bg-accent-cyan/18 hover:bg-accent-cyan/28 px-6 py-3.5 text-sm font-semibold text-foreground transition-all cursor-pointer"
                >
                  {downloadingKey === "windowsLite" ? (
                    <>
                      <IconCheck size={17} stroke={2.5} className="text-accent-live" />
                      <span>Starting Lite installer download...</span>
                    </>
                  ) : (
                    <>
                      <IconDownload size={17} stroke={2} className="text-accent-cyan" />
                      <span>Download Lite for Windows ({version})</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* macOS / Linux / GitHub Releases strip */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-surface px-6 py-5 sm:flex-row sm:items-center">
            <div className="text-sm text-muted-foreground">
              Running macOS or Linux in your media booth?
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => handleDownload("mac")}
                className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-background-elevated px-4 py-2 text-xs font-semibold text-foreground hover:border-accent/40 transition-colors cursor-pointer"
              >
                <IconBrandApple size={15} />
                <span>macOS (.dmg)</span>
              </button>
              <button
                type="button"
                onClick={() => handleDownload("linux")}
                className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-background-elevated px-4 py-2 text-xs font-semibold text-foreground hover:border-accent/40 transition-colors cursor-pointer"
              >
                <IconTerminal2 size={15} />
                <span>Linux (.deb)</span>
              </button>
              <a
                href={SITE.repo.releasesLatest}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 font-mono text-xs text-accent-gold hover:underline"
              >
                All GitHub Releases →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
