import { useState } from "react";
import { typeInfo } from "../data/types";
import type { AxisResult } from "../utils/scoring";
import AxisBar from "./AxisBar";

export default function Result({
  type,
  axisResults,
  onRetake,
}: {
  type: string;
  axisResults: AxisResult[];
  onRetake: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const info = typeInfo[type];

  async function handleCopy() {
    const text = `나의 MBTI는 ${type} (${info.nickname})! 너도 테스트 해봐 👉 ${window.location.href}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="screen result-screen">
      <p className="eyebrow">검사 결과</p>
      <h1 className="result-type">{type}</h1>
      <p className="result-nickname">{info.nickname}</p>
      <p className="result-description">{info.description}</p>

      <div className="strength-tags">
        {info.strengths.map((s) => (
          <span key={s} className="strength-tag">
            {s}
          </span>
        ))}
      </div>

      <p className="shine-when">✨ {info.shineWhen}</p>

      <div className="axis-bar-list">
        {axisResults.map((r) => (
          <AxisBar key={r.axis} result={r} />
        ))}
      </div>

      <div className="result-actions">
        <button className="primary-button" onClick={handleCopy}>
          {copied ? "복사됐어요!" : "결과 공유하기"}
        </button>
        <button className="secondary-button" onClick={onRetake}>
          다시 검사하기
        </button>
      </div>
    </div>
  );
}
