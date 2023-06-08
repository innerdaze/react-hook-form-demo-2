import React from "react";
import { FieldValues } from "react-hook-form";
import { FormComponentSchema } from "../../types/schema";
import SchemaFormComponent from "./SchemaFormComponent";

export interface SchemaFormComponentsProps<TFieldValues extends FieldValues> {
  components: FormComponentSchema<TFieldValues>[];
}

const SchemaFormComponents = <TFieldValues extends FieldValues = FieldValues>({
  components,
}: SchemaFormComponentsProps<TFieldValues>) => {
  return (
    <>
      {components.map((component, idx) => (
        <SchemaFormComponent key={idx} {...component} />
      ))}
    </>
  );
};

export default React.memo(SchemaFormComponents);
