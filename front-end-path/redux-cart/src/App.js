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

import { createStore } from 'redux'

const initialState = {
  count: 0,
}

const reducer = (state = initialState, action) => {
  console.log({ state, action })
  return state
}
const store = createStore(reducer)

function App() {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  )
}

export default App
