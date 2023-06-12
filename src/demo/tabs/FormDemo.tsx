import React from "react";
import DemoFormContainer from "../components/DemoFormContainer";
import PersonalInfoForm from "../forms/PersonalInfo/PersonalInfoForm";

const FormDemo = () => {
  return (
    <DemoFormContainer>
      <PersonalInfoForm />
    </DemoFormContainer>
  );
};

export default React.memo(FormDemo);
