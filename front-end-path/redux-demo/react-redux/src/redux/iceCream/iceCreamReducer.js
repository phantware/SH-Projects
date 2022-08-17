import { BUY_CAKE } from './iceCreamTypes'

const initialState = {
  numOfIceCream: 20,
}

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      }
    default:
      return state
  }
}

export default iceCreamReducer
