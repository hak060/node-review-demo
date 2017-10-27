const express = require('express')
const path = require('path')

// MIDDLEWARE
const bodyParser = require('body-parser')
const routes = require('./routes/index.js')

const PORT = 3000  //do another port

const server = express()
  .use(bodyParser.json())   
  .use(bodyParser.urlencoded({extended: true}))   
  .use('/api', routes)
  .use('/', express.static(path.join(__dirname, 'public')))
  .post('/', (req, res) => {
    console.log('req.body is ', req.body)
    res.status(200).end()
  })
  .get('/*', (req, res) => {
    res.send('This is the wildcard endpoint')
  })


// the order here matters
//   server.get('/', function(req,res) {
//   res.send('Hello World!')
// })


server.listen(PORT, function() {
  console.log('Server running on PORT', PORT)
})