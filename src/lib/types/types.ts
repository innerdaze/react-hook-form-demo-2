import { UseControllerProps } from "react-hook-form";

export type FieldTypes = "text" | "select" | "checkbox" | "array";

export interface FieldBaseProps
  extends Pick<UseControllerProps, "shouldUnregister"> {}

export type ArrayType<T> = T extends (infer P)[] ? P : T;
