import { R2_PUBLIC_URL } from "./constants";

export const KODI = {
  name: "Kodi",
  version: "21.3",
  codename: "Omega",
  tagline: "The free, open-source media center",
  developer: "XBMC Foundation",
  license: "GPL (open source)",
  updated: "December 2025",
};

export interface KodiVariant {
  id: string;
  label: string;
  platform: "Android" | "Windows";
  arch: string;
  fileName: string;
  sizeBytes: number;
  size: string;
  blurb: string;
}

export const KODI_VARIANTS: KodiVariant[] = [
  {
    id: "android-64",
    label: "Android 64-bit",
    platform: "Android",
    arch: "ARM64 (arm64-v8a)",
    fileName: "kodi-21.3-Omega-arm64-v8a.apk",
    sizeBytes: 68167494,
    size: "65.0 MB",
    blurb: "For most modern Android phones and tablets (2018 or newer). This is the one most people need.",
  },
  {
    id: "android-32",
    label: "Android 32-bit",
    platform: "Android",
    arch: "ARM (armeabi-v7a)",
    fileName: "kodi-21.3-Omega-armeabi-v7a.apk",
    sizeBytes: 67832726,
    size: "64.7 MB",
    blurb: "For older Android phones, tablets and budget devices with a 32-bit processor.",
  },
  {
    id: "windows-64",
    label: "Windows 64-bit",
    platform: "Windows",
    arch: "Windows 10 / 11 (64-bit PC)",
    fileName: "kodi-21.3-Omega-x64.exe",
    sizeBytes: 77567958,
    size: "74.0 MB",
    blurb: "For Windows PCs and laptops — the standard .exe installer from the official Kodi mirrors.",
  },
];

export function variantById(id: string | null | undefined): KodiVariant {
  return KODI_VARIANTS.find((v) => v.id === id) ?? KODI_VARIANTS[0];
}

export function downloadUrl(id: string): string {
  return `/download?build=${id}`;
}

export function apkUrl(variant: KodiVariant): string {
  return `${R2_PUBLIC_URL}/${variant.fileName}`;
}
