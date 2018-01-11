const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

const generatePhonewords = require('./lib/generate-phonewords')

const port = process.env.port || 5500

app.set('view engine', 'pug')
app.use('/assets', express.static(path.join(__dirname, '/dist')))

/**
 * Routes
 */
 const inMemoryCache = {}
// NOTE
// this would be moved into a db in a real project, every time app is restarted
// cache will be destory. This also won't work across different processes.
app.get('/api/phonewords', (req, res) => {
  if (!req.query.numbers) return res.status(400).send('Error: No numbers sent')
  if (inMemoryCache[req.query.numbers]) return res.json(inMemoryCache[req.query.numbers])
  const phonewords = generatePhonewords(req.query.numbers)
  inMemoryCache[req.query.numbers] = phonewords
  res.json(phonewords)
})

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Phonewords listening on port ${port}`)
})
