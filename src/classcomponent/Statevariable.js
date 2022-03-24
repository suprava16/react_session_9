import React from "react"

export default class Statevariable extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "suprava",
      email: "suprava@gmail.com"
    }
  }
handleClick=()=>{
  this.setState({
    name:"Rinky",
    email:"rinky@gmail.com"
  })
}
  render() {
    const{name,email}=this.state
    return (
      <div>
        <h1>name:{name}</h1>
        <h1>email:{this.state.email}</h1>
        <button onClick={this.handleClick}>UPDATE</button>
      </div>
    )
  }
}
