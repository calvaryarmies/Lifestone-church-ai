import * as React from "react";
import Link from "next/link";
import { cn } from "../../_lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type AsButton = Common &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size" | "children"> & {
    href?: undefined;
  };

type AsLink = Common &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "size" | "children"> & {
    href: string;
  };

type ButtonProps = AsButton | AsLink;

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full whitespace-nowrap font-semibold tracking-[-0.01em] transition-all duration-200 ease-out will-change-transform hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60 cursor-pointer";

const sizes: Record<Size, string> = {
  md: "px-4 py-2 text-[14px] leading-5",
  lg: "px-6 py-3 text-[15px] leading-6",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-primary-foreground shadow-[0_8px_28px_rgba(228,180,76,0.26)] hover:bg-accent-gold hover:shadow-[0_10px_34px_rgba(228,180,76,0.36)]",
  secondary:
    "border border-border-strong bg-surface-strong text-foreground hover:border-accent/40 hover:bg-white/[0.12]",
  ghost:
    "border border-border-strong bg-transparent text-foreground/90 hover:border-accent/40 hover:bg-accent/10 hover:text-accent-gold",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if ("href" in rest && rest.href) {
    const { href, target, rel, ...anchorRest } = rest as AsLink;
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target={target ?? "_blank"}
          rel={rel ?? "noopener noreferrer"}
          className={classes}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonRest } = rest as AsButton;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
