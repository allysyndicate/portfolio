import { ImageResponse } from "next/og";

export const alt =
  "Ally Zach — Research Engineer & Data Scientist. I study how complex systems behave, then build the tools to understand them.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Static share card on the site palette (warm ivory + terracotta),
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
          backgroundColor: "#FAF9F5",
          backgroundImage:
            "radial-gradient(900px 500px at 85% 0%, rgba(193, 95, 60, 0.12), transparent 70%)",
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
            color: "#9C4426",
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
            color: "#1F1E1A",
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
            color: "#504D45",
          }}
        >
          I study how complex systems behave, then build the tools to
          understand them.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 26,
            color: "#6E6B63",
          }}
        >
          allyzach.com
        </div>
      </div>
    ),
    { ...size },
  );
}
