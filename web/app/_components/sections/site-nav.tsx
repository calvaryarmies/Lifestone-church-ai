"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IconBrandGithub, IconMenu2, IconX } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { DownloadButton } from "../ui/download-button";
import { LifestoneLogo } from "../ui/lifestone-logo";
import { SITE } from "../../_lib/site";
import { cn } from "../../_lib/utils";

type NavLink = { href: string; label: string; external?: boolean };

const LINKS: ReadonlyArray<NavLink> = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#translations", label: "Translations" },
  { href: "#download", label: "Editions" },
  { href: "/docs", label: "Docs" },
  { href: "#faq", label: "FAQ" },
];

export function SiteNav({ stars }: { stars: number }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-[74px] w-full max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Lifestone home" className="shrink-0">
          <LifestoneLogo showSub />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 rounded-full border border-border bg-background-elevated/70 px-2 py-1.5 backdrop-blur-md lg:flex"
        >
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="rounded-full px-3.5 py-1.5 text-[14px] font-medium text-muted-foreground transition-colors hover:bg-surface-strong hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
          <Button
            href={SITE.repo.url}
            variant="ghost"
            size="md"
            aria-label={`Lifestone on GitHub, ${stars} stars`}
          >
            <IconBrandGithub size={16} aria-hidden stroke={2} />
            <span className="font-mono text-[13px]">{formatStars(stars)}</span>
          </Button>
          <DownloadButton size="md" label="Download" />
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border-strong bg-background-elevated text-foreground hover:border-accent/40 lg:hidden"
        >
          {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
        className="fixed inset-x-0 top-[74px] z-40 border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
      >
        <div className="mx-auto flex max-w-[1320px] flex-col gap-1 px-5 py-6 sm:px-8">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-surface-strong"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2.5 pt-4 border-t border-border">
            <Button
              href={SITE.repo.url}
              variant="secondary"
              size="md"
              className="justify-center"
            >
              <IconBrandGithub size={16} aria-hidden stroke={2} />
              GitHub ({formatStars(stars)})
            </Button>
            <DownloadButton
              size="md"
              label="Download Lifestone"
              className="justify-center w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function formatStars(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}
