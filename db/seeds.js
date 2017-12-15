const mongoose = require('./schema.js')
const Phrase = mongoose.model('Phrase')
const phrasesData = require('./phrases-data.json')


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
