import { describe, expect, it } from "vitest";
import { questions } from "@/data/questions";
import { axisResultsFromPercents, scoreAnswers, type Answers } from "@/lib/scoring";

/** Build an Answers map by giving every question a value based on its pole. */
function answerAllQuestions(valueForPoleA: number, valueForPoleB: number, byAxis: Record<string, [string, string]>): Answers {
  const answers: Answers = {};
  for (const q of questions) {
    const [poleA] = byAxis[q.axis];
    answers[q.id] = q.pole === poleA ? valueForPoleA : valueForPoleB;
  }
  return answers;
}

const AXIS_POLES = {
  EI: ["E", "I"] as [string, string],
  SN: ["S", "N"] as [string, string],
  TF: ["T", "F"] as [string, string],
  JP: ["J", "P"] as [string, string],
};

describe("scoreAnswers", () => {
  it("produces exactly 50/50 on every axis when all answers are neutral", () => {
    const answers: Answers = {};
    for (const q of questions) answers[q.id] = 3;

    const { type, axisResults } = scoreAnswers(answers);

    for (const r of axisResults) {
      expect(r.pctA).toBe(50);
      expect(r.pctB).toBe(50);
    }
    // Ties resolve to poleA for every axis (E, S, T, J)
    expect(type).toBe("ESTJ");
  });

  it("produces exactly 50/50 when no answers are given (missing answers default to neutral)", () => {
    const { axisResults } = scoreAnswers({});
    for (const r of axisResults) {
      expect(r.pctA).toBe(50);
      expect(r.pctB).toBe(50);
    }
  });

  it("skews fully toward pole A when every pole-A statement is 'strongly agree' and every pole-B statement is 'strongly disagree'", () => {
    const answers = answerAllQuestions(5, 1, AXIS_POLES);
    const { type, axisResults } = scoreAnswers(answers);

    for (const r of axisResults) {
      expect(r.pctA).toBe(100);
      expect(r.pctB).toBe(0);
      expect(r.winner).toBe(r.poleA);
    }
    expect(type).toBe("ESTJ");
  });

  it("skews fully toward pole B when every pole-B statement is 'strongly agree' and every pole-A statement is 'strongly disagree'", () => {
    const answers = answerAllQuestions(1, 5, AXIS_POLES);
    const { type, axisResults } = scoreAnswers(answers);

    for (const r of axisResults) {
      expect(r.pctA).toBe(0);
      expect(r.pctB).toBe(100);
      expect(r.winner).toBe(r.poleB);
    }
    expect(type).toBe("INFP");
  });

  it("gives every axis independent, correctly-labeled poles", () => {
    const answers: Answers = {};
    for (const q of questions) answers[q.id] = 3;
    const { axisResults } = scoreAnswers(answers);

    const byAxis = Object.fromEntries(axisResults.map((r) => [r.axis, r]));
    expect(byAxis.EI).toMatchObject({ poleA: "E", poleB: "I" });
    expect(byAxis.SN).toMatchObject({ poleA: "S", poleB: "N" });
    expect(byAxis.TF).toMatchObject({ poleA: "T", poleB: "F" });
    expect(byAxis.JP).toMatchObject({ poleA: "J", poleB: "P" });
  });

  it("only shifts the axis whose questions were actually answered", () => {
    const answers: Answers = {};
    for (const q of questions) {
      answers[q.id] = q.axis === "EI" ? (q.pole === "E" ? 5 : 1) : 3;
    }

    const { axisResults } = scoreAnswers(answers);
    const byAxis = Object.fromEntries(axisResults.map((r) => [r.axis, r]));

    expect(byAxis.EI.pctA).toBe(100); // E
    expect(byAxis.SN.pctA).toBe(50);
    expect(byAxis.TF.pctA).toBe(50);
    expect(byAxis.JP.pctA).toBe(50);
  });
});

describe("axisResultsFromPercents", () => {
  it("reconstructs matching poleB percentages and winners from a percentage map", () => {
    const results = axisResultsFromPercents({ EI: 88, SN: 12 });
    const byAxis = Object.fromEntries(results.map((r) => [r.axis, r]));

    expect(byAxis.EI).toMatchObject({ poleA: "E", poleB: "I", pctA: 88, pctB: 12, winner: "E" });
    expect(byAxis.SN).toMatchObject({ poleA: "S", poleB: "N", pctA: 12, pctB: 88, winner: "N" });
  });

  it("defaults missing axes to a neutral 50/50", () => {
    const results = axisResultsFromPercents({});
    for (const r of results) {
      expect(r.pctA).toBe(50);
      expect(r.pctB).toBe(50);
    }
  });

  it("clamps out-of-range percentages into 0..100", () => {
    const results = axisResultsFromPercents({ EI: 150, SN: -20 });
    const byAxis = Object.fromEntries(results.map((r) => [r.axis, r]));

    expect(byAxis.EI.pctA).toBe(100);
    expect(byAxis.EI.pctB).toBe(0);
    expect(byAxis.SN.pctA).toBe(0);
    expect(byAxis.SN.pctB).toBe(100);
  });
});
