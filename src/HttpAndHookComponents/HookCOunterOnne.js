import React from 'react'
import useCounter from '../hooka/useCounter';

function HookCOunterOnne() {
  const [count, increment, decrement, reset] = useCounter()
  return (
    <div>
      <h1> Count - {count}</h1>
      <button onClick={increment} > increment</button>
      <button onClick={decrement} > decrement</button>
      <button onClick={reset} > reset</button>
    </div>
  )
}

export default HookCOunterOnne
