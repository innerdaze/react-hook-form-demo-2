import React, { useCallback } from "react";
import { SubmitErrorHandler } from "react-hook-form";
import { defaultComponentMap } from "../../lib/components/fields/componentMap";
import SchemaForm from "../../lib/components/SchemaForm";
import type { FormSchema } from "../../lib/types/schema";
import personalInfoValidationSchema, {
  PersonalInfoFieldValues,
} from "./personalInfoValidationSchema";
import personalInfoVisibilitySchema from "./personalInfoVisibilitySchema";

const personalInfoFormSchema: FormSchema<
  typeof personalInfoValidationSchema,
  typeof personalInfoVisibilitySchema
> = {
  __version: "1",
  name: "PersonalInfo",
  errorMode: "first",
  defaultValues: {
    acceptedTerms: undefined,
    showAdditionalField: true,
    additionalField: "",
    addresses: [
      {
        address1: "",
        address2: "",
        address3: "",
        postcode: "",
      },
    ],
    firstName: "",
    lastName: "",
    title: "",
  },
  sections: [
    {
      components: [
        {
          type: "select",
          name: "title",
          label: "Title",
          options: [
            { value: "mr", label: "Mr" },
            { value: "mrs", label: "Mrs" },
            { value: "miss", label: "Miss" },
          ],
        },
        {
          type: "text",
          name: "firstName",
          label: "First name",
        },
        {
          type: "text",
          name: "lastName",
          label: "Last name",
        },
        {
          type: "array",
          name: "addresses",
          highlight: true,
          components: [
            {
              type: "text",
              name: "address1",
              label: "Address 1",
            },
            {
              type: "text",
              name: "address2",
              label: "Address 2",
            },
            {
              type: "text",
              name: "address3",
              label: "Address 3",
            },
            {
              type: "text",
              name: "postcode",
              label: "Postcode",
            },
          ],
        },
        {
          type: "checkbox",
          name: "showAdditionalField",
          label: "Show additional field",
        },
        {
          type: "text",
          name: "additionalField",
          label: "Additional field",
        },
        {
          type: "checkbox",
          name: "acceptedTerms",
          label: "Agree to T&Cs",
        },
      ],
    },
  ],
  validationSchema: personalInfoValidationSchema,
  visibilitySchema: personalInfoVisibilitySchema,
};

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
          margin: "0 auto",
          gap: "1rem",
          "& .MuiFormControl-root": {
            maxWidth: "400px",
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
