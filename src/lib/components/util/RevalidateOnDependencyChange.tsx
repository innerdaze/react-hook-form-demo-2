import { FieldValues } from "react-hook-form";
import useRevalidateOnDependencyChange, {
  UseRevalidateOnDependencyChangeProps,
} from "../../hooks/useRevalidateOnDependencyChange";

export interface RevalidateOnChangeProps<T extends FieldValues>
  extends UseRevalidateOnDependencyChangeProps<T> {}

const RevalidateOnDependencyChange = <T extends FieldValues>({
  name,
  watch,
}: RevalidateOnChangeProps<T>) => {
  useRevalidateOnDependencyChange<T>({
    name,
    watch,
  });

  return null;
};

export default RevalidateOnDependencyChange;
