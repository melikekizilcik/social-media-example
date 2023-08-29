import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    appendTodo: (state, action) => {
      state.posts = [...state.todos, action.payload];
    },
  },
});

export const { setPosts, appendTodo } = posts.actions;
export default posts.reducer;
