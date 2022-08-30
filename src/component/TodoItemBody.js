import React from "react";

function TodoItemBody({ title, body }) {
  return (
    <div className="todo-item_body">
      <h3 className="todo-item_title">{title}</h3>
      <p className="todo-item_desc">{body}</p>
    </div>
  );
}

export default TodoItemBody;
