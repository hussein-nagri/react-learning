import React, { useEffect, useState } from 'react'
import useDocumentTitle from '../hooka/useDocumentTitle';

function DocTitleOne() {

  const [count, setCount] = useState(0)

  useDocumentTitle()

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> count - {count}</button>
    </div>
  )
}

export default DocTitleOne
