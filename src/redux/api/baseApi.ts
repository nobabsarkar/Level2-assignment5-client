import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://asssignment-server-5.vercel.app/api",
    credentials: "include",
  }),
  endpoints: () => ({}),
});
