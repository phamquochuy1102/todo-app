import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  getTodos,
  setCompleted,
} from "../../Store/features/todosSlice";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import "./TodosList.css";

const TodosList = () => {
  const todos = useSelector((state) => state.todos.allTodos);
  const dispatch = useDispatch();
  const handleTick = (id) => {
    dispatch(setCompleted(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <div className="todos">
      <AddTodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>
              <input
                type="checkbox"
                onClick={() => handleTick(todo.id)}
                checked={todo.completed}
              />
              <span className={todo.completed ? "completed" : null}>
                {todo.title}
              </span>
            </div>
            <button className="btn" onClick={() => handleDelete(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
