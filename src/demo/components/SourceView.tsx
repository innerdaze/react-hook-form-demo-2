import React from "react";
import { Highlight } from "prism-react-renderer";
import { Box } from "@mui/material";

export interface SourceViewProps {
  src: string;
}

const SourceView = ({ src }: SourceViewProps) => {
  return (
    <Highlight code={src} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box px={4} flex={1} display="flex" width="100%" overflow="hidden">
          <pre
            style={{
              ...style,
              overflow: "auto",
              width: "100%",
              margin: 0,
            }}
          >
            {tokens.map((line, i) => {
              const indentLength =
                String(tokens.length - 1).length - String(i + 1).length + 1;

              return (
                <div key={i} {...getLineProps({ line })}>
                  <span
                    style={{
                      userSelect: "none",
                      borderRight: "1px solid grey",
                      display: "inline-flex",
                      marginRight: "0.675rem",
                    }}
                  >
                    {`${Array(indentLength).fill(" ").join("")}${i + 1} `}
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              );
            })}
          </pre>
        </Box>
      )}
    </Highlight>
  );
};

export default SourceView;
