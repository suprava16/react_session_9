import React from "react"
import "./Style.css"
export default class Conditions extends React.Component {
  constructor() {
    super()
    this.state = {
      text: "suprava",
      data: ""
    }
  }
  render() {
    return (
      <div>
        <h1>Conditional Renderning Component</h1>
        {this.state.text === "suprava" ? <h1>True statement</h1> : <h1>False statement</h1>}

        <input type="text" onChange={(event) => {
          this.setState({
            data: event.target.value
          })
        }} />
        <button disabled={this.state.data===""?true:false}>Click Me</button>

        {/* alternative of simple if statement */}
        {this.state.text==="suprava" &&
        <h1>Simple if statement</h1>}

        {/* how to use css code */}
        <h1 style={{color:"blue",fontSize:"30px",backgroundColor:"black"}}>Nextstacks</h1>
        <p>Hello everyone</p>
        <div className="div1" >Hello</div>
      </div>
    )
  }
} 

