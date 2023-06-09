import { Typography } from "@mui/material";
import React from "react";

const CopyrightFooter = () => {
  return (
    <Typography
      align="center"
      color="rgba(255,255,255,0.6)"
      mt={4}
      pt={4}
      borderTop="1px solid rgba(255,255,255,0.2)"
    >
      Acre Software Ltd &copy; 2023
    </Typography>
  );
};

export default CopyrightFooter;
