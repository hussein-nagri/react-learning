import React, { Component } from 'react'
import axios from 'axios'


class PostList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }


  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response)
        this.setState({
          posts: response.data
        })
      }
      )
      .catch(err => {
        console.log(err)
      }


      )
  }

  render() {
    return (
      <div>
        List of posts
        {
          this.state.posts.length ? this.state.posts.map(post => <div key={post.id}> {post.title} </div>) : null
        }
      </div>
    )
  }
}

export default PostList
