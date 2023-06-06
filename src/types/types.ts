import { UseControllerProps } from "react-hook-form";

export type FieldTypes = "text" | "select" | "checkbox";

export interface FieldBaseProps extends Pick<UseControllerProps, "shouldUnregister"> {}
