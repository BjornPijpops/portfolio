import { useCallback, useState } from 'react';

/**
 * useState that survives page reloads via localStorage. Stored values are checked with
 * `isValid`, so stale or tampered data falls back to the default. Storage can be blocked
 * (private mode, strict settings), in which case it silently behaves like plain state.
 */
export function useStoredState<T extends string>(
  key: string,
  defaultValue: T,
  isValid: (value: string) => value is T,
) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null && isValid(stored) ? stored : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  const update = useCallback(
    (next: T) => {
      setValue(next);
      try {
        localStorage.setItem(key, next);
      } catch {
        // Not being able to persist the choice is not worth interrupting the visitor.
      }
    },
    [key],
  );

  return [value, update] as const;
}
