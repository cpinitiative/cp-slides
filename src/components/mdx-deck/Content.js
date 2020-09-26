/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"

const Content = props => (
  <div sx={{
    width: "80%",
    margin: "0 auto",
    fontSize: "2rem",
    color: "#CBD5E0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }}>
    {props.children}
  </div>
);

export default Content;