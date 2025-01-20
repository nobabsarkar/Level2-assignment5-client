import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./features/RegisterSlice";
import { baseApi } from "./api/baseApi";
import loginReducer from "./features/LoginSlice";
import meetingRoomRequcer from "./features/MeetingRoom";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    register: registerReducer,
    login: loginReducer,
    meetingRoom: meetingRoomRequcer,
  },
  middleware: (getDefaultMiddlewere) =>
    getDefaultMiddlewere().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
