declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display1: true;
    subtitle3: true;
  }
}

export const typography = {
  fontFamily: [
    '"Noto Sans"',
    '"Ubuntu"',
    '"Helvetica Neue"',
    "sans-serif",
  ].join(","),
  display1: {
    fontFamily: "Noto Sans",
    fontWeight: 300,
    fontSize: "56px",
    lineHeight: "64px",
    letterSpacing: "-0.5px",
  },
  subtitle3: {
    fontFamily: "Noto Sans",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
  },
};
