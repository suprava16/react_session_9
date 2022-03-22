import React from "react"

export default class Propsdata extends React.Component{
  render(){
    console.log(this)
    const{email,name,age}=this.props
    return(
      <div>
        <h1>Pros Component</h1>
        <h1>name:{name}</h1>
        <h1>email:{this.props.email}</h1>
        <h1>age:{this.props.age}</h1>
      </div>
    )
  }
}

