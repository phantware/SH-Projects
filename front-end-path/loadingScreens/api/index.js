const express = require('express')
const cors = require('cors')

const { videos, user } = require('./fakeData')
const app = express()

// const bodyParser = require('body-parser')

const corsOption = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
}

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

// Middlewares
app.use(cors(corsOptions))
app.use(express.json())

app.get('/api/user/1', (req, res) => {
  setTimeout(() => {
    res.json(user)
  }, 3000)
})

app.get('/api/videos/1', (req, res) => {
  setTimeout(() => {
    res.json(videos)
  }, 5000)
})

app.listen(8800, () => {
  console.log('Backend server is running!')
})
