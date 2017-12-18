const mongoose = require('./connection.js')

const PhraseSchema = new mongoose.Schema({
  'phrase': String
})

const GameStateSchema = new mongoose.Schema ({
  'drawing': String,
  'guess': String,
  'date': { type: Date, default: Date.now},
  'name': String,
})

const GameSchema = new mongoose.Schema ({
  'date': { type: Date, default: Date.now },
  'player': Number,
  'pharase': String,
  'guesses': {
    type: Number,
    default: 0
  },
  'history': [GameStateSchema],
  'complete': {  type: Boolean, default: false }
})

mongoose.model('Phrase', PhraseSchema)
mongoose.model('GameState', GameStateSchema)
mongoose.model('Game', GameSchema)

module.exports = mongoose
