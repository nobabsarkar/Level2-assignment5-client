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
      query: (params) => {
        const queryString = params?.name ? `?name=${params.name}` : "";
        return {
          url: `/bookings/${queryString}`,
          method: "GET",
        };
      },
    }),
    singleMeeting: builder.query({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "GET",
      }),
    }),
    // meeting: builder.query({
    //   query: () => ({
    //     url: "/bookings",
    //     method: "GET",
    //   }),
    // }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useMeetingQuery,
  useSingleMeetingQuery,
} = authApi;
