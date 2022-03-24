import React from "react"

export default class ChangeEvent extends React.Component{
  constructor(){
    super()
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
  render(){
    return(
      <div>
        <input type="text" placeholder="enter email" onChange={this.handleEmail}/>
        <input type="password" placeholder="enter password" onChange={this.handlePassword}/>
        <h1>email:{this.state.email}</h1>
        <h1>password:{this.state.password}</h1>
      </div>
    )
  }
} 