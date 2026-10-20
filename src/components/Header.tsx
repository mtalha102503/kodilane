"use client";

import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/download", label: "Download" },
  { href: "/guides", label: "Guides" },
  { href: "/guides/install-kodi-on-windows", label: "Windows" },
  { href: "/guides/best-legal-kodi-addons", label: "Addons" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-slate-900">
          <span className="text-2xl">📺</span>
          <span>
            Kodi<span className="text-red-600">Lane</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 text-sm font-medium text-slate-600 md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-lg px-3 py-2 hover:bg-slate-100 hover:text-slate-900">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile: download shortcut + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <Link href="/download" className="rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white">
            Download
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="rounded-lg border border-slate-300 px-3 py-2 text-lg leading-none text-slate-700"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 py-2 md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
