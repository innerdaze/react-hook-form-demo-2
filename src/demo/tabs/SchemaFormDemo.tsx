import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";

import ReactJson from "react-json-view";
import personalInfoFormSchema from "../forms/PersonalInfo/schemas/personalInfoFormSchema";
import PersonalInfoSchemaForm from "../forms/PersonalInfo/PersonalInfoSchemaForm";
import DemoFormContainer from "../components/DemoFormContainer";

const ReactJsonViewer = ReactJson as React.FC<
  React.ComponentProps<typeof ReactJson>
>;

const SchemaFormDemo = () => {
  return (
    <>
      <DemoFormContainer>
        <Accordion
          sx={{
            background: "transparent",
            boxShadow: "none",
            mb: 4,
            width: "inherit",
          }}
        >
          <AccordionSummary component={Button} sx={{ margin: "0 auto" }}>
            Show Schema
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "rgb(30, 30, 30)",
              marginTop: "2rem",
              borderRadius: "4px",
              mb: 4,
            }}
          >
            <ReactJsonViewer
              src={JSON.parse(JSON.stringify(personalInfoFormSchema))}
              theme="monokai"
              collapsed={1}
              style={{
                flex: 1,
                backgroundColor: "rgb(30, 30, 30)",
                overflow: "auto",
              }}
            />
          </AccordionDetails>
        </Accordion>
        <PersonalInfoSchemaForm />
      </DemoFormContainer>
    </>
  );
};

export default React.memo(SchemaFormDemo);
