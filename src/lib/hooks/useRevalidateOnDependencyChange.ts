import { useEffect } from "react";
import type { Path, FieldValues, UseWatchProps } from "react-hook-form";
import { useFormContext, useWatch } from "react-hook-form";

export interface UseRevalidateOnDependencyChangeProps<T extends FieldValues> {
  name: Path<T>;
  watch: UseWatchProps<T>["name"];
}

export default function useRevalidateOnDependencyChange<T extends FieldValues>({
  name,
  watch,
}: UseRevalidateOnDependencyChangeProps<T>) {
  const { control, trigger, getFieldState } = useFormContext<T>();
  const value = useWatch<T>({ control, name: watch as Path<T> });

  useEffect(() => {
    const { isTouched, isDirty, invalid } = getFieldState(name);

    if (invalid || (isTouched && isDirty)) {
      trigger(name);
    }
  }, [value]);
}
