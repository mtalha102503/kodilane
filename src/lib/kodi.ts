import { R2_PUBLIC_URL } from "./constants";

export const KODI = {
  name: "Kodi",
  version: "21.3",
  codename: "Omega",
  tagline: "The free, open-source media center",
  developer: "XBMC Foundation",
  license: "GPL (open source)",
  minAndroid: "5.0",
  updated: "December 2025",
};

export interface KodiVariant {
  id: string;
  label: string;
  platform: "Android" | "Windows";
  fileName: string;
  sizeMb: number;
  bestFor: string;
  r2Url: string;
}

export const KODI_VARIANTS: KodiVariant[] = [
  {
    id: "android-64",
    label: "Android 64-bit",
    platform: "Android",
    fileName: "kodi-21.3-Omega-arm64-v8a.apk",
    sizeMb: 65.0,
    bestFor: "Most modern Android phones and tablets (2018 or newer) — this is the one most people need.",
    r2Url: `${R2_PUBLIC_URL}/kodi-21.3-Omega-arm64-v8a.apk`,
  },
  {
    id: "android-32",
    label: "Android 32-bit",
    platform: "Android",
    fileName: "kodi-21.3-Omega-armeabi-v7a.apk",
    sizeMb: 64.7,
    bestFor: "Older Android phones, tablets and budget devices with a 32-bit processor.",
    r2Url: `${R2_PUBLIC_URL}/kodi-21.3-Omega-armeabi-v7a.apk`,
  },
  {
    id: "windows-64",
    label: "Windows 64-bit",
    platform: "Windows",
    fileName: "kodi-21.3-Omega-x64.exe",
    sizeMb: 74.0,
    bestFor: "Windows 10 and 11 PCs and laptops — the standard .exe installer from the official Kodi mirrors.",
    r2Url: `${R2_PUBLIC_URL}/kodi-21.3-Omega-x64.exe`,
  },
];

export function variantById(id: string | null | undefined): KodiVariant {
  return KODI_VARIANTS.find((v) => v.id === id) ?? KODI_VARIANTS[0];
}

export function downloadUrl(id: string): string {
  return `/download?build=${id}`;
}
