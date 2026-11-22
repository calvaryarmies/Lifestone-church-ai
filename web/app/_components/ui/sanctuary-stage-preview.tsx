"use client";

import { useState } from "react";
import {
  IconBroadcast,
  IconMicrophone,
  IconMusic,
  IconBook,
  IconDeviceDesktop,
} from "@tabler/icons-react";
import { cn } from "../../_lib/utils";

type PreviewSlide = {
  id: string;
  tabLabel: string;
  badge: string;
  kind: "scripture" | "hymn";
  reference: string;
  translationTag: string;
  text: string;
  spokenTranscript: string;
  latency: string;
  creditNote?: string;
};

const SLIDES: readonly PreviewSlide[] = [
  {
    id: "kjv",
    tabLabel: "KJV",
    badge: "English • Public Domain",
    kind: "scripture",
    reference: "1 Peter 2:5",
    translationTag: "KJV",
    text: "Ye also, as lively stones, are built up a spiritual house, an holy priesthood, to offer up spiritual sacrifices, acceptable to God by Jesus Christ.",
    spokenTranscript:
      "“Turn with me to First Peter chapter two, verse five — ye also as lively stones…”",
    latency: "0.41s",
  },
  {
    id: "ntbt",
    tabLabel: "NTBT (ES)",
    badge: "Español • BibliaTodo Free Use",
    kind: "scripture",
    reference: "Mateo 18:11",
    translationTag: "NTBT",
    text: "[Porque el Hijo del Hombre ha venido a salvar lo que se había perdido.]",
    spokenTranscript:
      "“Leamos en Mateo capítulo dieciocho, versículo once, en la Nueva Traducción BibliaTodo…”",
    latency: "0.46s",
    creditNote: "Nueva Traducción BibliaTodo • Exact canonical text preserved",
  },
  {
    id: "frejnd",
    tabLabel: "FreJND",
    badge: "Français • Domaine Public",
    kind: "scripture",
    reference: "Jean 3:16",
    translationTag: "FreJND",
    text: "Car Dieu a tant aimé le monde, qu’il a donné son Fils unique, afin que quiconque croit en lui ne périsse pas, mais qu’il ait la vie éternelle.",
    spokenTranscript:
      "“Ouvrons la Bible dans l’Évangile selon Jean, chapitre trois, verset seize…”",
    latency: "0.44s",
  },
  {
    id: "porblivre",
    tabLabel: "PorBLivre",
    badge: "Português • Domínio Público",
    kind: "scripture",
    reference: "Salmos 23:1",
    translationTag: "PorBLivre",
    text: "O SENHOR é o meu pastor; nada me faltará.",
    spokenTranscript:
      "“Vamos ler juntos no Salmo vinte e três, versículo primeiro…”",
    latency: "0.39s",
  },
  {
    id: "hymn",
    tabLabel: "Hymnal",
    badge: "2,937 Offline Hymns • GHS / CAC / BHB",
    kind: "hymn",
    reference: "GHS #1 • Stanza 1 of 4",
    translationTag: "HYMNAL",
    text: "Holy, holy, holy! Lord God Almighty!\nEarly in the morning our song shall rise to Thee;\nHoly, holy, holy! Merciful and mighty!\nGod in three Persons, blessed Trinity!",
    spokenTranscript:
      "Operator queued GHS #1 from offline hymnal library — instant HDMI switch",
    latency: "Instant",
  },
];

export function SanctuaryStagePreview() {
  const [activeId, setActiveId] = useState<string>("kjv");
  const active = SLIDES.find((s) => s.id === activeId) ?? SLIDES[0];

  return (
    <div className="relative min-w-0 w-full max-w-full">
      {/* Warm golden aura behind the sanctuary console */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 sm:-inset-6 rounded-[36px] bg-[radial-gradient(ellipse_at_center,rgba(228,180,76,0.18)_0%,rgba(217,119,54,0.06)_45%,transparent_72%)] blur-2xl"
      />

      <div className="relative min-w-0 overflow-hidden rounded-[24px] border border-border-strong bg-background-elevated/95 shadow-[0_28px_80px_rgba(0,0,0,0.72)] backdrop-blur-xl">
        {/* Console top telemetry bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-black/35 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-live/30 bg-accent-live/12 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-live">
              <span className="size-1.5 rounded-full bg-accent-live animate-pulse" />
              Live Stage
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[11px] text-subtle-foreground">
              <IconDeviceDesktop size={13} className="text-accent/80" />
              HDMI 2 · 1080p
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
            <IconBroadcast size={13} className="text-accent" />
            <span>NDI + HDMI · 100% Offline</span>
          </div>
        </div>

        {/* Translation / Hymnal Interactive Selector */}
        <div
          role="tablist"
          aria-label="Preview bundled translations and hymns"
          className="flex items-center gap-1.5 overflow-x-auto border-b border-border bg-black/20 px-4 py-2.5"
        >
          {SLIDES.map((slide) => {
            const isActive = slide.id === active.id;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(slide.id)}
                className={cn(
                  "inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all cursor-pointer",
                  isActive
                    ? "bg-accent text-primary-foreground font-semibold shadow-[0_0_16px_rgba(228,180,76,0.3)]"
                    : "border border-border bg-surface text-muted-foreground hover:border-accent/35 hover:text-foreground"
                )}
              >
                {slide.kind === "hymn" ? (
                  <IconMusic size={13} />
                ) : (
                  <IconBook size={13} />
                )}
                <span>{slide.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Sanctuary Projector Output Viewport */}
        <div className="relative flex min-h-[300px] sm:min-h-[330px] flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#1F1911_0%,#0E0C0A_68%,#080706_100%)] px-6 py-10 text-center">
          {/* Subtle architectural sanctuary concentric rings */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <div className="size-[220px] rounded-full border border-accent/15 animate-sanctuary-pulse" />
            <div className="absolute size-[340px] rounded-full border border-accent/[0.08]" />
            <div className="absolute size-[460px] rounded-full border border-accent/[0.04]" />
          </div>

          <div className="relative z-10 flex max-w-[460px] flex-col items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-accent-gold">
              <span>{active.reference}</span>
              <span className="text-accent/50">•</span>
              <span>{active.translationTag}</span>
            </span>

            <blockquote className="font-display text-xl sm:text-[23px] font-medium leading-[1.45] tracking-[-0.015em] text-foreground whitespace-pre-line">
              {active.kind === "scripture" ? `“${active.text}”` : active.text}
            </blockquote>

            <div className="flex flex-col items-center gap-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
                {active.badge}
              </span>
              {active.creditNote && (
                <span className="text-[11px] text-accent/80">
                  {active.creditNote}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Simulated Live Local Whisper Transcript Bar */}
        <div className="flex items-center justify-between gap-3 border-t border-border bg-black/45 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
              <IconMicrophone size={15} />
            </span>
            <p className="truncate text-xs text-muted-foreground">
              {active.spokenTranscript}
            </p>
          </div>
          <span className="shrink-0 rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[10px] font-semibold text-accent-gold">
            {active.latency}
          </span>
        </div>
      </div>
    </div>
  );
}
