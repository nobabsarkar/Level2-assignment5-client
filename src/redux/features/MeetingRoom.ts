import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  },
});

export const { meetingRoom } = meetingRoomSlice.actions;

export default meetingRoomSlice.reducer;
