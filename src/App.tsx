import React from "react";
import "./App.css";
import * as yup from "yup";
import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  Typography,
} from "@mui/material";

import PersonalInfoForm from "./forms/PersonalInfo/PersonalInfoForm";

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
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "2rem",
          },
          ul: { padding: 0, margin: 0 },
        }}
      />
      <Typography variant="h2" mb={8} align="center">
        React Hook Form Demo
      </Typography>
      <PersonalInfoForm />
    </ThemeProvider>
  );
}
