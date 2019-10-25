import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userId: '',
      title: '',
      body: ''
    }
  }
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(e.state)
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input type="text" name="userId" value={this.state.userId} onChange={this.changeHandler}></input>
          </div>
          <div>
            <input type="text" name="title" value={this.state.title} onChange={this.changeHandler}></input>
          </div>
          <div>
            <input type="text" name="body" value={this.state.body} onChange={this.changeHandler}></input>
          </div>
          <button >submit</button>
        </form>

      </div>
    )
  }
}

export default PostForm
