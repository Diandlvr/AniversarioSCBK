import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1A1A1A", // Dark ink background
          color: "#FAF7F4", // Paper text
          fontFamily: "serif",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(250, 247, 244, 0.15)",
            padding: "80px 100px",
            height: "100%",
            width: "100%",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: 32,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C4877A", // Blush accent
              marginBottom: 40,
            }}
          >
            Feliz Aniversario
          </span>
          <h1
            style={{
              fontSize: 100,
              margin: 0,
              lineHeight: 1,
              fontWeight: 400,
            }}
          >
            The Archive of Us
          </h1>
          <p
            style={{
              fontSize: 40,
              color: "#D1BC9E", // Sand color
              marginTop: 40,
              fontStyle: "italic",
            }}
          >
            Nuestra historia, página por página.
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
