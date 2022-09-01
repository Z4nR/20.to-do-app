import React from "react";
import TodoBtn from "./button/ButtonBody";
import TodoItemBody from "./TodoItemBody";

function TodoItem({ id, title, createAt, body, onDelete }) {
  return (
    <div className="todo-item">
      <TodoItemBody title={title} createAt={createAt} body={body} />
      <TodoBtn id={id} onDelete={onDelete} />
    </div>
  );
}

export default TodoItem;
