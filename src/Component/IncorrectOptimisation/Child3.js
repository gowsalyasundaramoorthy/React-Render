import React from 'react'


export const Child3 = ({children, name}) => {
    console.log('Child 3 render')
  return (
      <div>
        {children}
          {name}
    </div>
  )
}

export const MemoizedChild3 = React.memo(Child3)
