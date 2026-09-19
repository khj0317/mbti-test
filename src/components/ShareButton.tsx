"use client";

import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(window.location.href);
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
      await navigator.share({ url: window.location.href });
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
