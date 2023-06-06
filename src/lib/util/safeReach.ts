import { AnyObject, AnyObjectSchema, ObjectSchema, reach } from "yup";

export default function safeReach<T extends AnyObjectSchema>(
  schema: T,
  name: string
) {
  let innerSchema:
    | ReturnType<typeof reach<string, ObjectSchema<T, AnyObject, any, "">>>
    | undefined = undefined;

  try {
    innerSchema = reach({}, name);
  } catch (e: unknown) {}

  return innerSchema;
}
