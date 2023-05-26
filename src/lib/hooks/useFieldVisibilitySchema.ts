import { useMemo } from "react";
import type { FieldValues, Path } from "react-hook-form";
import type { AnySchema, AnyObjectSchema } from "yup";
import safeReach from "../util/safeReach";
import useVisibilitySchema from "./useVisibilitySchema";

export default function useFieldVisibilitySchema<
  T extends FieldValues,
  S extends AnyObjectSchema
>(name: Path<T>) {
  const schema = useVisibilitySchema() as S;

  const fieldSchema = useMemo(
    () => schema && (safeReach<S>(schema, name) as AnySchema),
    [name, schema]
  );

  return fieldSchema;
}
