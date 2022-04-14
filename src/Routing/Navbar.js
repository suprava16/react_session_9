import React,{useState} from 'react'
import { Link, Outlet } from "react-router-dom"
function Navbar() {
  const[num,setNum]=useState(120)
  return (
    <div>
      
      <Link to="/home">Home</Link> |
      <Link to="/about" state={{name:"Reactjs"}}>About</Link>|  
      <Link to={"/contact/"+num}>Contact</Link>
      <Outlet />
     
    </div>
  )
}

export default Navbar