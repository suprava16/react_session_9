import React from "react"
import ChangeEvent from "./classcomponent/ChangeEvent"
import Greet from "./classcomponent/Greet"
import Propsdata from "./classcomponent/Propsdata"
import Statevariable from "./classcomponent/Statevariable"
class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Greet /> */}
        {/* <Propsdata email="suprava@gmail.com" name="suprava" age={27}/> */}
        {/* <Statevariable/> */}
        <ChangeEvent/>
      </div>
    )
  }
}
export default App
