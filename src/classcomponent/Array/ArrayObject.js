import React from "react"

export default class ArrayObject extends React.Component{
  constructor(){
    super()
    this.state={
      user:[
        {
          name:"suprava",
          email:"suprava@gmail.com"
        },
        {
          name:"Rinky",
          email:"rinky@gmail.com"
        },
        {
          name:"Gita",
          email:"gita@gmail.com"
        },
        {
          name:"tony",
          email:"tony@gmail.com"
        },
        {
          name:"Laxman",
          email:"laxman@gmail.com"
        },

      ]
    }
  }
  render(){
    return(
      <div>
          {this.state.user.map((item,i)=>{
            return(
              <div key={i}>
                name:{item.name} & email:{item.email}
              </div>
            )
          })}
      </div>
    )
  }
} 