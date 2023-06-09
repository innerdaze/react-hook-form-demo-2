import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Box } from "@mui/material";

export interface SourceViewProps {
  src: string;
}

const SourceView = ({ src }: SourceViewProps) => {
  return (
    <Highlight code={src} language="tsx" theme={themes.nightOwl}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
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

              const rowIndex = `${Array(indentLength).fill(" ").join("")}${
                i + 1
              } `;

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
                    {rowIndex}
                  </span>
                  {line.map((token, key) => {
                    // Fix issue with JSX rendering
                    const classIndex = token.types.indexOf("maybe-class-name");

                    if (classIndex !== -1) {
                      console.log(token);
                      token.types[classIndex] = "class-name";
                    }

                    return <span key={key} {...getTokenProps({ token })} />;
                  })}
                </div>
              );
            })}
          </pre>
        </Box>
      )}
    </Highlight>
  );
};

export default React.memo(SourceView);
