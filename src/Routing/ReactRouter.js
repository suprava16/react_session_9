import React from 'react'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
function ReactRouter() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default ReactRouter