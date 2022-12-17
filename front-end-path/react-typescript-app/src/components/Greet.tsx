type GreetProps = {
  name: String
}

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Hi {props.name}!, Welcome to React-Typescript Tutorial</h2>
    </div>
  )
}

export default Greet
