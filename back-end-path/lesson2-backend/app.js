const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public/')))

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  return res.render('index', {
    title: 'SH',
  })
})

const port = 5000

app.listen(port, () => console.log(`app running on port ${port}`))
