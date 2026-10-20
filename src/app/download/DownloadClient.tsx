"use client";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { KODI, KODI_VARIANTS } from "@/lib/kodi";
import { KODI_OFFICIAL_DOWNLOAD } from "@/lib/constants";

const COUNTDOWN = 5; // seconds before the download starts

export default function DownloadClient() {
  const params = useSearchParams();
  const initial = KODI_VARIANTS.some((v) => v.id === params.get("variant"))
    ? (params.get("variant") as string)
    : KODI_VARIANTS[0].id;

  const [variantId, setVariantId] = useState(initial);
  const [seconds, setSeconds] = useState(COUNTDOWN);
  const [started, setStarted] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const variant = KODI_VARIANTS.find((v) => v.id === variantId) ?? KODI_VARIANTS[0];

  const beginDownload = () => {
    // NOTE: ad popunder code (Adsterra) goes here when the account is ready.
    const a = document.createElement("a");
    a.href = variant.r2Url;
    a.download = variant.fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setStarted(true);
  };

  useEffect(() => {
    setSeconds(COUNTDOWN);
    setStarted(false);
    timer.current = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          if (timer.current) clearInterval(timer.current);
          beginDownload();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variantId]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-center text-3xl font-extrabold text-white">
        Download Kodi {KODI.version} “{KODI.codename}” APK
      </h1>
      <p className="mt-2 text-center text-slate-400">
        Official release by the {KODI.developer} · {KODI.license} · Android {KODI.minAndroid}+
      </p>

      {/* Variant picker */}
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {KODI_VARIANTS.map((v) => (
          <button
            key={v.id}
            onClick={() => setVariantId(v.id)}
            className={`rounded-2xl border p-5 text-left transition ${
              v.id === variantId
                ? "border-sky-400 bg-sky-950/40"
                : "border-slate-800 bg-slate-900 hover:border-slate-600"
            }`}
          >
            <p className="font-semibold text-white">{v.label}</p>
            <p className="mt-1 text-sm text-slate-400">{v.bestFor}</p>
            <p className="mt-2 text-xs text-slate-500">
              {v.fileName} · {v.sizeMb} MB
            </p>
          </button>
        ))}
      </div>

      {/* Countdown / status */}
      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
        {!started ? (
          <>
            <p className="text-slate-300">
              Your download of <span className="font-semibold text-white">{variant.fileName}</span> starts in
            </p>
            <p className="my-4 text-6xl font-extrabold text-sky-400">{seconds}</p>
            <p className="text-sm text-slate-500">Please wait — do not close this page.</p>
            {/* AD SPOT: Adsterra banner mounts here */}
          </>
        ) : (
          <>
            <p className="text-4xl">✅</p>
            <p className="mt-2 font-semibold text-white">Download started!</p>
            <p className="mt-1 text-sm text-slate-400">
              Didn’t start?{" "}
              <button onClick={beginDownload} className="font-medium text-sky-400 underline">
                Click here to retry
              </button>
            </p>
          </>
        )}
      </div>

      {/* After-download help */}
      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="font-semibold text-white">Now install it</h2>
        <ul className="mt-2 list-inside list-disc space-y-1 text-slate-300">
          <li>
            Firestick / Fire TV —{" "}
            <Link href="/guides/install-kodi-on-firestick" className="text-sky-400 hover:underline">
              step-by-step Firestick guide
            </Link>
          </li>
          <li>
            Android phone or tablet —{" "}
            <Link href="/guides/install-kodi-on-android" className="text-sky-400 hover:underline">
              Android install guide
            </Link>
          </li>
          <li>
            Android TV / Google TV / Shield —{" "}
            <Link href="/guides/install-kodi-on-android-tv" className="text-sky-400 hover:underline">
              Android TV guide
            </Link>
          </li>
        </ul>
        <p className="mt-4 text-sm text-slate-500">
          Prefer the source? The same file is available from the{" "}
          <a href={KODI_OFFICIAL_DOWNLOAD} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">
            official Kodi website
          </a>
          .
        </p>
      </div>
    </div>
  );
}
