import React, { useMemo, useCallback } from "react";
import {
  useFormContext,
  useController,
  useFormState,
  Path,
  FieldValues,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControlLabelProps,
  FormControlLabel,
  FormHelperText,
  useTheme,
  Box,
} from "@mui/material";
import ErrorMessageDisplay from "../ErrorMessageDisplay";
import useFieldValidationSchema from "../../hooks/useFieldValidationSchema";
import { FieldBaseProps } from "../../types/types";
import { get } from "lodash";
import type { AnyObjectSchema } from "yup";

export interface CheckboxProps<T extends FieldValues = FieldValues>
  extends Omit<
      MuiCheckboxProps,
      "value" | "onChange" | "onBlur" | "inputRef" | "name"
    >,
    Pick<FormControlLabelProps, "label">,
    FieldBaseProps {
  name: Path<T>;
  helperText?: string | React.ReactNode;
  isGrouped?: boolean;
}

function Checkbox<
  T extends FieldValues = FieldValues,
  S extends AnyObjectSchema = AnyObjectSchema
>({
  name,
  label,
  helperText,
  isGrouped,
  shouldUnregister = true,
  ...props
}: CheckboxProps<T>) {
  const { control } = useFormContext<T>();
  const { field } = useController<T>({ name: name, control, shouldUnregister });
  const theme = useTheme();
  const { errors } = useFormState<T>({ control, name });

  const fieldSchema = useFieldValidationSchema<T, S>(name);

  const required = !fieldSchema?.spec?.optional ?? false;

  const fieldErrors = get(errors, name);

  const errorId = `${name}-error`;
  const descriptionId = `${name}-helper-text`;

  const formControlLabelComponentsProps = useMemo(
    () => ({
      typography: {
        color: fieldErrors
          ? theme.palette.error.main
          : theme.palette.text.primary,
      },
    }),
    [theme, fieldErrors]
  );

  const renderError = useCallback(
    ({ message, messages }) =>
      messages && (
        <FormHelperText id={errorId} component="ul" sx={{ ml: "14px" }} error>
          <ErrorMessageDisplay message={message} messages={messages} />
        </FormHelperText>
      ),
    [errorId]
  );

  const Container = isGrouped ? React.Fragment : Box;

  return (
    <Container>
      <FormControlLabel
        componentsProps={formControlLabelComponentsProps}
        label={label}
        required={required}
        control={
          <MuiCheckbox
            {...props}
            inputProps={{
              "aria-required": required,
              "aria-errormessage": errorId,
              "aria-describedby": descriptionId,
            }}
            onChange={field.onChange}
            checked={field.value}
            onBlur={field.onBlur}
            name={field.name}
            inputRef={field.ref}
            // style={{
            //   color: error ? theme.palette.error.main : "default",
            // }}
          />
        }
      />

      <ErrorMessage name={name} render={renderError} />

      {helperText && (
        <FormHelperText id={descriptionId}>{helperText}</FormHelperText>
      )}
    </Container>
  );
}

export default React.memo(Checkbox) as typeof Checkbox;
