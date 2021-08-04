import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Store/features/todosSlice";
import "./AddTodoForm.css";
const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(title));
    setTitle("");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What need to be done next...?"
          value={title}
          onChange={handleChangeTitle}
        />
        <input type="submit" value="Add here" />
      </form>
    </div>
  );
};

export default AddTodoForm;
