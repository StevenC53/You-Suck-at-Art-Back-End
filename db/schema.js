const mongoose = require('./connection.js')

const PhrasesSchema = new mongoose.Schema({
  'phrases': Array,
  'usedPhrases': Array
})

mongoose.model('Phrases', PhrasesSchema)

const GameStateSchema = new mongoose.Schema ({
  'drawing': String,
  'guess': String,
  'date': { type: Date, default: Date.now},
  'name': String
})

mongoose.model('GameState', GameStateSchema)

const GameSchema = new mongoose.Schema ({
  'date': { type: Date, default: Date.now },
  'player': Number,
  'phrase': String,
  'guesses': {
    type: Number,
    default: 0
  },
  'history': [GameStateSchema],
  'complete': {  type: Boolean, default: false }
})

mongoose.model('Game', GameSchema)

module.exports = mongoose
