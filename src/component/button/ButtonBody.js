import React from "react";
import DeleteTodoBtn from "./DeleteButton";

function TodoBtn({ id, onDelete }) {
  return (
    <div className="todo-btn_box">
      <div className="delete_box">
        <DeleteTodoBtn id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default TodoBtn;
