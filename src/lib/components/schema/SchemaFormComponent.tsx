import React, { useCallback } from "react";
import type { FieldValues, Path } from "react-hook-form";

import type { FormComponentSchema } from "../../types/schema";
import Field from "../Field";
import FieldArray from "../fieldArray/FieldArray";
import SchemaFormComponents from "./SchemaFormComponents";

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
          ({ name, index }) => (
            // return props.components.map((component) => (
            //   <SchemaFormComponent
            //     {...component}
            //     name={`${name}.${index}.${component.name}` as Path<TFieldValues>}
            //   />
            // ));

            <SchemaFormComponents
              components={props.components.map((component) => ({
                ...component,
                name: `${name}.${index}.${component.name}`,
              }))}
            />
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

export default React.memo(SchemaFormComponent);
