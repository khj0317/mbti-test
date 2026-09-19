import type { Axis } from "../data/questions";

export type Answers = Record<number, string>; // questionId -> chosen pole

export interface AxisResult {
  axis: Axis;
  poleA: string; // first letter alphabetically within the pair, e.g. "E"
  poleB: string; // e.g. "I"
  countA: number;
  countB: number;
  winner: string;
}

const AXIS_POLES: Record<Axis, [string, string]> = {
  EI: ["E", "I"],
  SN: ["S", "N"],
  TF: ["T", "F"],
  JP: ["J", "P"],
};

export function scoreAnswers(answers: Answers): { type: string; axisResults: AxisResult[] } {
  const counts: Record<string, number> = {};
  for (const pole of Object.values(answers)) {
    counts[pole] = (counts[pole] ?? 0) + 1;
  }

  const axisResults: AxisResult[] = (Object.keys(AXIS_POLES) as Axis[]).map((axis) => {
    const [poleA, poleB] = AXIS_POLES[axis];
    const countA = counts[poleA] ?? 0;
    const countB = counts[poleB] ?? 0;
    return {
      axis,
      poleA,
      poleB,
      countA,
      countB,
      winner: countA >= countB ? poleA : poleB,
    };
  });

  const type = axisResults.map((r) => r.winner).join("");
  return { type, axisResults };
}
