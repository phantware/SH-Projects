import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'

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
    </div>
  )
}

export default App
