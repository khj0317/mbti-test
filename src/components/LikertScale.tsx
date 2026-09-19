const LIKERT_LABELS = ["매우 그렇지 않다", "그렇지 않다", "보통이다", "그렇다", "매우 그렇다"];

export default function LikertScale({
  value,
  onChange,
}: {
  value: number | undefined;
  onChange: (value: number) => void;
}) {
  return (
    <div className="likert-row">
      {LIKERT_LABELS.map((label, i) => {
        const optionValue = i + 1;
        const selected = value === optionValue;
        return (
          <button
            key={optionValue}
            type="button"
            className={selected ? "likert-option selected" : "likert-option"}
            onClick={() => onChange(optionValue)}
          >
            <span className="likert-dot" />
            <span className="likert-label">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
