import React from 'react'
type ButtonProps = {
  handleClick: () => void
}

const Button = (props: ButtonProps) => {
  return <div onClick={props.handleClick}>Button</div>
}

export default Button
