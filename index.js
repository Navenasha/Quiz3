const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/login', (req, res) => {
    console.log(req.body)
  
    res.send('Login')
  })

app.get('/', (req, res) => {
  res.send('HAPPY DAY!')
})

app.get('/bye', (req, res) => {
  res.send('Bye Bye HAPPY DAY!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})