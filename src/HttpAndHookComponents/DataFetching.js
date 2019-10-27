import React, { useState, useEffect } from 'react'
import axios from 'axios'


function DataFetching() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButton, setIdFromButton] = useState(1)

  const handleClick = () => {
    setIdFromButton(id)
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        console.log(response)
        setPost(response.data)

      }
      )
      .catch(err => {
        console.log(err)
      }
      )
  }, [idFromButton]) //fetch once
  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)}></input>
      <button type="button" onClick={handleClick}> fetch post</button>
      <div>{post.title}</div>

      {/* <ul>
        {
          post.map(post => <li key={post.id}> {post.title}</li>)
        }
      </ul> */}
    </div >
  )
}

export default DataFetching
