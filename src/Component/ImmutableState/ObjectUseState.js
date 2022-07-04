import React, { useState } from 'react'


const initState = {
    fName: 'Bruce',
    lName: 'Wayne'

}



export const ObjectUseState = () => {
    const [person, setPerson] = useState(initState)
    const changeName = () => {
        // person.fName = 'Clark'
        // person.lName = 'Kent'
        // setPerson(person)
        const newPerson = { ...person }
        newPerson.fName = 'Clark'
        newPerson.lName = 'Kent'
        setPerson(newPerson)
    }
    console.log('ObjectUseState Render')


    return (
      <div>
            <button onClick={changeName}>{person.fName} {person.lName}</button>  


    </div>
  )
}
