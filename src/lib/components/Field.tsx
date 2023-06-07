import React from "react";
import RevalidateOnDependencyChange from "./util/RevalidateOnDependencyChange";
import CheckVisibilityOnDependencyChange from "./util/CheckVisibilityOnDependencyChange";
import useFieldVisibilitySchema from "../hooks/useFieldVisibilitySchema";
import useFieldValidationSchema from "../hooks/useFieldValidationSchema";
import useFormApi from "../hooks/useFormApi";
import type { FieldBaseProps, FieldTypes } from "../types/types";
import type { ComponentProps } from "./fields/componentMap";
import type { AnyObjectSchema } from "yup";
import type { FieldValues, Path } from "react-hook-form";

export type FieldProps<
  TFieldType extends FieldTypes,
  TFieldProps extends ComponentProps,
  TFieldValues extends FieldValues
> = FieldBaseProps &
  TFieldProps & {
    name: Path<TFieldValues>;
    label: string;
    type: TFieldType;
  };

function Field<
  TFieldType extends FieldTypes,
  TFieldProps extends ComponentProps,
  TValidationSchema extends AnyObjectSchema,
  TFieldValues extends FieldValues
>({
  name,
  type,
  ...fieldProps
}: FieldProps<TFieldType, TFieldProps, TFieldValues>) {
  const { componentMap } = useFormApi();
  const innerSchema = useFieldValidationSchema<TFieldValues, TValidationSchema>(
    name
  );

  if (!innerSchema) {
    console.warn(`No validation schema defined for ${name}`);
  }

  const innerVisibilitySchema = useFieldVisibilitySchema<
    TFieldValues,
    TValidationSchema
  >(name);

  const Cmp = componentMap[type];

  if (!Cmp) {
    console.error(`Component not found for type: ${type}`);
    return null;
  }

  const render = [];

  if (innerSchema?.deps?.length) {
    render.push(
      <RevalidateOnDependencyChange<TFieldValues>
        key={0}
        name={name}
        watch={innerSchema.deps as Path<TFieldValues>[]}
      />
    );
  }

  // @ts-ignore - CBA to fix this
  render.push(<Cmp {...fieldProps} key={1} name={name} />);

  if (innerVisibilitySchema?.deps?.length) {
    return (
      <CheckVisibilityOnDependencyChange<TFieldValues> name={name}>
        {render}
      </CheckVisibilityOnDependencyChange>
    );
  }

  return <>{render}</>;
}

export default React.memo(Field) as typeof Field;
