import { UseControllerProps } from "react-hook-form";

export type FieldTypes = "text" | "select" | "checkbox" | "array";

export interface FieldBaseProps
  extends Pick<UseControllerProps, "shouldUnregister"> {}
