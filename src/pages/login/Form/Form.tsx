import { Button, Typography } from "@mui/material";
import { useState } from "react";

import { useEmail, useLogin, usePassword } from "./Form.hooks";
import { getErrorProps } from "./utils";

import * as S from "./styled";

export const Form = () => {
  const { email, handleOnEmailChange } = useEmail();
  const { password, hiddenPassword, handleOnPassChange } = usePassword();
  const [error, setError] = useState(false);

  const { handleOnLogin } = useLogin(email, password, setError);

  return (
    <>
      <S.TextFiled
        {...getErrorProps(error)}
        label="Username"
        value={email}
        onChange={handleOnEmailChange}
      />
      <S.TextFiled
        {...getErrorProps(error)}
        label="Password"
        value={hiddenPassword}
        onChange={handleOnPassChange}
        helperText={error && "The email or password you entered don’t match"}
      />
      <Button sx={{ color: "secondary.light", padding: "4px", width: "163px" }}>
        <Typography variant="subtitle3">Forgot your password?</Typography>
      </Button>
      <S.LoginButton fullWidth variant="contained" onClick={handleOnLogin}>
        Log in
      </S.LoginButton>
    </>
  );
};
