import React from 'react'
// components
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
// items
import cartItems from './cart-items'

// redux stuff

// reducer - funcion that used to update
//reducer - It takes two arguments (state,action)
//state - old state/state before update
//action - what happened/ what update
// reducer - return updated or old state
// Store - stores data, think of state

//store.getState() -  This is used to get state from the store

//dispatch method - send actions to the store
// actions (objects) - MUST HAVE TYPE PROPERTY - what kind of action
// DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy)

import { createStore } from 'redux'

const initialState = {
  count: 10,
  name: 'john',
}

const reducer = (state = initialState, action) => {
  if (action.type === 'DECREASE') {
    return { ...state, count: state.count - 1 }
  }
  if (action.type === 'INCREASE') {
    return { ...state, count: state.count + 1 }
  }
  if (action.type === 'RESET') {
    return { ...state, count: 0 }
  }
  if (action.type === 'CHANGE_NAME') {
    return { ...state, name: 'tunde' }
  }
  console.log({ state, action })
  return state
}
const store = createStore(reducer)
store.dispatch({ type: 'DECREASE' })
store.dispatch({ type: 'DECREASE' })
store.dispatch({ type: 'RESET' })
store.dispatch({ type: 'INCREASE' })
store.dispatch({ type: 'CHANGE_NAME' })

console.log(store.getState())

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  )
}

export default App
