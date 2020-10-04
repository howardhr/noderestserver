const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require ('./config/config');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/usuario', function (req, res) {
  res.send('get Usuario')
})

app.post('/usuario', function (req, res) {
  const body = req.body
  if (body.nombre === undefined) {
    res.status(400).json({
      ok: false,
      mensaje: 'es nacesario el nombre'
    })
  } else {
    res.json({
      body
    })
  }
})

app.put('/usuario/:id', function (req, res) {
  const id = req.params.id

  res.json({
    id
  })
  // res.send("put Usuario");
})

app.delete('/usuario', function (req, res) {
  res.send(' delete Usuario')
})

app.listen(process.env.PORT, () => {
  console.log('Escuchando en el Puerto', process.env.PORT)
})
