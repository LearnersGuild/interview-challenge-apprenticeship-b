import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'

import routes from './routes'

import pg from 'pg'
import connectPgSimple from 'connect-pg-simple'
const pgSession = connectPgSimple(session)

var pgPool = new pg.Pool({host: process.env.DB_HOST,
                          port: process.env.DB_PORT,
                          database: process.env.DB_NAME,
                          user: process.env.DB_USER,
                          password: process.env.DB_PASSWORD,
                          ssl: true});

export function start() { // eslint-disable-line import/prefer-default-export
  const PORT = process.env.PORT || 3000
  const ROOT_DIR = path.resolve(__dirname, '../')

  const app = express()

  app.set('view engine', 'ejs')
  app.set('views', path.join(__dirname, 'views'))

  app.use(express.static(`${ROOT_DIR}/public`))
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())

  app.use(session({
    store: new pgSession({
      pool : pgPool,                // Connection pool
      tableName : 'sessions'   // Use another table-name than the default "session" one
    }),
    secret: 'keyboard cat',
    resave: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
  }));

  // all routes are initialized and mounted
  app.use(routes)

  app.use((req, res) => {
    res.status(404).render('common/not_found')
  })

  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    res.status(404).render('common/error', {error: err})
  })

  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`) // eslint-disable-line no-console
  })
}
