import React from "react";
import { FieldValues } from "react-hook-form";
import { AnyObjectSchema, InferType } from "yup";
import Form, { FormProps } from "./Form";
import useParseSchema from "../hooks/useParseSchema";

export interface SchemaFormProps<
  TValidationSchema extends AnyObjectSchema,
  TVisibilitySchema extends AnyObjectSchema,
  TFieldValues extends FieldValues = InferType<TValidationSchema>
> extends FormProps<TValidationSchema, TVisibilitySchema, TFieldValues> {
  schema: any;
}

function SchemaForm<
  TValidationSchema extends AnyObjectSchema,
  TVisibilitySchema extends AnyObjectSchema,
  TFieldValues extends FieldValues = InferType<TValidationSchema>
>({
  schema,
  ...props
}: SchemaFormProps<TValidationSchema, TVisibilitySchema, TFieldValues>) {
  const {} = useParseSchema(schema);

  return <Form {...props} />;
}

export default React.memo(SchemaForm) as typeof SchemaForm;
