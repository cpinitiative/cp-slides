/** @jsx jsx */
import { jsx, ThemeProvider  } from 'theme-ui'
import React from "react"

const TightParagraphs = props => (
  <ThemeProvider theme={{
    styles: {
      p: {
        margin: 0
      }
    }
  }}>
    <div sx={{
      textAlign: "center",
    }}>
      {props.children}
    </div>
  </ThemeProvider>
);

export default TightParagraphs;