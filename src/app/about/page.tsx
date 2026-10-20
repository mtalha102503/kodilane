import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About KodiLane — Kodi Downloads & Guides, Done Honestly",
  description:
    "KodiLane is an independent guide site for Kodi: the official APK download, step-by-step install guides for Firestick, Android and TV, and legal addons only.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">About KodiLane</h1>
      <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
        <p>
          KodiLane exists for one simple reason: getting Kodi onto a Firestick, phone or TV box is harder than it
          should be. Amazon doesn&apos;t list Kodi in its Appstore, download sites bury the official file under fake
          buttons and bundled junk, and most &quot;guides&quot; push risky third-party builds.
        </p>
        <p>We do the opposite:</p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong className="text-slate-900">The official file, untouched</strong> — we host the exact APK published by
            the XBMC Foundation on the Kodi mirrors. No mods, no extras.
          </li>
          <li>
            <strong className="text-slate-900">Legal addons only</strong> — every guide covers addons from the official
            Kodi repository and licensed services.
          </li>
          <li>
            <strong className="text-slate-900">Guides that finish the job</strong> — install steps, the right 32-bit vs
            64-bit choice, and fixes for the problems people actually hit.
          </li>
        </ul>
        <p>
          Kodi is free and open-source software (GPL) created by the XBMC Foundation and a global community of
          volunteers. KodiLane is an independent project and is not affiliated with the XBMC Foundation. If Kodi
          helps you, consider supporting its developers at{" "}
          <a href="https://kodi.tv" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
            kodi.tv
          </a>
          .
        </p>
        <p>
          Start with the{" "}
          <Link href="/download" className="text-red-600 hover:underline">Kodi APK download</Link>{" "}
          or the{" "}
          <Link href="/guides/install-kodi-on-firestick" className="text-red-600 hover:underline">
            Firestick install guide
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
