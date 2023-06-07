import React from "react";
import {
  useFormContext,
  useController,
  useFormState,
  Path,
  FieldValues,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { get } from "lodash";
import {
  TextField as MuiTextField,
  OutlinedTextFieldProps as MuiOutlinedTextFieldProps,
} from "@mui/material";
import { RenderErrorMessage } from "../ErrorMessageDisplay";
import useFieldValidationSchema from "../../hooks/useFieldValidationSchema";
import type { FieldBaseProps } from "../../types/types";
import type { AnyObjectSchema } from "yup";

export interface TextFieldProps<T extends FieldValues = FieldValues>
  extends Omit<
      MuiOutlinedTextFieldProps,
      "onChange" | "onBlur" | "inputRef" | "variant"
    >,
    FieldBaseProps {
  name: Path<T>;
  label: string;
}

function TextField<
  T extends FieldValues = FieldValues,
  S extends AnyObjectSchema = AnyObjectSchema
>({ name, shouldUnregister = true, ...props }: TextFieldProps<T>) {
  const { control } = useFormContext<T>();
  const { field } = useController<T>({ name, control, shouldUnregister });
  const fieldState = useFormState<T>({
    control,
    name,
    exact: true,
  });

  const fieldSchema = useFieldValidationSchema<T, S>(name);

  const error = get(fieldState.errors, name);

  return (
    <React.Fragment>
      <MuiTextField
        {...props}
        variant="outlined"
        onChange={field.onChange}
        value={field.value}
        onBlur={field.onBlur}
        name={field.name}
        inputRef={field.ref}
        required={!fieldSchema?.spec?.optional}
        error={Boolean(error)}
        /* @ts-expect-error */
        FormHelperTextProps={{ component: "div" }}
        helperText={<ErrorMessage render={RenderErrorMessage} name={name} />}
      />
    </React.Fragment>
  );
}

export default React.memo(TextField) as typeof TextField;
