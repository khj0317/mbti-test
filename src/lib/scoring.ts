import { AXIS_POLES, questions, type Axis } from "@/data/questions";

export type Answers = Record<number, number>; // questionId -> 1..5 (Likert)

export interface AxisResult {
  axis: Axis;
  poleA: string;
  poleB: string;
  pctA: number;
  pctB: number;
  winner: string;
}

export function scoreAnswers(answers: Answers): { type: string; axisResults: AxisResult[] } {
  const axisResults = (Object.keys(AXIS_POLES) as Axis[]).map((axis) => {
    const [poleA, poleB] = AXIS_POLES[axis];
    const axisQuestions = questions.filter((q) => q.axis === axis);

    let rawScore = 0;
    for (const q of axisQuestions) {
      const value = answers[q.id] ?? 3; // 1..5, 3 = neutral
      const delta = value - 3; // -2..+2
      rawScore += q.pole === poleA ? delta : -delta;
    }

    const maxScore = axisQuestions.length * 2;
    const pctA = Math.round(((rawScore + maxScore) / (2 * maxScore)) * 100);
    const pctB = 100 - pctA;

    return { axis, poleA, poleB, pctA, pctB, winner: pctA >= 50 ? poleA : poleB };
  });

  const type = axisResults.map((r) => r.winner).join("");
  return { type, axisResults };
}

/** Reconstruct an AxisResult list from percentages encoded in a URL (no raw answers needed). */
export function axisResultsFromPercents(pcts: Partial<Record<Axis, number>>): AxisResult[] {
  return (Object.keys(AXIS_POLES) as Axis[]).map((axis) => {
    const [poleA, poleB] = AXIS_POLES[axis];
    const pctA = Math.min(100, Math.max(0, pcts[axis] ?? 50));
    const pctB = 100 - pctA;
    return { axis, poleA, poleB, pctA, pctB, winner: pctA >= 50 ? poleA : poleB };
  });
}
