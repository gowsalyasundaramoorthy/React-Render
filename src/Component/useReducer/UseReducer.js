import React,{useReducer} from 'react'


const initiaState = 0;
const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state+1
            case 'decrement':
                return state-1
            case 'reset':
                return initiaState
            default:
                return state
        }
    }


export const UseReducer = () => {
   const [count, dispatch]=   useReducer(reducer, initiaState)
  return (
      <div>
        <div>Count - {count}</div>
          <button onClick={() =>  dispatch('increment') }>Increment </button>
          <button onClick={() => dispatch('decrement') }>Decrement </button>
          <button onClick={()=> dispatch('reset')}>Reset </button>
      </div>
          


  )
}
