import { createContext, useReducer } from 'react'

export const Store = createContext()

const initialState = {
  darkMode: true,
}

function reducer(state, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return {
        ...state,
        darkMode: false,
      }
    case 'DARK_MODE_OFF':
      return {
        ...state,
        darkMode: false,
      }
    default:
      return state
  }
}
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = { state, dispatch }
  return <Store.Provider value={value}>{children}</Store.Provider>
}
