require('dotenv').config()
const express = require('express');
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send('my name is sanjay')
})
app.get('/login', (req, res) =>{
    res.send('<h1>please login my page</h1>')
})
app.get('/git',(req,res) =>{
  res.send('cse student')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
