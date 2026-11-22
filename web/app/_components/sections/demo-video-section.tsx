"use client";

import { useRef, useState } from "react";
import { IconVolume, IconVolumeOff } from "@tabler/icons-react";
import { Reveal } from "../ui/reveal";

export function DemoVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section id="demo" className="py-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-10 px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              In the Booth
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[44px]">
              From pulpit voice to sanctuary screen in a breath.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Watch Lifestone transcribe spoken sermons locally, catch direct and
            paraphrased references, and drive crisp broadcast graphics without a
            single frantic keyboard search.
          </p>
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden rounded-[24px] border border-border-strong bg-background-elevated shadow-[0_32px_90px_rgba(0,0,0,0.68)]">
            {/* Warm-stone studio monitor top bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-black/45 px-5 py-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-accent-gold">
                  <span className="size-2 rounded-full bg-accent-live animate-pulse" />
                  Lifestone Studio Control
                </span>
                <span className="hidden sm:inline text-border-strong">|</span>
                <span className="hidden sm:inline font-mono text-[11px] text-subtle-foreground">
                  HDMI · NDI · OBS · vMix
                </span>
              </div>

              <button
                type="button"
                onClick={toggleMute}
                className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-surface px-3 py-1 font-mono text-[11px] font-medium text-muted-foreground hover:border-accent/40 hover:text-foreground transition-colors cursor-pointer"
              >
                {muted ? (
                  <>
                    <IconVolumeOff size={14} className="text-accent" />
                    <span>Unmute preview</span>
                  </>
                ) : (
                  <>
                    <IconVolume size={14} className="text-accent-live" />
                    <span>Audio on</span>
                  </>
                )}
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                src="/demo-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
