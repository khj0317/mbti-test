"use client";

import { useState } from "react";

export default function ShareButton({ type, nickname }: { type: string; nickname: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const text = `나의 MBTI는 ${type} (${nickname})! 너도 테스트 해봐 👉 ${window.location.href}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button type="button" className="btn btn-primary btn-block" onClick={handleCopy}>
      {copied ? "복사됐어요! 친구에게 보내보세요" : "결과 링크 공유하기"}
    </button>
  );
}
