import React from "react";
import DeleteTodoBtn from "./DeleteButton";
import ArchiveTodoBtn from "./ArchiveButton";

function TodoBtn({ id, onDelete, onArchive }) {
  return (
    <div className="todo-btn_box">
      <div className="archive_box">
        <ArchiveTodoBtn id={id} onArchive={onArchive} />
      </div>
      <div className="delete_box">
        <DeleteTodoBtn id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default TodoBtn;
