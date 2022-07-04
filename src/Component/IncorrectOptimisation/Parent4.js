import React, { useState,useMemo, useCallback } from 'react'
import { MemoizedChild3 } from './Child3'
import { MemoizedChild4 } from './Child4'
import { MemoizedChild5 } from './Child5'




export const Parent4 = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Gowsalya')
    const person = {
        fName: 'Bruce',
        lName: 'Wayne'

    }
    const memoisedPerson = useMemo(()=> person, [])

    const handleClick = () => { }
    const memoisedHandleClik = useCallback(handleClick, [])

    console.log('Parent 4 render')
    return (
      <div>
            <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
            <button onClick={()=> setName('Codewriting')}>Change Name</button>
            {/* <MemoizedChild3 name={name}>Hello </MemoizedChild3> */}
            {/* <MemoizedChild5 name={name} handleClick={handleClick} /> */}
            {/* <MemoizedChild5 name={name} person={memoisedPerson} /> */}
             <MemoizedChild5 name={name} handleClick={memoisedHandleClik} />
        </div>
        
  )
}
