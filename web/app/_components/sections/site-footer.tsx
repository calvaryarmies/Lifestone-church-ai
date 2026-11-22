import Link from "next/link";
import {
  IconBrandApple,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWindows,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import { Container } from "../ui/container";
import { LifestoneLogo } from "../ui/lifestone-logo";
import { SITE } from "../../_lib/site";

const GROUPS = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Translations", href: "#translations" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Getting started", href: "/docs/getting-started/installation" },
      { label: "Latest Releases", href: SITE.repo.releasesLatest, external: true },
      { label: "Help center", href: SITE.repo.discussions, external: true },
    ],
  },
  {
    heading: "Socials",
    links: [
      { label: "GitHub", href: SITE.socials.github, external: true },
      { label: "Email", href: SITE.socials.email },
      { label: "X (Twitter)", href: SITE.socials.twitter, external: true },
      { label: "LinkedIn", href: SITE.socials.linkedin, external: true },
    ],
  },
  {
    heading: "Open Lineage",
    links: [
      { label: "Rhema by OpenBezal (MIT)", href: SITE.attribution.rhemaUrl, external: true },
      { label: "BibliaTodo (NTBT)", href: SITE.attribution.bibliatodoUrl, external: true },
      { label: "FAQs", href: "#faq" },
      { label: "Download", href: "#download" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-20 lg:py-[100px]">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1.4fr)_repeat(4,minmax(0,1fr))] md:gap-8">
          <div className="flex flex-col gap-3">
            <LifestoneLogo />
            <p className="max-w-[290px] text-lg leading-6 tracking-[-0.01em] text-muted-foreground">
              Offline AI Bible verse detection, 2,937 classic church hymns, and
              5 open-license translations for every sanctuary.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-border-strong px-[14px] py-[6px] text-[15px] text-foreground">
                <IconBrandWindows size={16} aria-hidden stroke={2} />
                Windows
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border-strong px-[14px] py-[6px] text-[15px] text-foreground">
                <IconBrandApple size={16} aria-hidden stroke={2} />
                macOS
              </span>
            </div>
          </div>
          {GROUPS.map((g) => (
            <nav
              key={g.heading}
              aria-label={g.heading}
              className="flex flex-col gap-[10px]"
            >
              <h4 className="text-[15px] leading-6 text-foreground">
                {g.heading}
              </h4>
              <ul className="flex flex-col gap-[10px]">
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

        {/* Respectful MIT & Scripture Attribution Bar */}
        <div className="mt-12 rounded-xl border border-border bg-surface px-5 py-4 text-xs leading-relaxed text-muted-foreground">
          Built with gratitude on{" "}
          <a
            href={SITE.attribution.rhemaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-cyan underline underline-offset-4 hover:text-foreground transition-colors"
          >
            {SITE.attribution.rhemaName}
          </a>{" "}
          ({SITE.attribution.rhemaCopyright}, MIT License). Spanish NTBT
          provided free of charge by{" "}
          <a
            href={SITE.attribution.bibliatodoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 hover:text-accent-cyan transition-colors"
          >
            {SITE.attribution.bibliatodoName}
          </a>
          .
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-[13px] leading-5 text-subtle-foreground md:flex-row md:items-center">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <p>© {new Date().getFullYear()} {SITE.legalName} media · Lifestone. Free &amp; MIT Open Source.</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={SITE.socials.github}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <IconBrandGithub size={18} stroke={2} />
            </a>
            <a
              href={SITE.socials.twitter}
              aria-label="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <IconBrandX size={18} stroke={2} />
            </a>
            <a
              href={SITE.socials.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <IconBrandLinkedin size={18} stroke={2} />
            </a>
            <a
              href={SITE.socials.email}
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <IconMail size={18} stroke={2} />
            </a>
          </div>
        </div>
      </Container>
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
    "text-[15px] leading-6 text-muted-foreground transition-colors hover:text-foreground";
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
