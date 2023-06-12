import { Box, Typography } from "@mui/material";
import React from "react";
import CopyrightFooter from "./CopyrightFooter";
import TabPanel, { TabPanelProps } from "./TabPanel";

export interface DemoTabPanelProps extends TabPanelProps {
  index: number;
  value: number;
  title: string;
  scrollable?: boolean;
  children: React.ReactNode;
}

const DemoTabPanel = ({
  index,
  value,
  title,
  scrollable = true,
  children,
  ...props
}: DemoTabPanelProps) => {
  return (
    <TabPanel
      value={value}
      index={index}
      overflow="hidden"
      display="flex"
      flexDirection="column"
      flex={1}
      {...props}
    >
      <Box
        pt={6}
        pb={4}
        flex={1}
        display="flex"
        flexDirection="column"
        overflow="auto"
      >
        <Typography
          variant="h2"
          mb={4}
          align="center"
          fontSize={["8vw", "8vw", "4.5rem"]}
        >
          {title}
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
          flex={1}
          overflow={scrollable ? "visible" : "hidden"}
        >
          {children}
        </Box>
        <CopyrightFooter />
      </Box>
    </TabPanel>
  );
};

export default React.memo(DemoTabPanel);
