import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Sawan Kumar Das" },
  { id: "1", name: "Quamruz Khan" },
  { id: "2", name: "Vedant Pandey" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
