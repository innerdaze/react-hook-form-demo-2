import React, { createContext } from "react";
import * as yup from "yup";

export const ValidationSchemaContext = createContext<
  yup.AnyObjectSchema | undefined
>(undefined);

export const ValidationSchemaProvider = ValidationSchemaContext.Provider;

const useValidationSchema = <S extends yup.AnyObjectSchema>() => React.useContext(ValidationSchemaContext) as S;

export default useValidationSchema;
