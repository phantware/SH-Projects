const BUY_CAKE = 'BUY_CAKE'

// THIS IS OUR ACTION
/**
 * 
 {
   type: BUY_CAKE
   info: "First redux action"
 }
 */

// THIS IS AN ACTION CREATOR

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  }
}

// Reducer: (prevState, action) => newState

// Initial State - Which is an object

const initialState = {
  numOfCakes: 10,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }

    default:
      return state
  }
}
