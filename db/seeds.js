const mongoose = require('./schema.js')
const Phrases = mongoose.model('Phrases')
const phrasesData = require('./phrases-data.json')


Phrases.remove({})
  .then(() => {
    Phrases.collection.insert({
      'phrases': phrasesData
    })
      .then((phrasess) => {
        console.log(phrasess)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })
