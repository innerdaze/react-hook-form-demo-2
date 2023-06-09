import React, { useCallback } from "react";
import { Box, Tab, Tabs } from "@mui/material";

import PersonalInfoForm from "../forms/PersonalInfo/PersonalInfoForm";
import SchemaFormDemo from "./tabs/SchemaFormDemo";
import FormSource from "./tabs/FormSource";
import DemoTabPanel from "./DemoTabPanel";
import SchemaFormSource from "./tabs/SchemaFormSource";

const Demo = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = useCallback(
    (_event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    },
    [setValue]
  );

  return (
    <Box display="flex" flexDirection="column" alignItems="stretch">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab id="0" label="Form" />
          <Tab id="1" label="Form Source" />
          <Tab id="2" label="Schema Form" />
          <Tab id="3" label="Schema Form Source" />
        </Tabs>
      </Box>
      <Box>
        <DemoTabPanel title="Form" index={0} value={value}>
          <PersonalInfoForm />
        </DemoTabPanel>
        <DemoTabPanel title="Form Source" index={1} value={value}>
          <FormSource />
        </DemoTabPanel>
        <DemoTabPanel title="Schema Form" index={2} value={value}>
          <SchemaFormDemo />
        </DemoTabPanel>
        <DemoTabPanel title="Schema Form Source" index={3} value={value}>
          <SchemaFormSource />
        </DemoTabPanel>
      </Box>
    </Box>
  );
};

export default Demo;
