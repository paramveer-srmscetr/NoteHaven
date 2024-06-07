import React, { useContext ,useState} from 'react'
import noteContext from '../context/notes/noteContext';

function AddNote() {

const [note, setnote] = useState({title:"",description:"",tag:"default"})
    const context=useContext(noteContext)
    const {addNote }=context;
   
    const handlerClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
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
              onChange={onchange}
            />
          </div>
          {/* <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onchange={onchange}
            ></textarea>
          </div> */}
          <button type="button" className="btn btn-primary" onClick={handlerClick}>
            AddNote
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
