import React, { useState } from "react";

const Form = ({ todos, setTodos }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: todoText, completed: false, id: Math.random() * 1000 },
    ]);
    setTodoText("");
  };

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="todo-button" type="submit" onClick={handleSubmit}>
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
