import type { FieldTypes } from "../../../types/types";
import type { CheckboxProps } from "./Checkbox";
import Checkbox from "./Checkbox";
import type { SelectFieldProps } from "./SelectField";
import SelectField from "./SelectField";
import type { TextFieldProps } from "./TextField";
import TextField from "./TextField";

export type FieldPropsMap = {
  text: TextFieldProps;
  checkbox: CheckboxProps;
  select: SelectFieldProps;
};

export type ComponentMap = Map<FieldTypes, React.ExoticComponent<any>>;

export const defaultComponentMap: ComponentMap = new Map<
  FieldTypes,
  React.ExoticComponent<any>
>([
  ["text", TextField],
  ["checkbox", Checkbox],
  ["select", SelectField],
]);
