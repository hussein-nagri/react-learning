import React from 'react'

function Person({ person }) {
  return (
    <div>
      <h2>
        i am {person.name} and id: {person.id}, my age is {person.age}, i know {person.skill}
      </h2>
    </div>
  )
}

export default Person
