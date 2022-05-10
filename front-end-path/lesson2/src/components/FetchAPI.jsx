import React from 'react'

const FetchAPI = () => {
  const fetchPost = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await data.json()
    // console.log(response)
  }
  fetchPost()
  return (
    <div>
      <h1>Using Fetch API to fetch API</h1>
    </div>
  )
}

export default FetchAPI
