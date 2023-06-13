import { useMemo } from "react";
import { FormSchema } from "../types/schema";

export default function useParseSchema(schema: FormSchema) {
  return useMemo(() => {
    const { blocks, ...formProps } = schema;

    return {
      blocks,
      formProps,
    };
  }, [schema]);
}
