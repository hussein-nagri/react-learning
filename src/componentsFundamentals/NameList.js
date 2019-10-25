import React from 'react'
import Person from './Person';

function NameList() {

  const name = ["Hussein", "rumi", "kunjan"]

  const persons = [
    {
      id: 1,
      name: "Hussein",
      age: 18,
      skill: "java"
    },
    {
      id: 2,
      name: "Rumo",
      age: 19,
      skill: "box"
    },
    {
      id: 3,
      name: "kunjan",
      age: 20,
      skill: "react"
    }
  ]

  const nameList = name.map((name, index) => (
    <h2 key={index}>{index} {name}</h2>
  )



  )
  return (
    <div>
      {/* <h2>{name[0]}</h2>
      <h2>{name[1]}</h2>
      <h2>{name[2]}</h2> 
      very inneficient*/}
      {
        // name.map(name => <h2>{name}</h2>)

        // personList
        nameList
      }



    </div>
  )
}

export default NameList
