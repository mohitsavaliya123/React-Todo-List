import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  const deleteHandler = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  const completeHandler = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            todo={todo}
            deleteHandler={deleteHandler}
            completeHandler={completeHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
