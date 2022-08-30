import React from "react";
import TodoBtn from "./button/ButtonBody";
import TodoItemBody from "./TodoItemBody";

function TodoItem({ title, body, onDelete, onArchive }) {
  return (
    <div className="todo-item">
      <TodoItemBody title={title} body={body} />
      <TodoBtn onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

export default TodoItem;
