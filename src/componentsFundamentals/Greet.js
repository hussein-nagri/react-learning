import React from 'react'

// function Greet() {
//   return <h1> Hello Hussein!!!</h1>
// }


export const Greet = props => {
  console.log(props);
  return (
    <div>
      <h1>Hello {props.name}, my name is {props.superName}</h1>
      {props.children}
    </div>
  )
}

//export default Greet