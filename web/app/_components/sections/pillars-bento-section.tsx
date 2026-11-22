import {
  IconBroadcast,
  IconDeviceDesktop,
  IconMicrophone,
  IconMusic,
  IconPalette,
  IconAdjustmentsHorizontal,
  IconSparkles,
  IconWifiOff,
} from "@tabler/icons-react";
import { Reveal } from "../ui/reveal";

export function PillarsBentoSection() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="border-t border-border py-20 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-12 px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Engineered for Sunday Morning
            </span>
            <h2
              id="capabilities-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[44px]"
            >
              Built like an anchor, not a fragile cloud subscription.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Churches need media software that keeps working when the Wi-Fi drops,
            runs cleanly on modest laptops, and respects both Scripture and the
            operator.
          </p>
        </Reveal>

        {/* Asymmetric 6-Column Sanctuary Bento */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6">
          {/* Pillar 1 (Wide): Offline Whisper Speech-to-Scripture */}
          <Reveal className="lg:col-span-4">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-border-strong bg-background-elevated p-7 sm:p-9 transition-colors hover:border-accent/40">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-[radial-gradient(circle,rgba(228,180,76,0.14)_0%,transparent_70%)]"
              />
              <div className="relative flex flex-col gap-4">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] font-semibold text-accent-gold">
                  <IconMicrophone size={14} />
                  <span>LOCAL AI ENGINE</span>
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-[28px]">
                  Offline Voice-to-Scripture Detection
                </h3>
                <p className="max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                  Lifestone combines local Whisper speech recognition with a
                  multi-strategy Rust detector — catching explicit citations
                  (&ldquo;Romans 8:28&rdquo;), Spanish references (&ldquo;Juan
                  3:16&rdquo;), and paraphrased quotations in under a second with
                  zero internet dependency.
                </p>
              </div>

              <div className="relative mt-8 grid grid-cols-1 gap-3 border-t border-border pt-6 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-black/30 px-4 py-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
                    Direct Parser
                  </span>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Aho-Corasick instant book, chapter &amp; verse matching
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-black/30 px-4 py-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
                    Paraphrase AI
                  </span>
                  <p className="mt-1 text-xs text-muted-foreground">
                    ONNX semantic search across 31,102 embedded verses
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-black/30 px-4 py-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
                    Zero Cloud Cost
                  </span>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Runs locally on your PC — no API keys or per-minute billing
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Pillar 2 (Compact Gold Highlight): 2,937 Offline Hymns */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-[22px] border border-accent/35 bg-gradient-to-b from-accent/[0.11] via-background-elevated to-background-elevated p-7 sm:p-8">
              <div className="flex flex-col gap-4">
                <div className="flex size-11 items-center justify-center rounded-xl border border-accent/35 bg-accent/15 text-accent-gold">
                  <IconMusic size={22} />
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-foreground">
                  2,937 Offline Church Hymns
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Four beloved classic hymnals bundled right inside Lifestone —
                  search by hymn number, title, or opening lyrics and project
                  stanzas effortlessly during congregational worship.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-accent/20">
                {["GHS", "CAC YHB", "Baptist Hymnal", "Sankey SSFSS"].map(
                  (book) => (
                    <span
                      key={book}
                      className="rounded-full border border-accent/25 bg-black/35 px-2.5 py-1 font-mono text-[11px] text-accent-gold"
                    >
                      {book}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>

          {/* Pillar 3 (Compact): Plug-and-Play HDMI Auto-Detect */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-[22px] border border-border-strong bg-background-elevated p-7 sm:p-8 transition-colors hover:border-accent/40">
              <div className="flex flex-col gap-4">
                <div className="flex size-11 items-center justify-center rounded-xl border border-border-strong bg-surface-strong text-accent">
                  <IconDeviceDesktop size={22} />
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-foreground">
                  Plug-and-Play HDMI Auto-Detect
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Plug in your sanctuary projector cable and Lifestone detects
                  the external monitor automatically — asking once to go live on
                  your chosen display with zero messy window dragging.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-border pt-4 font-mono text-[11px] text-accent-live">
                <span className="size-2 rounded-full bg-accent-live" />
                <span>Auto-senses HDMI &amp; multi-display setups</span>
              </div>
            </div>
          </Reveal>

          {/* Pillar 4 (Wide): Broadcast Suite & Operator Ergonomics */}
          <Reveal className="lg:col-span-4">
            <div className="flex h-full flex-col justify-between rounded-[22px] border border-border-strong bg-background-elevated p-7 sm:p-9 transition-colors hover:border-accent/40">
              <div className="flex flex-col gap-4">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border-strong bg-surface px-3 py-1 font-mono text-[11px] font-semibold text-foreground/90">
                  <IconBroadcast size={14} className="text-accent" />
                  <span>BROADCAST &amp; PRODUCTION</span>
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-[28px]">
                  Studio-Grade NDI, Themes &amp; Operator Control
                </h3>
                <p className="max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                  Send crisp transparent lower-thirds or full-screen Scripture
                  directly into OBS Studio, vMix, and ProPresenter via NDI —
                  paired with hands-free voice commands, custom visual themes,
                  and cross-reference discovery.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 border-t border-border pt-6 sm:grid-cols-3">
                <div className="flex items-start gap-2.5">
                  <IconPalette size={18} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      Theme Designer
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Typography, gradients &amp; sanctuary branding
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <IconAdjustmentsHorizontal size={18} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      OSC &amp; HTTP Remote
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Stream Deck, Bitfocus Companion &amp; tablet control
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <IconSparkles size={18} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      344,799 Cross-Refs
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Instant thematic passage suggestions offline
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Quiet offline reassurance bar */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-3 rounded-2xl border border-border bg-surface px-6 py-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <IconWifiOff size={18} className="shrink-0 text-accent" />
              <p className="text-sm text-muted-foreground">
                <strong className="font-medium text-foreground">
                  Airplane-mode tested:
                </strong>{" "}
                Every bundled Bible, hymn, cross-reference, and local Whisper
                voice engine runs strictly on your church machine.
              </p>
            </div>
            <span className="shrink-0 font-mono text-[11px] uppercase tracking-wider text-accent-gold">
              Zero Telemetry · Zero Subscriptions
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
