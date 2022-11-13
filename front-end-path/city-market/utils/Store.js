import { createContext, useReducer } from 'react'

export const Store = createContext()

const initialState = {
  darkMode: false,
}

export const StoreProvider = (props) => {
  cosnt[(state, dispatch)] = useReducer(reducer, initialState)
}
