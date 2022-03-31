import React from "react";
import Child from "./Child";
export default class Main extends React.Component{
  constructor(){
    super()
    this.state={
      show:true
    } 
  }
  handleClick=()=>{
    this.setState({
      show: !this.state.show
    })
  }
  render(){
    return(
      <div>
        <h1>Main Component</h1>
        {this.state.show===true && 
         <Child/>
         }
         <button onClick={this.handleClick}>HIDE</button>
       
      </div>
    )
  }
} 