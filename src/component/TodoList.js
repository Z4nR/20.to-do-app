import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete }) {
  return (
    <div className="todo_list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} onDelete={onDelete} {...todo} />
      ))}
    </div>
  );
}

export default TodoList;
