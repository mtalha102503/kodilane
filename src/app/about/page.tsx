import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About NetMirrorLane — NetMirror Downloads & Guides, Done Honestly",
  description:
    "NetMirrorLane is an independent guide site for NetMirror: the official APK download, step-by-step install guides for Firestick, Android and TV, and legal addons only.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-extrabold text-white">About NetMirrorLane</h1>
      <div className="mt-6 space-y-4 leading-relaxed text-slate-300">
        <p>
          NetMirrorLane exists for one simple reason: getting NetMirror onto a Firestick, phone or TV box is harder than it
          should be. Amazon doesn&apos;t list NetMirror in its Appstore, download sites bury the official file under fake
          buttons and bundled junk, and most &quot;guides&quot; push risky third-party builds.
        </p>
        <p>We do the opposite:</p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong className="text-white">The official file, untouched</strong> — we host the exact APK published by
            the XBMC Foundation on the NetMirror mirrors. No mods, no extras.
          </li>
          <li>
            <strong className="text-white">Legal addons only</strong> — every guide covers addons from the official
            NetMirror repository and licensed services.
          </li>
          <li>
            <strong className="text-slate-900">Guides that finish the job</strong> — install steps, the right 32-bit vs
            64-bit choice, and fixes for the problems people actually hit.
          </li>
        </ul>
        <p>
          NetMirror is free and open-source software (GPL) created by the XBMC Foundation and a global community of
          volunteers. NetMirrorLane is an independent project and is not affiliated with the XBMC Foundation. If NetMirror
          helps you, consider supporting its developers at{" "}
          <a href="https://NetMirror.tv" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">
            NetMirror.tv
          </a>
          .
        </p>
        <p>
          Start with the{" "}
          <Link href="/download" className="text-sky-400 hover:underline">NetMirror APK download</Link>{" "}
          or the{" "}
          <Link href="/guides/install-NetMirror-on-firestick" className="text-sky-400 hover:underline">
            Firestick install guide
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
