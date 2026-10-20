// Auto-SEO engine for KodiLane — pages build their metadata + schema from data.
import { SITE_URL, SITE_NAME } from "./constants";
import { KODI } from "./kodi";
import type { Guide } from "./guides";

export function downloadTitle(): string {
  return `Kodi APK Download (v${KODI.version} ${KODI.codename}) — Latest Version | ${SITE_NAME}`;
}

export function downloadMeta(): string {
  return `Download Kodi APK v${KODI.version} ${KODI.codename} for Android, Firestick & Android TV — official, free and open-source. 32-bit and 64-bit builds, safe direct download.`;
}

export function kodiFaqs(): { q: string; a: string }[] {
  return [
    {
      q: "Is Kodi free?",
      a: "Yes. Kodi is completely free and open-source software released under the GPL by the XBMC Foundation. There is no subscription and no premium version.",
    },
    {
      q: "Is Kodi legal?",
      a: "Yes. Kodi is a legal media player. Installing it on your own Android device, Firestick or TV is completely legal. KodiLane only covers the official app and addons from the official Kodi repository.",
    },
    {
      q: `What is the latest version of Kodi?`,
      a: `The latest stable version is Kodi ${KODI.version} "${KODI.codename}". A newer Kodi 22 "Piers" release is still in testing (release-candidate stage).`,
    },
    {
      q: "Should I download the 32-bit or 64-bit Kodi APK?",
      a: "Firestick and older devices need the 32-bit (ARMV7A) build. Newer phones, Nvidia Shield and modern Android TVs run the 64-bit (ARM64) build. If one fails with 'App not installed', use the other.",
    },
    {
      q: "Is the Kodi APK on KodiLane the official file?",
      a: "Yes. KodiLane hosts the unmodified official release published by the XBMC Foundation on the Kodi mirrors — no mods, no bundled extras.",
    },
    {
      q: "Does Kodi work on Firestick?",
      a: "Yes. Kodi runs on all Firestick and Fire TV models. Because Amazon does not list Kodi in its Appstore, you install the APK with the free Downloader app — our Firestick guide walks through it in about 5 minutes.",
    },
  ];
}

export function softwareSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kodi",
    operatingSystem: "Android",
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
