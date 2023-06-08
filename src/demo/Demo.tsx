import React, { useCallback } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import ReactJson from "react-json-view";

import PersonalInfoForm from "../forms/PersonalInfo/PersonalInfoForm";
import PersonalInfoSchemaForm from "../forms/PersonalInfo/PersonalInfoSchemaForm";
import TabPanel from "./TabPanel";
import personalInfoFormSchema from "../forms/PersonalInfo/personalInfoFormSchema";

const Demo = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    },
    []
  );

  return (
    <Box display="flex" flexDirection="column" alignItems="stretch">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab id="0" label="Form" />
          <Tab id="1" label="Schema Form" />
        </Tabs>
      </Box>
      <Box py={"4rem"}>
        <TabPanel
          value={value}
          index={0}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="h2" mb={4} align="center">
            Form
          </Typography>
          <PersonalInfoForm />
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="h2" mb={4} align="center">
            Schema Form
          </Typography>
          <Box mb={"2rem"} width="100%">
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
                <ReactJson
                  src={JSON.parse(JSON.stringify(personalInfoFormSchema))}
                  theme="monokai"
                  collapsed={1}
                  style={{ flex: 1 }}
                />
              </AccordionDetails>
            </Accordion>
          </Box>
          <PersonalInfoSchemaForm />
        </TabPanel>
      </Box>
    </Box>
  );
};

//   <Typography component="pre" fontFamily={"monospace"}>
//     {JSON.stringify(personalInfoFormSchema, null, "  ")}
//   </Typography>
export default Demo;
