import React, { useState } from 'react'
import { MemoizedChild2 } from './Child2'




export const Parent2 = () => {
    const [count, setCount] = useState(0)
    const [name, setName]  = useState('Gowsalya')
    console.log('Parent 2 render')
    return (
      <div>
            <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
            <button onClick={()=> setName('Codewriting')}>Change Name</button>
            <MemoizedChild2 name={name} />
            
        </div>
        
  )
}
