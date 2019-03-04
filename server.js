const express = require('express')
const volleyball = require('volleyball')
const app = express()

app.use(volleyball)

const encouragingGifs = [
  { url: 'https://media.giphy.com/media/12vJgj7zMN3jPy/giphy.gif' },
  { url: 'https://media.giphy.com/media/LnaPDokBEmONG/giphy.gif' },
  { url: 'https://media.giphy.com/media/247EDLfwn3tPLC1tNB/giphy.gif' },
  { url: 'https://media.giphy.com/media/F3lPUjF1bb4go/giphy.gif' },
  { url: 'https://media.giphy.com/media/xN6R8Nis6Iz3W/giphy.gif' },
  { url: 'https://media.giphy.com/media/mbhseRYedlG5W/giphy.gif' },
  { url: 'https://media.giphy.com/media/JVdF14CQQH7gs/giphy.gif' },
  { url: 'https://media.giphy.com/media/26ufhqlbeuJsUbvDG/giphy.gif' },
  { url: 'https://media.giphy.com/media/lcYFNTaz4U9jy/giphy.gif' },
]

const pickRandom = (gifs) => {
  return gifs[Math.floor(Math.random() * gifs.length)]
}

app.use((req, res, next) => {
  res.send(`
  <div>
    <img src="${pickRandom(encouragingGifs).url}"></img>
    <p>Check out the source code
      <a href="https://github.com/fterdal/encouraging-api">here</a>
    </p>
  </div>
  `)
})

const PORT = 8888
app.listen(PORT, () => {
  console.log(`Encouraging on port ${PORT}`)
})
