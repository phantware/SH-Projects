import './feed.css'
import Post from '../post/Post'
import axiosInstance from '../../utils/axiosInstance'
import { useState, useEffect } from 'react'
import Skeleton from '../skeleton/Skeleton'

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const getVideos = async () => {
      setIsLoading(true)
      try {
        const res = await axiosInstance.get('/api/videos/1')
        setVideos(res.data)
        isLoading(false)
      } catch (err) {
        setIsLoading(false)
      }
    }
    getVideos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='feed'>
      {isLoading ? (
        <Skeleton type='circle' />
      ) : (
        videos.map((video) => <Post video={video} />)
      )}
    </div>
  )
}

export default Feed
