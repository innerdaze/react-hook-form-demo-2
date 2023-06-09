import React from "react";
import { Box, BoxProps, styled } from "@mui/material";

export interface FieldSetProps extends BoxProps<"fieldset"> {
  highlight?: boolean;
}

const FieldSetBase = (props: FieldSetProps) => (
  <Box {...props} component="fieldset" />
);

const FieldSet = styled(FieldSetBase, {
  shouldForwardProp: (prop) => prop !== "highlight",
})(({ theme, highlight }) => {
  const fieldsetPadding = highlight ? "1rem" : 0;
  const bgColor = highlight ? "rgba(0,0,0, 0.2)" : undefined;

  return {
    backgroundColor: bgColor,
    padding: fieldsetPadding,
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0,
    },
    [theme.breakpoints.up("sm")]: {
      borderRadius: fieldsetPadding,
    },
    border: 0,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: fieldsetPadding ? "calc(100% + 2rem)" : "100%",
  };
});

export default React.memo(FieldSet);
