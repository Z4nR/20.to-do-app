import React from "react";
import TodoBtn from "./button/ButtonBody";
import TodoItemBody from "./TodoItemBody";

function TodoItem({ id, title, body, onDelete, onArchive }) {
  return (
    <div className="todo-item">
      <TodoItemBody title={title} body={body} />
      <TodoBtn id={id} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

export default TodoItem;
