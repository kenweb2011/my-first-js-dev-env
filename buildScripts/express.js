
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Express World!'))

app.get('/user', function (req, res) {
  res.send('Hello Express User!')
})

app.post('/', function (req, res) {
  res.send('Got a Express POST request')
})

app.put('/user', function (req, res) {
  res.send('Got a Express PUT request at /user')
})

app.delete('/user', function (req, res) {
  res.send('Got a Express DELETE request at /user')
})

app.listen(3000, () => console.log('Express app listening on port 3000!'))
