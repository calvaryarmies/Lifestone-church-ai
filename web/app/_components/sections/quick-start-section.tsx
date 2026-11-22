import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "./section-heading";

const STEPS = [
  {
    no: "1",
    title: "Download your edition",
    body: "Choose Standard (~330 MB for Core/Ryzen/GPU) or Lite (~114 MB for Pentium/Celeron) — free for Windows and macOS.",
  },
  {
    no: "2",
    title: "Plug in audio & HDMI",
    body: "Connect any microphone or mixer feed and plug in your projector — Lifestone auto-detects external displays cleanly.",
  },
  {
    no: "3",
    title: "Go live completely offline",
    body: "Scripture across 5 open translations and 2,937 built-in hymns appear instantly with zero internet required.",
  },
] as const;

export function QuickStartSection() {
  return (
    <section
      id="download"
      aria-labelledby="quick-start-heading"
      className="py-20 lg:py-[128px]"
    >
      <Container className="flex flex-col gap-10 md:gap-14 lg:gap-[52px]">
        <Reveal>
          <SectionHeading
            id="quick-start-heading"
            subtitle="No account. No subscription. No Sunday Wi-Fi anxiety. Download Lifestone, plug in your audio and projector, and run your service smoothly from start to finish."
          >
            Ready in under five minutes.
          </SectionHeading>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 md:[&>*]:-ml-px md:[&>*]:-mt-px">
          {STEPS.map((s, i) => (
            <Reveal key={s.no} delay={i * 80} className="flex">
              <div className="flex h-full w-full min-h-[300px] flex-col justify-between gap-8 border border-border-strong p-8 md:min-h-[380px]">
                <p className="text-2xl font-medium leading-8 tracking-[-0.04em] text-accent-cyan">
                  0{s.no}
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-2xl font-medium leading-8 tracking-[-0.04em] text-foreground">
                    {s.title}
                  </p>
                  <p className="text-lg leading-6 tracking-[-0.01em] text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
