import React from "react";
import type { FormSectionSchema } from "../../types/schema";
import SchemaFormSection from "./SchemaFormSection";

export interface SchemaFormSectionsProps {
  sections: FormSectionSchema[];
}

const SchemaFormSections = ({ sections }: SchemaFormSectionsProps) => {
  return (
    <>
      {sections.map((section, idx) => (
        <SchemaFormSection key={idx} {...section} />
      ))}
    </>
  );
};

export default React.memo(SchemaFormSections);
