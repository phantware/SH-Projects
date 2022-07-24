import { useRouter } from 'next/router'
const Docs = () => {
  const router = useRouter()
  const { params = [] } = router.query
  console.log('Params', params)
  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    )
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>
  }
  return (
    <div>
      <h1>Welcome to Docs home page</h1>
    </div>
  )
}

export default Docs
