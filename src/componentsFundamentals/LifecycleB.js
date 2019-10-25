import React, { Component } from 'react'

class LifecycleB extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: "Hussein"
    }

    console.log("LIFECYLCEb construct")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LIFECYLCEb getDerivedStateFromProps ")
    return null
  }

  componentDidMount() {
    console.log("Lifecycleb componentDidMount ")
    return null

  }

  shouldComponentUpdate() {
    console.log("LifecycleB Should updatet ")
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log("LIFECYLCEb getsnapshotbeore ubpdate ")
  }

  componentDidUpdate() {
    console.log("LIFECYLCEb did ubpdate ")
  }


  render() {
    console.log("LIFECYLCEb getDerivedStateFromProps ")
    return (
      <div>
        LifecycleB
      </div>
    )
  }
}

export default LifecycleB
