import Link from "next/link";
import { notFound } from "next/navigation";
import AxisBar from "@/components/AxisBar";
import GroupBadge from "@/components/GroupBadge";
import ShareButton from "@/components/ShareButton";
import { typeInfo } from "@/data/types";
import { axisResultsFromPercents } from "@/lib/scoring";
import type { Axis } from "@/data/questions";

export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const type = typeof sp.type === "string" ? sp.type.toUpperCase() : "";
  const info = typeInfo[type];

  if (!info) {
    notFound();
  }

  const toInt = (key: string) => {
    const raw = sp[key];
    const n = typeof raw === "string" ? parseInt(raw, 10) : NaN;
    return Number.isFinite(n) ? n : 50;
  };

  const axisResults = axisResultsFromPercents({
    EI: toInt("ei"),
    SN: toInt("sn"),
    TF: toInt("tf"),
    JP: toInt("jp"),
  } satisfies Partial<Record<Axis, number>>);

  return (
    <div className="page-shell">
      <div className="card">
        <span className="eyebrow">검사 결과</span>

        <div className="result-header">
          <h1 className="result-type">{info.code}</h1>
          <GroupBadge group={info.group} />
        </div>
        <p className="result-nickname">{info.nickname}</p>
        <p className="result-description">{info.description}</p>

        <div className="strength-tags">
          {info.strengths.map((s) => (
            <span key={s} className="strength-tag">
              {s}
            </span>
          ))}
        </div>

        <div className="info-box">
          <span className="info-box-title">✨ 이럴 때 빛나요</span>
          {info.shineWhen}
        </div>
        <div className="info-box info-box-growth">
          <span className="info-box-title">🌱 성장 포인트</span>
          {info.growthTip}
        </div>

        <div className="axis-bar-list">
          {axisResults.map((r) => (
            <AxisBar key={r.axis} result={r} />
          ))}
        </div>

        <div className="result-actions">
          <ShareButton type={info.code} nickname={info.nickname} />
          <Link href="/" className="btn btn-secondary btn-block">
            다시 검사하기
          </Link>
        </div>
      </div>
    </div>
  );
}
