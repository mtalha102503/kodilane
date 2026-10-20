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
      <h1 className="text-center text-3xl font-extrabold text-slate-900">
        Download Kodi {KODI.version} “{KODI.codename}” {variant.platform === "Windows" ? "for Windows" : "APK"}
      </h1>
      <p className="mt-2 text-center text-slate-500">
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
                ? "border-red-400 bg-red-50"
                : "border-slate-200 bg-white hover:border-slate-400"
            }`}
          >
            <p className="font-semibold text-slate-900">{v.label}</p>
            <p className="mt-1 text-sm text-slate-500">{v.bestFor}</p>
            <p className="mt-2 text-xs text-slate-500">
              {v.fileName} · {v.sizeMb} MB
            </p>
          </button>
        ))}
      </div>

      {/* Countdown / status */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-center">
        {!started ? (
          <>
            <p className="text-slate-600">
              Your download of <span className="font-semibold text-slate-900">{variant.fileName}</span> starts in
            </p>
            <p className="my-4 text-6xl font-extrabold text-red-600">{seconds}</p>
            <p className="text-sm text-slate-500">Please wait — do not close this page.</p>
            {/* AD SPOT: Adsterra banner mounts here */}
          </>
        ) : (
          <>
            <p className="text-4xl">✅</p>
            <p className="mt-2 font-semibold text-slate-900">Download started!</p>
            <p className="mt-1 text-sm text-slate-500">
              Didn’t start?{" "}
              <button onClick={beginDownload} className="font-medium text-red-600 underline">
                Click here to retry
              </button>
            </p>
          </>
        )}
      </div>

      {/* After-download help */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="font-semibold text-slate-900">Now install it</h2>
        <ul className="mt-2 list-inside list-disc space-y-1 text-slate-600">
          <li>
            Windows PC —{" "}
            <Link href="/guides/install-kodi-on-windows" className="text-red-600 hover:underline">
              step-by-step Windows guide
            </Link>
          </li>
          <li>
            Android phone or tablet —{" "}
            <Link href="/guides/install-kodi-on-android" className="text-red-600 hover:underline">
              Android install guide
            </Link>
          </li>
        </ul>
        <p className="mt-4 text-sm text-slate-500">
          Prefer the source? The same file is available from the{" "}
          <a href={KODI_OFFICIAL_DOWNLOAD} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
            official Kodi website
          </a>
          .
        </p>
      </div>
    </div>
  );
}
