import { configureStore } from '@reduxjs/toolkit';
import { authApi } from 'api/auth/auth';
import rootReducer from './reducers';
import {notificationsApi} from '../api/notification/notifications';
// ...

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authApi.middleware, notificationsApi.middleware]),
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
