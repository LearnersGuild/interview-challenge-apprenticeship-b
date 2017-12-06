import Promise from 'bluebird'
import pg from 'pg-promise'

const connect = pg({promiseLib: Promise})
const db = connect({host: process.env.DB_HOST,
                    port: process.env.DB_PORT,
                    database: process.env.DB_NAME,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    ssl: true})

export default db
