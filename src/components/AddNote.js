import React, { useContext ,useState} from 'react'
import noteContext from '../context/notes/noteContext';

function AddNote() {

const [note, setnote] = useState({title:"",description:"",tag:""})
    const context=useContext(noteContext)
    const {addNote }=context;
   
    const handlerClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setnote({title:" ",description:" " ,tag:" "})
      }

    const onchange=(e)=>{
    setnote({...note,[e.target.name]: e.target.value})
        
    }
    return (
    <div>
      
      <div className="container my-3">
        <h1>Add notes here</h1>

        <form action="action">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name='title'
              value={note.title}
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name='description'
              value={note.description}
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name='tag'
              value={note.tag}
              onChange={onchange}
            />
          </div>
         
          <button type="button" className="btn btn-primary" onClick={handlerClick}>
            AddNote
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
