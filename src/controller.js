import { pool } from './db'

export const getUsuarios = async (req, res) => {
  const data = await pool.query('SELECT * FROM usuarios')
  const response = JSON.stringify(data[0])
  res.writeHead(200, { 'content-type': 'application/json' })
  res.end(response)
}
