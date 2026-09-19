import type { AxisResult } from "@/lib/scoring";

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
  const { pctA, pctB } = result;

  return (
    <div>
      <div className="axis-bar-labels">
        <span className={result.winner === result.poleA ? "axis-pole-winner-a" : ""}>
          {result.poleA} · {AXIS_LABELS[result.poleA]} {pctA}%
        </span>
        <span className={result.winner === result.poleB ? "axis-pole-winner-b" : ""}>
          {AXIS_LABELS[result.poleB]} · {result.poleB} {pctB}%
        </span>
      </div>
      <div className="axis-bar-track" role="img" aria-label={`${result.poleA} ${pctA}%, ${result.poleB} ${pctB}%`}>
        <div
          className="axis-bar-segment axis-bar-segment-a"
          style={{ width: `${pctA}%`, minWidth: pctA > 0 ? "6px" : 0 }}
        />
        <div
          className="axis-bar-segment axis-bar-segment-b"
          style={{ width: `${pctB}%`, minWidth: pctB > 0 ? "6px" : 0 }}
        />
      </div>
    </div>
  );
}
