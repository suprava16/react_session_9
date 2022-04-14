import React from 'react'
import { useParams } from 'react-router-dom'
function Contact() {
  const parameters=useParams()

  console.log(parameters)
  return (
    <div>Contact Component
    <h3>your id value is {parameters.id}</h3>
    </div>
  )
}

export default Contact