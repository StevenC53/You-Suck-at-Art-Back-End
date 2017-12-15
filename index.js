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

app.get('/api/history', (req, res) => {
  GameState.find()
  .then((gameState) => {
    res.json(gameState)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.post('/api/history', (req, res) => {
  GameState.create(req.body)
    .then((gameState) => {
      res.json(gameState)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.put('/api/history/:id', (req, res) => {
  GameState.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
  .then((gameState) => {
    res.json(gameState)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.delete('/api/history/:id', (req, res) => {
  GameState.findOneAndRemove({_id: req.params.id})
  .then(() => {
    res.redirect('/api/history')
  })
})

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
