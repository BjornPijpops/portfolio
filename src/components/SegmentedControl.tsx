interface SegmentedOption<T extends string> {
  value: T;
  label: string;
  /** Accessible name when the visible label is not descriptive enough. */
  ariaLabel?: string;
  lang?: string;
}

interface SegmentedControlProps<T extends string> {
  options: readonly SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  groupLabel: string;
}

/** Pill-shaped single-choice toggle, reused for the language and view switches. */
export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  groupLabel,
}: SegmentedControlProps<T>) {
  return (
    <div className="segmented" role="group" aria-label={groupLabel}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          lang={option.lang}
          className="segmented__button"
          aria-pressed={option.value === value}
          aria-label={option.ariaLabel}
          title={option.ariaLabel}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
