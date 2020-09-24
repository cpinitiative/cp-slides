/** @jsx jsx */
import { jsx } from 'theme-ui'
import { CSTheme } from "./custom-codesurfer-theme";
import { CodeSurfer, CodeSurferColumns as CSColumns, Step } from "code-surfer";
import React from "react"

export default function CodeSurferColumns(props) {
  return (
    <CSColumns {...props} themes={[CSTheme, CSTheme]} sizes={[1,1]} />
  );
}