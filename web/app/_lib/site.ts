export const SITE = {
  name: "Lifestone",
  legalName: "WHITE HORSE",
  tagline: "Offline Voice-to-Scripture & Sanctuary Projection for Every Church",
  shortDescription:
    "Lifestone is free, open-source church presentation software with offline AI Bible detection, 2,937 built-in hymns, 5 open-license Bible translations, and plug-and-play HDMI & NDI projection.",
  description:
    "Lifestone listens to live sermons completely offline, projects Bible verses across 5 open-license translations (KJV, Spanish NTBT, SpaRV, FreJND, PorBLivre), bundles 2,937 classic church hymns, and outputs cleanly to HDMI projectors, NDI, OBS, and vMix.",
  url: "https://lifestone-church-ai.vercel.app",
  locale: "en_US",
  twitterHandle: "@calvaryarmies",
  founded: "2026",
  category: "ChurchSoftware",
  operatingSystems: ["Windows", "macOS"],
  repo: {
    owner: "calvaryarmies",
    name: "Lifestone-church-ai",
    url: "https://github.com/calvaryarmies/Lifestone-church-ai",
    releasesLatest:
      "https://github.com/calvaryarmies/Lifestone-church-ai/releases/latest",
    discussions:
      "https://github.com/calvaryarmies/Lifestone-church-ai/discussions",
    stars: { fallback: 221 },
  },
  attribution: {
    rhemaName: "Rhema by OpenBezal",
    rhemaUrl: "https://github.com/openbezal/rhema",
    rhemaCopyright: "Copyright (c) 2025 OpenBezal",
    bibliatodoName: "BibliaTodo Bible Society",
    bibliatodoUrl: "https://www.bibliatodo.com",
  },
  socials: {
    github: "https://github.com/calvaryarmies/Lifestone-church-ai",
    twitter: "https://x.com/calvaryarmies",
    linkedin: "https://www.linkedin.com/in/mohammed-bello-sani-369a89284",
    email: "mailto:calvaryarmies@gmail.com",
  },
  stats: {
    languages: "4",
    translations: "5 Open",
    hymns: "2,937",
  },
} as const;

export async function getGitHubStars(): Promise<number> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
    };
    const token = process.env.GITHUB_TOKEN;
    if (token) headers.Authorization = `Bearer ${token}`;

    const res = await fetch(
      `https://api.github.com/repos/${SITE.repo.owner}/${SITE.repo.name}`,
      { headers }
    );
    if (!res.ok) return SITE.repo.stars.fallback;
    const data = (await res.json()) as { stargazers_count?: number };
    return typeof data.stargazers_count === "number"
      ? data.stargazers_count
      : SITE.repo.stars.fallback;
  } catch {
    return SITE.repo.stars.fallback;
  }
}
