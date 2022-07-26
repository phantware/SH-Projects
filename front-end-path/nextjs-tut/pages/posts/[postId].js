const Post = ({ post }) => {
  return (
    <div>
      <h1>Post</h1>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  )
}

export default Post

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    }
  })

  return {
    // paths: [
    //   {
    //     params: { postId: '1' },
    //   },
    //   {
    //     params: { postId: '2' },
    //   },
    //   {
    //     params: { postId: '3' },
    //   },
    // ],
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { params } = context
  console.log('params', params)
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  )
  const data = await response.json()
  return {
    props: {
      post: data,
    },
  }
}
