import { useRef } from "react";

export default function useParseSchema(schema: any) {
  return useRef(schema);
}
