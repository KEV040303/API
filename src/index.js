import http from 'http'
import { PORT } from './config.js'
import { getUsuarios } from './controller.js'

export const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET') {
    switch (url) {
      case '/':
        break
      case '/api/usuarios':
        getUsuarios(req, res)
        break
      default:
        res.writeHead(404, { 'Content-type': 'application/jason' })
        res.end(JSON.stringify({ error: 'Not found' }))
        break
    }
  }

  if (method === 'POST') {
    // POST request
  }
})

server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
