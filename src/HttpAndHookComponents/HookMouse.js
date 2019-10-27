import React, { useState, useEffect } from 'react'

function HookMouse() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log("Use effect called")
    window.addEventListener("mousemove", logMousePosition)

    return () => {
      console.log("Component unmounting code")
      window.removeEventListener("mousemove", logMousePosition)

    }
  }, [])
  // use the empty array to mimic component did mount ^^^^


  return (
    <div>
      Hooks X - {x} , Y -{y}
    </div>
  )
}

export default HookMouse
