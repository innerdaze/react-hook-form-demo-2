import React, { createContext } from "react";
import type { ComponentMap } from "../components/fields/componentMap";

export interface FormApiContextType {
  errorMode?: "first" | "all";
  componentMap: ComponentMap;
}

export const FormApiContext = createContext<FormApiContextType>({
  errorMode: "first",
  componentMap: {} as ComponentMap,
});

export const FormApiProvider = FormApiContext.Provider;

const useFormApi = () => React.useContext(FormApiContext);

export default useFormApi;
