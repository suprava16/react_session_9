import React from 'react'
import {useLocation} from "react-router-dom"
function About() {
  const data=useLocation()
  console.log(data)
  return (
    <div>About  Component
    <h2>Your course:{data.state.name}</h2>
    </div>
  )
}

export default About