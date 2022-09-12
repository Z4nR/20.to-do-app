import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import NoteDetail from "../component/detail/NoteDetail";
import { deleteNote, getNote } from "../utils/data";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  function onDetailDeleteHandler(id) {
    deleteNote(id);
    navigate("/");
  }

  return <DetailPage id={id} onDelete={onDetailDeleteHandler} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    if (this.state.note === null) {
      return <p>Note not found!!</p>;
    }

    return (
      <section>
        <NoteDetail {...this.state.note} onDelete={deleteNote} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
