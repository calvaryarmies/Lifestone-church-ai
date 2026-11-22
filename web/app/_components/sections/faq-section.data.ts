export type Faq = { question: string; answer: string };

export const FAQS: readonly Faq[] = [
  {
    question: "What is Lifestone?",
    answer:
      "Lifestone is free, open-source church presentation software built with Tauri v2, React, and Rust. It listens to live sermons offline, detects spoken Bible verses — including paraphrased references — bundles 2,937 classic church hymns, and projects cleanly via HDMI, NDI, OBS Studio, and vMix.",
  },
  {
    question: "Does Lifestone require an internet connection on Sunday?",
    answer:
      "No. Lifestone is engineered to work 100% offline. Your bundled Bible translations, 2,937 hymns, 344,799 cross-references, and local Whisper voice recognition all run directly on your church computer with zero internet required.",
  },
  {
    question: "Which Bible translations are included in the public release?",
    answer:
      "Every public Lifestone build ships with 5 open and freely licensed offline Bible translations across 4 languages: KJV (English, Public Domain), NTBT — Nueva Traducción BibliaTodo (Spanish, BibliaTodo Free Use Agreement), SpaRV (Reina-Valera 1909, Public Domain), FreJND (French Darby 1885, Public Domain), and PorBLivre (Portuguese Bíblia Livre, Public Domain).",
  },
  {
    question: "Should I download the Standard or Lite Windows edition?",
    answer:
      "Choose Standard (~330 MB) if your PC has an Intel Core i3/i5/i7/i9, AMD Ryzen, or dedicated GPU and you want the bundled dual Whisper AI models. Choose Lite (~114 MB) for budget or older laptops with Intel Pentium, Celeron, Atom, or Core 2 Duo processors — it uses a safe SSE4 build that avoids AVX2 crashes.",
  },
  {
    question: "How does plug-and-play HDMI projector detection work?",
    answer:
      "When you connect an external display or sanctuary projector via HDMI, Lifestone automatically detects the second screen, prompts you to confirm, and opens your dedicated full-screen Verse Screen directly on that monitor.",
  },
  {
    question: "How is Lifestone related to Rhema?",
    answer:
      "Lifestone is proudly built on the MIT-licensed open-source foundation of Rhema by OpenBezal (Copyright (c) 2025 OpenBezal), extending it for local sanctuaries with offline church hymnals, HDMI auto-detection, Spanish NTBT support, budget-PC Lite builds, and an open-license Scripture release pipeline.",
  },
  {
    question: "Does Lifestone work with OBS Studio and vMix?",
    answer:
      "Yes. Alongside direct HDMI projector projection, Lifestone outputs broadcast-ready overlays via NDI with alpha transparency for OBS Studio, vMix, and other live production switchers.",
  },
  {
    question: "How much does Lifestone cost?",
    answer:
      "Lifestone is completely free and open source under the MIT License. There are no subscriptions, no accounts, and no usage limits.",
  },
];
