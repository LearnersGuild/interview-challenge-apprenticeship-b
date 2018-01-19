import Promise from 'bluebird'
import pgp from 'pg-promise'

const connect = pgp({promiseLib: Promise})
const db = connect({
  host: 'localhost',
  port: 5432,
  database: 'interview-apprenticeship-b',
  ssl: false,
})

export default db
