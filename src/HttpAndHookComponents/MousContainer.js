import React, { useState } from 'react'
import HookMouse from './HookMouse';

function MousContainer() {

  const [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}> toggle display</button>
      {display && <HookMouse></HookMouse>}
    </div>
  )
}

export default MousContainer
