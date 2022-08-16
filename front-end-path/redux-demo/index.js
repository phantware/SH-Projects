const redux = require('redux')
const createStore = redux.createStore

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

// This si our store
const store = createStore(reducer)

// This is our dispatcher
console.log('initialState', store.getState())
const unsubscribe = store.subscribe(() =>
  console.log('updated state', store.getState())
)
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()
