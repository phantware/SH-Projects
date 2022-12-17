import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'

function App() {
  const personName = {
    firstName: 'Jamiu',
    secondName: 'Ismail',
  }
  return (
    <div className='App'>
      <Greet name='Jamie' messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
    </div>
  )
}

export default App
