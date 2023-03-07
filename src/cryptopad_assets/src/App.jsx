import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateNote";
import { cryptopad } from "../../declarations/cryptopad";

function App() {
  const [notes, setNotes] = useState([]);

 async function addNote(newNote) {
    setNotes(prevNotes => {
      cryptopad.createNote(newNote.title, newNote.content);
      return [newNote,...prevNotes];
    });
  }

  useEffect(()=>{
    fetchData();
  },[]);

  async function fetchData(){
    try{
      const notesArray = await cryptopad.readNotes();
      setNotes(notesArray);
    }
    catch(err){
      console.log("My error", err);
    }
  }

  function deleteNote(id) {
    cryptopad.removeNote(id);
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
