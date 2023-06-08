import React from "react";
import { FieldValues } from "react-hook-form";
import { FieldArrayProps } from "../fieldArray/FieldArray";
import type { CheckboxProps } from "./Checkbox";
import Checkbox from "./Checkbox";
import type { SelectFieldProps } from "./SelectField";
import SelectField from "./SelectField";
import type { TextFieldProps } from "./TextField";
import TextField from "./TextField";

export type FieldPropsMap<TFieldValues extends FieldValues = FieldValues> = {
  text: { type: "text" } & TextFieldProps<TFieldValues>;
  checkbox: { type: "checkbox" } & CheckboxProps<TFieldValues>;
  select: { type: "select" } & SelectFieldProps<TFieldValues>;
  array: { type: "array" } & FieldArrayProps<TFieldValues>;
};

export type Components =
  | React.FC<FieldPropsMap["text"]>
  | React.FC<FieldPropsMap["checkbox"]>
  | React.FC<FieldPropsMap["select"]>;

export const defaultComponentMap = {
  text: TextField,
  checkbox: Checkbox,
  select: SelectField,
} as const;

export type ComponentMap = typeof defaultComponentMap;

export type ComponentProps =
  | FieldPropsMap["text"]
  | FieldPropsMap["checkbox"]
  | FieldPropsMap["select"];
