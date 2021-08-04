import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [
      {
        id: 1,
        title: "Task 1",
        completed: false,
      },
      {
        id: 2,
        title: "Task 2",
        completed: true,
      },
      {
        id: 3,
        title: "Task 3",
        completed: false,
      },
    ],
  },
});

// reducer
const todosReducer = todosSlice.reducer;

//store
const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
