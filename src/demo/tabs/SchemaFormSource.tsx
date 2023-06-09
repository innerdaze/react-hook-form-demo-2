import { Box } from "@mui/material";
import React from "react";
import PersonalInfoSchemaForm from "../../forms/PersonalInfo/PersonalInfoSchemaForm?raw";

const SchemaFormSource = () => {
  return (
    <Box component="pre" bgcolor="rgb(39, 40, 34)" borderRadius="4px" p={4}>
      {PersonalInfoSchemaForm.toString()}
    </Box>
  );
};

export default SchemaFormSource;
