import React from "react"

class Greet extends React.Component {
  render() {
    return (
      // <div>
      //   <h1>My Greet Component</h1>
      //   <p>next stacks</p>
      // </div>
    //   <>
    //      <h1>My Greet Component</h1>
    //      <p>next stacks</p>
    //  </>
     <React.Fragment>
         <h1>My Greet Component</h1>
         <p>next stacks</p>
     </React.Fragment>

    )
  }
}
export default Greet