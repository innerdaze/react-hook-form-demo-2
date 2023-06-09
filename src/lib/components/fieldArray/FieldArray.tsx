import { Button } from "@mui/material";
import React from "react";
import type { ArrayPath, FieldArrayWithId, FieldValues } from "react-hook-form";
import useFieldArrayComponent from "../../hooks/useFieldArrayComponent";
import FieldSet from "../FieldSet";

export interface FieldArrayRenderProps<TFieldValues extends FieldValues> {
  field: FieldArrayWithId<TFieldValues, ArrayPath<TFieldValues>, "id">;
  name: ArrayPath<TFieldValues>;
  index: number;
  handleAddClick: () => void;
  handleRemoveClick: (index: number) => void;
}

export type FieldArrayRenderFn<TFieldValues extends FieldValues> = (
  props: FieldArrayRenderProps<TFieldValues>
) => React.ReactNode;

export interface FieldArrayProps<
  TFieldValues extends FieldValues = FieldValues
> {
  name: ArrayPath<TFieldValues>;
  highlight?: boolean;
  render: FieldArrayRenderFn<TFieldValues>;
}

const FieldArray = <TFieldValues extends FieldValues>({
  name,
  highlight = false,
  render,
}: FieldArrayProps<TFieldValues>) => {
  const { fields, handleAddClick, handleRemoveClick } =
    useFieldArrayComponent<TFieldValues>({ name });

  return (
    <>
      {fields.map((field, index) => (
        <React.Fragment key={field.id}>
          <FieldSet highlight={highlight}>
            {render({ name, field, index, handleAddClick, handleRemoveClick })}
          </FieldSet>

          {index !== 0 && (
            <Button size="small" onClick={handleRemoveClick(index)}>
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

export default React.memo(FieldArray);
