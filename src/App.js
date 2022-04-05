import React from "react"
import Fetch from "./classcomponent/Api/Fetch"
import ArrayObject from "./classcomponent/Array/ArrayObject"
import Array_Test from "./classcomponent/Array/Array_Test"
import ChangeEvent from "./classcomponent/ChangeEvent"
import Conditions from "./classcomponent/ConditionalRenderning/Conditions"
import Greet from "./classcomponent/Greet"
import Main from "./classcomponent/Lifecycle/Main"
import Propsdata from "./classcomponent/Propsdata"
import Statevariable from "./classcomponent/Statevariable"
class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Greet /> */}
        {/* <Propsdata email="suprava@gmail.com" name="suprava" age={27}/> */}
        {/* <Statevariable/> */}
        {/* <ChangeEvent/> */}
        {/* <Array_Test/> */}
        {/* <ArrayObject/> */}
        {/* <Conditions/> */}
        {/* <Main/> */}
        <Fetch/>
      </div>
    )
  }
}
export default App
