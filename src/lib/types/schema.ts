import type {
  ArrayPath,
  FieldArrayPathValue,
  FieldValues,
  Path,
} from "react-hook-form";
import type { AnyObjectSchema, InferType } from "yup";
import type { CheckboxProps } from "../components/fields/Checkbox";
import type { SelectFieldProps } from "../components/fields/SelectField";
import type { TextFieldProps } from "../components/fields/TextField";
import type { FormProps } from "../components/Form";
import type { ArrayType, FieldTypes } from "./types";

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
  TFieldValues extends FieldValues = FieldValues,
  TName extends
    | Path<TFieldValues>
    | ArrayPath<TFieldValues>
    | FieldArrayPathName<TFieldValues> = Path<TFieldValues>
> = {
  [T in FieldTypes]: Omit<FormComponentSchemaBase<T, TFieldValues>, "name">;
}[FieldTypes] & {
  name: TName;
  components?: FormComponentSchema<TFieldValues, TName>[];
};

export type FieldArrayPathName<
  TFieldValues extends FieldValues = FieldValues,
  TFieldArrayValue = FieldArrayPathValue<TFieldValues, ArrayPath<TFieldValues>>,
  TArrayType = ArrayType<TFieldArrayValue>
> = TArrayType extends TFieldArrayValue
  ? TArrayType
  : Exclude<keyof TArrayType, "number" | "symbol">;

export interface FieldArraySchema<
  TFieldValues extends FieldValues = FieldValues
> {
  // name: ArrayPath<TFieldValues>;
  highlight?: boolean;
  parts: FormComponentSchema<TFieldValues, FieldArrayPathName<TFieldValues>>[];
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
  blocks: FormComponentSchema<TFieldValues>[];
  validationSchema: TValidationSchema;
  visibilitySchema?: TVisibilitySchema;
}
