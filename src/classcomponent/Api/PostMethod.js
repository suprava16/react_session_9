import React from "react"

export default class PostMethod extends React.Component{
  constructor(){
    super();
    this.state={
      email:"",
      password:""
    }
  }
  handleEmail=(event)=>{
    this.setState({
      email:event.target.value
    })
  }
  handlePassword=(event)=>{
    this.setState({
      password:event.target.value
    })
  }
  handleClick=()=>{
    fetch("https://reqres.in/api/login",{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-type":"application/json"
      },
      body: JSON.stringify({
        email:this.state.email,
        password:this.state.password
      })
    })
    .then((response)=>(response.json()))
    .then((result)=>{
      console.log(result)
    })
  }
  render(){
    return(
      <div>
        <h1>Post method</h1>
        <input type="text" onChange={this.handleEmail}/>
        <input type="password" onChange={this.handlePassword}/>
        <button onClick={this.handleClick}>LOGIN</button>
      </div>
    )
  }
}