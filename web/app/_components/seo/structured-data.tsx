import { SITE } from "../../_lib/site";
import { FAQS } from "../sections/faq-section.data";

const ORG_ID = `${SITE.url}/#organization`;
const SITE_ID = `${SITE.url}/#website`;
const APP_ID = `${SITE.url}/#software`;
const FAQ_ID = `${SITE.url}/#faq`;

export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE.legalName,
        alternateName: SITE.name,
        url: SITE.url,
        logo: {
          "@type": "ImageObject",
          url: `${SITE.url}/icon.png`,
          width: 1024,
          height: 1024,
        },
        sameAs: [
          SITE.socials.github,
          SITE.socials.twitter,
          SITE.socials.linkedin,
        ],
        foundingDate: SITE.founded,
      },
      {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        inLanguage: "en",
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "SoftwareApplication",
        "@id": APP_ID,
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
        applicationCategory: "MultimediaApplication",
        operatingSystem: SITE.operatingSystems.join(", "),
        downloadUrl:
          "https://github.com/calvaryarmies/Lifestone-church-ai/releases/download/v1.2.0/Lifestone_1.2.0_x64-setup.exe",
        installUrl:
          "https://github.com/calvaryarmies/Lifestone-church-ai/releases/download/v1.2.0/Lifestone_1.2.0_x64-setup.exe",
        softwareVersion: "1.2.0",
        license: "https://opensource.org/licenses/MIT",
        isAccessibleForFree: true,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        publisher: { "@id": ORG_ID },
        featureList: [
          "100% offline real-time speech transcription with local Whisper AI",
          "Automatic Bible verse detection from explicit citations and paraphrased passages",
          "5 open and freely licensed offline Bible translations: KJV, Spanish NTBT (Nueva Traducción BibliaTodo), SpaRV, FreJND, and PorBLivre",
          "2,937 offline church hymns bundled across 4 classic hymnals",
          "Plug-and-play HDMI external display auto-detection",
          "Broadcast-ready scripture overlays via NDI for OBS Studio and vMix",
          "Standard (GPU/Modern PC) and Lite (Pentium/Celeron) Windows editions",
          "Free and open source under the MIT License",
        ],
        keywords:
          "Bible verse detection, offline church software, sermon transcription, HDMI projection, NDI overlay, church hymns, Spanish NTBT",
      },
      {
        "@type": "FAQPage",
        "@id": FAQ_ID,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
