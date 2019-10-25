import React from 'react'

function MemoComp({ name }) {
  console.log("This will only re render if there is a change (like pure comp)")
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)
