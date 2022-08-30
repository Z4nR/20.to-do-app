import React from "react";
import TodoList from "./TodoList";
import { getTodo } from "../utils/data";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: getTodo(),
    };

    this.onDeleteTodoHandler = this.onDeleteTodoHandler.bind(this);
  }

  onDeleteTodoHandler(id) {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState(todos);
  }

  render() {
    return (
      <div className="todo-app">
        <h1>Personal To Do List</h1>
        <TodoList
          todos={this.state.todos}
          onDelete={this.onDeleteTodoHandler}
        />
      </div>
    );
  }
}

export default TodoApp;
