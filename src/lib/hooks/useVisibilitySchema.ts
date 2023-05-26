import React, { createContext } from "react";
import * as yup from "yup";

export const VisibilitySchemaContext = createContext<
  yup.AnyObjectSchema | undefined
>(undefined);

export const VisibilitySchemaProvider = VisibilitySchemaContext.Provider;

const useVisibilitySchema = () => React.useContext(VisibilitySchemaContext);

export default useVisibilitySchema;
