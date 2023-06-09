import React from "react";
import PersonalInfoSchemaForm from "../forms/PersonalInfo/PersonalInfoSchemaForm?raw";
import SourceView from "../components/SourceView";

const SchemaFormSource = () => {
  return <SourceView src={PersonalInfoSchemaForm} />;
};

export default React.memo(SchemaFormSource);
