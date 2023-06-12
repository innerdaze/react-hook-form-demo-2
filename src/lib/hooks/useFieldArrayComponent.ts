import { useCallback } from "react";
import {
  ArrayPath,
  FieldValues,
  get,
  useFieldArray,
  useFormContext,
} from "react-hook-form";

export interface UseFieldArrayComponentProps<TFieldValues extends FieldValues> {
  name: ArrayPath<TFieldValues>;
}

const useFieldArrayComponent = <TFieldValues extends FieldValues>({
  name,
}: UseFieldArrayComponentProps<TFieldValues>) => {
  const { control, formState } = useFormContext<TFieldValues>();

  const fieldArrayMethods = useFieldArray<TFieldValues>({
    control,
    name,
  });

  const handleAddClick = useCallback(() => {
    const blankRecord = get(formState.defaultValues, name)?.[0];

    if (blankRecord) {
      fieldArrayMethods.append(blankRecord);
    }
  }, [formState.defaultValues, name, fieldArrayMethods.append]);

  const handleRemoveClick = useCallback(
    (index: number) => () => fieldArrayMethods.remove(index),
    [fieldArrayMethods.remove]
  );

  return { ...fieldArrayMethods, handleAddClick, handleRemoveClick };
};

export default useFieldArrayComponent;
