import React, { useState } from 'react'
function HookCounterTwo() {

  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevState => prevState + 1)
    }
  }
  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrease</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={incrementFive}>Inc 5</button>
    </div>
  )
}

export default HookCounterTwo
