import React from "react";
import { FormSectionSchema } from "../../types/schema";
import SchemaFormComponents from "./SchemaFormComponents";

export interface SchemaFormSectionProps extends FormSectionSchema {}

const SchemaFormSection = ({ components }: SchemaFormSectionProps) => {
  return <SchemaFormComponents components={components} />;
};

export default React.memo(SchemaFormSection);
