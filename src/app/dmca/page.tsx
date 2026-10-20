import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "DMCA Policy | KodiLane",
  description: "KodiLane DMCA policy: how to file a copyright takedown notice, what to include, and our counter-notice process.",
  alternates: { canonical: `${SITE_URL}/dmca` },
};

export default function DMCAPage() {
  return (
    <div className="text-slate-900">
      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">DMCA Policy</h1>
        <div className="space-y-6 text-slate-600">
          <p>KodiLane respects intellectual property rights. We host only the official Kodi release (GPL open-source software) and original guide content.</p>
          <h2 className="text-xl font-semibold text-slate-900">Takedown Requests</h2>
          <p>If you believe your copyrighted work has been listed without permission, contact us at:</p>
          <p className="text-slate-900">contact@kodilane.com</p>
          <p>Include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Your name and contact information</li>
            <li>Description of the copyrighted work</li>
            <li>URL of the infringing page on KodiLane</li>
            <li>A statement of good faith belief</li>
          </ul>
          <p>We respond to valid takedown requests within 48 hours.</p>
        </div>
      </main>
    </div>
  );
}
