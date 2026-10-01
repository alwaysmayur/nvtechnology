import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "white",
          background: "linear-gradient(135deg, #0b0f19 0%, #1e1b4b 55%, #0e7490 120%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            {"</>"}
          </div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>{siteConfig.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -3 }}>{siteConfig.tagline}</div>
          <div style={{ fontSize: 32, color: "#c7d2fe", maxWidth: 950 }}>
            Software development · Digital solutions · Internships · Technical training
          </div>
        </div>
      </div>
    ),
    size,
  );
}
