import React from "react";
import PersonalInfoForm from "../../forms/PersonalInfo/PersonalInfoForm?raw";
import SourceView from "../components/SourceView";

const FormSource = () => {
  return <SourceView src={PersonalInfoForm.toString()} />;
};

export default FormSource;
