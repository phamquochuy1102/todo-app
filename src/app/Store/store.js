import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todosSlice";

//store
const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
