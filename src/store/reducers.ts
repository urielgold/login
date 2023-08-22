import { authApi } from 'api/auth/auth';
import userReducer from 'store/slices/user/userSlice';
import { notificationsApi } from '../api/notification/notifications';

const rootReducer = {
  [notificationsApi.reducerPath]: notificationsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  user: userReducer,
};

export default rootReducer;
