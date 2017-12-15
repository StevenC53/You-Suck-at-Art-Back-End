const mongoose = require('./schema.js')
const phrases = mongoose.model('phrases')
const phrasesData = require('./phrases-data.json')


Phrases.remove({})
  .then(() => {
    Phrases.collection.insert(phrasesData)
      .then((phrasess) => {
        console.log(phrasess)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })
