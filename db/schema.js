const mongoose = require('./connection.js')

const PhrasesSchema = new mongoose.Schema({
  'Phrases': Array,
  'UsedPhrases': Array
})

const GameSchema = new mongoose.Schema ({
  'Date': {tyep: Date.now},
  'Player': Number,
  'Phrase': String,
  'Guesses': {
    type: Number,
    default: 0
  },
  'History': [GameState],
  'Complete': {
    default: false,
    type: bool
  }
})

const GameState = new mongoose.Schema ({
  'Drawing':
  'Guess': String,
  'Date': {
    type: Date.now
  }
  'Name': String
})

mongoose.model('GameState', GameStateSchema)

mongoose.model('Game', GameSchema)

mongoose.model('Phrases', PhrasesSchema)

module.exports = mongoose
