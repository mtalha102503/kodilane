// Auto-SEO engine for KodiLane — pages build their metadata + schema from data.
import { SITE_URL, SITE_NAME } from "./constants";
import { KODI } from "./kodi";
import type { Guide } from "./guides";
import { GUIDES as GUIDES_SEO } from "./guides";

export function downloadTitle(): string {
  return `Kodi APK Download (v${KODI.version} ${KODI.codename}) — Latest Version | ${SITE_NAME}`;
}

export function downloadMeta(): string {
  return `Download Kodi v${KODI.version} ${KODI.codename} for Android & Windows — official, free and open-source. Android APKs (32-bit & 64-bit) and the Windows 64-bit installer, safe direct download.`;
}

export function kodiFaqs(): { q: string; a: string }[] {
  return [
    {
      q: "Is Kodi free?",
      a: "Yes. Kodi is completely free and open-source software released under the GPL by the XBMC Foundation. There is no subscription and no premium version.",
    },
    {
      q: "Is Kodi legal?",
      a: "Yes. Kodi is a legal media player. Installing it on your own Android device or Windows PC is completely legal. KodiLane only covers the official app and addons from the official Kodi repository.",
    },
    {
      q: `What is the latest version of Kodi?`,
      a: `The latest stable version is Kodi ${KODI.version} "${KODI.codename}". A newer Kodi 22 "Piers" release is still in testing (release-candidate stage).`,
    },
    {
      q: "Should I download the 32-bit or 64-bit Kodi APK?",
      a: "Older Android devices need the 32-bit (armeabi-v7a) build; newer phones (2018 or later) run the 64-bit (arm64-v8a) build. On Windows, use the 64-bit .exe installer. If an Android build fails with 'App not installed', use the other one.",
    },
    {
      q: "Is the Kodi APK on KodiLane the official file?",
      a: "Yes. KodiLane hosts the unmodified official release published by the XBMC Foundation on the Kodi mirrors — no mods, no bundled extras.",
    },
    {
      q: "Does Kodi work on Windows?",
      a: "Yes. Kodi 21.3 runs on Windows 10 and 11 (64-bit). Download the .exe installer from this site and follow our Windows guide — setup takes about five minutes and no Microsoft Store account is needed.",
    },
  ];
}

export function softwareSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kodi",
    operatingSystem: "Android, Windows",
    applicationCategory: "MultimediaApplication",
    softwareVersion: KODI.version,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: undefined,
    author: { "@type": "Organization", name: "XBMC Foundation" },
    downloadUrl: `${SITE_URL}/download`,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function guideSchema(guide: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: `${SITE_URL}/guides/${guide.slug}`,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Download the official Kodi and follow step-by-step install guides for Android and Windows. Legal addons only.",
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function guidesItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Kodi Guides",
    itemListElement: GUIDES_SEO.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: g.title,
      url: `${SITE_URL}/guides/${g.slug}`,
    })),
  };
}


export function howToSchema(guide: Guide) {
  const steps = guide.sections.flatMap((s) =>
    (s.steps ?? []).map((text) => ({ "@type": "HowToStep", name: text.slice(0, 110), text }))
  );
  if (steps.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.title,
    description: guide.metaDescription,
    step: steps,
  };
}
