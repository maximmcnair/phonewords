const express = require('express')
const app = express()

const generatePhonewords = require('./lib/generate-phonewords')

// NOTE
// this would be moved into a db in a real project, every time app is restarted
// cache will be destory. This also won't work across different processes.
const inMemoryCache = {}

app.get('/phonewords', (req, res) => {
  if (!req.query.numbers) return res.status(400).send('Error: No numbers sent')
  if (inMemoryCache[req.query.numbers]) return res.json(inMemoryCache[req.query.numbers])
  const phonewords = generatePhonewords(req.query.numbers)
  inMemoryCache[req.query.numbers] = phonewords
  res.json(phonewords)
})

app.listen(5500, () => {
  console.log('Phonewords listening on port 5500!')
})
