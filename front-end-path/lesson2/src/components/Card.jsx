import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
`
const CardBox = styled.div`
  width: 150px;
  height: 150px;
  margin: 1em;
  padding: 1em;
  background-color: blue;
  color: white;
`

const Card = () => {
  return (
    <CardContainer>
      <CardBox>
        <h2>id</h2>
        <h2>title</h2>
        <h2>body</h2>
      </CardBox>
    </CardContainer>
  )
}

export default Card
