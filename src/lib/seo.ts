// Auto-SEO engine for KodiLane — pages build their metadata + schema from data.
import { SITE_URL, SITE_NAME } from "./constants";
import { KODI } from "./kodi";
import type { Guide } from "./guides";
import { GUIDES as GUIDES_SEO } from "./guides";

export function downloadTitle(): string {
  return `Kodi APK Download (v${KODI.version} ${KODI.codename}) — Latest Version | ${SITE_NAME}`;
}

export function downloadMeta(): string {
  return `Download Kodi APK v${KODI.version} ${KODI.codename} for Android, Firestick & Android TV — official, free and open-source. 32-bit and 64-bit builds, safe direct download.`;
}

export function kodiFaqs(): { q: string; a: string }[] {
  return [
    {
      q: "Is NetMirror free?",
      a: "Yes. NetMirror is completely free and open-source software released under the GPL by the XBMC Foundation. There is no subscription and no premium version.",
    },
    {
      q: "Is NetMirror legal?",
      a: "Yes. NetMirror is a legal media player. Installing it on your own Android device, Firestick or TV is completely legal. NetMirrorLane only covers the official app and addons from the official NetMirror repository.",
    },
    {
      q: `What is the latest version of NetMirror?`,
      a: `The latest stable version is NetMirror ${KODI.version} "${KODI.codename}". A newer NetMirror 22 "Piers" release is still in testing (release-candidate stage).`,
    },
    {
      q: "Should I download the 32-bit or 64-bit NetMirror APK?",
      a: "Firestick and older devices need the 32-bit (ARMV7A) build. Newer phones, Nvidia Shield and modern Android TVs run the 64-bit (ARM64) build. If one fails with 'App not installed', use the other.",
    },
    {
      q: "Is the NetMirror APK on NetMirrorLane the official file?",
      a: "Yes. KodiLane hosts the unmodified official release published by the XBMC Foundation on the NetMirror mirrors — no mods, no bundled extras.",
    },
    {
      q: "Does NetMirror work on Firestick?",
      a: "Yes. NetMirror runs on all Firestick and Fire TV models. Because Amazon does not list NetMirror in its Appstore, you install the APK with the free Downloader app — our Firestick guide walks through it in about 5 minutes.",
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

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Download the official NetMirror APK and follow step-by-step install guides for Firestick, Android and Android TV. Legal addons only.",
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
    name: "NetMirror Guides",
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