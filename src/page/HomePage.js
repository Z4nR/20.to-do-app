import React from "react";
import NoteList from "../component/NoteList";
import { deleteNote, getNotes } from "../utils/data";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getNotes(),
    };

    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
  }

  onDeleteNoteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        contacts: getNotes(),
      };
    });
  }

  render() {
    return (
      <section>
        <h3>List of Your Note</h3>
        <NoteList
          notes={this.state.notes}
          onDelete={this.onDeleteNoteHandler}
        />
      </section>
    );
  }
}

export default HomePage;
