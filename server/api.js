const MovieModel = require('./db.js')
const express = require('express')

const router = express.Router()

/*
  添加新电影信息
*/
router.post('/api/setMovieInformation', (req, res) => {
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

/*
  获取电影信息
*/
router.get('/api/getMovieInformation', (req, res) => {
  MovieModel.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

/*
  删除电影信息
*/
router.post('/api/delMovie', (req, res) => {
  console.log('delete movie')
  console.log(req.body.moviename)
  MovieModel.remove({ moviename: req.body.moviename }, (err) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      console.log('delete successed')
      res.send('delete successed')
    }
  })
})

module.exports = router
