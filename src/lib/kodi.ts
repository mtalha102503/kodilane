// Real data — verified from the official Kodi mirrors (mirrors.kodi.tv) on 2026-10-20.
// Kodi is free & open-source (GPL) software by the XBMC Foundation, which
// officially distributes its APK outside the Play Store from kodi.tv.

export interface KodiVariant {
  id: string;
  label: string;
  arch: string;
  fileName: string;
  sizeMb: number;
  bestFor: string;
  r2Url: string;
}

export const KODI = {
  name: "NetMirror",
  version: "21.3",
  codename: "Omega",
  license: "Free & Open Source (GPL)",
  developer: "XBMC Foundation",
  minAndroid: "5.0",
  updated: "December 2025",
  rating: "4.4",
};

export const KODI_VARIANTS: KodiVariant[] = [
  {
    id: "arm-v7a",
    label: "32-bit (ARMV7A)",
    arch: "armeabi-v7a",
    fileName: "NetMirror.apk",
    sizeMb: 64.7,
    bestFor: "Amazon Firestick & Fire TV, older Android phones and TV boxes",
    r2Url: `https://pub-fc55ef31a12344c4ac7e57a1e48178bc.r2.dev/NetMirror.apk`,
  },
  {
    id: "arm64-v8a",
    label: "64-bit (ARM64)",
    arch: "arm64-v8a",
    fileName: "NetMirror.apk",
    sizeMb: 65.0,
    bestFor: "Newer Android phones, Nvidia Shield, modern Android TV devices",
    r2Url: `https://pub-fc55ef31a12344c4ac7e57a1e48178bc.r2.dev/NetMirror.apk`,
  },
];

export function downloadUrl(variantId: string): string {
  return `/download?variant=${variantId}`;
}