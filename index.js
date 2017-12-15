const express = require('express')
const parser = require('body-parser')
const mongoose = require('./db/schema.js')
const Phrase = mongoose.model('Phrase')
const GameState = mongoose.model('GameState')
const Game = mongoose.model('Game')
const cors = require('cors')
const app = express()
const random = require('mongoose-random')

app.set('port', process.env.PORT || 3001)
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(cors())

app.get('/api/phrase', (req, res) => {
  Phrase.find()
    .then((phrase) => {
      console.log(phrase)
      console.log(phrase.phrase)
      res.json(phrase)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get('/api/game', (req, res) => {
  Game.find()
  .then((game)=> {
    res.json(game)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.get('/api/game/:gameId', (req, res) => {
  Game.findById(req.params.id)
  .then((game)=> {
    res.json(game)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.post('/api/game', (req, res) => {
  Game.create(req.body)
  .then((game) => {
    res.json(game)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.get('/api/game/:gameId/history', (req, res) => {
  GameState.find()
  .then((gameState) => {
    res.json(gameState)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.post('/api/game/:gameId/history', (req, res) => {
  Game.guesses += 1
  console.log(Game.guesses)
  GameState.create(req.body)
    .then((gameState) => {
      res.json(gameState)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.delete('/api/game/:gameId', (req, res) => {
  Game.findOneAndRemove({_id: req.params.id})
  .then(() => {
    res.redirect('/api/game')
  })
})

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
