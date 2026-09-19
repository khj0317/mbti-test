import { useState } from "react";
import { questions } from "../data/questions";
import type { Answers } from "../utils/scoring";

export default function Quiz({ onComplete }: { onComplete: (answers: Answers) => void }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const question = questions[index];
  const progress = Math.round((index / questions.length) * 100);

  function choose(pole: string) {
    const next = { ...answers, [question.id]: pole };
    setAnswers(next);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      onComplete(next);
    }
  }

  return (
    <div className="screen quiz-screen">
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <p className="question-count">
        {index + 1} / {questions.length}
      </p>
      <h2 className="question-text">둘 중에 어느 쪽에 더 가까운가요?</h2>

      <div className="option-list">
        <button className="option-card" onClick={() => choose(question.optionA.pole)}>
          {question.optionA.text}
        </button>
        <button className="option-card" onClick={() => choose(question.optionB.pole)}>
          {question.optionB.text}
        </button>
      </div>
    </div>
  );
}
