import React from "react"
import axios from "axios";
export default class AxioxMethod extends React.Component{
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
   axios.post("https://reqres.in/api/login",this.state)
   .then((result)=>{
     console.log(result.data)
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