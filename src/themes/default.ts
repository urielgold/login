import { createTheme } from "@mui/material/styles";
import { palette } from "./colors";
import { typography } from "./typography";

// A custom theme for this app
const theme = createTheme({
  typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
          scrollBehavior: "smooth",
        },
        body: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          fontFamily: [
            '"Noto Sans"',
            '"Ubuntu"',
            '"Helvetica Neue"',
            "sans-serif",
          ].join(","),
          height: "100%",
          overflowY: "scroll",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        InputLabelProps: {
          shrink: true,
          sx: {
            ml: 2.5,
            color: "secondary.light",
            typography: "body2",
            '&.Mui-focused' : {
              color: palette.primary.light,
            },
            '&.Mui-focused.Mui-error' : {
              color: palette.error.main,
            },
          },
        },
        InputProps: {
          sx: {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: palette.input.outline,
              borderWidth: '1px'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: palette.input.outline,
              borderWidth: '1px'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: palette.primary.light,
              borderWidth: '1px'
            }
          }
        },
      },
      styleOverrides: {
        root: {
          legend: {
            span: {
              display: "none",
            },
          }
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& > .MuiInputLabel-root": {
            position: "unset",
            transform: "unset",
          },
          "& fieldset": {
            top: 0,
          },
          "& label + div fieldset": {
            top: -5,
          },
          '& .MuiFormHelperText-root': {
            marginLeft: 0,
            marginBottom: '10px'
          }
        },
      },
    },
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          textTransform: "none",
          minWidth: "unset",
          "&.MuiButton-contained:hover": {
            backgroundColor: palette.primary.main,
          },
          "&.MuiButton-contained": {
            color: palette.button.text,
          },
          "&.MuiButton-text:hover": {
            backgroundColor: palette.secondary.lighter,
          }
        },
      },
    },
  },
  palette,
});

export default theme;
