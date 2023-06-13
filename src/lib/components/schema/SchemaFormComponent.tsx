import React, { Key, useCallback } from "react";
import type { ArrayPath, FieldValues, Path } from "react-hook-form";

import type { FormComponentSchema } from "../../types/schema";
import Field from "../Field";
import FieldArray from "../fieldArray/FieldArray";

export type SchemaFormComponentProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues> | ArrayPath<TFieldValues>
> = FormComponentSchema<TFieldValues, TName>;

const SchemaFormComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends
    | Path<TFieldValues>
    | ArrayPath<TFieldValues> = Path<TFieldValues>
>(
  props: SchemaFormComponentProps<TFieldValues, TName>
) => {
  if (props.type === "array") {
    return (
      <FieldArray
        {...props}
        render={useCallback(
          ({ name, index }) =>
            props.parts.map(
              ({ name: partName, components: _components, ...component }) => (
                <SchemaFormComponent<TFieldValues, ArrayPath<TFieldValues>>
                  key={partName as Key}
                  {...component}
                  name={
                    `${name}.${index}.${String(
                      partName
                    )}` as ArrayPath<TFieldValues>
                  }
                />
              )
            ),
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
