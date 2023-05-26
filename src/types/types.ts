import { UseControllerProps } from "react-hook-form";

export type FieldTypes = "text" | "select" | "checkbox";

export type FieldBaseProps = Pick<UseControllerProps, "shouldUnregister">;
