import React, { Component } from 'react'
import ChildComponent from './components/ChildComponent';

class ParentComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      parentName: "parents"
    }

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={() => this.greetParent('child')}></ChildComponent>
      </div>
    )
  }
}

export default ParentComponent
