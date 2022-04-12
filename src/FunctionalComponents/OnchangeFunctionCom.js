import axios from "axios"
import React, { useEffect, useState } from "react"

export function OnchangeFunctionCom() {
  const [user, setUser] = useState({ email: "", password: "" })

  // useEffect(()=>{
  //   axios.post()
  //   .then()
  // },[])

  const handleEmail = (event) => {
    setUser({
      ...user,
      email: event.target.value
    })
  }//email:suprava@gmail.com,password:""
  const handlePassword = (event) => {
    setUser({
      ...user,
      password: event.target.value
    })
  }//email:"suprava@gmail.com",password:"csdvsdg"
  return (
    <div>
      <input type="text" placeholder="email" onChange={handleEmail} />
      <input type="password" placeholder="password" onChange={handlePassword} />
      {/* <button onClick={handleLogin}>LOGIN</button> */}
      <h1>email:{user.email}</h1>
      <h1>password:{user.password}</h1>
    </div>
  )
}