import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)


    this.state = {
      message: "HEY baby"
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  // clickHandler(){

  //   this.setState({
  //     message : "Goodbye now"
  //   })
  // }

  clickHandler = () => {
    this.setState({
      message: "Goodbye now"
    })
  }

  render() {
    return (
      <div>
        <div> {this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>CLICK me For EVENT</button> */}
        {/* <button onClick={()=> this.clickHandler()}>CLICK me For EVENT</button> */}
        <button onClick={this.clickHandler}>CLICK me For EVENT</button>

      </div>
    )
  }
}

export default EventBind
