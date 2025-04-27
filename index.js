require('dotenv').config()
const express = require('express')
const app = express()
const colorData = [
	{
      color: "red",
      value: "#f00"
    },
    {
      color: "green",
      value: "#0f0"
    },
    {
      color: "blue",
      value: "#00f"
    },
    {
      color: "cyan",
      value: "#0ff"
    },
    {
      color: "magenta",
      value: "#f0f"
    },
    {
      color: "yellow",
      value: "#ff0"
    },
    {
      color: "black",
      value: "#000"
    }
  ]


app.get('/', (req, res) => {
  res.send('Hello World ----!')
})

app.get('/twitter', (req, res) => {
  res.send('This is the response')
})

app.get('/login', (req, res) => {
  res.send("<h1>Please Login</h1>")
})

app.get('/github', (req, res) => {
  res.send(colorData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

