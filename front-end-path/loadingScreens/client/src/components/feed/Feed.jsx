import './feed.css'
import Post from '../post/Post'
import axiosInstance from '../../utils/axiosInstance'
import { useState, useEffect } from 'react'

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const getVideos = async () => {
      setIsLoading(true)
      try {
        const res = await axiosInstance.get('/api/videos/1')
        setVideos(res.data)
      } catch (err) {
        setIsLoading(false)
      }
    }
    getVideos()
  }, [])

  console.log('videos', videos)
  return (
    <div className='feed'>
      {videos.map((video) => (
        <Post video={video} />
      ))}
    </div>
  )
}

export default Feed
