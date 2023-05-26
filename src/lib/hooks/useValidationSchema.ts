import React, { createContext } from "react";
import * as yup from "yup";

export const ValidationSchemaContext = createContext<
  yup.AnyObjectSchema | undefined
>(undefined);

export const ValidationSchemaProvider = ValidationSchemaContext.Provider;

const useValidationSchema = () => React.useContext(ValidationSchemaContext);

export default useValidationSchema;
