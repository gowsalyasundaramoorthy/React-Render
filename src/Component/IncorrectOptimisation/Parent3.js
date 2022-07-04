import React, { useState } from 'react'
import { MemoizedChild3 } from './Child3'
import { MemoizedChild4 } from './Child4'




export const Parent3 = () => {
    const [count, setCount] = useState(0)
    const [name, setName]  = useState('Gowsalya')
    console.log('Parent 3 render')
    return (
      <div>
            <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
            <button onClick={()=> setName('Codewriting')}>Change Name</button>
            {/* <MemoizedChild3 name={name}>Hello </MemoizedChild3> */}
            <MemoizedChild4 name={name} />
            
        </div>
        
  )
}
