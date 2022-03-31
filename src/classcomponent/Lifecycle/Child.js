import React from "react";

export default class Child extends React.Component{
  constructor(){
    super()
    this.state={
      text:""
    }
  }
handleText=(event)=>{
  this.setState({
    text:event.target.value
  })
}
  componentDidMount(){
    console.log("hello from comoponent did mount method")
  }
  componentDidUpdate(){
    console.log("hello from Component did update")
  }
  componentWillUnmount(){
    console.log("hello component did will unmount method")
  }
  render(){
    console.log("render method")
    return(
      <div>
        <h1>Child Component</h1>
        <input tyep="text" onChange={this.handleText}/>
      </div>
    )
  }
} 