"use client";

import { useState } from "react";

export default function ShareButton({ type, nickname }: { type: string; nickname: string }) {
  const [copied, setCopied] = useState(false);

  function buildShareText() {
    const url = window.location.href;
    const title = `나의 MBTI는 ${type} (${nickname})!`;
    const text = `${title} 너도 테스트 해봐 👉`;
    return { title, text, url };
  }

  async function copyToClipboard() {
    const { text, url } = buildShareText();
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  async function handleShare() {
    if (!navigator.share) {
      await copyToClipboard();
      return;
    }

    try {
      // Text + link only. Attaching the OG image alongside made some apps
      // (e.g. KakaoTalk) split the share into two separate messages instead
      // of one, so the image is left out here.
      await navigator.share(buildShareText());
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") return; // user cancelled the share sheet
      await copyToClipboard();
    }
  }

  return (
    <button type="button" className="btn btn-primary btn-block" onClick={handleShare}>
      {copied ? "복사됐어요! 친구에게 보내보세요" : "결과 공유하기"}
    </button>
  );
}
