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
    slug: "install-kodi-on-windows",
    title: "How to Install Kodi on Windows 10 & 11 (Step-by-Step)",
    metaDescription:
      "Install Kodi 21.3 on Windows 10 or 11 in minutes: download the official .exe installer, run the setup wizard, handle the SmartScreen prompt, and set up legal addons.",
    intro:
      "The full Windows walkthrough: official .exe installer, setup wizard, the SmartScreen prompt explained, first-run setup and updating — no Microsoft Store needed.",
    readMinutes: 5,
    updated: "October 2026",
    sections: [
      {
        heading: "What you need",
        paragraphs: [
          "Kodi 21.3 'Omega' runs on Windows 10 and Windows 11 (64-bit). You need about 200 MB of free disk space for the app itself, plus room for your media library's thumbnails and cache. No administrator account is required if you install it just for your own user.",
          "There are two official ways to get Kodi on Windows: the classic .exe installer (what this guide uses) and the Microsoft Store version. The .exe gives you full control over the install location and updates on Kodi's schedule — most people should pick it.",
        ],
      },
      {
        heading: "Step-by-step: install with the .exe installer",
        steps: [
          "Download the Windows 64-bit installer from this site's download page (kodi-21.3-Omega-x64.exe, 74.0 MB).",
          "Double-click the downloaded .exe file to start the setup wizard.",
          "If Windows SmartScreen appears, click 'More info' and then 'Run anyway' — this prompt shows for many legitimate open-source installers that are not signed with an expensive certificate.",
          "Accept the license agreement (Kodi is free and open-source under the GPL).",
          "Keep the default components selected and click Next.",
          "Choose the install folder (the default C:\Program Files\Kodi is fine) and click Install.",
          "When setup finishes, tick 'Run Kodi' and click Finish.",
        ],
      },
      {
        heading: "First-run setup on Windows",
        steps: [
          "If Windows Firewall asks, allow Kodi on private networks — this lets it find shared folders and media servers on your home network.",
          "Add your media: go to Videos (or Music / Pictures), choose 'Add videos…', and browse to the folders where your files live.",
          "Choose the content type (Movies / TV shows) so Kodi can organise the library with artwork and descriptions.",
          "Install addons only from the official repository: Add-ons → Install from repository → Kodi Add-on repository.",
        ],
      },
      {
        heading: "Updating Kodi on Windows",
        paragraphs: [
          "Kodi does not update itself on Windows when you use the .exe installer. To update, download the newer installer from KodiLane and run it — it installs over the top of your existing setup and keeps your library, settings and addons. Your configuration lives in %APPDATA%\Kodi, which the installer does not touch.",
          "Before a big version jump (for example 21.x to 22.x), a quick backup of the %APPDATA%\Kodi folder is cheap insurance.",
        ],
      },
      {
        heading: "Pro tips for Windows users",
        paragraphs: [
          "SmartScreen's 'Run anyway' is normal for Kodi's installer — but only trust the file if its name and size match the official release.",
          "Press the backslash key during playback to toggle between fullscreen and windowed mode.",
          "If Kodi feels slow on an old laptop, lower the GUI resolution in Settings → System → Display — the interface renders much lighter.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Kodi free on Windows?",
        a: "Yes — Kodi is completely free and open-source on every platform, with no subscriptions, no ads and no premium version.",
      },
      {
        q: "Does Kodi work on Windows 7 or 8?",
        a: "Kodi 21 requires Windows 10 or later (64-bit). Older Kodi versions supported Windows 7/8, but they no longer receive updates — upgrading Windows is strongly recommended.",
      },
      {
        q: "Should I use the Microsoft Store version instead?",
        a: "The Store version updates automatically, but the .exe installer gives you full control over the install location and access to Kodi's folders. Both are official and free — this guide uses the .exe.",
      },
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
      "Kodi buffering, crashing, black screen or addons not opening? The 8 fixes that solve most Kodi 21 problems on Android and Windows.",
    intro:
      "Most Kodi problems come from a full cache, not enough storage, a broken addon, or an old version — not from Kodi itself. Work through these fixes in order; the first three solve the majority of cases.",
    readMinutes: 7,
    updated: "October 2026",
    sections: [
      {
        heading: "1. Restart the device, not just the app",
        paragraphs: ["Phones and PCs run for weeks without a proper restart. Reboot the device fully — not just the app. This clears stuck memory that force-closing Kodi cannot."],
      },
      {
        heading: "2. Clear Kodi's cache",
        steps: [
          "On Android: Settings → Apps → Kodi → Storage. On Windows: delete the cache via Settings inside Kodi (or reinstall clean).",
          "Clear the cache only (NOT 'Clear data' — that wipes your setup).",
          "Reopen Kodi and test again.",
        ],
      },
      {
        heading: "3. Free up storage",
        paragraphs: ["Kodi stutters and crashes below ~500 MB free. Delete the downloaded installer file, old downloads, and unused apps. Device storage fills up silently."],
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
      { q: "Why does Kodi keep buffering on good internet?", a: "Usually a full cache or nearly-full device storage. Clear the cache and keep at least 500 MB free — this fixes most buffering." },
      { q: "Will updating Kodi delete my addons?", a: "No. Installing the new version over the old one — APK on Android or the .exe on Windows — keeps your library, settings and addons." },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
