import { SiteNav } from "../_components/sections/site-nav";
import { HeroSection } from "../_components/sections/hero-section";
import { SanctuaryMetricsBar } from "../_components/sections/sanctuary-metrics-bar";
import { DemoVideoSection } from "../_components/sections/demo-video-section";
import { PillarsBentoSection } from "../_components/sections/pillars-bento-section";
import { OpenTranslationsSection } from "../_components/sections/open-translations-section";
import { EditionsDownloadSection } from "../_components/sections/editions-download-section";
import { FaqSection } from "../_components/sections/faq-section";
import { SiteFooter } from "../_components/sections/site-footer";
import { getGitHubStars } from "../_lib/site";

export default async function Home() {
  const stars = await getGitHubStars();

  return (
    <>
      <SiteNav stars={stars} />
      <main>
        <HeroSection stars={stars} />
        <SanctuaryMetricsBar />
        <DemoVideoSection />
        <PillarsBentoSection />
        <OpenTranslationsSection />
        <EditionsDownloadSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
