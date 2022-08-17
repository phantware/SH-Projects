import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

const HooksCakeContainer = () => {
  const numOfCake = useSelector((state) => state.cake.numOfCake)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>HooksCakeContainer</h1>
      <h2>Number of Cake - {numOfCake}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer
