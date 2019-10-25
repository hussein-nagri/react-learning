import React, { Component } from 'react'
import withCounter from './withCounter';

class ClickCounter extends Component {


  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}> clicked {this.props.count} times by {this.props.name}</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter, 5)
