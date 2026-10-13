export default function ProgressBar({ value, max, label, className = "" }: {
  value: number;
  max: number;
  label?: string;
  className?: string;
}) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className={className}>
      {label && (
        <div className="mb-1.5 flex justify-between text-[13px]">
          <span className="text-ink-secondary font-medium">{label}</span>
          <span className="text-ink-tertiary tabular-nums">{value}/{max}</span>
        </div>
      )}
      <div className="h-2 w-full rounded-full bg-bg-sunken overflow-hidden">
        <div
          className="h-full rounded-full bg-jade transition-all duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
