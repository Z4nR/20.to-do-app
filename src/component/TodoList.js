import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete }) {
  return (
    <div className="todo_list">
      {todos.map((todo, index) => (
        <TodoItem key={index} id={todo.id} onDelete={onDelete} {...todo} />
      ))}
    </div>
  );
}

export default TodoList;
