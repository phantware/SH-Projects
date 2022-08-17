import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

const CakeContainer = ({ numOfCake, buyCake }) => {
  return (
    <div>
      <h1>CakeContainer</h1>
      <h2>Number of Cakes - {numOfCake}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfCake: state.numOfCake,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
