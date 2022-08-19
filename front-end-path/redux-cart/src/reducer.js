import { DECREASE, INCREASE, CLEAR_CART } from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART: {
      return {
        ...state,
        cart: [],
      }
    }
    default:
      return state
  }
}

export default reducer
