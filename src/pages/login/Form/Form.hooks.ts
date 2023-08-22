import {ChangeEvent, useCallback, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useLoginMutation } from '../../../api/auth/auth';
import { setUser } from '../../../store/slices/user/userSlice';

export const useLogin = (email: string, pass: string, setError: (val: boolean) => void) => {
  const [login] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnLogin = useCallback(async () => {
    try {
      const res = await login({ email, password: pass }).unwrap();
      dispatch(setUser(res));
      navigate("/");
    } catch {
      setError(true);
    }
  }, [email, pass, login, dispatch, setError, navigate]);

  return { handleOnLogin };
}

export const usePassword = () => {
  const [password, setPassword] = useState("");

  const hiddenPassword = password.replace(/./g, "*");
  const handleOnPassChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  return { password, hiddenPassword, handleOnPassChange };
}

export const useEmail = () => {
  const [email, setEmail] = useState("");
  const handleOnEmailChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  return { email, handleOnEmailChange };
}