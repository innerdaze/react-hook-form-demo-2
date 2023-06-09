import { Box, Typography } from "@mui/material";
import { lastIndexOf } from "lodash";
import React from "react";
import TabPanel from "./TabPanel";

export interface DemoTabPanelProps {
  index: number;
  value: number;
  title: string;
  children: React.ReactNode;
}

const DemoTabPanel = ({ index, value, title, children }: DemoTabPanelProps) => {
  return (
    <TabPanel value={value} index={index} pt={6}>
      <Typography variant="h2" mb={4} align="center">
        {title}
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
      >
        {children}
      </Box>
    </TabPanel>
  );
};

export default DemoTabPanel;
