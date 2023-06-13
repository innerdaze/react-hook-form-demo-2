import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { AnyObjectSchema, InferType } from "yup";
import Form, { FormProps } from "./Form";
import useParseSchema from "../hooks/useParseSchema";
import { FormSchema } from "../types/schema";
import { Button } from "@mui/material";
import SchemaFormComponents from "./schema/SchemaFormComponents";

export interface SchemaFormProps<
  TValidationSchema extends AnyObjectSchema,
  TVisibilitySchema extends AnyObjectSchema,
  TFieldValues extends FieldValues = InferType<TValidationSchema>
> extends Partial<
    Omit<
      FormProps<TValidationSchema, TVisibilitySchema, TFieldValues>,
      "onSubmit"
    >
  > {
  onSubmit: SubmitHandler<TFieldValues>;
  schema: FormSchema<TValidationSchema>;
}

function SchemaForm<
  TValidationSchema extends AnyObjectSchema,
  TVisibilitySchema extends AnyObjectSchema,
  TFieldValues extends FieldValues = InferType<TValidationSchema>
>({
  schema,
  ...props
}: SchemaFormProps<TValidationSchema, TVisibilitySchema, TFieldValues>) {
  const { formProps, blocks } = useParseSchema(schema);

  return (
    <Form {...formProps} {...props}>
      <SchemaFormComponents components={blocks} />
      <Button size="large" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default React.memo(SchemaForm) as typeof SchemaForm;
