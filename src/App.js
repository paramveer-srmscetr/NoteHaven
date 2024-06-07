import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NotesState";
function App() {
  return (
    <>
      <NoteState>
        <Router>
            <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* Add other routes here */}
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
