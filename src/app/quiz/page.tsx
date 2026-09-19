"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import LikertScale from "@/components/LikertScale";
import { questions } from "@/data/questions";
import { scoreAnswers, type Answers } from "@/lib/scoring";

export default function QuizPage() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const question = questions[index];
  const progress = Math.round((index / questions.length) * 100);

  function choose(value: number) {
    const next = { ...answers, [question.id]: value };
    setAnswers(next);

    if (index + 1 < questions.length) {
      setTimeout(() => setIndex(index + 1), 150);
    } else {
      setTimeout(() => finish(next), 150);
    }
  }

  function finish(finalAnswers: Answers) {
    const { type, axisResults } = scoreAnswers(finalAnswers);
    const params = new URLSearchParams({ type });
    for (const r of axisResults) {
      params.set(r.axis.toLowerCase(), String(r.pctA));
    }
    router.push(`/result?${params.toString()}`);
  }

  function goBack() {
    if (index > 0) setIndex(index - 1);
  }

  return (
    <div className="page-shell">
      <div className="card quiz-screen">
        <div className="progress-row">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="progress-count">
            {index + 1} / {questions.length}
          </span>
        </div>

        <h2 className="question-text">{question.text}</h2>

        <LikertScale value={answers[question.id]} onChange={choose} />

        <div className="quiz-nav">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={goBack}
            disabled={index === 0}
            style={{ visibility: index === 0 ? "hidden" : "visible" }}
          >
            ← 이전 질문
          </button>
        </div>
      </div>
    </div>
  );
}
