import { createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
  },
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.allTodos.unshift(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
    },
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
    deleteTodo: {
      reducer(state, action) {
        state.allTodos = state.allTodos.filter(
          (item) => item.id !== action.payload
        );
      },
      prepare(id) {
        return {
          payload: id,
        };
      },
    },
    todosFetched(state, action) {
      state.allTodos = action.payload;
    },
  },
});

export const getTodos = () => {
  const getTodosAsync = async (dispatch) => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      dispatch(todosFetched(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  return getTodosAsync;
};

// reducer
const todosReducer = todosSlice.reducer;

export default todosReducer;

export const { addTodo, setCompleted, deleteTodo, todosFetched } =
  todosSlice.actions;
