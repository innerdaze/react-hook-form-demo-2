import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
} from "@mui/material";

import ReactJson from "react-json-view";
import personalInfoFormSchema from "../../forms/PersonalInfo/personalInfoFormSchema";
import PersonalInfoSchemaForm from "../../forms/PersonalInfo/PersonalInfoSchemaForm";

const ReactJsonViewer = ReactJson as React.FC<
  React.ComponentProps<typeof ReactJson>
>;

const SchemaFormDemo = () => {
  return (
    <>
      <Box pb={4} width="100%">
        <Accordion sx={{ background: "transparent", boxShadow: "none" }}>
          <AccordionSummary component={Button} sx={{ margin: "0 auto" }}>
            Show Schema
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "rgb(39, 40, 34)",
              marginTop: "2rem",
              borderRadius: "4px",
            }}
          >
            <ReactJsonViewer
              src={JSON.parse(JSON.stringify(personalInfoFormSchema))}
              theme="monokai"
              collapsed={1}
              style={{ flex: 1 }}
            />
          </AccordionDetails>
        </Accordion>
      </Box>
      <PersonalInfoSchemaForm />
    </>
  );
};

export default SchemaFormDemo;
