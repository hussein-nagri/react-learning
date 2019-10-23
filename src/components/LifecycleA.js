import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: "Hussein"
    }

    console.log("LIFECYLCEA construct")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LIFECYLCEA getDerivedStateFromProps ")
    return null
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount ")
  }

  shouldComponentUpdate() {
    console.log("Lifecyclea Should updatet ")
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log("LIFECYLCEA getsnapshotbeore ubpdate ")
    return null
  }

  componentDidUpdate() {
    console.log("LIFECYLCEA did ubpdate ")
  }


  changeState = () => {
    this.setState({
      name: "WHAT HAPPENED "
    })
  }
  render() {
    console.log("LIFECYLCEA getDerivedStateFromProps ")
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}> Change staet</button>
        <LifecycleB> </LifecycleB>
      </div>
    )
  }
}

export default LifecycleA
