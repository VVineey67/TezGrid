import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import contactRouter from './routes/contact.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use('/api/contact', contactRouter)

const clientDist = path.join(__dirname, '..', 'client', 'dist')
app.use(express.static(clientDist))
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`TezGrid API listening on http://localhost:${PORT}`)
})
