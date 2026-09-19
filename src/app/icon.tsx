import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          background: "#faf7f2",
          borderRadius: 7,
          padding: 4,
        }}
      >
        <div style={{ width: "50%", height: "50%", display: "flex", padding: 1.5 }}>
          <div style={{ width: "100%", height: "100%", background: "#4a3aa7", borderRadius: 2 }} />
        </div>
        <div style={{ width: "50%", height: "50%", display: "flex", padding: 1.5 }}>
          <div style={{ width: "100%", height: "100%", background: "#1baf7a", borderRadius: 2 }} />
        </div>
        <div style={{ width: "50%", height: "50%", display: "flex", padding: 1.5 }}>
          <div style={{ width: "100%", height: "100%", background: "#2a78d6", borderRadius: 2 }} />
        </div>
        <div style={{ width: "50%", height: "50%", display: "flex", padding: 1.5 }}>
          <div style={{ width: "100%", height: "100%", background: "#eda100", borderRadius: 2 }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
