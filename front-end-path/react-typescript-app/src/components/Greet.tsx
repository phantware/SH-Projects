import { Http2ServerRequest } from 'http2'

type GreetProps = {
  name: String
  messageCount: number
  isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <>
          <h2>Hi {props.name}!, Welcome to React-Typescript Tutorial</h2>
          <p>You have {props.messageCount} new messages</p>
        </>
      ) : (
        <h2>Welcome Guest</h2>
      )}
    </div>
  )
}

export default Greet
