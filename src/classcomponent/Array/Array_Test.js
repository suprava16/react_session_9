import React from "react"

export default class Array_Test extends React.Component{
  constructor(){
    super()
    this.state={
      data:["Ram","Laxman","Sita","Bharat","Gita"]
    }
  }
  render(){
    return(
      <div>
          {this.state.data.map((user,i)=>{
            return(
              <div>
                name:{i}-{user}
              </div>
            )
          })}
      </div>
    )
  }
}