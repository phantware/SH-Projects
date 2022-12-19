import React from 'react'
import { useReducer } from 'react'

type CounterState = {
  count: number
}

type CounterAction = {
  type: 'Increment' | 'Decrement'
  payload: number
}

const initialState = {
  count: 0,
}

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'Increment':
      return { count: state.count + action.payload }
    case 'Decrement':
      return { count: state.count - action.payload }
    default:
      return state
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'Increment', payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: 'Decrement', payload: 10 })}>
        Decrement 10
      </button>
    </div>
  )
}

export default Counter
