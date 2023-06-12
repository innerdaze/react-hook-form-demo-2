import { useEffect, useState } from "react";
import type { Path, FieldValues } from "react-hook-form";
import { useFormContext, useWatch } from "react-hook-form";
import useVisibilitySchema from "./useVisibilitySchema";
import type { AnySchema, ObjectSchema } from "yup";
import safeReach from "../util/safeReach";

export interface UseCheckVisibilityOnDependencyChangeProps<
  T extends FieldValues
> {
  name: Path<T>;
}

/**
 * useCheckVisibilityOnDependencyChange
 *
 * Trigger re-render when visibility check dependencies change their values.
 * Sets visible boolean based on visibility check result.
 */
const useCheckVisibilityOnDependencyChange = <T extends FieldValues>({
  name,
}: UseCheckVisibilityOnDependencyChangeProps<T>) => {
  const { control, getValues } = useFormContext<T>();
  const [visible, setVisible] = useState(true);
  const visibilitySchema = useVisibilitySchema();

  const innerSchema =
    visibilitySchema && (safeReach(visibilitySchema, name) as AnySchema);

  const deps = innerSchema?.deps as Path<T>[];
  const watchName = deps?.length === 1 ? deps[0] : deps;

  if (!watchName.length) {
    console.warn("calling watch with no dependencies");
  }

  const value = useWatch<T>({
    control,
    name: watchName as Path<T>,
  });

  useEffect(() => {
    const fn = async () => {
      if (visibilitySchema) {
        try {
          await visibilitySchema.validateAt(name, getValues());
          setVisible(true);
        } catch (e: unknown) {
          setVisible(false);
        }
      }
    };

    fn();
  }, [value]);

  return { visible };
};

export default useCheckVisibilityOnDependencyChange;
