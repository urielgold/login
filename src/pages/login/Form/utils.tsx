import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { InputAdornment } from "@mui/material";

export const getErrorProps = (error: boolean) =>
  error
    ? {
        error: true,
        InputProps: {
          endAdornment: (
            <InputAdornment position="end">
              <ErrorOutlineIcon color="error" />
            </InputAdornment>
          ),
        },
      }
    : {};
