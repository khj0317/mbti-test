import type { AxisResult } from "../utils/scoring";

const AXIS_LABELS: Record<string, string> = {
  E: "외향",
  I: "내향",
  S: "감각",
  N: "직관",
  T: "사고",
  F: "감정",
  J: "판단",
  P: "인식",
};

export default function AxisBar({ result }: { result: AxisResult }) {
  const total = result.countA + result.countB || 1;
  const pctA = Math.round((result.countA / total) * 100);
  const pctB = 100 - pctA;

  return (
    <div className="axis-bar">
      <div className="axis-bar-labels">
        <span className={result.winner === result.poleA ? "axis-pole axis-pole-winner-a" : "axis-pole"}>
          {result.poleA} · {AXIS_LABELS[result.poleA]} {pctA}%
        </span>
        <span className={result.winner === result.poleB ? "axis-pole axis-pole-winner-b" : "axis-pole"}>
          {AXIS_LABELS[result.poleB]} · {result.poleB} {pctB}%
        </span>
      </div>
      <div className="axis-bar-track" role="img" aria-label={`${result.poleA} ${pctA}%, ${result.poleB} ${pctB}%`}>
        <div
          className="axis-bar-segment axis-bar-segment-a"
          style={{ width: `${pctA}%`, minWidth: pctA > 0 ? "4px" : 0 }}
        />
        <div
          className="axis-bar-segment axis-bar-segment-b"
          style={{ width: `${pctB}%`, minWidth: pctB > 0 ? "4px" : 0 }}
        />
      </div>
    </div>
  );
}
