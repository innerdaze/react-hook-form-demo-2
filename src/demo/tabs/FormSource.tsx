import { Box } from "@mui/material";
import React from "react";
import PersonalInfoForm from "../../forms/PersonalInfo/PersonalInfoForm?raw";

const FormSource = () => {
  return (
    <Box component="pre" bgcolor="rgb(39, 40, 34)" borderRadius="4px" p={4}>
      {PersonalInfoForm.toString()}
    </Box>
  );
};

export default FormSource;
