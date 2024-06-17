import React, { useState } from 'react';
import noteContext from './noteContext';

const NoteState = (props) => {
  const host = 'http://localhost:5000';
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const token = localStorage.getItem('auth-token');
    if (!token) return;

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token,
      },
    });

    const json = await response.json();
    setNotes(json);
  };

  const addNote = async (title, description, tag) => {
    const token = localStorage.getItem('auth-token');
    if (!token) return;

    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token,
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  const deleteNote = async (id) => {
    const token = localStorage.getItem('auth-token');
    if (!token) return;

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token,
      },
    });

    await response.json();
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  const editNote = async (id, title, description, tag) => {
    const token = localStorage.getItem('auth-token');
    if (!token) return;

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token,
      },
      body: JSON.stringify({ title, description, tag }),
    });

    await response.json();

    const newNotes = JSON.parse(JSON.stringify(notes));
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
    <noteContext.Provider value={{ notes, deleteNote, addNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
