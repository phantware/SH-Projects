import React from 'react'
import './topbar.css'
import { Mic, Search, VideoCall, Apps, Notifications } from '@material-ui/icons'

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topLeft'>
        <img className='logo' src='https://i.ibb.co/KDtnJVY/logo.png' alt='' />
        <span className='logoText'>LamaTube</span>
      </div>
      <div className='topCenter'>
        <div className='topSearch'>
          <input type='text' placeholder='Search' />
          <div className='topSearchIconContainer'>
            <Search className='topSearchIcon' />
          </div>
          <Mic />
        </div>
      </div>
      <div className='topRight'>
        <VideoCall className='topIcon' />
        <Apps className='topIcon' />
        <Notifications className='topIcon' />
        <img className='topImg' alt='' />
      </div>
    </div>
  )
}

export default Topbar
