export function Ring({ pct, label }: { pct: number; label: string | number }) {
  return (
    <div className="w-11 h-11 rounded-full grid place-items-center shrink-0" style={{ background: `conic-gradient(var(--primary) ${pct}%, var(--bg-sunken) 0)` }}>
      <div className="w-[34px] h-[34px] rounded-full bg-bg-raised grid place-items-center text-[12px] font-extrabold text-ink">{label}</div>
    </div>
  );
}
