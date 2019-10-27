import React from 'react'

function DocTitleTwo() {

  const [count, setCount] = useState(0)

  useDocumentTitle()
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> count - {count}</button>

    </div>
  )
}

export default DocTitleTwo
