type ProgressBarProps = {
  value: number;
};

export function ProgressBar({ value }: ProgressBarProps) {
  const safeValue = Number.isFinite(value) ? value : 0;
  const clampedValue = Math.min(100, Math.max(0, safeValue));

  return (
    <div className="progress-group">
      <div className="progress-label">
        <span>Progress</span>
        <span>{clampedValue}%</span>
      </div>
      <div
        aria-label={`Project progress ${clampedValue}%`}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={clampedValue}
        className="progress-shell"
        role="progressbar"
      >
        <div
          className="progress-fill"
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
}
