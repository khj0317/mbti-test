import { questions } from "../data/questions";

export default function Home({ onStart }: { onStart: () => void }) {
  return (
    <div className="screen home-screen">
      <p className="eyebrow">MBTI 성격 유형 검사</p>
      <h1>나는 어떤 유형일까?</h1>
      <p className="lede">
        {questions.length}개의 질문에 편하게 답하고, 나의 성격 유형 16가지 중 하나를 확인해보세요.
        정답은 없으니 가장 먼저 끌리는 쪽을 골라주세요.
      </p>
      <button className="primary-button" onClick={onStart}>
        검사 시작하기
      </button>
      <p className="footnote">약 3분 소요 · 총 {questions.length}문항</p>
    </div>
  );
}
