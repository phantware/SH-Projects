import React from 'react'
import { Name } from './Person.types'
type PersonListProps = {
  names: Name[]
}

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name, i) => {
        return (
          <h2 key={i}>
            {name.firstName} {name.secondName}
          </h2>
        )
      })}
    </div>
  )
}

export default PersonList
