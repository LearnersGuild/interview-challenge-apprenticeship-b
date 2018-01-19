import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import pg from 'pg'
import connectPgSimple from 'connect-pg-simple'

import routes from './routes'


const pgSession = connectPgSimple(session)

const pgPool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  database: 'interview-apprenticeship-b',
  ssl: false,
})

// eslint-disable-next-line import/prefer-default-export
export function start() {
  const PORT = process.env.PORT || 3000
  const ROOT_DIR = path.resolve(__dirname, '../')

  const app = express()

  app.set('view engine', 'ejs')
  app.set('views', path.join(__dirname, 'views'))

  app.use(express.static(`${ROOT_DIR}/public`))
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())

  app.use(
    session({
      // eslint-disable-next-line new-cap
      store: new pgSession({
        pool: pgPool, // Connection pool
        tableName: 'sessions', // Use another table-name than the default "session" one
      }),
      secret: 'onfleeeeeeeek',
      resave: false,
      saveUninitialized: false,
      cookie: {maxAge: 30 * 24 * 60 * 60 * 1000}, // 30 days
    })
  )

  // all routes are initialized and mounted
  app.use(routes)

  app.use((req, res) => {
    res.status(404).render('common/not_found')
  })

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    res.status(404).render('common/error', {error: err})
  })

  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`) // eslint-disable-line no-console
  })
}
