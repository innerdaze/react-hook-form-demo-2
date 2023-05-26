import React from "react";
import RevalidateOnDependencyChange from "./util/RevalidateOnDependencyChange";
import CheckVisibilityOnDependencyChange from "./util/CheckVisibilityOnDependencyChange";
import useFieldVisibilitySchema from "../hooks/useFieldVisibilitySchema";
import useFieldValidationSchema from "../hooks/useFieldValidationSchema";
import type { FieldBaseProps, FieldTypes } from "../../types/types";
import type { FieldPropsMap } from "./fields/componentMap";
import useFormApi from "../hooks/useFormApi";

export type FieldProps<
  T extends FieldTypes = "text",
  FP extends object = FieldPropsMap[T]
> = FieldBaseProps & {
  name: string;
  label: string;
  type?: T;
} & FP;

function Field<
  T extends FieldTypes = "text",
  FP extends object = FieldPropsMap[T]
>({ name, label, type = "text" as T, ...fieldProps }: FieldProps<T, FP>) {
  const { componentMap } = useFormApi();
  const innerSchema = useFieldValidationSchema(name);

  if (!innerSchema) {
    console.warn(`No validation schema defined for ${name}`);
  }

  const innerVisibilitySchema = useFieldVisibilitySchema(name);

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
