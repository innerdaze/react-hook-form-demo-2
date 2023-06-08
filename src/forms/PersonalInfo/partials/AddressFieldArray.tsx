import React, { useCallback } from "react";
import Field from "../../../lib/components/Field";
import FieldArray from "../../../lib/components/fieldArray/FieldArray";

export interface AddressFieldArrayProps {
  name: "addresses";
}

const AddressFieldArray = ({ name }: AddressFieldArrayProps) => {
  return (
    <>
      <FieldArray
        highlight
        name={name}
        render={useCallback(
          ({ name, index }) => (
            <>
              <Field
                type="text"
                name={`${name}.${index}.address1`}
                label="Address 1"
              />
              <Field
                type="text"
                name={`${name}.${index}.address2`}
                label="Address 2"
              />
              <Field
                type="text"
                name={`${name}.${index}.address3`}
                label="Address 3"
              />
              <Field
                type="text"
                name={`${name}.${index}.postcode`}
                label="Postcode"
              />
            </>
          ),
          []
        )}
      />
    </>
  );
};

export default React.memo(AddressFieldArray);
