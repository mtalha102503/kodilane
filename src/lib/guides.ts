// KodiLane guides — setup, install and legal-addon guides only.

export interface GuideSection {
  heading: string;
  paragraphs?: string[];
  steps?: string[];
}

export interface Guide {
  slug: string;
  title: string;
  metaDescription: string;
  intro: string;
  readMinutes: number;
  updated: string;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
}

export const GUIDES: Guide[] = [
  {
    slug: "install-kodi-on-firestick",
    title: "How to Install Kodi on Firestick (2026 Step-by-Step Guide)",
    metaDescription:
      "Install Kodi 21.3 Omega on any Amazon Firestick or Fire TV in about 5 minutes with the Downloader app. Screenshots-free, beginner-friendly steps.",
    intro:
      "Kodi is not available in the Amazon Appstore, so Firestick users install it by sideloading the official APK. This guide uses the free Downloader app and the official Kodi release — the same method recommended by the Kodi community. It works on Firestick Lite, Firestick 4K, 4K Max and Fire TV Cube.",
    readMinutes: 6,
    updated: "October 2026",
    sections: [
      {
        heading: "Step 1 — Allow apps from unknown sources",
        steps: [
          "From the Firestick home screen, go to Settings (gear icon).",
          "Open My Fire TV (or Device & Software on newer models).",
          "Select About and press the centre button on your Firestick name 7 times — you will see 'You are now a developer'.",
          "Go back and open Developer Options.",
          "Turn on 'Install unknown apps' and allow it for the Downloader app (or turn on 'Apps from Unknown Sources' on older models).",
        ],
      },
      {
        heading: "Step 2 — Install the Downloader app",
        steps: [
          "Press the Search (magnifier) icon on the home screen and type 'Downloader'.",
          "Select the Downloader app by AFTVnews (orange icon) and install it — it is free.",
          "Open Downloader and allow storage permission if asked.",
        ],
      },
      {
        heading: "Step 3 — Download the Kodi APK",
        steps: [
          "In Downloader's URL box, type: kodilane.com/download and press Go.",
          "Choose the 32-bit (ARMV7A) version — this is the correct build for every Firestick model.",
          "Wait for the download to finish; the installer opens automatically.",
        ],
      },
      {
        heading: "Step 4 — Install and open Kodi",
        steps: [
          "Press Install, wait for 'App installed', then press Open.",
          "Kodi 21.3 Omega starts with a one-time setup (language, timezone). Grant the permissions it asks for.",
          "Optional clean-up: go back to Downloader and delete the APK file to free ~65 MB of Firestick storage.",
        ],
      },
      {
        heading: "Which Kodi version should a Firestick use?",
        paragraphs: [
          "Always the 32-bit ARMV7A build. Even the Firestick 4K Max has a 32-bit Kodi path for sideloaded apps, and the 64-bit build will fail with 'App not installed'. The latest stable release is Kodi 21.3 Omega.",
        ],
      },
    ],
    faqs: [
      { q: "Is it legal to install Kodi on a Firestick?", a: "Yes. Kodi is free, open-source software by the XBMC Foundation. Installing it on your own device is completely legal. What you stream with third-party addons is your own responsibility." },
      { q: "Why is Kodi not on the Amazon Appstore?", a: "Amazon does not list Kodi in its Appstore, so the Kodi Foundation distributes the Android APK directly from its official website and mirrors." },
      { q: "Kodi says 'App not installed' on my Firestick — why?", a: "You almost certainly downloaded the 64-bit build. Uninstall, download the 32-bit ARMV7A version, and also make sure at least 200 MB of storage is free." },
    ],
  },
  {
    slug: "install-kodi-on-android",
    title: "How to Install Kodi on Android Phone & Tablet (APK Guide)",
    metaDescription:
      "Download and install the Kodi 21.3 Omega APK on any Android phone or tablet. Includes 32-bit vs 64-bit help and unknown-apps permission steps.",
    intro:
      "On Android you have two options: install Kodi from the Google Play Store, or sideload the official APK — useful when the Play Store version lags behind, your device shows 'not compatible', or you want a specific release. This guide covers the APK method safely, using only the official Kodi Foundation release.",
    readMinutes: 5,
    updated: "October 2026",
    sections: [
      {
        heading: "32-bit or 64-bit — pick the right APK",
        paragraphs: [
          "Phones and tablets from 2019 onwards are almost always 64-bit: choose the ARM64 build. Older or budget devices may need the 32-bit ARMV7A build. If the wrong one is installed you will see 'App not installed' — simply try the other file, no harm done.",
        ],
      },
      {
        heading: "Step-by-step installation",
        steps: [
          "Open this site's download page and pick your variant (64-bit recommended for modern phones).",
          "When the APK download finishes, tap the notification or open the file from your Downloads folder.",
          "Android will ask to allow installs from your browser — tap Settings and enable 'Allow from this source', then go back.",
          "Tap Install. When finished, tap Open to launch Kodi.",
          "Complete the quick first-run setup and grant media permissions so Kodi can find your files.",
        ],
      },
      {
        heading: "Stay safe when sideloading",
        paragraphs: [
          "Only install the unmodified official release. KodiLane serves the exact file published by the XBMC Foundation on its mirrors, so your install matches the official build byte-for-byte.",
        ],
      },
    ],
    faqs: [
      { q: "Is the Kodi APK safe?", a: "Yes, when it is the official release. Kodi is open-source, and the APK on KodiLane is the unmodified official file from the Kodi mirrors." },
      { q: "What Android version does Kodi 21.3 need?", a: "Kodi 21.3 Omega requires Android 5.0 or higher." },
      { q: "Can I update Kodi without losing my setup?", a: "Yes — install the new APK over the old one. Your library, settings and official addons carry over." },
    ],
  },
  {
    slug: "install-kodi-on-android-tv",
    title: "How to Install Kodi on Android TV & Google TV",
    metaDescription:
      "Get Kodi 21.3 Omega running on Android TV, Google TV, Nvidia Shield and Mi Box — Play Store and APK sideload methods both explained.",
    intro:
      "Android TV and Google TV devices are perfect Kodi machines. Nvidia Shield and Chromecast with Google TV users can install Kodi from the Play Store directly, while TV boxes without Play access (or anyone wanting the newest release) can sideload the official APK with a USB drive or the Downloader app.",
    readMinutes: 5,
    updated: "October 2026",
    sections: [
      {
        heading: "Method 1 — Play Store (Shield, Google TV, most TVs)",
        steps: [
          "Open the Google Play Store on your TV and search for 'Kodi'.",
          "Install the official Kodi app by the XBMC Foundation.",
          "Open Kodi and complete the first-run setup with your remote.",
        ],
      },
      {
        heading: "Method 2 — Sideload the APK (Downloader app)",
        steps: [
          "Go to Settings → Device Preferences → Security & restrictions → Unknown sources and allow your browser/Downloader.",
          "On newer Google TV: Settings → Apps → Security → Install unknown apps → allow Downloader.",
          "Install the free Downloader app from the Play Store.",
          "In Downloader, enter kodilane.com/download and pick 64-bit for Shield/modern TVs, or 32-bit for older TV boxes.",
          "Install, open Kodi, and delete the APK file afterwards to save space.",
        ],
      },
    ],
    faqs: [
      { q: "Which build for Nvidia Shield?", a: "The 64-bit ARM64 build — the Shield is a 64-bit device and runs it best." },
      { q: "Kodi is not showing in my TV's Play Store — why?", a: "Some TV boxes run a phone version of Android without the TV Play Store. Use the sideload method with the APK instead." },
    ],
  },
  {
    slug: "best-legal-kodi-addons",
    title: "Best Legal Kodi Addons from the Official Repository (2026)",
    metaDescription:
      "The best Kodi addons that are 100% legal and install straight from the official Kodi repository — YouTube, Twitch, Pluto TV, Plex and more.",
    intro:
      "Kodi's official repository ships hundreds of addons that stream fully licensed content. They are maintained, safe, and install in seconds from inside Kodi itself — no third-party repositories, no shady sources. Here are the ones worth your time.",
    readMinutes: 6,
    updated: "October 2026",
    sections: [
      {
        heading: "How to install any addon from the official repository",
        steps: [
          "Open Kodi and go to Add-ons.",
          "Select the open-box icon, then 'Install from repository'.",
          "Choose 'Kodi Add-on repository', browse the category, pick the addon and press Install.",
        ],
      },
      {
        heading: "YouTube",
        paragraphs: ["Watch subscriptions, playlists and live streams from the official YouTube addon. A free personal API key improves reliability and removes quota errors."],
      },
      {
        heading: "Twitch",
        paragraphs: ["Live game streams and VODs from Twitch, with login support for your own channel list."],
      },
      {
        heading: "Pluto TV",
        paragraphs: ["Pluto TV's free, ad-supported live channels and on-demand movies — fully licensed content from Paramount's FAST service."],
      },
      {
        heading: "Plex for Kodi",
        paragraphs: ["The official Plex addon brings your Plex media server library into Kodi's player, great for home media collections."],
      },
      {
        heading: "HDHomeRun, Vimeo & SoundCloud",
        paragraphs: ["HDHomeRun streams live TV from your own tuner, Vimeo covers creative video, and SoundCloud plays music — all from the official repository."],
      },
      {
        heading: "A note on third-party 'builds' and unofficial addons",
        paragraphs: [
          "KodiLane only covers addons from the official Kodi repository. Unofficial builds and addons that promise free movies and sports usually rely on pirated sources, can carry malware, and are the main reason Kodi devices end up broken. The official repository plus your own media and subscriptions covers most needs legally and safely.",
        ],
      },
    ],
    faqs: [
      { q: "Are official Kodi addons really free?", a: "Yes. Addons in the official repository are free. Some (like Plex) work best with your own account or server." },
      { q: "Why do some addons need an API key?", a: "Services like YouTube limit shared keys. A free personal API key from Google makes the addon faster and more reliable." },
    ],
  },
  {
    slug: "kodi-not-working-fixes",
    title: "Kodi Not Working? 8 Fixes That Actually Solve It",
    metaDescription:
      "Kodi buffering, crashing, black screen or addons not opening? The 8 fixes that solve most Kodi 21 problems on Firestick, Android and TV.",
    intro:
      "Most Kodi problems come from a full cache, not enough storage, a broken addon, or an old version — not from Kodi itself. Work through these fixes in order; the first three solve the majority of cases.",
    readMinutes: 7,
    updated: "October 2026",
    sections: [
      {
        heading: "1. Restart the device, not just the app",
        paragraphs: ["Firestick and TV boxes run for months without a reboot. Hold the remote's Select + Play buttons (Firestick) or unplug for 30 seconds. This clears stuck memory that force-closing cannot."],
      },
      {
        heading: "2. Clear Kodi's cache",
        steps: [
          "Go to your device Settings → Applications → Manage Installed Applications.",
          "Select Kodi → Clear cache (NOT 'Clear data' — that wipes your setup).",
          "Reopen Kodi and test again.",
        ],
      },
      {
        heading: "3. Free up storage",
        paragraphs: ["Kodi stutters and crashes below ~500 MB free. Delete the downloaded APK file (65 MB), old downloads, and unused apps. Firestick storage fills silently."],
      },
      {
        heading: "4. Update to the latest Kodi",
        paragraphs: ["Old releases break as services change their APIs. Kodi 21.3 Omega is the current stable version — install it over your existing build from the download page; settings and library are preserved."],
      },
      {
        heading: "5. Disable hardware acceleration (black screen fix)",
        steps: [
          "In Kodi: Settings → Player → Videos.",
          "Turn off 'Allow hardware acceleration' options.",
          "Play the video again — this fixes most black-screen-with-audio cases on TV boxes.",
        ],
      },
      {
        heading: "6. Remove the broken addon",
        paragraphs: ["If Kodi crashes only when one addon opens, that addon is the problem: Add-ons → My add-ons → uninstall it, then restart Kodi. Reinstall only addons from the official repository."],
      },
      {
        heading: "7. Check your internet and VPN",
        paragraphs: ["Buffering on everything usually means the connection, not Kodi. Test another app; if it also buffers, restart the router. A VPN that is too slow causes the same symptom."],
      },
      {
        heading: "8. Fresh start (last resort)",
        paragraphs: ["If nothing works: Settings → Applications → Kodi → Clear data, or uninstall and reinstall Kodi 21.3 fresh. Your device keeps nothing of the old setup, so use this only after the steps above."],
      },
    ],
    faqs: [
      { q: "Why does Kodi keep buffering on good internet?", a: "Usually a full cache or nearly-full device storage. Clear the cache and keep at least 500 MB free — this fixes most buffering on Firestick." },
      { q: "Will updating Kodi delete my addons?", a: "No. Installing the new APK over the old version keeps your library, settings and addons." },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
