import Link from "next/link";
import {
  IconBrandApple,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWindows,
  IconBrandX,
  IconHeartHandshake,
  IconMail,
} from "@tabler/icons-react";
import { LifestoneLogo } from "../ui/lifestone-logo";
import { SITE } from "../../_lib/site";

const GROUPS = [
  {
    heading: "Explore",
    links: [
      { label: "Capabilities", href: "#capabilities" },
      { label: "Open Translations", href: "#translations" },
      { label: "Standard vs. Lite", href: "#download" },
      { label: "Common Questions", href: "#faq" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Installation Guide", href: "/docs/getting-started/installation" },
      { label: "Latest Releases", href: SITE.repo.releasesLatest, external: true },
      { label: "Community Discussions", href: SITE.repo.discussions, external: true },
    ],
  },
  {
    heading: "Open Lineage",
    links: [
      { label: "Lifestone on GitHub", href: SITE.socials.github, external: true },
      { label: "Rhema by OpenBezal (MIT)", href: SITE.attribution.rhemaUrl, external: true },
      { label: "BibliaTodo (NTBT)", href: SITE.attribution.bibliatodoUrl, external: true },
      { label: "Contact WHITE HORSE", href: SITE.socials.email },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-12 lg:pt-24 lg:pb-14">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] md:gap-8">
          <div className="flex flex-col gap-4">
            <LifestoneLogo showSub />
            <p className="max-w-[320px] text-sm leading-relaxed text-muted-foreground">
              Offline voice-to-scripture projection, 2,937 classic church hymns,
              and 5 open-license Bible translations — anchored for every local
              sanctuary.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-background-elevated px-3 py-1 text-xs font-medium text-foreground">
                <IconBrandWindows size={14} aria-hidden stroke={2} />
                Windows (Standard &amp; Lite)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-background-elevated px-3 py-1 text-xs font-medium text-foreground">
                <IconBrandApple size={14} aria-hidden stroke={2} />
                macOS
              </span>
            </div>
          </div>

          {GROUPS.map((g) => (
            <nav
              key={g.heading}
              aria-label={g.heading}
              className="flex flex-col gap-3"
            >
              <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {g.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <FooterLink
                      href={l.href}
                      external={"external" in l ? l.external : false}
                    >
                      {l.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Respectful Open-Source Attribution Card */}
        <div className="mt-12 rounded-2xl border border-border bg-background-elevated/70 px-5 py-4">
          <div className="flex flex-col gap-2 text-xs leading-relaxed text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-2 sm:items-center">
              <IconHeartHandshake
                size={16}
                className="mt-0.5 sm:mt-0 shrink-0 text-accent"
              />
              <span>
                Built with gratitude on{" "}
                <a
                  href={SITE.attribution.rhemaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent-gold underline underline-offset-4 hover:text-accent"
                >
                  {SITE.attribution.rhemaName}
                </a>{" "}
                ({SITE.attribution.rhemaCopyright}, MIT License). Spanish NTBT
                provided free of charge by{" "}
                <a
                  href={SITE.attribution.bibliatodoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground underline underline-offset-4 hover:text-accent-gold"
                >
                  {SITE.attribution.bibliatodoName}
                </a>
                .
              </span>
            </p>
            <span className="shrink-0 font-mono text-[11px] text-subtle-foreground">
              MIT License
            </span>
          </div>
        </div>

        {/* Bottom Copyright & Socials */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-subtle-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.legalName} media · Lifestone.
            Free and open source for the Body of Christ.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={SITE.socials.github}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent-gold"
            >
              <IconBrandGithub size={18} stroke={2} />
            </a>
            <a
              href={SITE.socials.twitter}
              aria-label="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent-gold"
            >
              <IconBrandX size={18} stroke={2} />
            </a>
            <a
              href={SITE.socials.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent-gold"
            >
              <IconBrandLinkedin size={18} stroke={2} />
            </a>
            <a
              href={SITE.socials.email}
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-accent-gold"
            >
              <IconMail size={18} stroke={2} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const className =
    "text-sm text-muted-foreground transition-colors hover:text-accent-gold";
  if (external || /^https?:|^mailto:/.test(href)) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
