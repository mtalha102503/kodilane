import { ImageResponse } from "next/og";

export const alt = "NetMirrorLane — Download NetMirror APK for Android, Firestick & TV";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          padding: "64px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "84px",
              height: "84px",
              borderRadius: "18px",
              backgroundColor: "#141414",
              color: "#E50914",
              fontSize: "52px",
              fontWeight: 900,
            }}
          >
            K
          </div>
          <div style={{ display: "flex", marginLeft: "24px", fontSize: "44px", fontWeight: 800, color: "#0f172a" }}>
            NetMirror<span style={{ color: "#dc2626" }}>Lane</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: "62px", fontWeight: 900, color: "#0f172a", lineHeight: 1.1 }}>
            Download NetMirror APK
          </div>
          <div style={{ display: "flex", fontSize: "34px", color: "#475569", marginTop: "16px" }}>
            For Android, Firestick &amp; Android TV — official, free &amp; open-source
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#dc2626",
              color: "#ffffff",
              fontSize: "26px",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: "12px",
            }}
          >
            Latest: NetMirror 21.3 “Omega”
          </div>
          <div style={{ display: "flex", marginLeft: "24px", fontSize: "24px", color: "#64748b" }}>
            Install guides · Legal addons · No mods
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
