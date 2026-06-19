type TrustBadgeProps = {
  label: string;
  detail?: string;
};

/** Liten tillitsmarkor brukt i hero og pa undersider. */
export function TrustBadge({ label, detail }: TrustBadgeProps) {
  return (
    <div className="flex flex-col gap-1 border-l border-copper-500/60 pl-4">
      <span className="text-sm font-semibold text-bone">{label}</span>
      {detail && <span className="text-xs leading-snug text-graphite-400">{detail}</span>}
    </div>
  );
}
