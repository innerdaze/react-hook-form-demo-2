import React from "react";
import type { FieldValues } from "react-hook-form";
import type { FormComponentSchema } from "../../types/schema";
import SchemaFormComponent from "./SchemaFormComponent";

export interface SchemaFormComponentsProps<TFieldValues extends FieldValues> {
  components: FormComponentSchema<TFieldValues>[];
}

const SchemaFormComponents = <TFieldValues extends FieldValues = FieldValues>({
  components,
}: SchemaFormComponentsProps<TFieldValues>) => {
  return (
    <>
      {components.map((component, idx) => {
        if (component.components) {
          return (
            <SchemaFormComponents key={idx} components={component.components} />
          );
        }

        return <SchemaFormComponent key={idx} {...component} />;
      })}
    </>
  );
};

export default React.memo(SchemaFormComponents) as typeof SchemaFormComponents;
