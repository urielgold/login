import { createSelector } from '@reduxjs/toolkit';
import { UserState } from './user.interface';

const selectUser = (state: { user: UserState; }) => state.user;

export const selectAccessToken = createSelector(
  selectUser,
  (user) => user.accessToken
);
