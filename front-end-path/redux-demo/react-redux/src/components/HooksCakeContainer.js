import React from 'react'
import { useSelector } from 'react-redux'

const HooksCakeContainer = () => {
  const numOfCake = useSelector((state) => state.numOfCake)
  return (
    <div>
      <h1>HooksCakeContainer</h1>
      <h2>Number of Cake - {numOfCake}</h2>
      <button>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer
