import { useMemo } from "react";
import { FormSchema } from "../types/schema";

export default function useParseSchema(schema: FormSchema) {
  return useMemo(() => {
    const { sections, ...formProps } = schema;

    return {
      sections,
      formProps,
    };
  }, [schema]);
}
