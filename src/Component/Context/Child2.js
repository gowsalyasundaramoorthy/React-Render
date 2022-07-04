import React from 'react'


export const Child2 = () => {
    console.log('Child 2 render')
  return (
      <div>
        Child 2 component  

    </div>
  )
}

export const MemoizedChild2 = React.memo(Child2)
