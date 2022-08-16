const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore

//Combine reducers is used to combine multiple reducers into a single reducer which can then be passed to a creat store method
const combineReducers = redux.combineReducers
const applyMiddleWare = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

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

const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  }
}
// Reducer: (prevState, action) => newState

// Initial State - Which is an object

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCream: 20,
// }

const initialCakeState = {
  numOfCakes: 10,
}
const initialIceCreamState = {
  numOfIceCream: 20,
}
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       }
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIceCream: state.numOfIceCream - 1,
//       }

//     default:
//       return state
//   }
// }

const cakeReducer = (state = initialCakeState, action) => {
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
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      }

    default:
      return state
  }
}

//We created a rootReducer for combining our reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
})
// This si our store
const store = createStore(rootReducer, applyMiddleWare(logger))

// This is our dispatcher
console.log('initialState', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()
