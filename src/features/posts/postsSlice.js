import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "This is the coolest thing",
  },
  {
    id: "2",
    title: "Frontend Architecture",
    content: "One of the important stuff every Frontend dev should learn",
  },
];
//although it seems like we are mutating the state here,
// but underneath the hood immerJS updates the state in immutable manner.
//immerJS is active inside createSlice() func.

const postsSlice = createSlice({
  name: "posts",
  initialState,
  // reducers: {
  //   postAdded(state, action) {
  //     state.push(action.payload);
  //   },
  // },
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: { id: nanoid(), title, content },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions; //this is action creator func

export default postsSlice.reducer;
