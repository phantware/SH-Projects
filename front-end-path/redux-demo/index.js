const redux = require('redux')
const createStore = redux.createStore

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

const store = createStore(reducer)
console.log('initialState', store.getState())
const unsubscribe = store.subscribe(() =>
  console.log('updated state', store.getState())
)
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
