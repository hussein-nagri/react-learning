import React, { useState } from 'react'
import useInput from '../hooka/useInput';

function UserFoorm() {

  // const [firstName, setfirstName] = useState('')
  // const [lastName, setlastName] = useState('')

  const submitHandler = e => {
    e.preventDefault()
    alert(`Hi ${firstName} and ${lastName}`)
    resetFirstName()
    resetLastName()
  }


  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')



  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First name</label>
          <input {...bindFirstName} type="text"></input>
          <label>Last name</label>
          <input {...bindLastName} type="text"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UserFoorm
