import React, { useCallback } from "react";
import { SubmitErrorHandler } from "react-hook-form";
import { defaultComponentMap } from "../../../lib/components/fields/componentMap";
import SchemaForm from "../../../lib/components/SchemaForm";
import personalInfoFormSchema from "./personalInfoFormSchema";
import { PersonalInfoFieldValues } from "./personalInfoValidationSchema";

const PersonalInfoSchemaForm = () => {
  const handleSubmit = useCallback(() => {}, []);

  const handleError = useCallback<SubmitErrorHandler<PersonalInfoFieldValues>>(
    (errors) => {
      console.log("errors:", errors);
    },
    []
  );

  return (
    <SchemaForm
      schema={personalInfoFormSchema}
      componentMap={defaultComponentMap}
      formProps={{
        sx: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "400px",
          width: "100%",
          gap: "1rem",
          "& .MuiFormControl-root": {
            width: "100%",
          },
        },
      }}
      onSubmit={handleSubmit}
      onError={handleError}
    />
  );
};

export default React.memo(PersonalInfoSchemaForm);
