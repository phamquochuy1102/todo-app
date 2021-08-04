import React from "react";
import "./App.css";
import Navbar from "./app/Components/Navbar/Navbar";
import TodosList from "./app/Components/TodosList/TodosList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TodosList />
    </div>
  );
}

export default App;
