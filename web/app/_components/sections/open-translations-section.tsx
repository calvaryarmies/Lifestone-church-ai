import {
  IconBook2,
  IconExternalLink,
  IconShieldCheck,
} from "@tabler/icons-react";
import { Reveal } from "../ui/reveal";
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
      className="border-t border-border bg-background-elevated/35 py-20 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-12 px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Ethical &amp; Open Scripture
            </span>
            <h2
              id="translations-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[44px]"
            >
              5 open-license Bible translations, stored offline in full.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Public Lifestone releases bundle exclusively Public Domain and
            publisher-authorized Scripture — honoring Bible societies while
            guaranteeing 100% offline SQLite + FTS5 search across 4 languages.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PUBLIC_TRANSLATIONS.map((t) => (
            <Reveal key={t.abbr}>
              <article
                className={
                  t.highlight
                    ? "flex h-full flex-col justify-between rounded-[20px] border border-accent/40 bg-accent/[0.07] p-6 shadow-[0_14px_40px_rgba(228,180,76,0.08)]"
                    : "flex h-full flex-col justify-between rounded-[20px] border border-border-strong bg-background-elevated p-6 transition-colors hover:border-accent/35"
                }
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/12 px-3 py-0.5 font-mono text-xs font-bold text-accent-gold">
                      <IconBook2 size={13} />
                      {t.abbr}
                    </span>
                    <span className="font-mono text-[11px] text-subtle-foreground">
                      {t.language} · {t.verses}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {t.name}
                  </h3>

                  <p className="text-sm italic leading-relaxed text-muted-foreground">
                    &ldquo;{t.sampleText}&rdquo;
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between gap-2 border-t border-border pt-4 text-xs">
                  <span className="font-mono text-subtle-foreground">
                    {t.sampleRef}
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium text-accent-live">
                    <IconShieldCheck size={14} />
                    {t.license}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}

          {/* 6th Card: BibliaTodo Credit & Multilingual Vision */}
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-[20px] border border-dashed border-border-strong bg-surface p-6">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  Scripture Attribution
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Faithful to every word &amp; license
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Spanish <strong className="text-foreground">NTBT</strong> is
                  bundled untouched — preserving all original textual brackets
                  and release metadata under the{" "}
                  <a
                    href={SITE.attribution.bibliatodoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-accent-gold underline underline-offset-4 hover:text-accent"
                  >
                    {SITE.attribution.bibliatodoName}
                    <IconExternalLink size={12} />
                  </a>{" "}
                  Free Use Agreement.
                </p>
              </div>
              <p className="mt-5 border-t border-border pt-4 text-xs text-subtle-foreground">
                No unlicensed copyrighted Bible texts are distributed in public
                Lifestone builds.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
