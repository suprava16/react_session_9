import axios from "axios";
import React from "react"

export default class Fetch extends React.Component{
  constructor(){
    super();
    this.state={
      user:[]
    }
  }
  componentDidMount(){
    fetch("https://reqres.in/api/users?page=2")
    .then((response)=>(response.json()))
    .then((result)=>{
       console.log(result.data)
      this.setState({
        user:result.data
      })
    })

    // axios.get("https://reqres.in/api/users?page=2")
    // .then((result)=>{
    //   console.log(result)
    // })
  }
  render(){
    return(
      <div>
        fetch component
        {this.state.user.map((u,i)=>{
          return(
            <div key={i}>
              <span>Email:{u.email}</span>
              <span>Firstname:{u.first_name}</span>
              <img src={u.avatar} alt="imgae"/>
            </div>
          )
        })}

      </div>
    )
  }
}