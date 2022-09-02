import React from "react";
import TodoList from "./TodoList";
import { getTodo } from "../utils/data";
import TodoInput from "./input/TodoInput";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: getTodo(),
    };

    this.onDeleteTodoHandler = this.onDeleteTodoHandler.bind(this);
    this.onAddTodoHandler = this.onAddTodoHandler.bind(this);
  }

  onDeleteTodoHandler(id) {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
  }

  onAddTodoHandler({ title, body }) {
    const time = new Date();
    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos,
          {
            id: time.getMilliseconds(),
            title,
            body,
            createdAt: time.toISOString(),
            archive: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="todo-app">
        <h1>Personal To Do List</h1>
        <h3>Tambah To Do</h3>
        <TodoInput addTodo={this.onAddTodoHandler} />
        <h3>List To Do</h3>
        <TodoList
          todos={this.state.todos}
          onDelete={this.onDeleteTodoHandler}
        />
      </div>
    );
  }
}

export default TodoApp;
