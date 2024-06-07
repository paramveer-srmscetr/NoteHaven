import NoteItem from './NoteItem';
import { useContext } from 'react';
import AddNote from "./AddNote";
import noteContext from '../context/notes/noteContext';
function Notes() {
  
  const context=useContext(noteContext)

  const {notes}=context;
  return (
    <>

        <AddNote/>
    <div className="row my-3">

    <h2>your notes</h2>
{notes.map((note)=>{
  return  <NoteItem key={note._id} note={note} />
  
  })}
</div>
</>
  )
}

export default Notes;