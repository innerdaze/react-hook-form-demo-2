import * as yup from "yup";

export interface Address {
  address1: string;
  address2?: string;
  address3?: string;
  postcode: string;
}

const addressSchema = yup.object({
  address1: yup.string().required(),
  address2: yup.string(),
  address3: yup.string(),
  postcode: yup.string().required(),
});

const schema = yup
  .object({
    title: yup
      .mixed<"mr" | "mrs" | "miss" | "">()
      .required()
      .oneOf(["mr", "mrs", "miss"]),
    firstName: yup
      .string()
      .min(2, "Must contain at least 2 letters")
      .required()
      .matches(/^[a-zA-Z ]+$/, "Cannot contain numbers"),
    lastName: yup
      .string()
      .min(2, "Must contain at least 2 letters")
      .required("Please enter a last name")
      .matches(/^[a-zA-Z ]+$/, "Cannot contain numbers"),
    acceptedTerms: yup
      .boolean()
      .required("Must agree to terms")
      .isTrue("Must agree to terms"),
    showAdditionalField: yup.boolean(),
    additionalField: yup.string().when("showAdditionalField", {
      is: true,
      then: (schema) => schema.required(),
    }),
    addresses: yup.array(addressSchema.required()),
  })
  .strict();

export type PersonalInfoFieldValues = yup.InferType<typeof schema>;

export default schema;
