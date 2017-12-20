const mongoose = require('./schema.js')
const Phrase = mongoose.model('Phrase')
const phrasesData = require('./phrases-data.json')
const GameState = mongoose.model('GameState')
const Game = mongoose.model('Game')

Phrase.remove({})
  .then(() => {
    Phrase.collection.insert(phrasesData)
      .then((phrase) => {
        console.log(phrase)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })

Game.remove({})
  .then(() => {
    Game.collection.insert(gameData)
      .then((game) => {
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })

  GameState.remove({})
    .then(() => {
      GameState.collection.insert(gameStateData)
        .then((gameState) => {
          process.exit()
        })
    })
    .catch((err) => {
      console.log(err)
    })
