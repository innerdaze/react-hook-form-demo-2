import React from "react";
import RevalidateOnDependencyChange from "./util/RevalidateOnDependencyChange";
import CheckVisibilityOnDependencyChange from "./util/CheckVisibilityOnDependencyChange";
import useFieldVisibilitySchema from "../hooks/useFieldVisibilitySchema";
import useFieldValidationSchema from "../hooks/useFieldValidationSchema";
import type { FieldBaseProps, FieldTypes } from "../../types/types";
import type { FieldPropsMap } from "./fields/componentMap";
import useFormApi from "../hooks/useFormApi";
import type { AnyObjectSchema } from "yup";
import type { FieldValues, Path } from "react-hook-form";

export type FieldProps<
  T extends FieldTypes = "text",
  FP extends object = FieldPropsMap[T],
  TFormSchema extends AnyObjectSchema = AnyObjectSchema,
  TFieldValues extends FieldValues = FieldValues
> = FieldBaseProps & FP & {
  name: Path<T>;
  label: string;
  type?: T;
};

function Field<
  T extends FieldTypes = "text",
  FP extends object = FieldPropsMap[T],
  TValidationSchema extends AnyObjectSchema = AnyObjectSchema,
  TFieldValues extends FieldValues = FieldValues
>({ name, label, type = "text" as T, ...fieldProps }: FieldProps<T, FP, TValidationSchema, TFieldValues>) {
  const { componentMap } = useFormApi();
  const innerSchema = useFieldValidationSchema<TFieldValues, TValidationSchema>(name);

  if (!innerSchema) {
    console.warn(`No validation schema defined for ${name}`);
  }

  const innerVisibilitySchema = useFieldVisibilitySchema<TFieldValues, TValidationSchema>(name);

  const Cmp = componentMap.get(type);

  if (!Cmp) {
    console.error(`Component not found for type: ${type}`);
    return null;
  }

  const render = [];

  if (innerSchema?.deps?.length) {
    render.push(
      <RevalidateOnDependencyChange
        key={0}
        name={name}
        watch={innerSchema.deps}
      />
    );
  }

  render.push(<Cmp {...fieldProps} key={1} name={name} label={label} />);

  if (innerVisibilitySchema?.deps?.length) {
    return (
      <CheckVisibilityOnDependencyChange name={name}>
        {render}
      </CheckVisibilityOnDependencyChange>
    );
  }

  return <>{render}</>;
}

export default React.memo(Field) as typeof Field;
