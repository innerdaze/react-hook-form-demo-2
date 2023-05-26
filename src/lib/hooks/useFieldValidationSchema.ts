import { useMemo } from "react";
import type { FieldValues, Path } from "react-hook-form";
import type { AnyObjectSchema, AnySchema } from "yup";
import safeReach from "../util/safeReach";
import useValidationSchema from "./useValidationSchema";

export default function useFieldValidationSchema<
  T extends FieldValues,
  S extends AnyObjectSchema
>(name: Path<T>) {
  const schema = useValidationSchema() as S;

  const fieldSchema = useMemo(
    () => schema && (safeReach<S>(schema, name) as AnySchema),
    [name, schema]
  );

  return fieldSchema;
}
