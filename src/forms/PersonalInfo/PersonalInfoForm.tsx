import React, { useCallback } from "react";
import { SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { Button } from "@mui/material";

import Form from "../../lib/components/Form";
import AddressFieldArray from "./partials/AddressFieldArray";
import visibilitySchema from "./personalInfoVisibilitySchema";
import validationSchema, {
  PersonalInfoFieldValues,
} from "./personalInfoValidationSchema";
import Field from "../../lib/components/Field";
import { defaultComponentMap } from "../../lib/components/fields/componentMap";

const PersonalInfoForm = () => {
  const onSubmit = useCallback<SubmitHandler<PersonalInfoFieldValues>>(
    (values) => {
      console.log("values:", values);
    },
    []
  );

  const onError = useCallback<SubmitErrorHandler<PersonalInfoFieldValues>>(
    (errors) => {
      console.log("errors:", errors);
    },
    []
  );

  return (
    <Form
      validationSchema={validationSchema}
      defaultValues={{
        /* @ts-ignore */
        acceptedTerms: false,
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
      }}
      componentMap={defaultComponentMap}
      errorMode="first"
      visibilitySchema={visibilitySchema}
      onSubmit={onSubmit}
      onError={onError}
      formProps={{
        sx: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "400px",
          width: "100%",
          gap: "1rem",
          "& .MuiFormControl-root": {
            maxWidth: "400px",
            width: "100%",
          },
        },
      }}
    >
      <Field
        type="select"
        options={[
          { value: "mr", label: "Mr" },
          { value: "mrs", label: "Mrs" },
          { value: "miss", label: "Miss" },
        ]}
        name="title"
        label="Title"
      />

      <Field type="text" name="firstName" label="First name" />

      <Field type="text" name="lastName" label="Last name" />

      <AddressFieldArray name="addresses" />

      <Field
        type="checkbox"
        name="showAdditionalField"
        label="Show additional field"
      />

      <Field type="text" name="additionalField" label="Additional field" />

      <Field type="checkbox" name="acceptedTerms" label="Agree to T&amp;Cs" />

      <Button size="large" type="submit">
        Submit
      </Button>

      {/* <ErrorMessage
        name="submitError"
        render={({ message }) => <p>{message}</p>}
      /> */}
    </Form>
  );
};

export default React.memo(PersonalInfoForm);
