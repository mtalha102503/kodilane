import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { SITE_NAME, SITE_URL, SITE_TAGLINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — NetMirror APK Download, Install Guides & Legal Addons`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Download the official NetMirror APK (latest version), install it on Firestick, Android and Android TV with step-by-step guides, and discover the best legal addons from the official NetMirror repository.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    url: SITE_URL,
    title: `${SITE_NAME} — Kodi APK Download, Install Guides & Legal Addons`,
    description:
      "Download the official Kodi APK (latest version), install it on Firestick, Android and Android TV with step-by-step guides, and discover the best legal addons.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Kodi APK Download & Guides`,
    description:
      "Official Kodi APK for Android, Firestick & TV — with install guides and legal addons only.",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-slate-900">
          <span className="text-2xl">📺</span>
          <span>
            NetMirror<span className="text-sky-400">Lane</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium text-slate-600 sm:gap-2">
          <Link href="/download" className="rounded-lg px-3 py-2 hover:bg-slate-100 hover:text-slate-900">
            Download
          </Link>
          <Link href="/guides" className="rounded-lg px-3 py-2 hover:bg-slate-100 hover:text-slate-900">
            Guides
          </Link>
          <Link href="/guides/install-NetMirror-on-firestick" className="hidden rounded-lg px-3 py-2 hover:bg-slate-800 hover:text-white md:block">
            Firestick
          </Link>
          <Link href="/guides/best-legal-NetMirror-addons" className="hidden rounded-lg px-3 py-2 hover:bg-slate-800 hover:text-white md:block">
            Addons
          </Link>
          <Link href="/about" className="rounded-lg px-3 py-2 hover:bg-slate-100 hover:text-slate-900">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-slate-500 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">
            📺 NetMirror<span className="text-sky-400">Lane</span>
          </p>
          <p className="mt-2">{SITE_TAGLINE}. The official NetMirror APK, honest install guides and legal addons — nothing else.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Download</p>
          <ul className="mt-2 space-y-1">
            <li><Link href="/download" className="hover:text-sky-400">NetMirror APK Download</Link></li>
            <li><Link href="/download?variant=arm-v7a" className="hover:text-sky-400">NetMirror 32-bit (Firestick)</Link></li>
            <li><Link href="/download?variant=arm64-v8a" className="hover:text-sky-400">NetMirror 64-bit</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Guides</p>
          <ul className="mt-2 space-y-1">
            <li><Link href="/guides/install-NetMirror-on-firestick" className="hover:text-sky-400">NetMirror on Firestick</Link></li>
            <li><Link href="/guides/install-NetMirror-on-android" className="hover:text-sky-400">NetMirror on Android</Link></li>
            <li><Link href="/guides/install-NetMirror-on-android-tv" className="hover:text-sky-400">NetMirror on Android TV</Link></li>
            <li><Link href="/guides/best-legal-NetMirror-addons" className="hover:text-sky-400">Best Legal Addons</Link></li>
            <li><Link href="/guides/NetMirror-not-working-fixes" className="hover:text-sky-400">NetMirror Not Working Fixes</Link></li>
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
          NetMirror® is a registered trademark of the XBMC Foundation. NetMirror is free and open-source software distributed
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
