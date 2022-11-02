import './app.css'
import Feed from './components/feed/Feed'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <div className='home'>
        <Topbar />
        <Feed />
      </div>
    </div>
  )
}

export default App
