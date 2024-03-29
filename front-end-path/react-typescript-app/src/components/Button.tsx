import React from 'react'
type ButtonProps = {
  // handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void

  // Having id parameter
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Button</button>
  )
}

export default Button
