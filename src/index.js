const express = require("express")
const app = express()

// settings
app.set('port', process.env.PORT || 3000)

// middleware
app.use(express.json())

// routes


app.get('/', (req, res)=>{
  //app.get('/', (req, res)=>{
  res.json('Welcome to coinsvert API')
})

// Starting server
app.listen(3000, ()=>{
  console.log('server on port', app.get('port'))
})