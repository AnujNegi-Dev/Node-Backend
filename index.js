require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World ----!')
})

app.get('/twitter',(req,res)=>{
  res.send('This is the response')
})

app.get('/login',(req,res)=>{
    res.send("<h1>Please Login</h1>")
})

app.get('/youtube',(req,res)=>{
    res.send("<p>This is the youtube url</p>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})