import './App.css'
import Button from './components/Button'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'

function App() {
  const personName = {
    firstName: 'Jamiu',
    secondName: 'Ismail',
  }

  const nameList = [
    {
      first: 'Ismail',
      second: 'Jamiu',
    },
    {
      first: 'Ismail',
      second: 'Ridwan',
    },
    {
      first: 'Ismail',
      second: 'Sammuel',
    },
  ]
  return (
    <div className='App'>
      <Greet name='Jamie' messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>Heading Placeholder</Heading>
      <Oscar>
        <Heading>Oscar goes to school</Heading>
      </Oscar>
      <Button
        handleClick={() => {
          console.log('clicked')
        }}
      />
    </div>
  )
}

export default App
