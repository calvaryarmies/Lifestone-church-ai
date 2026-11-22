import {
  IconBook2,
  IconExternalLink,
  IconShieldCheck,
} from "@tabler/icons-react";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "./section-heading";
import { SITE } from "../../_lib/site";

type TranslationCard = {
  abbr: string;
  name: string;
  language: string;
  verses: string;
  license: string;
  highlight?: boolean;
  sampleRef: string;
  sampleText: string;
};

const PUBLIC_TRANSLATIONS: readonly TranslationCard[] = [
  {
    abbr: "KJV",
    name: "King James Version",
    language: "English",
    verses: "31,102 verses",
    license: "Public Domain",
    sampleRef: "Psalm 119:105",
    sampleText: "Thy word is a lamp unto my feet, and a light unto my path.",
  },
  {
    abbr: "NTBT",
    name: "Nueva Traducción BibliaTodo",
    language: "Español",
    verses: "31,104 verses",
    license: "BibliaTodo Free Use v1.7",
    highlight: true,
    sampleRef: "Juan 3:16",
    sampleText:
      "Porque de tal manera amó Dios al mundo, que dio a su Hijo unigénito, para que todo aquel que cree en él no se pierda, sino que tenga vida eterna.",
  },
  {
    abbr: "SpaRV",
    name: "Reina-Valera 1909",
    language: "Español",
    verses: "31,102 verses",
    license: "Public Domain",
    sampleRef: "Salmos 23:1",
    sampleText: "Jehová es mi pastor; nada me faltará.",
  },
  {
    abbr: "FreJND",
    name: "J.N. Darby 1885",
    language: "Français",
    verses: "31,172 verses",
    license: "Public Domain",
    sampleRef: "Psaumes 23:1",
    sampleText: "L’Éternel est mon berger : je ne manquerai de rien.",
  },
  {
    abbr: "PorBLivre",
    name: "Bíblia Livre",
    language: "Português",
    verses: "31,104 verses",
    license: "Public Domain",
    sampleRef: "Salmos 23:1",
    sampleText: "O SENHOR é o meu pastor; nada me faltará.",
  },
];

export function OpenTranslationsSection() {
  return (
    <section
      id="translations"
      aria-labelledby="translations-heading"
      className="py-20 lg:py-[120px]"
    >
      <Container className="flex flex-col gap-10 md:gap-14">
        <Reveal>
          <SectionHeading
            id="translations-heading"
            subtitle="5 open and freely licensed Bible translations bundled in full for instant offline SQLite + FTS5 search across 4 languages."
          >
            Open-license Scripture, ready offline
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 md:[&>*]:-ml-px md:[&>*]:-mt-px lg:grid-cols-3">
          {PUBLIC_TRANSLATIONS.map((t, i) => (
            <Reveal key={t.abbr} delay={(i % 3) * 80} className="flex">
              <article
                className={
                  t.highlight
                    ? "flex h-full w-full flex-col justify-between gap-6 border border-accent-cyan/40 bg-accent-cyan/[0.06] p-8"
                    : "flex h-full w-full flex-col justify-between gap-6 border border-border-strong bg-surface p-8"
                }
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-3 py-0.5 font-mono text-xs font-semibold text-accent-cyan">
                      <IconBook2 size={13} />
                      {t.abbr}
                    </span>
                    <span className="font-mono text-xs text-subtle-foreground">
                      {t.language} · {t.verses}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium tracking-[-0.02em] text-foreground">
                    {t.name}
                  </h3>

                  <p className="text-[15px] italic leading-6 text-muted-foreground">
                    &ldquo;{t.sampleText}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between gap-2 border-t border-border pt-4 text-xs">
                  <span className="font-mono text-subtle-foreground">
                    {t.sampleRef}
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium text-emerald-400">
                    <IconShieldCheck size={14} />
                    {t.license}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}

          {/* 6th Card: BibliaTodo Credit */}
          <Reveal delay={160} className="flex">
            <div className="flex h-full w-full flex-col justify-between gap-6 border border-border-strong bg-surface/60 p-8">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs uppercase tracking-wider text-accent-gold">
                  Scripture Attribution
                </span>
                <h3 className="text-xl font-medium tracking-[-0.02em] text-foreground">
                  Faithful to every word &amp; license
                </h3>
                <p className="text-[15px] leading-6 text-muted-foreground">
                  Spanish <strong className="text-foreground">NTBT</strong> is
                  bundled verbatim — preserving all original textual brackets
                  and release metadata under the{" "}
                  <a
                    href={SITE.attribution.bibliatodoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent-cyan underline underline-offset-4 hover:text-foreground"
                  >
                    {SITE.attribution.bibliatodoName}
                    <IconExternalLink size={12} />
                  </a>{" "}
                  Free Use Agreement.
                </p>
              </div>
              <p className="border-t border-border pt-4 text-xs text-subtle-foreground">
                100% offline SQLite + FTS5 search with 344,799 openbible.info
                cross-references.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
