const mongoose = require('mongoose')
const boolean = require('boolean')
// It doesn't look like `boolean` is being used. If not, npm uninstall and remove the require statement.

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect("mongodb://localhost/telestrations_db", {useMongoClient: true});
}

module.exports = mongoose
