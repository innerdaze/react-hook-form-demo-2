import { Box } from "@mui/material";
import React from "react";

interface DemoFormContainerProps {
  children: React.ReactNode;
}

const DemoFormContainer = ({ children }: DemoFormContainerProps) => {
  return (
    <Box
      px={2}
      pb={4}
      pt={{ xs: 4, sm: 0 }}
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

export default DemoFormContainer;
