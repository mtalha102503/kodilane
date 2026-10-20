import Link from "next/link";
import { KODI, KODI_VARIANTS, downloadUrl } from "@/lib/kodi";
import { GUIDES } from "@/lib/guides";
import { kodiFaqs, softwareSchema, faqSchema } from "@/lib/seo";


export default function HomePage() {
  const faqs = kodiFaqs();
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      {/* HERO */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-sky-950/60 to-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Latest stable release — v{KODI.version} “{KODI.codename}”
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Download Kodi APK for Android, Firestick &amp; TV
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            The official, unmodified Kodi APK — free and open-source by the XBMC Foundation.
            Pick your build, follow a 5-minute guide, done.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {KODI_VARIANTS.map((v) => (
              <Link
                key={v.id}
                href={downloadUrl(v.id)}
                className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
              >
                ⬇ Kodi {v.label} — {v.sizeMb} MB
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-400">
            ✅ Official file · ✅ No mods or bundled extras · ✅ GPL free software · Android {KODI.minAndroid}+
          </p>
        </div>
      </section>

      {/* WHICH BUILD */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-white">Which Kodi build do you need?</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {KODI_VARIANTS.map((v) => (
            <div key={v.id} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-lg font-semibold text-white">{v.label}</p>
              <p className="mt-1 text-sm text-slate-400">{v.fileName}</p>
              <p className="mt-3 text-slate-300">
                <span className="font-medium text-sky-400">Best for:</span> {v.bestFor}
              </p>
              <Link href={downloadUrl(v.id)} className="mt-4 inline-block rounded-lg bg-slate-800 px-4 py-2 font-medium text-white hover:bg-slate-700">
                Download {v.label} →
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-400">
          Not sure? Firestick = always 32-bit. Newer phones and Nvidia Shield = 64-bit. Picking the wrong one is harmless —
          Android simply says “App not installed” and you install the other file.
        </p>
      </section>

      {/* GUIDES */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold text-white">Install guides &amp; help</h2>
            <Link href="/guides" className="text-sm font-medium text-sky-400 hover:text-sky-300">
              All guides →
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-sky-500/50"
              >
                <h3 className="font-semibold leading-snug text-white group-hover:text-sky-300">{g.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-slate-400">{g.intro}</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-500">
                  {g.readMinutes} min read · Updated {g.updated}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KODILANE */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-white">Why download Kodi from KodiLane?</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-3xl">🛡️</p>
            <h3 className="mt-2 font-semibold text-white">Official file only</h3>
            <p className="mt-1 text-sm text-slate-400">
              The exact APK the XBMC Foundation publishes on its mirrors — byte-for-byte, unmodified, no injected ads or
              bundled apps.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-3xl">⚖️</p>
            <h3 className="mt-2 font-semibold text-white">Legal addons only</h3>
            <p className="mt-1 text-sm text-slate-400">
              We cover addons from the official Kodi repository — YouTube, Twitch, Pluto TV, Plex. No pirated sources,
              no risky third-party builds.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-3xl">📖</p>
            <h3 className="mt-2 font-semibold text-white">Guides that finish the job</h3>
            <p className="mt-1 text-sm text-slate-400">
              Every device covered: Firestick, Android phones, Android TV, Shield — plus fixes for buffering, crashing
              and black screens.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 pb-16">
        <h2 className="text-2xl font-bold text-white">Kodi APK — frequently asked questions</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <summary className="cursor-pointer font-semibold text-white">{f.q}</summary>
              <p className="mt-2 text-slate-300">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
