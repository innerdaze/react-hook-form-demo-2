import type { ArrayPath, DefaultValues, FieldValues } from "react-hook-form";
import type { AnyObjectSchema, InferType } from "yup";
import type { CheckboxProps } from "../components/fields/Checkbox";
import type { SelectFieldProps } from "../components/fields/SelectField";
import type { TextFieldProps } from "../components/fields/TextField";
import type { FormProps } from "../components/Form";
import type { FieldTypes } from "./types";

export type ComponentSchemaPropsMap<
  TFieldValues extends FieldValues = FieldValues
> = {
  text: { type: "text" } & TextFieldProps<TFieldValues>;
  checkbox: { type: "checkbox" } & CheckboxProps<TFieldValues>;
  select: { type: "select" } & SelectFieldProps<TFieldValues>;
  array: { type: "array" } & FieldArraySchema<TFieldValues>;
};

type FormComponentSchemaBase<
  TFieldType extends FieldTypes,
  TFieldValues extends FieldValues = FieldValues
> = {
  type: TFieldType;
} & ComponentSchemaPropsMap<TFieldValues>[TFieldType];

export type FormComponentSchema<
  TFieldValues extends FieldValues = FieldValues
> = {
  [T in FieldTypes]: FormComponentSchemaBase<T, TFieldValues>;
}[FieldTypes];

export interface FormSectionSchema<
  TFieldValues extends FieldValues = FieldValues
> {
  components: FormComponentSchema<TFieldValues>[];
}

export interface FieldArraySchema<
  TFieldValues extends FieldValues = FieldValues
> {
  name: ArrayPath<TFieldValues>;
  highlight?: boolean;
  components: FormComponentSchema<TFieldValues>[];
}

export interface FormSchema<
  TValidationSchema extends AnyObjectSchema = AnyObjectSchema,
  TVisibilitySchema extends AnyObjectSchema = AnyObjectSchema,
  TFieldValues extends FieldValues = InferType<TValidationSchema>
> extends Pick<
    FormProps<TValidationSchema, TVisibilitySchema, TFieldValues>,
    "defaultValues" | "errorMode"
  > {
  __version: string;
  name: string;
  // defaultValues: DefaultValues<TFieldValues>;
  sections: FormSectionSchema[];
  validationSchema: TValidationSchema;
  visibilitySchema?: TVisibilitySchema;
}
