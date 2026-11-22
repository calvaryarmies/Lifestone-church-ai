import { cn } from "../../_lib/utils";

export function LifestoneLogo({
  className,
  wordmarkClassName,
  size = "md",
  showSub = false,
}: {
  className?: string;
  wordmarkClassName?: string;
  size?: "sm" | "md" | "lg";
  showSub?: boolean;
}) {
  const iconSize =
    size === "sm" ? "size-7" : size === "lg" ? "size-11" : "size-9";
  const textSize =
    size === "sm"
      ? "text-lg tracking-[-0.02em] leading-6"
      : size === "lg"
        ? "text-[28px] tracking-[-0.03em] leading-[34px]"
        : "text-[22px] tracking-[-0.025em] leading-[28px]";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "relative flex items-center justify-center rounded-xl border border-accent/25 bg-accent/10 p-1 shadow-[0_0_24px_rgba(228,180,76,0.18)]",
          iconSize
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/lifestone-logo.png"
          alt="Lifestone"
          className="h-full w-full object-contain drop-shadow-[0_0_8px_rgba(228,180,76,0.45)]"
        />
      </span>
      <span className="flex flex-col">
        <span
          className={cn(
            "font-display font-semibold text-foreground",
            textSize,
            wordmarkClassName
          )}
        >
          Lifestone
        </span>
        {showSub && (
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/80 leading-none mt-0.5">
            by WHITE HORSE
          </span>
        )}
      </span>
    </span>
  );
}
