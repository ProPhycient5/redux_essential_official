import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Learning Redux Toolkit",
    content: "This is the coolest thing",
  },
  {
    id: 2,
    title: "Frontend Architecture",
    content: "One of the important stuff every Frontend dev should learn",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer