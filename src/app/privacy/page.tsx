import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | KodiLane",
  description: "How KodiLane handles your data: what we collect (almost nothing), what we never collect, cookies, and your rights. Read the KodiLane privacy policy.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="text-slate-900">
      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-slate-600">
          <p>Last updated: October 2026</p>
          <p>KodiLane respects your privacy. We collect minimal data necessary to operate the service.</p>
          <h2 className="text-xl font-semibold text-slate-900">Data We Collect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Download counts (anonymized)</li>
            <li>Basic analytics (page views)</li>
            <li>Contact info you provide via forms</li>
          </ul>
          <h2 className="text-xl font-semibold text-slate-900">Data We Don&apos;t Collect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>We don&apos;t track you across websites</li>
            <li>We don&apos;t sell your data</li>
            <li>We don&apos;t require accounts to download</li>
          </ul>
          <p>Contact: contact@kodilane.com</p>
        </div>
      </main>
    </div>
  );
}
