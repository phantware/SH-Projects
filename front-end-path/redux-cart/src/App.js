import React from 'react'
// components
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { Provider } from 'react-redux'
// items
import cartItems from './cart-items'
import reducer from './reducer'
import { createStore } from 'redux'

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
}
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

//react-redux - Provider - wraps our app, connect - used in components

const store = createStore(reducer, initialState)

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  )
}

export default App
