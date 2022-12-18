import './App.css'
import Button from './components/Button'
import Container from './components/Container'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Input from './components/Input'
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
      firstName: 'Ismail',
      secondName: 'Jamiu',
    },
    {
      firstName: 'Ismail',
      secondName: 'Ridwan',
    },
    {
      firstName: 'Ismail',
      secondName: 'Sammuel',
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
        handleClick={(event, id) => {
          console.log('clicked', event, id)
        }}
      />
      <Input value='' handleChange={(event) => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
    </div>
  )
}

export default App
