import { vsDark } from "@code-surfer/themes";

console.log(vsDark);

export const CSTheme = {
  ...vsDark,
  colors: {
    ...vsDark.colors,
    background: "#111",
  },
  styles: {
    ...vsDark.styles,
    CodeSurfer: {
      ...vsDark.styles.CodeSurfer,
      code: {
        ...vsDark.styles.CodeSurfer.code,
        backgroundColor: "background",
      },
      pre: {
        ...vsDark.styles.CodeSurfer.pre,
        backgroundColor: "background",
      },
      title: {
        ...vsDark.styles.CodeSurfer.title,
        backgroundColor: "background",
      }
    }
  }
};