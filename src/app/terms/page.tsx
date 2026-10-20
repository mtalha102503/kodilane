import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | KodiLane",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <div className="text-slate-900">
      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="space-y-6 text-slate-600">
          <p>Last updated: October 2026</p>
          <p>By using KodiLane, you agree to these terms.</p>
          <h2 className="text-xl font-semibold text-slate-900">Downloads</h2>
          <p>KodiLane hosts the official, unmodified Kodi release, which is free and open-source software distributed by the XBMC Foundation under the GPL license. Install at your own risk and always keep your device updated.</p>
          <h2 className="text-xl font-semibold text-slate-900">For Developers</h2>
          <p>Kodi is a registered trademark of the XBMC Foundation. KodiLane is not affiliated with the XBMC Foundation.</p>
          <h2 className="text-xl font-semibold text-slate-900">Prohibited</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Redistributing our content commercially without permission</li>
            <li>Distributing malware or harmful software</li>
            <li>Scraping or automated downloading</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
