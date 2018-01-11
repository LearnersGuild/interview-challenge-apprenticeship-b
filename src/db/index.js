import Promise from 'bluebird'
import pgp from 'pg-promise'

const connect = pgp({promiseLib: Promise})
const db = connect({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: process.env.DB_SSL.toLowerCase() === 'true',
})

export default db
