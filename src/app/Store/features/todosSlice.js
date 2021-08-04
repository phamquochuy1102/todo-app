import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("todos/todosFetched", async () => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  return res.data;
});

export const addTodo = createAsyncThunk("todos/todosAdded", async (title) => {
  const newTodo = {
    id: nanoid(),
    title,
    completed: false,
  };
  await axios.post("https://jsonplaceholder.typicode.com/todos?", newTodo);
  return newTodo;
});

export const deleteTodo = createAsyncThunk("todos/todosDeleted", async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return id;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
  },
  reducers: {
    setCompleted: {
      reducer(state, action) {
        state.allTodos.map((item) => {
          if (item.id === action.payload) {
            item.completed = !item.completed;
          }
          return item;
        });
      },
      prepare(id) {
        return {
          payload: id,
        };
      },
    },
  },
  extraReducers: {
    [getTodos.pending]: (state, action) => {
      console.log("Fetching data from backend...");
    },
    [getTodos.fulfilled]: (state, action) => {
      console.log("Done");
      state.allTodos = action.payload;
    },
    [getTodos.rejected]: (state, action) => {
      console.log("Fail to get data...");
    },
    [addTodo.fulfilled]: (state, action) => {
      state.allTodos.unshift(action.payload);
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.allTodos = state.allTodos.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

// reducer
const todosReducer = todosSlice.reducer;

export default todosReducer;

export const { setCompleted } = todosSlice.actions;
