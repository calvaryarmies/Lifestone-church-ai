import { Container } from "../ui/container";

export function ThreeStageMagic() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 border-y border-border-strong bg-surface"
    >
      <Container className="flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground mb-16">
          From sermon to Scripture.{" "}
          <span className="text-accent-gold">Instantly.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-5xl">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-surface-strong border border-border flex items-center justify-center text-3xl mb-2 shadow-[0_0_15px_rgba(25,215,255,0.15)]">
              🎙️
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              01 — Listen Offline
            </h3>
            <p className="text-muted-foreground text-pretty">
              Local Whisper speech AI transcribes live sermons right on your
              church PC in under a second — no internet or monthly API bills.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 text-center relative">
            <div className="hidden md:block absolute top-8 -left-8 w-16 h-[2px] bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0" />
            <div className="w-16 h-16 rounded-full bg-surface-strong border border-border flex items-center justify-center text-3xl mb-2 shadow-[0_0_15px_rgba(25,215,255,0.15)] text-accent-cyan">
              ✦
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              02 — Detect &amp; Match
            </h3>
            <p className="text-muted-foreground text-pretty">
              Multi-strategy Rust detection catches direct English &amp; Spanish
              citations, paraphrased quotations, and 344,799 cross-references.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 text-center relative">
            <div className="hidden md:block absolute top-8 -left-8 w-16 h-[2px] bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0" />
            <div className="w-16 h-16 rounded-full bg-surface-strong border border-border flex items-center justify-center text-3xl mb-2 shadow-[0_0_15px_rgba(244,201,93,0.15)] text-accent-gold">
              ▣
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              03 — Project Live
            </h3>
            <p className="text-muted-foreground text-pretty">
              Plug in HDMI for auto-detected full-screen projection or send
              transparent overlays via NDI into OBS Studio and vMix.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
