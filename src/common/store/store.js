import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/auth";
import posts from "./reducers/posts";

const store = configureStore({
  reducer: {
    auth: auth,
    posts,
  },
});

export default store;
