import { Button, TextField as TF } from "@mui/material";
import { styled } from "@mui/system";

export const TextFiled = styled(TF)({
  marginTop: "30px",
  "& .MuiInputBase-root": {
    height: "48px",
  },
});

export const LoginButton = styled(Button)({
  marginTop: "50px",
  height: "40px",
});
