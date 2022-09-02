import React from "react";
import { showDateFormat } from "../utils/data";

function TodoItemBody({ title, createdAt, body }) {
  return (
    <div className="todo-item_body">
      <h3 className="todo-item_title">{title}</h3>
      <p className="todo-item_create">{showDateFormat(createdAt)}</p>
      <p className="todo-item_desc">{body}</p>
    </div>
  );
}

export default TodoItemBody;
