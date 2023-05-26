import React from "react";
import TextField, { TextFieldProps } from "./TextField";
import { MenuItem } from "@mui/material";
import type { FieldValues } from "react-hook-form";
import type { AnyObjectSchema } from "yup";

export interface Option {
  label: string;
  value: any;
}

export interface SelectFieldProps<T extends FieldValues>
  extends Omit<TextFieldProps<T>, "select"> {
  options: Option[];
}

function SelectField<T extends FieldValues, S extends AnyObjectSchema>({
  options,
  ...props
}: SelectFieldProps<T>) {
  return (
    <TextField<T, S> {...props} select>
      <MenuItem disabled>Please Select</MenuItem>
      {options?.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default React.memo(SelectField);
