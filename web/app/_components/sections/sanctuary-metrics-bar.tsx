const METRICS = [
  {
    value: "5 Open",
    label: "Licensed Bible Translations",
    detail: "KJV · NTBT · SpaRV · FreJND · PorBLivre",
  },
  {
    value: "2,937",
    label: "Offline Church Hymns",
    detail: "GHS · CAC YHB · Baptist · Sankey",
  },
  {
    value: "< 0.8s",
    label: "Local Whisper Voice AI",
    detail: "Zero internet or monthly API bills",
  },
  {
    value: "$0",
    label: "Free Forever for Churches",
    detail: "MIT open source · No account needed",
  },
] as const;

export function SanctuaryMetricsBar() {
  return (
    <section
      aria-label="Lifestone sanctuary highlights"
      className="border-b border-border bg-background-elevated/45"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {METRICS.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-1.5 py-7 sm:px-6 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="font-display text-3xl font-semibold tracking-[-0.03em] text-accent-gold sm:text-[34px]">
                {item.value}
              </span>
              <span className="text-sm font-semibold text-foreground">
                {item.label}
              </span>
              <span className="font-mono text-[11px] text-subtle-foreground">
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
