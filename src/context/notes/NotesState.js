import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const [notes, setNotes] = useState([]);

  //get all notes
  const getNotes = async () => {
    //

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1ZGI1MjE3MTc2NjYzMWI1ODBlNDZiIn0sImlhdCI6MTcxNzQ3ODQwNn0.C3W6MfvCaOQ2nwVXWuFrrDy-n1S06loopuMduoQ87EQ",
      },
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //add a note
  const addNote = async (title, description, tag) => {
    //

   const response= await fetch(`${host}/api/notes/addnotes`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1ZGI1MjE3MTc2NjYzMWI1ODBlNDZiIn0sImlhdCI6MTcxNzQ3ODQwNn0.C3W6MfvCaOQ2nwVXWuFrrDy-n1S06loopuMduoQ87EQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });
const json=await response.json();
    const note = json;
    setNotes(notes.concat(note));
  };

  // Delete a note

  const deleteNote = async (id) => {
    //api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1ZGI1MjE3MTc2NjYzMWI1ODBlNDZiIn0sImlhdCI6MTcxNzQ3ODQwNn0.C3W6MfvCaOQ2nwVXWuFrrDy-n1S06loopuMduoQ87EQ",
      },
    });
    const json = response.json();
    console.log(json);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a note

  const editNote = async (id, title, description, tag) => {
    //api calls
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1ZGI1MjE3MTc2NjYzMWI1ODBlNDZiIn0sImlhdCI6MTcxNzQ3ODQwNn0.C3W6MfvCaOQ2nwVXWuFrrDy-n1S06loopuMduoQ87EQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log(json);

    let newNotes=JSON.parse(JSON.stringify(notes))
    //logic to edit jote
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
      break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <noteContext.Provider
      value={{ notes, deleteNote, addNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
