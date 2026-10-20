import type { Metadata } from "next";
import { Suspense } from "react";
import { downloadTitle, downloadMeta } from "@/lib/seo";
import DownloadClient from "./DownloadClient";

export const metadata: Metadata = {
  title: downloadTitle(),
  description: downloadMeta(),
  alternates: { canonical: "/download" },
};

export default function DownloadPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-3xl px-4 py-20 text-center text-slate-500">Preparing your download…</div>
      }
    >
      <DownloadClient />
    </Suspense>
  );
}
