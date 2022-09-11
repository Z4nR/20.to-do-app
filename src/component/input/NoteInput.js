import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeNoteHandler = this.onTitleChangeNoteHandler.bind(this);
    this.onBodyNoteHandler = this.onBodyNoteHandler.bind(this);
    this.onSubmitNoteHandler = this.onSubmitNoteHandler.bind(this);
  }

  onTitleChangeNoteHandler(event) {
    const maxChar = 50;
    this.setState(() => {
      return {
        title: event.target.value.slice(0, maxChar),
      };
    });
  }

  onBodyNoteHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitNoteHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitNoteHandler}>
        <input
          className="note-title"
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onTitleChangeNoteHandler}
        />
        <input
          className="note-body"
          type="text"
          placeholder="Description"
          value={this.state.body}
          onChange={this.onBodyNoteHandler}
        />
        <button type="submit">Add Note</button>
      </form>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
