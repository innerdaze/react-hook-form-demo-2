import React, { useCallback } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Button } from "@mui/material";
import FieldSet from "../../../lib/components/FieldSet";
import type { Address, PersonalInfoFieldValues } from "../personalInfoSchema";
import Field from "../../../lib/components/Field";

export interface AddressFieldArrayProps {
  name: "addresses";
}

const AddressFieldArray = ({ name }: AddressFieldArrayProps) => {
  const { control, formState } = useFormContext<PersonalInfoFieldValues>();
  const { fields, append, prepend, remove, swap, move, insert } =
    useFieldArray<PersonalInfoFieldValues>({
      control, // control props comes from useForm (optional: if you are using FormContext)
      name, // unique name for your Field Array
    });

  const handleAddClick = useCallback(() => {
    append(formState.defaultValues?.addresses?.[0] as Address);
  }, []);

  return (
    <>
      {fields.map((field, index) => (
        <React.Fragment key={field.id}>
          <FieldSet highlight>
            <Field name={`${name}.${index}.address1`} label="Address 1" />
            <Field name={`${name}.${index}.address2`} label="Address 2" />
            <Field name={`${name}.${index}.address3`} label="Address 3" />
            <Field name={`${name}.${index}.postcode`} label="Postcode" />
          </FieldSet>

          {index !== 0 && (
            <Button size="small" onClick={() => remove(index)}>
              - remove address
            </Button>
          )}

          {fields.length - 1 === index && (
            <Button size="small" onClick={handleAddClick}>
              + Add previous address
            </Button>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default React.memo(AddressFieldArray);
