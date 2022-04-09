import React,{useState} from "react"

export default function StateVariableInFunction(){
  const[name,setName]=useState("suprava")
  const[email,setEmail]=useState("suprava@gmail.com")

  const handleClick=()=>{
    setName("Rinky")
    setEmail("rinky@gmail.com")
  }
  return(
    <div>
      <h1>name:{name}</h1>
      <h1>email:{email}</h1>
      <button onClick={handleClick}>UPDATE</button>
    </div>
  )
}