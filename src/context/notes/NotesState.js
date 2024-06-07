import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {

  const notesInitally=[
    {
      "_id": "6661a695f0b1cf36185c6df1e",
      "user": "665db52171766631b580e46b",
      "title": "my title",
      "description": "my desc",
      "tag": "personal",
      "date": "2024-06-06T12:07:49.959Z",
      "__v": 0
    },
    {
      "_id": "6661ac651fc1cc3f15607dce3",
      "user": "665db52171766631b580e46b",
      "title": "my title new",
      "description": "my desc",
      "tag": "personal",
      "date": "2024-06-06T12:32:37.339Z",
      "__v": 0
    },
    {
      "_id": "6661a695f0b1cf31685c6df1e",
      "user": "665db52171766631b580e46b",
      "title": "my title",
      "description": "my desc",
      "tag": "personal",
      "date": "2024-06-06T12:07:49.959Z",
      "__v": 0
    },
    {
      "_id": "6661ac651fc1cc13f5607dce3",
      "user": "665db52171766631b580e46b",
      "title": "my title new",
      "description": "my desc",
      "tag": "personal",
      "date": "2024-06-06T12:32:37.339Z",
      "__v": 0
    },
    {
      "_id": "6661a695f0b1cf3685c6df1e",
      "user": "665db52171766631b580e46b",
      "title": "my title",
      "description": "my desc",
      "tag": "personal",
      "date": "2024-06-06T12:07:49.959Z",
      "__v": 0
    },
    {
      "_id": "6661ac651fc1cc3f5607dce3",
      "user": "665db52171766631b580e46b",
      "title": "my title new",
      "description": "my desc",
      "tag": "personal",
      "date": "2024-06-06T12:32:37.339Z",
      "__v": 0
    },
    {
      "_id": "6661a695f0b1c13685c6df1e",
      "user": "665db52171766631b580e46b",
      "title": "my title",
      "description": "my desc",
      "tag": "personal",
      "date": "2024-06-06T12:07:49.959Z",
      "__v": 0
    },
    {
      "_id": "6661ac651fc11cc3f5607dce3",
      "user": "665db52171766631b580e46b",
      "title": "my title new",
      "description": "my desc",
      "tag": "personal",
      "date": "2024-06-06T12:32:37.339Z",
      "__v": 0
    }
  ]

 const [notes,setNotes]=useState(notesInitally)

//add a note
const addNote=(title,description,tag)=>{
  //
 const  note={ "_id": "6661a695f0b1cf3685c6df1e",
  "user": "665db52171766631b580e46b",
  "title": title,
  "description": description,
  "tag": tag,
  "date": "2024-06-06T12:07:49.959Z",
  "__v": 0
  };
setNotes(notes.concat(note))
}

// Delete a note

const deleteNote=(id)=>{
  const newNotes=notes.filter((note)=>{
    return note._id!==id;
  })
  setNotes(newNotes)
}

// Edit a note

const editNote=()=>{

}



    return (
  <noteContext.Provider value={{notes,deleteNote,addNote,editNote}}>
    {props.children}
    </noteContext.Provider>
)
};

export default NoteState;
