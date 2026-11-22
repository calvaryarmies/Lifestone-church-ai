import type { Metadata, Viewport } from "next";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./globals.css";
import { SITE } from "./_lib/site";
import { StructuredData } from "./_components/seo/structured-data";

const TITLE = `${SITE.name} — ${SITE.tagline}`;
const OG_TITLE = TITLE;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.shortDescription,
  applicationName: SITE.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Lifestone",
    "Bible verse detection",
    "real-time scripture overlay",
    "offline church presentation software",
    "sermon transcription",
    "church hymnal software",
    "HDMI church projector",
    "NDI overlay",
    "OBS scripture overlay",
    "vMix scripture overlay",
    "Spanish NTBT Bible software",
    "speech-to-scripture",
  ],
  authors: [{ name: SITE.legalName, url: SITE.repo.url }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  category: "Religion",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: OG_TITLE,
    description: SITE.description,
    siteName: SITE.name,
    url: SITE.url,
    locale: SITE.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: SITE.description,
    site: SITE.twitterHandle,
    creator: SITE.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#07111F",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className="dark h-full antialiased"
      data-theme="dark"
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-background text-foreground"
        suppressHydrationWarning
      >
        <StructuredData />
        <RootProvider
          theme={{
            defaultTheme: "dark",
            forcedTheme: "dark",
            enableSystem: false,
          }}
          search={{
            options: {
              type: "static",
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
