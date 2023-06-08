import React from "react";
import { Box, BoxProps } from "@mui/material";
import { FormApiProvider } from "../hooks/useFormApi";
import { VisibilitySchemaProvider } from "../hooks/useVisibilitySchema";
import type { AnyObjectSchema, InferType } from "yup";
import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  UseFormProps,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationSchemaProvider } from "../hooks/useValidationSchema";
import { ComponentMap } from "./fields/componentMap";

export interface FormProps<
  TValidationSchema extends AnyObjectSchema,
  TVisibilitySchema extends AnyObjectSchema,
  TFieldValues extends FieldValues = InferType<TValidationSchema>
> extends Omit<UseFormProps<TFieldValues>, "resolver" | "defaultValues">,
    Pick<BoxProps<"form">, "children"> {
  errorMode?: "first" | "all";
  validationSchema: TValidationSchema;
  visibilitySchema?: TVisibilitySchema;
  componentMap?: ComponentMap;
  defaultValues: UseFormProps<TFieldValues>["defaultValues"];
  formProps?: Omit<
    BoxProps<"form">,
    "children" | "component" | "noValidate" | "autoComplete" | "onSubmit"
  >;
  onSubmit: SubmitHandler<TFieldValues>;
  onError?: SubmitErrorHandler<TFieldValues>;
}

function Form<
  TValidationSchema extends AnyObjectSchema,
  TVisibilitySchema extends AnyObjectSchema,
  TFieldValues extends FieldValues = InferType<TValidationSchema>
>({
  errorMode = "first",
  componentMap,
  validationSchema,
  visibilitySchema,
  formProps,
  onSubmit,
  onError,
  children,
  ...props
}: FormProps<TValidationSchema, TVisibilitySchema, TFieldValues>) {
  const methods = useForm<TFieldValues>({
    criteriaMode: "all",
    ...props,
    resolver: yupResolver(validationSchema),
  });

  if (!componentMap) {
    console.error("No component map defined");

    return (
      <p style={{ textAlign: "center" }}>
        Form Error: No component map defined
      </p>
    );
  }

  return (
    <FormProvider {...methods}>
      <ValidationSchemaProvider value={validationSchema}>
        <VisibilitySchemaProvider value={visibilitySchema}>
          <FormApiProvider
            value={{
              errorMode,
              componentMap,
            }}
          >
            <Box
              {...formProps}
              noValidate
              component="form"
              autoComplete="off"
              onSubmit={methods.handleSubmit(onSubmit, onError)}
            >
              {children}
            </Box>
          </FormApiProvider>
        </VisibilitySchemaProvider>
      </ValidationSchemaProvider>
    </FormProvider>
  );
}

export default React.memo(Form) as typeof Form;
