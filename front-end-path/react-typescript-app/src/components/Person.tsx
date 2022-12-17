import React from 'react'
type PersonProps = {
  name: {
    firstName: String
    secondName: String
  }
}
const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.firstName} {props.name.secondName}
    </div>
  )
}

export default Person
