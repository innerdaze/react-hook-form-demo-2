import * as yup from "yup";
import { PersonalInfoFieldValues } from "./personalInfoValidationSchema";

const visibilitySchema = yup.object<PersonalInfoFieldValues>({
  additionalField: yup.string().when("showAdditionalField", {
    is: true,
    then: (schema) => schema.test(() => true),
    otherwise: (schema) => schema.test(() => false),
  }),
});

export default visibilitySchema;
