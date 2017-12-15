const express = require('express')
const parser = require('body-parser')
const mongoose = require('./db/schema.js')
const Phrases = mongoose.model('Phrases')
const cors = require('cors')
const app = express()

app.set('port', process.env.PORT || 3001)
app.use(parser.json())

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
