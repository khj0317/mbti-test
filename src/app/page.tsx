import Link from "next/link";
import { groups } from "@/data/types";
import { questions } from "@/data/questions";

const GROUP_TYPES: Record<string, string> = {
  NT: "INTJ · INTP · ENTJ · ENTP",
  NF: "INFJ · INFP · ENFJ · ENFP",
  SJ: "ISTJ · ISFJ · ESTJ · ESFJ",
  SP: "ISTP · ISFP · ESTP · ESFP",
};

export default function HomePage() {
  return (
    <div className="page-shell">
      <div className="card home-hero">
        <span className="eyebrow">MBTI 성격 유형 검사</span>
        <h1>당신의 진짜 성격은 무엇일까요?</h1>
        <p>
          {questions.length}개의 문항에 &lsquo;매우 그렇지 않다&rsquo;부터 &lsquo;매우 그렇다&rsquo;까지
          솔직하게 답해보세요. 16가지 성격 유형 중 나에게 가장 가까운 유형과, 그 안에서도 나만의 성향
          비율까지 확인할 수 있어요.
        </p>

        <div className="home-meta">
          <span>⏱️ 약 5~7분</span>
          <span>📝 총 {questions.length}문항</span>
          <span>🔗 결과 링크 공유 가능</span>
        </div>

        <Link href="/quiz" className="btn btn-primary btn-block">
          테스트 시작하기 →
        </Link>

        <div className="group-preview-grid">
          {Object.values(groups).map((g) => (
            <div key={g.key} className="group-preview-card" style={{ background: `${g.colorLight}0d` }}>
              <div className="group-label" style={{ color: g.colorLight }}>
                {g.label}
              </div>
              <div className="group-types">{GROUP_TYPES[g.key]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
