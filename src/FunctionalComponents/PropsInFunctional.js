import React from "react"

export default function PropsInFunctional(props){
  return(
    <div>
    <h1>Props data</h1>
    <h1>name:{props.name}</h1>
    <h1>email:{props.email}</h1>
    </div>
  )
}