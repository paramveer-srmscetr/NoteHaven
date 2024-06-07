import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {

  const notesInitally=[
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
    }
  ]

 const [notes,setNotes]=useState(notesInitally)
    return (
  <noteContext.Provider value={{notes,setNotes}}>
    {props.children}
    </noteContext.Provider>
)
};

export default NoteState;
