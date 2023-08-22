import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from '../../helpers/baseQuery';

type Notification = {
  id: number;
  title: string;
  description: string;
  created: string;
}


export const notificationsApi = createApi({
  reducerPath: "notificationsApi",
  baseQuery: baseQuery('/'),
  endpoints: (builder) => ({
    getNotifications: builder.query<Notification[], void>({
      query: () => "notifications",
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationsApi;
