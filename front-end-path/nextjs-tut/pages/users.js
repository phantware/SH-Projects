import Users from '../components/Users'

const users = ({ users }) => {
  return (
    <div>
      <h1>List of Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Users user={user} />
          </div>
        )
      })}
    </div>
  )
}

export default users

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)

  return {
    props: {
      users: data,
    },
  }
}
