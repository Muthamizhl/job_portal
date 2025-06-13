import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import About from "./Component/pages/About";
import Home from "./Component/pages/Home";
import Placement from "./Component/pages/Placement";
import Job from "./Component/pages/Job";
import Signup from "./Component/pages/Signup";
import React from 'react'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
       
        <Route path="/" element={<Home />} />
         <Route path="/About" element={<About />} />
        <Route path="/Placement" element={<Placement/>} />
        <Route path="/Job" element={<Job />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
