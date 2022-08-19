import { DECREASE, INCREASE } from './actions'

const initialState = {
  count: 10,
  name: 'john',
}

const reducer = (state = initialState, action) => {
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 }
  }
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 }
  }

  console.log({ state, action })
  return state
}

export default reducer
