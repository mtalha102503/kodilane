import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Kodi Guides — Install on Firestick, Android & TV, Addons & Fixes",
  description:
    "Step-by-step Kodi guides: install Kodi on Firestick, Android and Android TV, the best legal addons from the official repository, and fixes for common Kodi problems.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">Kodi Guides</h1>
      <p className="mt-2 max-w-2xl text-slate-500">
        Honest, step-by-step help for installing Kodi and getting the most out of it — official app and legal addons only.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-red-400"
          >
            <h2 className="font-semibold leading-snug text-slate-900 group-hover:text-red-700">{g.title}</h2>
            <p className="mt-2 line-clamp-3 text-sm text-slate-500">{g.intro}</p>
            <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-500">
              {g.readMinutes} min read · Updated {g.updated}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
