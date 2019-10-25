import React, { useState } from 'react'

function HookCounterFour() {

  const [items, setItems] = useState([])


  return (
    <div>
      <button onClick={addItem}></button>
      <ul>
        {
          items.map(item => <li key={item.id}>{item.value}</li>)
        }
      </ul>
    </div>
  )
}

export default HookCounterFour
