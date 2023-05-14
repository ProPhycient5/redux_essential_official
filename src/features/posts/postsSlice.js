import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "This is the coolest thing",
    date: sub(new Date(), {minutes: 10}).toISOString()
  },
  {
    id: "2",
    title: "Frontend Architecture",
    content: "One of the important stuff every Frontend dev should learn",
    date: sub(new Date(), {minutes: 5}).toISOString()
  },
];
//although it seems like we are mutating the state here,
// but underneath the hood immerJS updates the state in immutable manner.
//immerJS is active inside createSlice() func.

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: { id: nanoid(), title, content, userId, date: new Date().toISOString() },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions; //this is action creator func

export default postsSlice.reducer;
