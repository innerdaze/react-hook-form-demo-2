import { FieldValues } from "react-hook-form";
import useRevalidateOnChange, {
  UseRevalidateOnDependencyChangeProps,
} from "../../hooks/useRevalidateOnDependencyChange";

export interface RevalidateOnChangeProps<T extends FieldValues>
  extends UseRevalidateOnDependencyChangeProps<T> {}

const RevalidateOnDependencyChange = <T extends FieldValues>({
  name,
  watch,
}: RevalidateOnChangeProps<T>) => {
  useRevalidateOnChange<T>({
    name,
    watch,
  });

  return null;
};

export default RevalidateOnDependencyChange;
