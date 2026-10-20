import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES, getGuide } from "@/lib/guides";
import { SITE_URL } from "@/lib/constants";
import { faqSchema, guideSchema, howToSchema } from "@/lib/seo";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: { canonical: `/guides/${guide.slug}` },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
      { "@type": "ListItem", position: 3, name: guide.title, item: `${SITE_URL}/guides/${guide.slug}` },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema(guide)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {guide.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(guide.faqs)) }} />
      )}
      {howToSchema(guide) && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema(guide)) }} />
      )}

      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-red-600">Home</Link> {" / "}
        <Link href="/guides" className="hover:text-red-600">Guides</Link> {" / "}
        <span className="text-slate-600">{guide.title}</span>
      </nav>

      <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">{guide.title}</h1>
      <p className="mt-2 text-sm text-slate-500">
        {guide.readMinutes} min read · Updated {guide.updated}
      </p>
      <p className="mt-5 text-lg leading-relaxed text-slate-600">{guide.intro}</p>

      <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5">
        <p className="font-semibold text-slate-900">Need the Kodi APK first?</p>
        <p className="mt-1 text-sm text-slate-600">
          Download the official Kodi 21.3 Omega APK (32-bit &amp; 64-bit) from our{" "}
          <Link href="/download" className="font-medium text-red-600 hover:underline">
            download page
          </Link>
          , then come back to this guide.
        </p>
      </div>

      {guide.sections.map((s) => (
        <section key={s.heading} className="mt-9">
          <h2 className="text-xl font-bold text-slate-900">{s.heading}</h2>
          {s.paragraphs?.map((p) => (
            <p key={p.slice(0, 40)} className="mt-3 leading-relaxed text-slate-600">{p}</p>
          ))}
          {s.steps && (
            <ol className="mt-3 list-inside list-decimal space-y-2 leading-relaxed text-slate-600">
              {s.steps.map((step) => (
                <li key={step.slice(0, 40)}>{step}</li>
              ))}
            </ol>
          )}
        </section>
      ))}

      {guide.faqs.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mt-4 space-y-3">
            {guide.faqs.map((f) => (
              <details key={f.q} className="rounded-xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer font-semibold text-slate-900">{f.q}</summary>
                <p className="mt-2 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-center">
        <p className="font-semibold text-slate-900">Ready to set up Kodi?</p>
        <Link href="/download" className="mt-3 inline-block rounded-xl bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-400">
          ⬇ Download Kodi APK
        </Link>
      </div>
    </article>
  );
}
