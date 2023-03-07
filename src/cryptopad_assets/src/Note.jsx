import React from "react";
import { DeleteForeverRounded } from "../../../node_modules/@material-ui/icons/index";

function Note(props){
    function handleClick() {
        props.onDelete(props.id);
      }
    return <div className = "note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
            <DeleteForeverRounded />
        </button>
    </div>
}

export default Note;