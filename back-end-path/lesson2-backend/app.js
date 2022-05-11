const express = require('express')
const app = express()

const port = 5000

app.set('views')
app.get('/', (req, res) => {
  return res.send('Hello World')
})

app.listen(port, () => console.log(`app running on port $port`))
