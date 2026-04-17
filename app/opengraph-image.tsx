import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "James Saiban – Full-Stack Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(168,85,247,0.25) 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, rgba(236,72,153,0.15) 0%, transparent 50%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 20,
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            marginBottom: 32,
            fontSize: 40,
            fontWeight: 700,
            color: "white",
          }}
        >
          SJ
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            background: "linear-gradient(90deg, #a855f7, #ec4899)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 16,
          }}
        >
          James Saiban
        </div>
        <div style={{ fontSize: 28, color: "#cbd5e1", marginBottom: 40 }}>
          Full-Stack Engineer
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
          }}
        >
          {["Next.js", "TypeScript", "React", "Supabase"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                border: "1px solid rgba(168,85,247,0.4)",
                color: "#a855f7",
                fontSize: 18,
                background: "rgba(168,85,247,0.1)",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", bottom: 32, color: "#475569", fontSize: 18 }}>
          saibanjamesr.dev
        </div>
      </div>
    ),
    size
  )
}
