import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeTodoHandler = this.onTitleChangeTodoHandler.bind(this);
    this.onBodyTodoHandler = this.onBodyTodoHandler.bind(this);
    this.onSubmitTodoHandler = this.onSubmitTodoHandler.bind(this);
  }

  onTitleChangeTodoHandler(event) {
    const maxChar = 15;
    this.setState(() => {
      return {
        title: event.target.value.slice(0, maxChar),
      };
    });
  }

  onBodyTodoHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitTodoHandler(event) {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }

  render() {
    return (
      <form className="todo-input" onSubmit={this.onSubmitTodoHandler}>
        <input
          className="todo-title"
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onTitleChangeTodoHandler}
        />
        <input
          className="todo-body"
          type="text"
          placeholder="Description"
          value={this.state.body}
          onChange={this.onBodyTodoHandler}
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

export default TodoInput;
