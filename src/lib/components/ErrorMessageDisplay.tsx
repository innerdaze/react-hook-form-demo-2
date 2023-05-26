import React from "react";
import { Typography } from "@mui/material";
import type { MultipleFieldErrors } from "react-hook-form";
import useFormApi from "../hooks/useFormApi";

export interface ErrorMessageDisplayProps {
  message: string;
  messages: MultipleFieldErrors;
}

const ErrorMessageDisplay = React.memo(function ErrorMessageDisplay({
  messages,
  message,
}: ErrorMessageDisplayProps) {
  const { errorMode } = useFormApi();

  return errorMode === "all" ? (
    <Typography component="ul" fontSize="inherit">
      {Object.values(messages).map((message) => (
        <Typography component="li" fontSize="inherit">
          {message}
        </Typography>
      ))}
    </Typography>
  ) : (
    <Typography component="span" fontSize="inherit">
      {message}
    </Typography>
  );
});

export interface RenderErrorMessageProps {
  message: string;
  messages?: MultipleFieldErrors;
}

export const RenderErrorMessage = function RenderErrorMessage({
  message,
  messages,
}: RenderErrorMessageProps) {
  console.log(message, messages);

  let _message: string | undefined = message;

  if (!message && messages && Object.keys(messages)?.length) {
    _message = Object.values(messages)[0]?.toString();
  }

  if (!_message || !messages) {
    return null;
  }

  return <ErrorMessageDisplay message={_message} messages={messages} />;
};

export default ErrorMessageDisplay;
