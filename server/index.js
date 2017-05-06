const api = require('./api')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(api)
app.use(express.static(path.resolve(__dirname, '../dist')))
app.get('*', (req, res) => {
  const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'))
  res.send(html)
})

app.listen(3000)
console.log('successed listen......\n open localhost:3000')
