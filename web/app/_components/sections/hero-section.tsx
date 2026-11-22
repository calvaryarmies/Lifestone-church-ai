import {
  IconPlayerPlay,
  IconShieldCheck,
  IconWifiOff,
  IconBrandGithub,
} from "@tabler/icons-react";
import { Button } from "../ui/button";
import { DownloadButton, WindowsCompatibilityNotice } from "../ui/download-button";
import { SanctuaryStagePreview } from "../ui/sanctuary-stage-preview";
import { SITE } from "../../_lib/site";

export function HeroSection({ stars }: { stars: number }) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24">
      {/* Subtle sanctuary grid + warm candlelit stone radial bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 sanctuary-grid opacity-70 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_80%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-[540px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(228,180,76,0.16)_0%,rgba(217,119,54,0.06)_40%,transparent_72%)] blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14 lg:px-10">
        {/* Left: Editorial Sanctuary Pitch & Direct Download Actions */}
        <div className="flex min-w-0 flex-col items-start gap-6">
          {/* Edition Status Badge */}
          <div className="inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-accent/30 bg-accent/[0.08] px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-accent-gold">
            <span className="inline-flex items-center gap-1.5 font-mono font-semibold text-accent">
              <span className="size-1.5 rounded-full bg-accent-live" />
              v1.2.0
            </span>
            <span className="text-accent/40">•</span>
            <span className="inline-flex items-center gap-1">
              <IconWifiOff size={13} />
              100% Offline AI
            </span>
            <span className="hidden xs:inline text-accent/40">•</span>
            <span className="inline-flex items-center gap-1">
              <IconShieldCheck size={13} />
              Open-License Scripture
            </span>
          </div>

          <h1 className="font-display text-[36px] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-[52px] lg:text-[62px]">
            Living Scripture,{" "}
            <span className="bg-gradient-to-r from-accent-gold via-accent to-accent-amber bg-clip-text text-transparent">
              Anchored
            </span>{" "}
            for Every Sanctuary.
          </h1>

          <p className="max-w-[560px] text-[16px] leading-[1.65] text-muted-foreground sm:text-[18px]">
            Lifestone listens to live sermons completely offline and projects
            Bible verses the instant they&apos;re spoken — bundled with{" "}
            <strong className="font-medium text-foreground">
              5 open-license Bible translations
            </strong>
            ,{" "}
            <strong className="font-medium text-foreground">
              2,937 classic church hymns
            </strong>
            , and plug-and-play{" "}
            <strong className="font-medium text-foreground">
              HDMI &amp; NDI broadcast output
            </strong>
            .
          </p>

          {/* Primary Action Row */}
          <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center pt-1">
            <DownloadButton size="lg" className="justify-center" />
            <Button
              href="#demo"
              variant="secondary"
              size="lg"
              className="justify-center"
            >
              <IconPlayerPlay size={16} aria-hidden stroke={2} />
              <span>Watch live demo</span>
            </Button>
          </div>

          {/* Dedicated Budget PC / Lite Switcher Card */}
          <WindowsCompatibilityNotice className="mt-1" />

          {/* Trust & Open-Source Micro-footer */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs text-subtle-foreground">
            <span>Standard GPU/AI (~330 MB) &amp; Lite (~114 MB)</span>
            <span className="hidden sm:inline text-border-strong">•</span>
            <a
              href={SITE.repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-accent-gold transition-colors"
            >
              <IconBrandGithub size={14} />
              <span>Free MIT Open Source ({stars} stars)</span>
            </a>
          </div>
        </div>

        {/* Right: Interactive Live Sanctuary Stage Preview */}
        <div className="min-w-0 w-full">
          <SanctuaryStagePreview />
        </div>
      </div>
    </section>
  );
}
