import React from "react";

const Todo = ({ text, todo, completeHandler, deleteHandler }) => {
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={() => completeHandler(todo.id)}>
        {todo.completed ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-check"></i>
        )}
      </button>
      <button className="trash-btn" onClick={() => deleteHandler(todo.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
