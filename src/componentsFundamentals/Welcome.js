import React, { Component } from 'react';

class Welcome extends Component {


  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <h1>
        Hello class Component: {this.props.name} is {this.props.superName}
      </h1>
    )
  }
}

export default Welcome