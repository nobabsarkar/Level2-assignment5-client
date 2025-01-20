import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    meeting: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation, useMeetingQuery } = authApi;
