const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/movie')

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected')
})

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error:  ${err}`)
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection disconnected')
})

const movieSchema = mongoose.Schema({
  moviename: String,
  director: String,
  country: String,
  language: String,
  postAddress: String,
  movieAddress: String,
  updateYear: Number,
  moviedetail: String
})

const movieModel = mongoose.model('movie', movieSchema)

module.exports = movieModel
