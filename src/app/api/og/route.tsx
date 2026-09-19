import { ImageResponse } from "next/og";
import { groups } from "@/data/types";
import { typeInfo } from "@/data/types";

export const runtime = "nodejs";

async function loadGoogleFont(text: string, weight: number) {
  const url = `https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/);

  if (match) {
    const response = await fetch(match[1]);
    if (response.ok) {
      return await response.arrayBuffer();
    }
  }
  throw new Error("Failed to load Google Font data for OG image");
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const typeParam = (searchParams.get("type") ?? "").toUpperCase();
  const info = typeInfo[typeParam];

  const code = info?.code ?? "MBTI";
  const nickname = info?.nickname ?? "성격 유형 검사";
  const description = info?.description ?? "40개의 질문으로 알아보는 나의 성격 유형";
  const groupLabel = info ? groups[info.group].label : "";
  const groupColor = info ? groups[info.group].colorLight : "#e2542a";

  const displayText = `${code}${nickname}${description}${groupLabel}MBTI 성격 유형 검사`;
  const fontData = await loadGoogleFont(displayText, 700);
  const fontDataRegular = await loadGoogleFont(displayText, 400);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "#faf7f2",
          fontFamily: "Noto Sans KR",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              color: "#e2542a",
              background: "#fdece2",
              padding: "10px 24px",
              borderRadius: 999,
            }}
          >
            MBTI 성격 유형 검사
          </div>
          {groupLabel && (
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 700,
                color: groupColor,
                background: `${groupColor}1a`,
                padding: "10px 24px",
                borderRadius: 999,
              }}
            >
              {groupLabel}
            </div>
          )}
        </div>

        <div style={{ display: "flex", fontSize: 160, fontWeight: 700, color: "#241f1c", lineHeight: 1 }}>
          {code}
        </div>
        <div style={{ display: "flex", fontSize: 44, fontWeight: 700, color: groupColor, marginTop: 12 }}>
          {nickname}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#6b655e",
            marginTop: 28,
            maxWidth: 980,
            lineHeight: 1.5,
          }}
        >
          {description}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Noto Sans KR", data: fontDataRegular, style: "normal", weight: 400 },
        { name: "Noto Sans KR", data: fontData, style: "normal", weight: 700 },
      ],
      // Only 17 distinct images ever exist (16 types + the default card), so let
      // the CDN cache each one indefinitely instead of re-rendering per request.
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
  );
}
