import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { SITE_NAME, SITE_URL, SITE_TAGLINE } from "@/lib/constants";

import Header from "@/components/Header";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#dc2626",
};

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Kodi APK Download, Install Guides & Legal Addons`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Download the official Kodi APK (latest version), install it on Android and Windows with step-by-step guides, and discover the best legal addons from the official Kodi repository.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    url: SITE_URL,
    title: `${SITE_NAME} — Kodi APK Download, Install Guides & Legal Addons`,
    description:
      "Download the official Kodi APK (latest version), install it on Android and Windows with step-by-step guides, and discover the best legal addons.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Kodi APK Download & Guides`,
    description:
      "Official Kodi for Android & Windows — with install guides and legal addons only.",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-slate-500 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-slate-900">
            📺 Kodi<span className="text-red-600">Lane</span>
          </p>
          <p className="mt-2">{SITE_TAGLINE}. The official Kodi for Android & Windows, honest install guides and legal addons — nothing else.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Download</p>
          <ul className="mt-2 space-y-1">
            <li><Link href="/download" className="hover:text-red-600">Kodi Download</Link></li>
            <li><Link href="/download?build=android-32" className="hover:text-red-600">Kodi Android 32-bit</Link></li>
            <li><Link href="/download?build=android-64" className="hover:text-red-600">Kodi Android 64-bit</Link></li>
            <li><Link href="/download?build=windows-64" className="hover:text-red-600">Kodi for Windows</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Guides</p>
          <ul className="mt-2 space-y-1">
            <li><Link href="/guides/install-kodi-on-windows" className="hover:text-red-600">Kodi on Windows</Link></li>
            <li><Link href="/guides/install-kodi-on-android" className="hover:text-red-600">Kodi on Android</Link></li>
            <li><Link href="/guides/best-legal-kodi-addons" className="hover:text-red-600">Best Legal Addons</Link></li>
            <li><Link href="/guides/kodi-not-working-fixes" className="hover:text-red-600">Kodi Not Working Fixes</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Site</p>
          <ul className="mt-2 space-y-1">
            <li><Link href="/about" className="hover:text-red-600">About</Link></li>
            <li><Link href="/privacy" className="hover:text-red-600">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-red-600">Terms of Service</Link></li>
            <li><Link href="/dmca" className="hover:text-red-600">DMCA</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        <p>© 2026 {SITE_NAME}. All rights reserved.</p>
        <p className="mx-auto mt-1 max-w-3xl px-4">
          Disclaimer: {SITE_NAME} is an independent guide site and is not affiliated with the XBMC Foundation.
          Kodi® is a registered trademark of the XBMC Foundation. Kodi is free and open-source software distributed
          under the GPL license.
        </p>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
