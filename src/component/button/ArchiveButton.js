import React from "react";

function ArchiveTodoBtn({ id, onArchive }) {
  return (
    <button className="todo_item_archive" onClick={() => onArchive(id)}>
      Archive
    </button>
  );
}

export default ArchiveTodoBtn;
