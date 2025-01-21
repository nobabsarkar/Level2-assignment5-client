import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./features/RegisterSlice";
import { baseApi } from "./api/baseApi";
import loginReducer from "./features/LoginSlice";
import meetingRoomRequcer from "./features/MeetingRoom";
// import logOutReducer from "./features/";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./api/auth/authSlice";

const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
    register: registerReducer,
    login: loginReducer,
    meetingRoom: meetingRoomRequcer,
    // logOut:logOutReducer,
  },
  middleware: (getDefaultMiddlewere) =>
    getDefaultMiddlewere({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
