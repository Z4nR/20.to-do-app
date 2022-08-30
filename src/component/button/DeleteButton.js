import React from "react";

function DeleteTodoBtn({ id, onDelete }) {
  return (
    <button className="todo_item_delete" onClick={() => onDelete(id)}>
      X
    </button>
  );
}

export default DeleteTodoBtn;
