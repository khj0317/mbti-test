"use client";

import { useState } from "react";

export default function ShareButton({ type, nickname }: { type: string; nickname: string }) {
  const [copied, setCopied] = useState(false);
  const [preparing, setPreparing] = useState(false);

  async function buildShareData(): Promise<ShareData> {
    const url = window.location.href;
    const title = `나의 MBTI는 ${type} (${nickname})!`;
    const text = `${title} 너도 테스트 해봐 👉`;
    const shareData: ShareData = { title, text, url };

    try {
      const res = await fetch(`/api/og?type=${type}`);
      const blob = await res.blob();
      const file = new File([blob], `${type}.png`, { type: blob.type });
      if (navigator.canShare?.({ files: [file] })) {
        shareData.files = [file];
      }
    } catch {
      // Image attachment is a nice-to-have; share still works as text + link without it.
    }

    return shareData;
  }

  async function copyToClipboard() {
    const text = `나의 MBTI는 ${type} (${nickname})! 너도 테스트 해봐 👉 ${window.location.href}`;
    try {
      await navigator.clipboard.writeText(text);
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

    setPreparing(true);
    try {
      const data = await buildShareData();
      setPreparing(false);
      await navigator.share(data);
    } catch (err) {
      setPreparing(false);
      if (err instanceof Error && err.name === "AbortError") return; // user cancelled the share sheet
      await copyToClipboard();
    }
  }

  const label = copied ? "복사됐어요! 친구에게 보내보세요" : preparing ? "공유 준비 중..." : "결과 공유하기";

  return (
    <button type="button" className="btn btn-primary btn-block" onClick={handleShare} disabled={preparing}>
      {label}
    </button>
  );
}
