import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  meeting: {
    image: "",
    roomName: "",
    capacity: "",
    PricePerSlot: "",
  },
};

const meetingRoomSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    meetingRoom: (state, action) => {
      state.meeting = { ...action.payload };
    },
    logOut: (state) => {
      state.user = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { meetingRoom, logOut, setUser } = meetingRoomSlice.actions;

export default meetingRoomSlice.reducer;
