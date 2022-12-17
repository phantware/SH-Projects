import React from 'react'
type PersonListProps = {
  names: {
    first: string
    second: string
  }[]
}

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name, i) => {
        return (
          <h2 key={i}>
            {name.first} {name.second}
          </h2>
        )
      })}
    </div>
  )
}

export default PersonList
