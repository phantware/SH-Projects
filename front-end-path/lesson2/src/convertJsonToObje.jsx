import React from 'react'

const convertJsonToObje = () => {
  // Conver JSON to Objects
  // const userJSONData = `{
  //  "name": "Alex C",
  //   "age": 22,
  //   "city": "Lagos"
  // }`
  // const userObj = JSON.parse(userJSONData)
  // console.log(userObj)
  // console.log(userJSONData)
  // Convert Javascript Object to JSON

  const userObj = {
    name: 'Alex C',
    age: 2,
    city: 'Lagos',
  }

  const userJSONData = JSON.stringify(userObj)
  console.log(userJSONData)
}

export default convertJsonToObje
