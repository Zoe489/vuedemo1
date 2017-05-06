const MovieModel = require('./db.js')
const express = require('express')

const router = express.Router()

router.post('/setMovieInformation', (req, res) => {
  const newMovie = new MovieModel({
    moviename: req.body.moviename,
    director: req.body.director,
    country: req.body.country,
    language: req.body.language,
    postAddress: req.body.postAddress,
    movieAddress: req.body.movieAddress,
    updateYear: req.body.updateYear,
    moviedetail: req.body.moviedetail
  })
  newMovie.save((err) => {
    if (err) {
      res.send(err)
    } else {
      res.send('add new movie successed')
    }
  })
})

module.exports = router
