import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './routes/home'
import Contact from './routes/contact'
import Experience from './routes/experience'
import Projects from './routes/projects'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </>
  );
}

export default App;
