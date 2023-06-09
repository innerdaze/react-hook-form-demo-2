import React, { useCallback } from "react";
import type { FieldValues } from "react-hook-form";

import type { FormComponentSchema } from "../../types/schema";
import Field from "../Field";
import FieldArray from "../fieldArray/FieldArray";

export type SchemaFormComponentProps<TFieldValues extends FieldValues> =
  FormComponentSchema<TFieldValues>;

const SchemaFormComponent = <TFieldValues extends FieldValues = FieldValues>(
  props: SchemaFormComponentProps<TFieldValues>
) => {
  if (props.type === "array") {
    return (
      <FieldArray
        {...props}
        render={useCallback(
          ({ name, index }) =>
            props.components.map((component) => (
              <SchemaFormComponent<TFieldValues>
                {...component}
                name={`${name}.${index}.${component.name}` as never}
              />
            )),
          []
        )}
      />
    );
  }

  // TODO: fix
  // @ts-ignore
  return <Field {...props} />;
};

export default React.memo(SchemaFormComponent) as typeof SchemaFormComponent;
