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
})(({ highlight }) => {
  const fieldsetPadding = highlight ? "1rem" : 0;
  const bgColor = highlight ? "rgba(0,0,0, 0.2)" : undefined;

  return {
    backgroundColor: bgColor,
    padding: fieldsetPadding,
    borderRadius: fieldsetPadding,
    border: 0,
    // margin: `0 0 0 -${fieldsetPadding}`,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    // width: "100%",
    // margin: fieldsetPadding ? `0 -${fieldsetPadding}` : 0,
    width: fieldsetPadding ? "calc(100% + 2rem)" : "100%",
  };
});

export default React.memo(FieldSet);
