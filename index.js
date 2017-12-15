const express = require('express')
const parser = require('body-parser')
const mongoose = require('./db/schema.js')
const Phrases = mongoose.model('Phrases')
const GameState = mongoose.model('GameState')
const Game = mongoose.model('Game')
const cors = require('cors')
const app = express()

app.set('port', process.env.PORT || 3001)
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(cors())

app.get('/api/phrases', (req, res) => {
  Phrases.find()
    .then((phrases) => {
      res.json(phrases)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
