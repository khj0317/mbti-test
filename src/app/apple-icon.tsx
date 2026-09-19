import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          background: "#faf7f2",
          padding: 24,
        }}
      >
        <div style={{ width: "50%", height: "50%", display: "flex", padding: 8 }}>
          <div style={{ width: "100%", height: "100%", background: "#4a3aa7", borderRadius: 16 }} />
        </div>
        <div style={{ width: "50%", height: "50%", display: "flex", padding: 8 }}>
          <div style={{ width: "100%", height: "100%", background: "#1baf7a", borderRadius: 16 }} />
        </div>
        <div style={{ width: "50%", height: "50%", display: "flex", padding: 8 }}>
          <div style={{ width: "100%", height: "100%", background: "#2a78d6", borderRadius: 16 }} />
        </div>
        <div style={{ width: "50%", height: "50%", display: "flex", padding: 8 }}>
          <div style={{ width: "100%", height: "100%", background: "#eda100", borderRadius: 16 }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
