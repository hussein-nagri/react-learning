import React, { Component } from 'react'
import { userConsumer } from './userContext';

export class ComponentF extends Component {
  render() {
    return (
      <userConsumer>
        {
          (username) => {
            return <div> Hello {username}</div>
          }
        }

      </userConsumer>
    )
  }
}

export default ComponentF
