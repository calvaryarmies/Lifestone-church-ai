import {
  IconMicrophone,
  IconBook,
  IconMusic,
  IconLanguage,
  IconDeviceDesktop,
  IconBroadcast,
} from "@tabler/icons-react";
import { Container } from "../ui/container";
import { FeatureCard } from "../ui/feature-card";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "./section-heading";

import type { Icon as TablerIcon } from "@tabler/icons-react";

type Feature = {
  icon: TablerIcon;
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    icon: IconMicrophone,
    title: "100% Offline Whisper AI",
    body: "Transcribe live sermons locally with dual Whisper models (Base + Tiny) in under a second — zero internet drop-outs and zero API bills.",
  },
  {
    icon: IconBook,
    title: "Direct & Paraphrase Detection",
    body: "Recognizes spoken English & Spanish citations (John 3:16, Juan 3:16) and paraphrased quotations via ONNX semantic search across 31,102 verses.",
  },
  {
    icon: IconMusic,
    title: "2,937 Built-in Church Hymns",
    body: "Four classic hymnals (GHS, CAC YHB, Baptist Hymnal, Sankey SSFSS) bundled offline — search by number, title, or opening lyrics.",
  },
  {
    icon: IconLanguage,
    title: "5 Open-License Bible Translations",
    body: "Offline SQLite + FTS5 search across KJV, Spanish NTBT (BibliaTodo), SpaRV, FreJND, and PorBLivre — plus 344,799 cross-references.",
  },
  {
    icon: IconDeviceDesktop,
    title: "Plug-and-Play HDMI Auto-Detect",
    body: "Automatically detects your sanctuary projector the moment HDMI connects, prompts once, and launches a clean full-screen Verse Screen.",
  },
  {
    icon: IconBroadcast,
    title: "NDI, OBS, vMix & Remote Control",
    body: "Send transparent broadcast overlays over NDI, customize typography in the Theme Designer, and drive services via voice commands or OSC/HTTP.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="py-20 lg:py-[120px]"
    >
      <Container className="flex flex-col gap-10 md:gap-14">
        <Reveal>
          <SectionHeading
            id="features-heading"
            subtitle="Everything a local church booth needs on Sunday morning — engineered to run offline on both modern GPU rigs and budget Pentium/Celeron laptops."
          >
            Built for live ministry
          </SectionHeading>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 md:[&>*]:-ml-px md:[&>*]:-mt-px lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 80} className="flex">
              <FeatureCard
                icon={f.icon}
                title={f.title}
                body={f.body}
                iconTone="accent"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
