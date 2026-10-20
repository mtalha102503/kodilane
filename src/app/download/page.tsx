import type { Metadata } from "next";
import { Suspense } from "react";
import { downloadTitle, downloadMeta, softwareSchema, breadcrumbSchema } from "@/lib/seo";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import DownloadClient from "./DownloadClient";

export const metadata: Metadata = {
  title: downloadTitle(),
  description: downloadMeta(),
  alternates: { canonical: "/download" },
};

export default function DownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema()) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: SITE_NAME, url: `${SITE_URL}/` },
              { name: "Download Kodi APK", url: `${SITE_URL}/download` },
            ])
          ),
        }}
      />
      <Suspense
        fallback={
          <div className="mx-auto max-w-3xl px-4 py-20 text-center text-slate-500">Preparing your download…</div>
        }
      >
        <DownloadClient />
      </Suspense>
    </>
  );
}
