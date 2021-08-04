import React from "react";
import { useSelector } from "react-redux";
import "./TodosList.css";

const TodosList = () => {
  const todos = useSelector((state) => state.todos.allTodos);
  return (
    <div className="todos">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>{todo.title}</div>
            <button className="btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
