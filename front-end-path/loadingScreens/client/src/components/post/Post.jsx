import React from 'react'

const Post = () => {
  return (
    <div className='post'>
      <div className='postImgContainer'>
        <img
          src='https://i.ibb.co/KDtnJVY/logo.png'
          alt=''
          className='postImg'
        />
        <span className='postDuration'>10:30</span>
      </div>
      <div className='postInfoContainer'>
        <img
          className='postAvatar'
          src='https://i.ibb.co/KDtnJVY/logo.png'
          alt=''
        />
        <div className='postInfo'>
          <span className='postTitle'>Video Title</span>
          <span className='postChannel'>Video name</span>
          <span className='postDetail'>5k views • 11/02/2022</span>
        </div>
      </div>
    </div>
  )
}

export default Post
