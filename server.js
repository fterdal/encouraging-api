const express = require('express')
const volleyball = require('volleyball')
const app = express()

app.use(volleyball)

const encouragingGifs = [
  { url: 'https://media.giphy.com/media/12vJgj7zMN3jPy/giphy.gif' },
  { url: 'https://media.giphy.com/media/LnaPDokBEmONG/giphy.gif' },
  { url: 'https://media.giphy.com/media/247EDLfwn3tPLC1tNB/giphy.gif' },
  { url: 'https://media.giphy.com/media/F3lPUjF1bb4go/giphy.gif' },
]

const pickRandom = (gifs) => {
  return gifs[Math.floor(Math.random() * gifs.length)]
}

app.use((req, res, next) => {
  res.send(`
    <img src="${pickRandom(encouragingGifs).url}"></img>
  `)
})

const PORT = 8888
app.listen(PORT, () => {
  console.log(`Encouraging on port ${PORT}`)
})
