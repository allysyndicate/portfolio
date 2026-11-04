import { ImageResponse } from "next/og";

export const alt =
  "Ally Zach · Research Engineer & Data Scientist. I build data systems to study financial markets, user networks, and AI.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Static share card on the site palette (cream and wine),
   generated at build time. */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          backgroundColor: "#F9F6F0",
          backgroundImage:
            "radial-gradient(900px 500px at 85% 0%, rgba(110, 26, 41, 0.12), transparent 70%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#6E1A29",
          }}
        >
          Research Engineer · Data Scientist
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#1A1414",
          }}
        >
          Ally Zach
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            maxWidth: 900,
            fontSize: 36,
            lineHeight: 1.4,
            color: "#6B6260",
          }}
        >
          I build data systems to study financial markets, user networks, and
          AI.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 26,
            color: "#6B6260",
          }}
        >
          allyzach.com
        </div>
      </div>
    ),
    { ...size },
  );
}
