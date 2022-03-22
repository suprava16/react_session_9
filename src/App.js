import React from "react"
import Greet from "./classcomponent/Greet"
import Propsdata from "./classcomponent/Propsdata"
class App extends React.Component {
  render() {
    return (
      <div>
        <Greet />
        <Propsdata email="suprava@gmail.com" name="suprava" age={27}/>
      </div>
    )
  }
}
export default App
