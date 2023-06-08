import React from "react";
import * as yup from "yup";
import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";

import Demo from "./demo/Demo";

yup.setLocale({
  mixed: { required: "This field is required" },
});

const theme = createTheme({
  palette: { mode: "dark" },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          minWidth: 200,
          textAlign: "left",
        },
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "rgb(0, 30, 60)",
            margin: 0,
            display: "flex",
            flexDirection: "column",
            // align: "center",
            // alignItems: "stretch",
            minWidth: "320px",
            minHeight: "100vh",
          },
          "#root": {
            width: "100%",
            padding: "2rem",
          },
          ul: { padding: 0, margin: 0 },
        }}
      />
      <Demo />
    </ThemeProvider>
  );
}
