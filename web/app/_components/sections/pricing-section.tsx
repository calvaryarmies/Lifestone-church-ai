import { DownloadButton } from "../ui/download-button";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "./section-heading";

export function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="py-20 lg:py-[120px]"
    >
      <Container className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading id="pricing-heading">Pricing</SectionHeading>
        </Reveal>
        <Reveal>
          <div className="flex flex-col gap-6 border border-border-strong p-8 md:p-10">
            <div className="flex flex-col gap-2">
              <p className="text-[34px] font-medium leading-none tracking-[-0.04em] text-foreground">
                Free Forever
              </p>
              <p className="max-w-[1080px] text-lg leading-8 text-muted-foreground lg:text-2xl">
                Lifestone is 100% free and MIT open source — no subscriptions, no
                accounts, and no cloud API fees. Both Standard (~330 MB GPU/AI)
                and Lite (~114 MB Pentium/Celeron) editions ship every offline
                Bible translation, all 2,937 hymns, and HDMI/NDI output.
              </p>
            </div>
            <div>
              <DownloadButton size="md" showCompatibilityNotice={true} />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
