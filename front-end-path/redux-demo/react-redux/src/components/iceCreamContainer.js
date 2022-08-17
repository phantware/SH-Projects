import React from 'react'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'
import { connect } from 'react-redux'

const IceCreamContainer = ({ numOfIceCream, buyIceCream }) => {
  return (
    <div>
      <h1>IceCreamContainer</h1>
      <h2>Number of IceCream - {numOfIceCream}</h2>
      <button onClick={buyIceCream}>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
