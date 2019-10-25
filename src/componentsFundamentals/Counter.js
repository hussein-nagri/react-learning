import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }


  increment() {

    this.setState(prevState => ({
      count: prevState.count + 1
    }))


    // this.setState({
    //   count: this.state.count + 1
    // },
    //   () => {
    //     console.log("the state is ", this.state.count)
    //   }
    // )

    //THE STATE IS SET ASYNCHRONOUSLY SO ITS SO QUICK THAT THE IT DOESNT EVEN HAVE AFFECT
    //TO GET THE UDPDATED VALUE, U NEED TO DO IT IN THE THIS.SETSTATE SO THAT IT FALLS UNDER 
    //ASYNCHRONOUS FUNCTION
    console.log(this.state.count)
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }


  render() {
    return (
      <div>
        <div>Count - {this.state.count} </div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter
