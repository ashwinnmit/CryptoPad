import React, { useState } from "react";
import { Add } from "../../../node_modules/@material-ui/icons/index";
import { Fab } from "../../../node_modules/@material-ui/core/index";
import { Zoom } from "../../../node_modules/@material-ui/core/index";


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setExpand(false);
    event.preventDefault();
  }

  function showInputArea(){
    setExpand(true);
  }
  const [expand, setExpand] = useState(false);
  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          onClick={showInputArea}
        />

        {expand ? <div><textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        /> <Zoom in={true}>
          <Fab onClick={submitNote}>
            <Add />
          </Fab>
        </Zoom></div>: null}
        
      </form>
    </div>
  );
}

export default CreateArea;
