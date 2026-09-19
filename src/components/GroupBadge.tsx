import { groups, type GroupKey } from "@/data/types";

export default function GroupBadge({ group }: { group: GroupKey }) {
  const info = groups[group];
  return (
    <span
      className="group-badge"
      style={{ background: `${info.colorLight}1a`, color: info.colorLight }}
    >
      {info.label}
    </span>
  );
}
