import { useCallback, useState } from "react";

interface OptionHookParams<T> {
  options: T[];
  defaultValue?: T;
}

export function useOption<T>({ options, defaultValue }: OptionHookParams<T>) {
  const [selected, setSelected] = useState<T | null>(defaultValue ?? null);

  const setValue = useCallback((v: T) => {
    if (options.includes(v)) {
      setSelected(v);
    }
  }, []);

  return {
    selectedValue: selected,
    setValue: setValue,
    options,
  };
}
