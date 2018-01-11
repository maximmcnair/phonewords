const express = require('express')
const app = express()

const generatePhonewords = require('./lib/generate-phonewords')

app.get('/phonewords', (req, res) => {
  const phonewords = generatePhonewords(req.query.numbers)
  res.json(phonewords)
})

app.listen(5500, () => {
  console.log('Phonewords listening on port 5500!')
})
