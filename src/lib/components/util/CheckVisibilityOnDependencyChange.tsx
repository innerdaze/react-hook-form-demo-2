import React from "react";
import { FieldValues } from "react-hook-form";
import useCheckVisibilityOnDependencyChange, {
  UseCheckVisibilityOnDependencyChangeProps,
} from "../../hooks/useCheckVisibilityOnDependencyChange";

export interface CheckVisibilityOnDependencyChangeProps<T extends FieldValues>
  extends UseCheckVisibilityOnDependencyChangeProps<T> {
  children: React.ReactNode;
}

const CheckVisibilityOnDependencyChange = <T extends FieldValues>({
  name,
  children,
}: CheckVisibilityOnDependencyChangeProps<T>) => {
  const { visible } = useCheckVisibilityOnDependencyChange<T>({
    name,
  });

  return visible ? <>{children}</> : null;
};

export default CheckVisibilityOnDependencyChange;
