const mongoose = require('mongoose')
const boolean = require('boolean')

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect("mongodb://localhost/telestrations_db", {useMongoClient: true});
}

module.exports = mongoose
